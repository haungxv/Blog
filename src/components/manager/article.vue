<template>
    <div class="article">
        <div v-if="showChange">
            <div class="title">可对文章进行<span>删改</span>操作，共有<span>{{articles.total}}</span>篇文章</div>
            <div class="change"
                 v-for="list in articles.allArticle"
                 :key="list.id">
                <div class="left">
                    <div @click="change(list.title)" class="left_title">{{list.title}}</div>
                    <span class="left_tag" v-for="(tag,index) in list.tags" :key="index">{{tag.name}}&nbsp;&nbsp;</span>
                </div>
                <div @click="to_top(list.id)" class="to_top">置顶</div>
                <div @click="sub(list.id)" class="sub_article">删除</div>
                <div class="article_time">{{list.last_modified}}</div>
            </div>
        </div>
        <Change :msg="msg" @changeBack="changeBack" v-if="!showChange"></Change>
    </div>
</template>

<script>
    import Change from './articles/change.vue'
    import Rotation from '../public/rotation.vue'

    import axios from 'axios';
    import {
        mapState,
        mapMutations,
    } from 'vuex'

    export default {
        name: "article",
        components: {Change, Rotation},
        data() {
            return {
                msg: "",
                showChange: true,
            }
        },
        methods: {
            change(name) {
                this.msg = name;
                this.showChange = !this.showChange;
            },
            changeBack() {
                this.showChange = !this.showChange;
            },
            sub(id) {
                axios.delete("http://39.108.84.51:8888/cms/post/" + id)
                    .then((res) => {
                        if (res.status) {
                            this['manager/subArticle'](id);
                        }
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            },
            to_top(id) {
                // let qs = require('qs');
                // let instance = axios.create({});
                // let data = {
                //     articleId: id
                // };
                axios.put("http://39.108.84.51:8888/cms/post/top/" + id)
                    .then((res) => {
                        if (res.status) {

                            // this['manager/subArticle'](id);
                        }
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            },
            getArtList() {
                axios.get("http://39.108.84.51:8888/cms/post/list/all")
                    .then((res) => {
                        if (res.status) {
                            this['manager/setAllArticles'](res.data.articles_summary);
                            this['manager/setTotal'](res.data.total);
                        }
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            },
            ...mapMutations(['manager/setAllArticles', 'manager/setTotal', 'manager/subArticle']),
        },
        computed: {
            ...mapState({
                articles: state => state.manager.articles,
            })
        },
        mounted() {
            if (window.localStorage.getItem('token')) {
                axios.defaults.headers.common['Authorization'] = "Basic " + btoa(window.localStorage.getItem('token') + ":")
            }
            this.getArtList()
        }
    }
</script>

<style scoped>
    .article {
        background-color: #f4f7f6;
        padding: 0 70px 20px;
        border: 1px solid #f4f7f6;
    }

    .article .title {
        width:1100px;
        margin: 30px auto 20px;
        letter-spacing: 0.1em;
    }

    .article .title span {
        font-weight: 600;
        font-size: 1.1em;
    }

    .change {
        cursor: pointer;
        margin: 1px auto;
        width: 1100px;
        border: 1px solid #f4f7f6;
        height: 80px;
        background-color: white;
    }

    .change:after {
        display: block;
        clear: both;
        height: 0;
        overflow: hidden;
        visibility: hidden;
        content: ''
    }

    .article .change .left {
        width: 600px;
        height: 50px;
        margin-top: 15px;
        margin-left: 25px;
        float: left;
    }

    .article .left div {
        height: 25px;
        line-height: 25px;
    }

    .article .left_tag {
        font-size:15px;
        color: rgb(67, 220, 207);
    }

    .to_top {
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
    }

    .to_top:hover {
        border: 1px solid rgb(67, 220, 207);
    }

    .sub_article {
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
    }

    .sub_article:hover {
        border: 1px solid #df6c4f;
    }

    .article_time {
        width: 100px;
        float: right;
        margin-right: 20px;
        height: 80px;
        line-height: 80px;
    }
</style>