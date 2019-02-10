<template>
    <div class="article">
        <div v-if="showChange">
            <div class="title">可对文章进行删改操作：</div>
            <div class="change"
                 v-for="list in lists"
                 :key="list.id">
                <span @click="change(list.name)">{{list.id}}.{{list.name}}</span>&nbsp;&nbsp;&nbsp;
                <span @click="sub(list.name)">删除文章</span>
            </div>
        </div>
        <Change :msg="msg" @changeBack="changeBack" v-if="!showChange"></Change>
    </div>
</template>

<script>
    import Change from './articles/change.vue'

    export default {
        name: "article",
        components: {Change},
        data() {
            return {
                lists: [
                    {
                        id: 1,
                        name: "文章1"
                    },
                    {
                        id: 2,
                        name: "文章2"
                    },
                    {
                        id: 3,
                        name: "文章3"
                    },
                ],
                msg: "",
                showChange: true,
            }
        },
        methods: {
            change(name) {
                this.msg = name;
                this.showChange = !this.showChange;
            },
            changeBack(){
                this.showChange = !this.showChange;
            },
            sub(name) {
                this.lists = this.lists.filter(t => t.name != name)
            },
        }
    }
</script>

<style scoped>
    .article {
        margin-top: 20px;
        margin-left: 20px;
    }

    .article .change {
        cursor: pointer;
        margin-top: 10px;
    }
</style>