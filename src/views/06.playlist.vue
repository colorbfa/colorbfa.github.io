<template>
<div class="playlist-container">
    <div class="top-wrap">
        <div class="img-wrap">
            <img :src="playlist.coverImgUrl" alt />
        </div>
        <div class="info-wrap">
            <p class="title">{{ playlist.name }}</p>
            <div class="author-wrap">
                <img class="avatar" :src="playlist.creator.avatarUrl" alt />
                <span class="name">{{ playlist.creator.nickname }}</span>
                <span class="time">{{ playlist.createTime }} 创建</span>
            </div>
            <div class="play-wrap">
                <span class="iconfont icon-circle-play"></span>
                <span class="text">播放全部</span>
            </div>
            <div class="tag-wrap">
                <span class="title">标签:</span>
                <ul>
                    <li v-for="(item,index) in playlist.tags" :key="index">{{ item }}</li>
                </ul>
            </div>
            <div class="desc-wrap">
                <span class="title">简介:</span>
                <span class="desc">{{ playlist.description }}</span>
            </div>
        </div>
    </div>
    <el-tabs v-model="activeIndex">
        <el-tab-pane label="歌曲列表" name="1">
            <table class="el-table playlit-table">
                <thead>
                    <th></th>
                    <th></th>
                    <th>音乐标题</th>
                    <th>歌手</th>
                    <th>专辑</th>
                    <th>时长</th>
                </thead>
                <tbody>
                    <tr class="el-table__row" v-for="(item,index) in playlist.tracks" :key="index">
                        <td>{{ index+1 }}</td>
                        <td>
                            <div class="img-wrap">
                                <img :src="item.al.picUrl" alt />
                                <span class="iconfont icon-play" @click="play(item.id)"></span>
                            </div>
                        </td>
                        <td>
                            <div class="song-wrap">
                                <div class="name-wrap">
                                    <span>{{ item.name }}</span>
                                    <span class="iconfont icon-mv" v-if="item.mv!== 0" @click="toMV(item.mv)"></span>
                                </div>
                                <span>{{ item.alia[0] }}</span>
                            </div>
                        </td>
                        <td>{{ item.ar[0].name }}</td>
                        <td>{{ item.al.name }}</td>
                        <td>{{ item.dt }}</td>
                    </tr>
                </tbody>
            </table>
        </el-tab-pane>
        <el-tab-pane :label="`评论(${total})`" name="2">
            <!-- 精彩评论 -->
            <div class="comment-wrap">
                <p class="title">
                    精彩评论
                    <span class="number">({{ this.hotCount }})</span>
                </p>
                <div class="comments-wrap" v-for="(item,index) in comments" :key="index">
                    <div class="item">
                        <div class="icon-wrap">
                            <!-- 头像 -->
                            <img :src="item.user.avatarUrl" alt />
                        </div>
                        <div class="content-wrap">
                            <div class="content">
                                <!-- 昵称 -->
                                <span class="name">{{ item.user.nickname }}：</span>
                                <span class="comment">{{ item.content }}</span>
                            </div>
                            <div class="re-content" v-if="item.beReplied.length!=0">
                                <!-- 回复 -->
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
                    <div class="item" v-for="(item,index) in newcomments" :key="index">
                        <div class="icon-wrap">
                            <!-- 头像 -->
                            <img :src="item.user.avatarUrl" alt="" />
                        </div>
                        <div class="content-wrap">
                            <div class="content">
                                <span class="name">{{ item.user.nickname }}:</span>
                                <span class="comment">{{ item.content }}</span>
                            </div>
                            <div class="re-content" v-if="item.beReplied.length!=0">
                                <span class="name">{{ item.beReplied[0].user.nickname }}</span>
                                <span class="comment">{{ item.beReplied[0].content }}</span>
                            </div>
                            <div class="date">{{ item.time }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 分页器 -->
            <el-pagination @current-change="handleCurrentChange" background layout="prev, pager, next" :total="total" :current-page="page" :page-size="5"></el-pagination>
        </el-tab-pane>
    </el-tabs>
</div>
</template>

<script>
import axios from "axios";
export default {
    name: "playlist",
    data() {
        return {
            activeIndex: "1",
            // 总条数
            total: 0,
            // 页码
            page: 1,
            //歌单的详情数据
            playlist: {},
            tags: [],
            comments: [],
            hotCount: 0,
            //最新评论
            newcomments: [],
        };
    },
    methods: {
        handleCurrentChange(val) {
            // console.log(`当前页: ${val}`);
            this.page = val
            axios({
                url: " https://autumnfish.cn/comment/playlist",
                method: "get",
                params: {
                    id: this.$route.query.q,
                    limit: 10,
                    offset: (this.page - 1) * 10
                },
            }).then(res => {
                console.log(res)
                this.newcomments = res.data.comments
                this.total = res.data.total
                // console.log(this.newcounts)
            })
        },
        play(id) {
            axios({
                url: 'https://autumnfish.cn/song/url',
                method: 'get',
                params: {
                    id // id:id
                }
            }).then(res => {
                //console.log(res)
                let url = res.data.data[0].url
                if (url == null || url == "" || url == undefined) {
                    this.$message({
                        message: '您没有取得权限！',
                        type: 'warning'
                    })

                } else {
                    // console.log(this.$parent.musicUrl)
                    // 设置给父组件的 播放地址
                    this.$parent.musicUrl = url
                }

            })
        },
        toMV(id) {
            console.log(id)
            this.$router.push(`/mv?q=${id}`)
        }
    },
    created() {
        //获取歌单信息
        axios({
            url: "https://autumnfish.cn/playlist/detail",
            method: "get",
            params: {
                id: this.$route.query.q,
                // limit: 10    
            },
        }).then((res) => {
            console.log(res);
            this.playlist = res.data.playlist;
            for (let i = 0; i < this.playlist.tracks.length; i++) {
                var min = parseInt(res.data.playlist.tracks[i].dt / 1000 / 60)
                if (min < 10) {
                    min = "0" + min
                }
                var sec = parseInt(res.data.playlist.tracks[i].dt / 1000 % 60)
                if (sec < 10) {
                    sec = "0" + sec
                }
                this.playlist.tracks[i].dt = `${min}:${sec}`
            }
            var unixTimestamp = new Date(this.playlist.createTime);
            //重载方法
            Date.prototype.toLocaleString = function () {
                this.hour = this.getHours() < 10 ? "0" + this.getHours() : this.getHours();
                this.minute = this.getMinutes() < 10 ? "0" + this.getMinutes() : this.getMinutes();
                this.second = this.getSeconds() < 10 ? "0" + this.getSeconds() : this.getSeconds();
                return this.getFullYear() + "-" + (this.getMonth() + 1) + "-" + this.getDate();
            };
            this.playlist.createTime = unixTimestamp.toLocaleString();
        });
        //获取评论信息
        axios({
            url: "https://autumnfish.cn/comment/hot",
            method: "get",
            params: {
                id: this.$route.query.q,
                type: 2,
                // limit: 10
            }
        }).then(res => {
            console.log(res)
            this.comments = res.data.hotComments
            this.hotCount = res.data.total
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
        //获取最新评论
        axios({
            url: " https://autumnfish.cn/comment/playlist",
            method: "get",
            params: {
                id: this.$route.query.q,
                limit: 10,
                offset: 0
            },
        }).then(res => {
            console.log(res)
            this.newcomments = res.data.comments
            this.total = res.data.total
            // console.log(this.newcounts)
            for (let i = 0; i < this.newcomments.length; i++) {
                var unixTimestamp = new Date(this.newcomments[i].time);
                //重载方法
                Date.prototype.toLocaleString = function () {
                    this.hour = this.getHours() < 10 ? "0" + this.getHours() : this.getHours();
                    this.minute = this.getMinutes() < 10 ? "0" + this.getMinutes() : this.getMinutes();
                    this.second = this.getSeconds() < 10 ? "0" + this.getSeconds() : this.getSeconds();
                    return this.getFullYear() + "-" + (this.getMonth() + 1) + "-" + this.getDate() + " " + this.hour + ":" + this.minute + ":" + this.second;
                };
                this.newcomments[i].time = unixTimestamp.toLocaleString();
            }
        })
    },
};
</script>

<style >
</style>
