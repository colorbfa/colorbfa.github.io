<template>
<div class="mv-container">
    <div class="mv-wrap">
        <h3 class="title">mv详情</h3>
        <!-- mv -->
        <div class="video-wrap">
            <video controls autoplay :src="mvUrl"></video>
        </div>
        <!-- mv信息 -->
        <div class="info-wrap">
            <div class="singer-info">
                <div class="avatar-wrap">
                    <img :src="icon" alt />
                </div>
                <span class="name">{{ mvmsg.artistName }}</span>
            </div>
            <div class="mv-info">
                <h2 class="title">{{ mvmsg.name }}</h2>
                <span class="date">发布：{{ mvmsg.publishTime }}</span>
                <span class="number">播放：{{ mvmsg.playCount }}次</span>
                <p class="desc">
                    {{ mvmsg.desc }}
                </p>
            </div>
        </div>
        <!-- 精彩评论 -->
        <div class="comment-wrap">
            <p class="title">
                精彩评论
                <span class="number">({{ hotComments.length }})</span>
            </p>
            <div class="comments-wrap">
                <div class="item" v-for="(item,index) in hotComments" :key="index">
                    <div class="icon-wrap">
                        <img :src="item.user.avatarUrl" alt />
                    </div>
                    <div class="content-wrap">
                        <div class="content">
                            <span>{{ item.user.nickname }} : </span>
                            <span class="comment">{{ item.content }}</span>
                        </div>
                        <div class="re-content" v-if="item.beReplied.length!=0">
                            <span class="name">{{ item.beReplied[0].user.nickname }}：</span>
                            <span class="comment">{{ item.beReplied[0].content }}</span>
                        </div>
                        <div class="date">{{ item.time }}</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 最新评论 -->
        <div class="comment-wrap">
            <p class="title">
                最新评论
                <span class="number">({{ total }})</span>
            </p>
            <div class="comments-wrap">
                <div class="item" v-for="(item,index) in comments" :key="index">
                    <div class="icon-wrap">
                        <img :src="item.user.avatarUrl" alt />
                    </div>
                    <div class="content-wrap">
                        <div class="content">
                            <span class="name">{{ item.user.nickname }}：</span>
                            <span class="comment">{{ item.content }}</span>
                        </div>
                        <div class="re-content" v-if="item.beReplied.length!=0">
                            <span class="name">{{item.beReplied[0].user.nickname}}：</span>
                            <span class="comment">{{ item.beReplied[0].content }}</span>
                        </div>
                        <div class="date">{{ item.time }}</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 分页器 -->
        <el-pagination @current-change="handleCurrentChange" background layout="prev, pager, next" :total="total" :current-page="page" :page-size="5" :limit="limit"></el-pagination>
    </div>
    <div class="mv-recommend">
        <h3 class="title">相关推荐</h3>
        <div class="mvs">
            <div class="items">
                <div class="item" v-for="(item,index) in mvList" :key="index" @click="toMv(item.id)">
                    <div class="img-wrap">
                        <img :src="item.cover" alt />
                        <span class="iconfont icon-play"></span>
                        <div class="num-wrap">
                            <div class="iconfont icon-play"></div>
                            <div class="num">{{ item.playCount }}</div>
                        </div>
                        <span class="time">{{ item.duration }}</span>
                    </div>
                    <div class="info-wrap">
                        <div class="name">{{ item.name }}</div>
                        <div class="singer">{{ item.artistName }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios";
export default {
    name: "mv",
    data() {
        return {
            // 总条数
            total: 20,
            // 页码
            page: 1,
            // 页容量
            limit: 10,
            mvUrl: "",
            mvList: [],
            count: "",
            mvmsg: {},
            icon: "",
            comments: [],
            hotComments: []
        };
    },
    created() {
        // console.log(this.$route.query.q);
        axios({
                url: "https://autumnfish.cn/mv/url",
                method: "get",
                params: {
                    id: this.$route.query.q,
                },
            }).then((res) => {
                // console.log(res);
                this.mvUrl = res.data.data.url
            }),
            //相关mv
            axios({
                url: "https://autumnfish.cn/simi/mv",
                method: "get",
                params: {
                    mvid: this.$route.query.q,
                },
            }).then((res) => {
                // console.log(res);
                this.mvList = res.data.mvs
                this.count = res.data.playCount
                for (let i = 0; i < this.mvList.length; i++) {
                    let min = parseInt(this.mvList[i].duration / 1000 / 60)
                    let sec = parseInt(this.mvList[i].duration / 1000 % 60)
                    if (min < 10) {
                        min = "0" + min
                    }
                    if (sec < 10) {
                        sec = "0" + sec
                    }
                    // console.log(min + "|" + sec)
                    this.mvList[i].duration = min + ":" + sec
                    if (this.mvList[i].playCount > 100000) {
                        this.mvList[i].playCount = parseInt(this.mvList[i].playCount / 10000) + '万'
                    }
                }
            }),
            axios({
                url: "https://autumnfish.cn/mv/detail",
                method: "get",
                params: {
                    mvid: this.$route.query.q
                }
            }).then(res => {
                // console.log(res)
                this.mvmsg = res.data.data
                axios({
                    url: "https://autumnfish.cn/artists",
                    method: "get",
                    params: {
                        id: this.mvmsg.artists[0].id
                    }
                }).then(res => {
                    // console.log(res)
                    this.icon = res.data.artist.picUrl
                })
            }),
            axios({
                url: "https://autumnfish.cn/comment/mv",
                method: "get",
                params: {
                    id: this.$route.query.q,
                    offset: 0
                }
            }).then(res => {
                console.log(res)
                this.comments = res.data.comments
                this.hotComments = res.data.hotComments
                this.total = res.data.total
            })
        this.gotocomments()
    },
    methods: {
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            this.page = val
            this.gotocomments()
        },
        toMv(id) {
            this.$router.push(`/mv?q=${id}`)
            this.$router.go(0)
        },
        gotocomments() {
            axios({
                url: "https://autumnfish.cn/comment/mv",
                method: "get",
                params: {
                    id: this.$route.query.q,
                    offset: (this.page - 1) * 10
                }
            }).then(res => {
                console.log(res)
                this.comments = res.data.comments
                this.total = res.data.total
                for (let i = 0; i < this.hotComments.length; i++) {
                    var unixTimestamp = new Date(this.hotComments[i].time);
                    //重载方法
                    Date.prototype.toLocaleString = function () {
                        this.hour = this.getHours() < 10 ? "0" + this.getHours() : this.getHours();
                        this.minute = this.getMinutes() < 10 ? "0" + this.getMinutes() : this.getMinutes();
                        this.second = this.getSeconds() < 10 ? "0" + this.getSeconds() : this.getSeconds();
                        return this.getFullYear() + "-" + (this.getMonth() + 1) + "-" + this.getDate() + " " + this.hour + ":" + this.minute + ":" + this.second;
                    };
                    this.hotComments[i].time = unixTimestamp.toLocaleString();
                }
                for (let i = 0; i < this.comments.length; i++) {
                    var unixTimestamp = new Date(this.comments[i].time);
                    //重载方法
                    Date.prototype.toLocaleString = function () {
                        this.hour = this.getHours() < 10 ? "0" + this.getHours() : this.getHours();
                        this.minute = this.getMinutes() < 10 ? "0" + this.getMinutes() : this.getMinutes();
                        this.second = this.getSeconds() < 10 ? "0" + this.getSeconds() : this.getSeconds();
                        return this.getFullYear() + "-" + (this.getMonth() + 1) + "-" + this.getDate() + " " + this.hour + ":" + this.minute + ":" + this.second;
                    };
                    this.comments[i].time = unixTimestamp.toLocaleString();
                }
            })
        }
    },
};
</script>

<style></style>
