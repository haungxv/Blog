<template>
    <div class="technology">
        <div v-if="show_article">
        <div class="title">技术分享相关文章</div>
        <div class="tech_article"
             @click="showArticle(list.name)"
             v-for="list in lists" :key="list.id">
            {{list.name}}
        </div>
        </div>
        <Article :msg="msg" v-if="!show_article" @Back="techBack"></Article>
    </div>
</template>

<script>
    import Article from "./articles/essay.vue";

    export default {
        name: "technology",
        components: {Article},
        data() {
            return {
                lists: [
                    {
                        id: 1,
                        name: "技术文章1"
                    },
                    {
                        id: 2,
                        name: "技术文章2"
                    },
                    {
                        id: 3,
                        name: "技术文章3"
                    },
                ],
                show_article:true,
                msg:"",
            }
        },
        methods:{
            showArticle(name){
                this.msg=name;
                this.show_article=!this.show_article;
            },
            techBack(){
                this.show_article=!this.show_article;
            }
        }
    }
</script>

<style scoped>

    .technology .tech_article {
        cursor: pointer;
        margin-top: 5px;
    }
</style>