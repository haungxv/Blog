<template>
    <div class="public">
        <form>
            <h3>写文章：</h3>
            <label for="tag">标签：</label>
            <input id="tag" type="text">
            <mavon-editor v-model="context" :toolbars="toolbars"  class="markdown"/>
            技术分享：
            <input type="radio" value="tech" name="kind" checked="checked"/><br/>
            生活随笔：
            <input type="radio" value="life" name="kind" />
        </form>
        <div class="public_button">发表</div>
    </div>
</template>

<script>
    export default {
        name: "publish",
        data(){
            return {
                context:'',
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
                    save: true, // 保存（触发events中的save事件）
                    /* 1.4.2 */
                    navigation: true // 导航目录
                }
            }
        }
    }
</script>

<style scoped>
    .public {
        width:1000px;
        margin:20px auto 0;
    }

    .public .public_button {
        border: 1px solid black;
        margin-top: 20px;
        width: 55px;
        cursor:pointer;
        text-align: center;
    }
    .markdown{
        margin:0 auto;
        width:1000px;
        height:500px;
        z-index:300;
    }
</style>