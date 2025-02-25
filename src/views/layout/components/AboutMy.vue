<template>
    <div class="card">
        <h3>关于我</h3>
        <div class="body">
            <div class="header-pic">
                
            </div>
            <p class="name">可梵</p>
            <p class="oneself-lable">终身学习者 / 生活记录者</p>
        </div>
        <!-- 第三方 -->
         <div class="third-party">
            <el-button>按钮</el-button>
            <el-button>按钮</el-button>
            <el-button>按钮</el-button>
         </div>
         <!-- 文章、留言、手机统计 -->
          <div class="count">
                <div class="article">
                    <p class="number">15</p>
                    <p class="des">文章</p>
                </div>
                <div class="message">
                    <p class="number">1165</p>
                    <p class="des">留言</p>
                </div>
                <div class="notes">
                    <p class="number">32</p>
                    <p class="des">手记</p>
                </div>
          </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.card {
    width: 100%;
    height: 380px;
    padding: 24px;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 1px 1px 5px rgba(145, 144, 144, 0.3);
    border-radius: 16px;

    h3 {
        font-size: 18px;
        margin-bottom: 20px;
    }

    .body {
        height: 172px;
        text-align: center;

        .header-pic {
            margin: 0 auto;
            width: 96px;
            height: 86px;
            border: 1px solid black;
            border-radius: 50%;
            margin-bottom: 20px;
            img {
                width: 96px;
                height: 96px;
                border-radius: 50%;
            }
        }

        .name {
            height: 24px;
            line-height: 24px;
            font-weight: 550;
        }

        .oneself-lable {
            height: 20px;
            line-height: 20px;
            font-size: 14px;
            color: #6B7280;
            font-weight: 500;
        }
    }

    .third-party {
        display: flex;
        justify-content: center;

        button {
            width: 40px;
            height: 40px;
        }
    }

    // 统计
    .count {
        display: flex;
        margin-top: 20px;
        height: 48px;
        text-align: center; 

        div {
            flex-grow: 1;
        }
        .article {
            height: 48px;
        }
        .message {
            height: 48px;
        }
        .notes {
            height: 48px;
        }

        .number {
            font-size: 18px;
            font-weight: bold;
        }
        .des {
            font-size: 14px;
            color: #6B7280;
        }
    }
}
</style>