<template>
<div class="result-container">
    <div class="title-wrap">
        <!-- 顶部的标题 -->
        <h2 class="title">{{ keyValue }}</h2>
        <span class="sub-title">找到{{ songCount }}个结果</span>
    </div>
    <el-tabs v-model="activeIndex">
        <el-tab-pane label="歌曲" name="songs">
            <table class="el-table">
                <thead>
                    <th></th>
                    <th>音乐标题</th>
                    <th>歌手</th>
                    <th>专辑</th>
                    <th>时长</th>
                </thead>
                <tbody>
                    <tr class="el-table__row" v-for="(item,index) in songList" :key="index" @dblclick="playMusic(item.id)">
                        <td>{{ index+1 }}</td>
                        <td>
                            <div class="song-wrap">
                                <div class="name-wrap">
                                    <span>{{ item.name}}</span>
                                    <!-- mv图标 -->
                                    <span class="iconfont icon-mv" v-if="item.mvid!=0"></span>
                                </div>
                                <!--  二级标题 -->
                                <span v-if="item.alias.length!=0">{{ item.alias[0] }}</span>
                            </div>
                        </td>
                        <td>{{ item.artists[0].name }}</td>
                        <td>{{ item.album.name }}</td>
                        <td>{{ item.druation }}</td>
                    </tr>
                </tbody>
            </table>
        </el-tab-pane>
        <el-tab-pane label="歌单" name="lists">
            <div class="items">
                <div class="item" v-for="(item,index) in playlists" :key="index" @click="toplaylist(item.id)">
                    <div class="img-wrap">
                        <div class="num-wrap">
                            播放量:
                            <span class="num">{{ item.playCount }}</span>
                        </div>
                        <img :src="item.coverImgUrl" alt />
                        <span class="iconfont icon-play"></span>
                    </div>
                    <p class="name">{{ item.name }}</p>
                </div>
            </div>
        </el-tab-pane>
        <el-tab-pane label="MV" name="mv">
            <div class="items mv">
                <div class="item" v-for="(item,index) in mvList" :key="index" @click="toMv(item.id)">
                    <div class="img-wrap">
                        <img :src="item.cover" alt />
                        <span class="iconfont icon-play"></span>
                        <div class="num-wrap">
                            <div class="iconfont icon-play"></div>
                            <div class="num">{{ item.playCount }}</div>
                        </div>
                        <span class="time">{{ item.druation }}</span>
                    </div>
                    <div class="info-wrap">
                        <div class="name">{{ item.name }}</div>
                        <div class="singer">{{ item.artistName }}</div>
                    </div>
                </div>
            </div>
        </el-tab-pane>
    </el-tabs>
</div>
</template>

<script>
import axios from 'axios';
import bus from "../../eventBus";
export default {
    name: 'result',
    data() {
        return {
            activeIndex: 'songs',
            songList: [],
            playlists: [],
            mvList: [],
            songCount: "0",
            keyValue: this.$route.query.q,
            count: ""
        };
    },
    created() {
        this.songSearch()
        // console.log(this.$route.query.q)
    },
    methods: {
        playMusic(id) {
            axios({
                url: 'https://autumnfish.cn/song/url',
                method: "get",
                params: {
                    id
                }
            }).then(res => {
                // console.log(res)
                let url = res.data.data[0].url
                // console.log(this.$parent.musicUrl)
                this.$parent.musicUrl = url
            })
        },
        songSearch() {
            axios({
                url: " https://autumnfish.cn/search",
                method: "get",
                params: {
                    keywords: this.$route.query.q,
                    type: 1,
                    limit: 30
                }
            }).then(res => {
                console.log(res)
                this.songList = res.data.result.songs
                this.songCount = res.data.result.songCount
                for (let i = 0; i < this.songList.length; i++) {
                    let min = parseInt(this.songList[i].duration / 1000 / 60)
                    let sec = parseInt(this.songList[i].duration / 1000 % 60)
                    if (min < 10) {
                        min = "0" + min
                    }
                    if (sec < 10) {
                        sec = "0" + sec
                    }
                    // console.log(min + "|" + sec)
                    this.songList[i].druation = min + ":" + sec
                }
            })
        },
        toMv(id) {
            this.$router.push(`/mv?q=${id}`)
            this.$router.go(0)
        },
        //歌单详情页
        toplaylist(id) {
            this.$router.push(`/playlist?q=${id}`)
        }
    },
    watch: {
        activeIndex() {
            let type = 1
            let limit = 10
            switch (this.activeIndex) {
                case 'songs':
                    type = 1
                    limit = 10
                    break;
                case 'lists':
                    type = 1000
                    limit = 10
                    break;
                case 'mv':
                    type = 1004
                    limit = 8
                    break;
                default:
                    break;
            }
            axios({
                url: " https://autumnfish.cn/search",
                method: "get",
                params: {
                    keywords: this.$route.query.q,
                    type,
                    limit
                }
            }).then(res => {
                // console.log(res)
                if (type == 1) {
                    this.songList = res.data.result.songs
                    this.songCount = res.data.result.songCount
                    for (let i = 0; i < this.songList.length; i++) {
                        let min = parseInt(this.songList[i].duration / 1000 / 60)
                        let sec = parseInt(this.songList[i].duration / 1000 % 60)
                        if (min < 10) {
                            min = "0" + min
                        }
                        if (sec < 10) {
                            sec = "0" + sec
                        }
                        // console.log(min + "|" + sec)
                        this.songList[i].druation = min + ":" + sec
                    }
                } else if (type == 1000) {
                    this.playlists = res.data.result.playlists
                    this.count = res.data.result.playlistCount

                    for (let i = 0; i < this.playlists.length; i++) {
                        if (this.playlists[i].playCount > 100000) {
                            this.playlists[i].playCount = parseInt(this.playlists[i].playCount / 10000) + "万"
                        }
                    }
                } else {
                    this.mvList = res.data.result.mvs
                    this.count = res.data.result.mvCount
                    // console.log(res)
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
                }
                // console.log(res)

            })
        }

    }
};
</script>

<style >
</style>
