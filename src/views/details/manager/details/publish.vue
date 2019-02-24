<template>
    <div class="public">
        <div class="upper">
            <input class="title" type="text" v-model="title">
            <div class="public_button">发表</div>
            <div class="keep">保存</div>
        </div>
        <!--<form>-->
        <!--技术分享：-->
        <!--<input type="radio" value="tech" name="kind" checked="checked"/><br/>-->
        <!--生活随笔：-->
        <!--<input type="radio" value="life" name="kind" />-->
        <!--</form>-->
        <mavon-editor v-model="context" :toolbars="toolbars" class="markdown"/>
    </div>
</template>

<script>
    export default {
        name: "publish",
        data() {
            return {
                title: '文章标题',
                context: '',
                toolbars: {
                    bold: true, // 粗体
                    italic: true, // 斜体
                    header: true, // 标题
                    underline: true, // 下划线
                    mark: true, // 标记
                    superscript: true, // 上角标
                    quote: true, // 引用
                    ol: true, // 有序列表
                    link: true, // 链接
                    imagelink: true, // 图片链接
                    help: true, // 帮助
                    code: true, // code
                    subfield: true, // 是否需要分栏
                    fullscreen: true, // 全屏编辑
                    readmodel: true, // 沉浸式阅读
                    /* 1.3.5 */
                    undo: true, // 上一步
                    trash: true, // 清空
                    // save: true, // 保存（触发events中的save事件）
                    /* 1.4.2 */
                    navigation: true // 导航目录
                }
            }
        }
    }
</script>

<style scoped>
    .public {
        background-color: #f4f7f6;
        height: 100%;
    }

    .upper {
        height: 56px;
    }

    .upper:after {
        content: '';
        display: block;
        clear: both;
        height: 0;
        overflow: hidden;
        visibility: hidden;
    }

    .upper input {
        height: 36px;
        line-height: 36px;
        border-radius: 5px;
        font-size: 1.05em;
        padding: 10px;
        box-sizing: border-box;
        float: left;
        margin-top: 10px;
        margin-left: 10px;
        -webkit-appearance: none;
        border: 1px solid #E6EAEA;
        width: calc(100% - 220px);
    }

    .upper input:focus {
        outline-color: rgb(67, 200, 207);
        border: 2px rgb(67, 200, 207);
    }

    .public_button, .keep {
        box-sizing: border-box;
        cursor: pointer;
        border: 1px solid #f4f7f6;
        color: rgb(67, 220, 207);
        width: 75px;
        letter-spacing: 0.1em;
        text-indent: 0.1em;
        margin-top: 13px;
        text-align: center;
        float: left;
        height: 30px;
        line-height: 28px;
        border-radius: 15px;
        transition: 0.2s;
    }

    .upper div:hover {
        border: 1px solid rgb(67, 220, 207);
    }

    .upper .public_button {
        margin-left: 30px;
    }

    .upper .keep {
        margin-left: 10px;
    }

    .markdown {
        height: calc(100% - 56px);
    }

</style>