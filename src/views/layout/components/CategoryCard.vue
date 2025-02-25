<template>
    <div class="category">
        <div class="pic"></div>
        <div class="title">文章分类</div>
        <div class="text">发现新鲜有趣的内容，获取最新知识分享</div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.category {
    width: 284px;
    height: 188px;
    padding: 24px;
    border-radius: 16px;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 1px 1px 5px rgba(165, 165, 165, 0.3);

    .pic {
        width: 48px;
        height: 48px;
        border: 1px solid black;
        border-radius: 12px;
    }

    .title {
        margin: 16px 0px 6px 0px;
        height: 28px;
        line-height: 28px;
        font-size: 18px;
        font-weight: bold;
    }

    .text {
        font-size: 14px;
        font-weight: 500;
        color: #6b7280;
    }
}
</style>