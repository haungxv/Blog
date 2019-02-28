<template>
    <div class="publish_little_box">
        <div class="little_title">{{title_two}}</div>
        <div class="little_tag">
            <label for="tag">文章标签：</label>
            <input id="tag" type="text" v-model="tag">
            <div class="tag_info">请将添加的标签用"."隔开</div>
        </div>
        <div class="little_two">
            <label for="select_two">文章分类：</label>
            <select id="select_two" v-model="selected_two">
                <option>请选择</option>
                <option value="1">技术分享</option>
                <option value="2">生活随笔</option>
            </select>
        </div>
        <div class="little_type">
            <label for="select_type">博客分类：</label>
            <select id="select_type" v-model="selected_type">
                <option>请选择</option>
                <option value="1">原创</option>
                <option value="2">转载</option>
                <option value="3">翻译</option>
            </select>
        </div>
        <div class="little_open">
            <label>是否公开：</label>
            <div class="open_field">
                <label @click="open" class="open_no"></label>
            </div>
            <div class="open_yes" v-if="isOpen">公开</div>
            <div class="open_yes" v-if="!isOpen">私密</div>
        </div>
        <div class="little_top">
            <label>是否置顶：</label>
            <div class="top_field">
                <label @click="top" class="top_no"></label>
            </div>
            <div class="top_yes" v-if="isTop">置顶</div>
            <div class="top_yes" v-if="!isTop">不置顶</div>
        </div>
        <div class="little_publish" @click="publishKeep">{{publishOrKeep}}</div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "publish",
        props: ['title', 'context', 'oldId', 'publishOrKeep', 'oldTag', 'oldSelect_two', 'oldSelect_type', 'oldIsOpen', 'oldIsTop', 'oldTags'],
        data() {
            return {
                tag: '',
                tags: [],
                selected_two: '',
                selected_type: '',
                isOpen: false,
                isTop: false,
                isPublish: true,
                id: '',
            }
        },
        methods: {
            open() {
                if (this.isOpen) {
                    document.getElementsByClassName("open_no")[0].setAttribute("class", "open_no")
                } else {
                    document.getElementsByClassName("open_no")[0].setAttribute("class", "open_no open_no_after open_on_before")
                }
                this.isOpen = !this.isOpen;
            },
            top() {
                if (this.isTop) {
                    document.getElementsByClassName("top_no")[0].setAttribute("class", "top_no")
                } else {
                    document.getElementsByClassName("top_no")[0].setAttribute("class", "top_no top_no_after top_on_before")
                }
                this.isTop = !this.isTop;
            },
            split_tag() {
                let a = this.tag.split('.');
                let length = a.length;
                for (let i = 0; i < length; i++) {
                    this.tags.push({
                        "name": a[i]
                    })
                }
                JSON.stringify(this.tags);
            },
            publishKeep() {
                this.split_tag();
                let qs = require('qs');
                let instance = axios.create({});
                let data = {
                    "id": this.id,
                    "cate": this.selected_two,
                    "type": this.selected_type,
                    "is_enable": this.isOpen,
                    "on_top": this.isTop,
                    "body": this.context,
                    "published": this.isPublish,
                    "tags": this.tags,
                    "title": this.title,
                };
                instance.post("http://39.108.84.51:8888/cms/post", data)
                    .then((res) => {
                        if (res.status) {
                            alert("发表成功！");
                        }
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            },
            getTagString(tags) {
                console.log(tags);
                let tagString = [];
                let length=tags.length;
                for(let i=0;i<length;i++){
                    tagString[i]=tags[i].name;
                }
                this.tag=tagString.join('.');
            }
        },
        computed: {
            title_two() {
                if (this.publishOrKeep === "确认发表") {
                    this.isPublish = true;
                    return '发表文章'
                } else {
                    this.isPublish = false;
                    return '保存文章'
                }
            }
        },
        mounted() {
            this.tag = this.oldTag || '标签1.标签2.标签3.标签4.标签5';
            this.selected_two = this.oldSelect_two || '请选择';
            this.selected_type = this.oldSelect_type || '请选择';
            this.isOpen = this.oldIsOpen || false;
            this.isTop = this.oldIsTop || false;
            console.log("open:"+ this.isOpen);
            this.id = this.oldId || '';
            if (this.oldTags !== []) {
                this.getTagString(this.oldTags);
            }
            if(this.isOpen){
                document.getElementsByClassName("open_no")[0].setAttribute("class", "open_no open_no_after open_on_before");
            }
            if(this.isTop){
                document.getElementsByClassName("top_no")[0].setAttribute("class", "top_no top_no_after top_on_before");
            }
        }
    }
</script>

<style scoped>
    .publish_little_box {
        width: 400px;
        height: 465px;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        z-index: 306;
        background-color: #f4f7f6;
        border: 1px solid #f4f7f6;
    }

    .little_title {
        line-height: 27px;
        font-weight: 500;
        font-size: 17px;
        width: 360px;
        margin: 25px auto 0;
    }

    .little_tag {
        height: 54px;
        width: 360px;
        margin: 25px auto 0;
    }

    .little_tag label {
        display: block;
        width: 80px;
        height: 30px;
        line-height: 30px;
        float: left;
    }

    .little_tag input {
        height: 30px;
        width: 250px;
        border-radius: 4px;
        border: 1px solid #ddd;
        padding: 8px;
        box-sizing: border-box;
    }

    .little_tag input:focus {
        outline-color: rgb(67, 200, 207);
        border: 2px rgb(67, 200, 207);
    }

    .little_tag .tag_info {
        margin-left: 88px;
        margin-top: 5px;
        color: #999;
        font-size: 13px;
    }

    .little_two, .little_type {
        height: 30px;
        width: 360px;
        margin: 25px auto 0;
    }

    .little_two label, .little_type label {
        display: block;
        width: 80px;
        height: 30px;
        line-height: 30px;
        float: left;
    }

    .little_two select, .little_type select {
        width: 100px;
        height: 30px;
        background: #fafafa;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 14px;
        color: #999;
    }

    .little_two select:focus, .little_type select:focus {
        outline-color: rgb(67, 200, 207);
        border: 2px rgb(67, 200, 207);
    }

    .little_open, .little_top {
        width: 360px;
        height: 30px;
        margin: 25px auto 0;
    }

    .little_open:after, .little_top:after {
        content: '';
        display: block;
        clear: both;
        height: 0;
        overflow: hidden;
        visibility: hidden;
    }

    .little_open > label, .little_top > label {
        display: block;
        width: 80px;
        height: 30px;
        line-height: 30px;
        float: left;
    }

    .little_open .open_field, .little_top .top_field {
        box-sizing: border-box;
        float: left;
        height: 30px;
        margin-left: 5px;
    }

    .little_open .open_field label, .little_top .top_field label {
        box-sizing: border-box;
        height: 30px;
        display: inline-block;
        cursor: pointer;
        position: relative;
    }

    .open_no:before, .top_no:before {
        box-sizing: border-box;
        display: inline-block;
        content: "";
        width: 45px;
        height: 24px;
        margin-top: 3px;
        background-color: #d8d8d8;
        border-radius: 12px;
        transition: .3s ease-in;
    }

    .open_on_before:before, .top_on_before:before {
        background-color: rgb(67, 205, 207);

    }

    .open_no:after, .top_no:after {
        position: absolute;
        left: 4px;
        top: 6.5px;
        content: "";
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: #fff;
        transition: .3s ease-in;
    }

    .open_no_after:after, .top_no_after:after {
        left: 25px;
    }

    .open_yes, .top_yes {
        height: 30px;
        line-height: 30px;
        float: left;
        margin-left: 15px;
        font-size: 13px;
        color: #999;
    }

    .little_publish {
        width: 200px;
        height: 32px;
        line-height: 32px;
        color: white;
        background-color: rgb(67, 205, 207);
        border-radius: 5px;
        text-align: center;
        margin: 40px auto 0;
        cursor: pointer;
        letter-spacing: .3em;
        text-indent: .3em;
        font-size: 16px;
    }
</style>