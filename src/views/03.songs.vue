<template>
<div class="songs-container">
    <div class="tab-bar">
        <span class="item" @click="tag=0" :class="{active:tag==0}">全部</span>
        <span class="item" @click="tag=7" :class="{active:tag==7}">华语</span>
        <span class="item" @click="tag=96" :class="{active:tag==96}">欧美</span>
        <span class="item" @click="tag=8" :class="{active:tag==8}">日本</span>
        <span class="item" @click="tag=16" :class="{active:tag==16}">韩国</span>
    </div>
    <!-- 底部的table -->
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
            <tr v-for="(item,index) in list" :key="index" class="el-table__row">
                <td>{{ index+1 }}</td>
                <td>
                    <div class="img-wrap">
                        <img :src="item.album.picUrl" alt="" />
                        <span class="iconfont icon-play" @click="playMusic(item.id)"></span>
                    </div>
                </td>
                <td>
                    <div class="song-wrap">
                        <div class="name-wrap">
                            <span>{{ item.name }}</span>
                            <span class="iconfont icon-mv"></span>
                        </div>
                        <span>{{ item.album.name }}</span>
                    </div>
                </td>
                <td>{{item.artists[0].name}}</td>
                <td>{{ item.album.name }}</td>
                <td>{{ item.duration }}</td>
            </tr>

        </tbody>
    </table>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'songs',
    data() {
        return {
            src: "",
            list: [],
            tag: 0
        };
    },
    created() {
        this.getlist()
    },
    watch: {
        tag() {
            this.getlist()
            console.log(this.tag)
        }
    },
    methods: {
        getlist() {
            axios({
                url: "https://autumnfish.cn/top/song",
                method: "get",
                paramas: {
                    type: this.tag
                }
            }).then(res => {
                console.log(res)
                this.list = res.data.data
                for (var i = 0; i < this.list.length; i++) {
                    var duration = this.list[i].duration
                    var min = parseInt(duration / 1000 / 60)
                    if (min < 10) {
                        min = '0' + min
                    }
                    var sec = parseInt(duration / 1000 % 60)
                    if (sec < 10) {
                        sec = '0' + sec
                    }
                    // console.log(min + '|' + sec)
                    this.list[i].duration = `${min}:${sec}`
                }
            })
        },
        playMusic(id) {
            axios({
                url: "https://autumnfish.cn/song/url",
                method: "get",
                params: {
                    id
                }
            }).then(res => {
                console.log(res)
                let url = res.data.data[0].url
                this.$parent.musicUrl = url
            })
        }
    }
};
</script>

<style >

</style>
