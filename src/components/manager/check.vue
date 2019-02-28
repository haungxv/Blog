<template>
    <div class="check">
        <div class="title">
            <div class="title_left">总阅读量：<span>{{lookNumber}}</span>，总点赞量：<span>{{praiseNumber}}</span></div>
        </div>
        <div class="change"
             v-for="list in articles.allArticle"
             :key="list.id">
            <div class="left">
                <div class="left_title">{{list.title}}</div>
                <span class="left_tag" v-for="(tag,index) in list.tags" :key="index">{{tag.name}}&nbsp;&nbsp;</span>
            </div>
            <div class="views">阅读量：{{list.view_cnt}}</div>
            <div class="stars">点赞量：{{list.star_cnt}}</div>
            <div class="article_time">{{list.last_modified}}</div>
        </div>
    </div>
</template>

<script>

    import {
        mapState,
        mapMutations,
    } from 'vuex'

    export default {
        name: "check",
        data() {
            return {
                lookNumber: 123,
                praiseNumber: 456,
                lists: [
                    {
                        id: 1,
                        name: "文章1",
                        lookNumber: 678,
                        praiseNumber: 901
                    },
                    {
                        id: 2,
                        name: "文章2",
                        lookNumber: 6,
                        praiseNumber: 91
                    },
                    {
                        id: 3,
                        name: "文章3",
                        lookNumber: 45,
                        praiseNumber: 1
                    }
                ]
            }
        },
        methods: {
            ...mapMutations(['manager/setAllArticles', 'manager/setTotal', 'manager/subArticle']),
        },
        computed: {
            ...mapState({
                articles: state => state.manager.articles,
            })
        },
    }
</script>

<style scoped>
    .check {
        background-color: #f4f7f6;
        padding: 0 70px 20px;
        border: 1px solid #f4f7f6;
    }

    .check .title {
        width: 1000px;
        margin: 35px auto 20px;
    }

    .check .title:after {
        display: block;
        content: '';
        clear: both;
        overflow: hidden;
        visibility: hidden;
        height: 0;
    }

    .check .title_left {
        float: left;
        margin-left: 10px;
        cursor: pointer;
        font-size: 1.05em;
    }

    .check .title span {
        font-weight: 500;
        font-size: 1.08em;
    }

    .change {
        margin: 1px auto;
        width: 1000px;
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

    .check .change .left {
        width: 575px;
        height: 50px;
        margin-top: 15px;
        margin-left: 25px;
        float: left;
    }

    .check .left div {
        height: 25px;
        line-height: 25px;
    }

    .check .left_tag {
        font-size:15px;
        color: rgb(67, 220, 207);
    }

    .views {
        color: rgb(67, 220, 207);
        width: 90px;
        letter-spacing: 0.1em;
        text-indent: 0.1em;
        margin-top: 25px;
        margin-left: 10px;
        text-align: center;
        float: left;
        height: 30px;
        line-height: 30px;
        cursor:pointer;
    }

    .stars {
        color: #df6c4f;
        width: 90px;
        letter-spacing: 0.1em;
        text-indent: 0.1em;
        margin-top: 25px;
        margin-left: 40px;
        text-align: center;
        float: left;
        height: 30px;
        line-height: 30px;
        cursor:pointer;
    }


    .article_time {
        width: 100px;
        float: right;
        margin-right: 20px;
        height: 80px;
        line-height: 80px;
    }
</style>