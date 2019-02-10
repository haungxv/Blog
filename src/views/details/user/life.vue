<template>
    <div class="life">
        <div v-if="show_article">
            <div class="title">生活随笔相关文章</div>
            <div class="life_article"
                 @click="showArticle(list.name)"
                 v-for="list in lists" :key="list.id">
                {{list.name}}
            </div>
        </div>
        <essay :msg="msg" v-if="!show_article" @Back="lifeBack"></essay>
    </div>
</template>

<script>
    import essay from "./articles/essay.vue";

    export default {
        name: "life",
        components: {essay},
        data() {
            return {
                lists: [
                    {
                        id: 1,
                        name: "生活文章1"
                    },
                    {
                        id: 2,
                        name: "生活文章2"
                    },
                    {
                        id: 3,
                        name: "生活文章3"
                    },
                ],
                show_article: true,
                msg: "",
            }
        },
        methods: {
            showArticle(name) {
                this.msg = name;
                this.show_article = false;
            },
            lifeBack(){
                this.show_article = true;
            }
        }
    }
</script>

<style scoped>
    .life .life_article {
        cursor: pointer;
        margin-top: 5px;
    }
</style>