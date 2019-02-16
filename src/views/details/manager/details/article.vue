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

    import axios from 'axios';
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
            getArtList(){
                let qs = require('qs');
                let instance = axios.create({});
                let data = {
                    "account": this.account,
                    "secret": this.secret,
                    "type": 100,
                };
                axios.get("http://39.108.84.51:8888/cms/user/1")
                    .then((res) => {
                        if (res.status) {
                            console.log("登陆成功！");
                            localStorage.token = res.data.token;
                            localStorage.account = this.account;
                            localStorage.secret = this.secret;
                            this.$emit('signIn');
                        }
                        this.account = '';
                        this.secret = '';
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }
        },
        mounted(){
            if (window.localStorage.getItem('token')) {
                axios.defaults.headers.common['Authorization'] = "Basic " + btoa(window.localStorage.getItem('token')+":")
            }
                this.getArtList()
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