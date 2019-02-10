<template>
    <div class="user">
        <div class="header">
            <div class="title">个人博客</div>
        </div>
        <div class="menu">
            <div class="menu_list color" @click="home($event)">首页</div>
            <div class="menu_list" @click="technology($event)">技术分享</div>
            <div class="menu_list" @click="life($event)">生活随笔</div>
            <div class="menu_list" @click="mySelf($event)">关于自己</div>
            <div class="menu_list" @click="comment($event)">给我留言</div>
            <div class="menu_list" @click="work($event)">项目合作</div>
            <div class="search">搜索功能</div>
        </div>
        <div class="below">
            <Home v-if="show_home"></Home>
            <Technology v-if="show_tech"></Technology>
            <Life v-if="show_life"></Life>
            <mySelf v-if="show_myself"></mySelf>
            <Comment v-if="show_comment"></Comment>
            <workTogether v-if="show_work"></workTogether>
        </div>
    </div>
</template>

<script>
    import Home from "./details/user/home.vue";
    import Technology from "./details/user/technology.vue";
    import Life from "./details/user/life.vue";
    import mySelf from "./details/user/myself.vue";
    import Comment from "./details/user/comment.vue";
    import workTogether from "./details/user/work.vue";

    export default {
        name: "user",
        components: {Comment, workTogether, Life, mySelf, Home, Technology},
        data() {
            return {
                show_home: true,
                show_tech: false,
                show_life: false,
                show_myself: false,
                show_comment: false,
                show_work: false,
            }
        },
        methods: {
            changeStyle(dom) {
                let a = document.getElementsByClassName("menu_list");
                for (let i = 0; i < 6; i++) {
                    a[i].setAttribute("class", "menu_list")
                }
                dom.srcElement.setAttribute("class", "menu_list color")
            },
            home(dom) {
                this.$options.methods.changeStyle(dom);
                this.show_home = true;
                this.show_tech = false;
                this.show_life = false;
                this.show_myself = false;
                this.show_comment = false;
                this.show_work = false;
            },
            technology(dom) {
                this.$options.methods.changeStyle(dom);
                this.show_home = false;
                this.show_tech = true;
                this.show_life = false;
                this.show_myself = false;
                this.show_comment = false;
                this.show_work = false;
            },
            life(dom) {
                this.$options.methods.changeStyle(dom);
                this.show_home = false;
                this.show_tech = false;
                this.show_life = true;
                this.show_myself = false;
                this.show_comment = false;
                this.show_work = false;
            },
            mySelf(dom) {
                this.$options.methods.changeStyle(dom);
                this.show_home = false;
                this.show_tech = false;
                this.show_life = false;
                this.show_myself = true;
                this.show_comment = false;
                this.show_work = false;
            },
            comment(dom) {
                this.$options.methods.changeStyle(dom);
                this.show_home = false;
                this.show_tech = false;
                this.show_life = false;
                this.show_myself = false;
                this.show_comment = true;
                this.show_work = false;
            },
            work(dom) {
                this.$options.methods.changeStyle(dom);
                this.show_home = false;
                this.show_tech = false;
                this.show_life = false;
                this.show_myself = false;
                this.show_comment = false;
                this.show_work = true;
            },
        }
    }
</script>

<style scoped>
    .user {
        height: 100%;
    }
    .user .header {
        border: 1px solid black;
        width: 100%;
        height: 14%;
        box-sizing: border-box;
        position: relative;
    }
    .user .title {
        /*border:1px solid black;*/
        height: 23px;
        text-align: center;
        margin: auto;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }

    .user .menu {
        border: 1px solid black;
        height: 6%;
        position: relative;
        box-sizing: border-box;

    }

    .user .menu_list {
        box-sizing: border-box;
        border: 1px solid black;
        width: 10%;
        text-align: center;
        float: left;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    .user .menu_list:first-child {
        margin-left: 12%;
    }

    .user .search {
        box-sizing: border-box;
        border: 1px solid black;
        width: 7%;
        text-align: center;
        float: right;
        margin-right: 12%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .color {
        background-color: azure;
    }

    .user .below {
        box-sizing: border-box;
        margin: 0 12%;
        height:80%;
        border:1px solid black;
    }
</style>