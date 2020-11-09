<template>
<div id="app">
    <div class="bjimg"></div>
    <top />
    <index />
</div>
</template>

<script>
import top from './components/01.top.vue';
import index from './components/02.index.vue';
export default {
    name: 'app',
    components: {
        top,
        index
    }
};
</script>

<style>
.bjimg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* min-width: 1000px; */
    z-index: -10;
    zoom: 1;
    background-color: #fff;
    background-image: url("../../image/4.jpg");
    background-repeat: repeat;
    opacity: 0.3;
}
</style>
