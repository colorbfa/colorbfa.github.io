<template>
<div class="top-container">
    <div class="left-box">
        <div class="history-wrapper">
            <span class="iconfont icon-arrow-lift" @click="back"></span>
            <span class="iconfont icon-arrow-right" @click="forward"></span>
        </div>
    </div>
    <div class="right-box">
        <div class="el-input el-input--small el-input--prefix">
            <!-- 搜索框 -->
            <input type="text" autocomplete="off" placeholder="搜索" class="el-input__inner" v-model="inputValue" @keyup.enter="toResult" />
            <span class="el-input__prefix">
                <i class="el-input__icon el-icon-search"></i>
            </span>
        </div>
    </div>
</div>
</template>

<script>
import bus from "../../eventBus";
export default {
    name: 'top',
    data() {
        return {
            query: '',
            inputValue: ""
        }
    },
    methods: {
        toResult() {
            if (this.inputValue == '') {
                this.$message.warning('请输入内容')
            } else {
                this.$router.push('./result?q=' + this.inputValue)
                this.$router.go(0)
            }
        },
        back() {
            this.$router.back()
        },
        forward() {
            this.$router.forward()
        }
    }
}
</script>

<style scoped></style>
