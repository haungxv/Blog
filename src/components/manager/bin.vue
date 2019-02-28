<template>
    <div class="bin">
        <div class="title">
            <div class="title_left">全部删除</div>
            <div class="title_right">可对文章进行<span>还原</span>和<span>彻底删除</span>操作</div>
        </div>
        <div class="change"
             v-for="list in articles.articlesList"
             :key="list.id">
            <div class="left">
                <div  class="left_title">{{list.title}}</div>
                <span class="left_tag" v-for="(tag,index) in list.tags" :key="index">{{tag.name}}&nbsp;&nbsp;</span>
            </div>
            <div @click="restore(list.id)" class="restore">还原</div>
            <div @click="sub(list.id)" class="sub_article">删除</div>
            <div class="article_time">{{list.last_modified}}</div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import {
        mapState,
        mapMutations,
    } from 'vuex'

    export default {
        name: "bin",
        methods: {
            getBinList() {
                axios.get("http://39.108.84.51:8888/cms/post/list/deleted")
                    .then((res) => {
                        if (res.status) {
                            this['manager/setAllBins'](res.data.articles_summary);
                            this['manager/setBinTotal'](res.data.total);
                        }
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            },
            sub(id) {
                axios.delete("http://39.108.84.51:8888/cms/post/destroy/" + id)
                    .then((res) => {
                        if (res.status) {
                            this['manager/subBin'](id);
                        }
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            },
            restore(id) {
                // let qs = require('qs');
                // let instance = axios.create({});
                // let data = {
                //     articleId: id
                // };
                axios.put("http://39.108.84.51:8888/cms/post/revoke/" + id)
                    .then((res) => {
                        if (res.status) {
                            this.getBinList();
                        }
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            },
            ...mapMutations(['manager/setAllBins','manager/setBinTotal', 'manager/subBin']),
        },
        computed: {
            ...mapState({
                articles: state => state.manager.binArticles,
            })
        },
        mounted() {
            this.getBinList();
        }
    }
</script>

<style scoped>
    .bin{
        background-color: #f4f7f6;
        padding: 0 70px 20px;
        border: 1px solid #f4f7f6;
    }
    .bin .title {
        width: 1000px;
        margin: 35px auto 30px;
    }

    .bin .title:after {
        display: block;
        content: '';
        clear: both;
        overflow: hidden;
        visibility: hidden;
        height: 0;
    }

    .bin .title_left {
        float: left;
        margin-left: 10px;
        cursor: pointer;
        font-size: 1.1em;
        color: #df6c4f;
    }

    .bin .title_right {
        letter-spacing: 0.1em;
        margin-right: 10px;
        float: right;
    }
    .bin .title span {
        font-weight: 600;
        font-size: 1.1em;
    }


    .bin .change {
        cursor: pointer;
        margin: 1px auto;
        width: 1000px;
        border: 1px solid #f4f7f6;
        height: 80px;
        background-color: white;
    }

    .bin .change:after {
        display: block;
        clear: both;
        height: 0;
        overflow: hidden;
        visibility: hidden;
        content: ''
    }

    .bin .change .left {
        width: 600px;
        height: 50px;
        margin-top: 15px;
        margin-left: 25px;
        float: left;
    }

    .bin .left div {
        height: 25px;
        line-height: 25px;
    }

    .bin .left_tag {
        font-size:15px;
        color: rgb(67, 220, 207);
    }

    .bin .restore {
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

    .bin .restore:hover {
        border: 1px solid rgb(67, 220, 207);
    }

    .bin .sub_article {
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

    .bin .sub_article:hover {
        border: 1px solid #df6c4f;
    }

    .bin .article_time {
        width: 100px;
        float: right;
        margin-right: 20px;
        height: 80px;
        line-height: 80px;
    }
</style>