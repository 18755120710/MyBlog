<template>
    <div class="banner">
        <el-carousel type="card" height="30vh">
            <el-carousel-item class="banner-item" v-for="(item ,index) in imagesStore.imagesUrl" :key="index+1">
                <img :src="item">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script setup>
import { useImagesService } from '@/stores/images';

// 获取数据
const imagesStore = useImagesService()
</script>

<style lang="scss" scoped>
.banner {
    width: 100%;
    height: 220px;
    border-radius: 12px;

    img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
    }
}

</style>