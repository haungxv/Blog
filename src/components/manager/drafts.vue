<template>
    <div class="drafts">
        <div v-if="showDraft">
            <div class="title">
                <div class="title_left">可对文章进行<span>编辑</span>和<span>删除</span>操作,共有<span>{{articles.total}}</span>篇文章
                </div>
                <div class="title_right">草稿箱</div>
            </div>
            <div class="change"
                 v-for="list in articles.articlesList"
                 :key="list.id">
                <div class="left">
                    <div class="left_title">{{list.title}}</div>
                    <span class="left_tag" v-for="(tag,index) in list.tags" :key="index">{{tag.name}}&nbsp;&nbsp;</span>
                </div>
                <div @click="edit(list.id,list.title,list.tags,list.cate,list.is_enable,list.on_top)" class="editor">编辑</div>
                <div @click="sub(list.id)" class="sub_article">删除</div>
                <div class="article_time">{{list.last_modified}}</div>
            </div>
        </div>
        <publish v-if="!showDraft"
                 :oldId="id"
                 :oldTitle="title"
                 :oldSelect_two="select_two"
                 :oldSelect_type="select_type"
                 :oldTags="tags"
                 :oldIsTop="is_top"
                 :oldIsOpen="open"
                 @editor_back="editor_back"></publish>
    </div>
</template>

<script>
    import Publish from './publish.vue';

    import axios from 'axios';
    import {
        mapState,
        mapMutations,
    } from 'vuex'

    export default {
        name: "drafts",
        components: {Publish},
        data() {
            return {
                showDraft: true,
                title: '',
                context: '',
                id: '',
                open: false,
                is_top: false,
                select_two: '',
                select_type: '',
                tags: [],
            }
        },
        methods: {
            getDraftList() {
                axios.get("http://39.108.84.51:8888/cms/post/list/draft")
                    .then((res) => {
                        if (res.status) {
                            this['manager/setAllDrafts'](res.data.articles_summary);
                            this['manager/setDraftTotal'](res.data.total);
                        }
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            },
            sub(id) {
                axios.delete("http://39.108.84.51:8888/cms/post/" + id)
                    .then((res) => {
                        if (res.status) {
                            this['manager/subDraft'](id);
                        }
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            },
            edit(id, title, tags, select_two, open, is_top) {
                this.tags = tags;
                this.id = id;
                this.title = title;
                this.select_two = select_two;
                this.open = open;
                this.is_top = is_top;
                this.showDraft = false;
            },
            editor_back() {
                this.showDraft = true;
            },
            ...mapMutations(['manager/setAllDrafts', 'manager/setDraftTotal', 'manager/subDraft']),
        },
        computed: {
            ...mapState({
                articles: state => state.manager.draftsArticles,
            })
        },
        mounted() {
            if (window.localStorage.getItem('token')) {
                axios.defaults.headers.common['Authorization'] = "Basic " + btoa(window.localStorage.getItem('token') + ":")
            }
            this.getDraftList()
        }

    }
</script>

<style scoped>
    .drafts {
        box-sizing: border-box;
        height: 100%;
        background-color: #f4f7f6;
        border: 1px solid #f4f7f6;
    }

    .drafts .title {
        width: 1000px;
        margin: 35px auto 30px;
    }

    .drafts .title:after {
        display: block;
        content: '';
        clear: both;
        overflow: hidden;
        visibility: hidden;
        height: 0;
    }

    .drafts .title_left {
        float: left;
        margin-left: 10px;
        cursor: pointer;
        font-size: 1.1em;
    }

    .drafts .title_right {
        letter-spacing: 0.1em;
        margin-right: 10px;
        float: right;
    }

    .drafts .title span {
        font-weight: 600;
        font-size: 1.1em;
    }

    .drafts .change {
        margin: 1px auto;
        width: 1000px;
        border: 1px solid #f4f7f6;
        height: 80px;
        background-color: white;
    }

    .drafts .change:after {
        display: block;
        clear: both;
        height: 0;
        overflow: hidden;
        visibility: hidden;
        content: ''
    }

    .drafts .change .left {
        width: 600px;
        height: 50px;
        margin-top: 15px;
        margin-left: 25px;
        float: left;
    }

    .drafts .left div {
        height: 25px;
        line-height: 25px;
    }

    .drafts .left_tag {
        font-size: 15px;
        color: rgb(67, 220, 207);
    }

    .drafts .editor {
        border: 1px solid white;
        color: rgb(67, 220, 207);
        width: 75px;
        letter-spacing: 0.1em;
        text-indent: 0.1em;
        margin-top: 25px;
        margin-left: 10px;
        text-align: center;
        float: left;
        height: 30px;
        line-height: 30px;
        border-radius: 15px;
        transition: 0.2s;
        cursor: pointer;
    }

    .drafts .editor:hover {
        border: 1px solid rgb(67, 220, 207);
    }

    .drafts .sub_article {
        border: 1px solid white;
        color: #df6c4f;
        width: 75px;
        letter-spacing: 0.1em;
        text-indent: 0.1em;
        margin-top: 25px;
        margin-left: 30px;
        text-align: center;
        float: left;
        height: 30px;
        line-height: 30px;
        border-radius: 15px;
        transition: 0.2s;
        cursor: pointer;
    }

    .drafts .sub_article:hover {
        border: 1px solid #df6c4f;
    }

    .drafts .article_time {
        width: 100px;
        float: right;
        margin-right: 20px;
        height: 80px;
        line-height: 80px;
    }
</style>