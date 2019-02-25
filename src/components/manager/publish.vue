<template>
    <div class="public">
        <div class="little_box_over" v-if="show_over" @click="downPublishKeep"></div>
        <div class="upper">
            <input class="title" type="text" v-model="title">
            <div class="public_button" @click="showPublishKeep('确认发表')">发表</div>
            <div class="keep" @click="showPublishKeep('确认保存')">保存</div>
        </div>
        <mavon-editor v-model="context" :toolbars="toolbars" class="markdown"/>
        <little-publish :publishOrKeep="publishOrKeep"
                        v-if="show_publish_keep"
                        :context="context"
                        :title="title"
        ></little-publish>
    </div>
</template>

<script>

    import littlePublish from './publish/publish.vue'

    export default {
        name: "publish",
        props: ['oldTitle', 'oldContext'],
        components: {littlePublish},
        data() {
            return {
                title: '文章标题',
                show_over: false,
                show_publish_keep: false,
                context: '',
                publishOrKeep:'',
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
        },
        methods: {
            showPublishKeep(a) {
                this.publishOrKeep=a;
                this.show_over = true;
                this.show_publish_keep = true;
            },
            downPublishKeep() {
                this.show_over = false;
                this.show_publish_keep = false;
            }
        },
        mounted() {
            this.title = this.oldTitle || '';
            this.context = this.oldContext || '';
        }
    }
</script>

<style scoped>
    .public {
        background-color: #f4f7f6;
        height: 100%;
    }

    .little_box_over {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        background-color: #000;
        opacity: 0.5;
        -moz-opacity: 0.5;
        z-index: 305;
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
        font-size: 1.05em;
        padding: 10px;
        box-sizing: border-box;
        float: left;
        margin-top: 10px;
        margin-left: 10px;
        -webkit-appearance: none;
        border-radius: 5px;
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
        z-index: 302;
    }

</style>