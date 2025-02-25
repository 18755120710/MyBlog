<template>
    <div class="card">
        <h3>文章分类</h3>
        <div class="list">
            <div class="item">
                <span class="name">学习方法</span>
                <span class="number">42</span>
            </div>
            <div class="item">
                <span class="name">生活感悟</span>
                <span class="number">42</span>
            </div>
            <div class="item">
                <span class="name">读书笔记</span>
                <span class="number">42</span>
            </div>
            <div class="item">
                <span class="name">理财规划</span>
                <span class="number">42</span>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.card {
    width: 100%;
    height: 308px;
    padding: 24px;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 1px 1px 5px rgba(145, 144, 144, 0.3);
    border-radius: 16px;

    h3{
        font-size: 18px;
        margin-bottom: 20px;
    }

    .list {
        height: 216px;

        .item {
            display: flex;
            justify-content: space-between;
            height: 48px;
            line-height: 48px;
            padding:0px 12px;

            .name {
                color: #374151;
            }
            .number {
                font-size: 14px;
                color: #6B7280;
            }
        }
    }
}
</style>