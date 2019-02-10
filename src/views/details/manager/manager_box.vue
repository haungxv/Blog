<template>
    <div class="manager_box">
        <div class="header">
            <div class="title">管理员页面</div>
        </div>
        <div class="left">
            <div class="left_list bottom" @click="article($event)">我的文章</div>
            <div class="left_list" @click="publick($event)">发表文章</div>
            <div class="left_list" @click="check($event)">查看浏览量</div>
            <div class="left_list" @click="talk($event)">查看留言</div>
        </div>
        <div class="right">
            <Article v-if="show1"></Article>
            <Publish v-if="show2"></Publish>
            <Check v-if="show3"></Check>
            <Talk v-if="show4"></Talk>
        </div>
    </div>
</template>

<script>
    import Article from "./details/article.vue";
    import Check from "./details/check.vue";
    import Publish from "./details/publish.vue";
    import Talk from "./details/talk.vue";


    export default {
        name: "manager_box",
        components: {Publish, Check, Article,Talk},
        data() {
            return {
                show1:true,
                show2:false,
                show3:false,
                show4:false,
            }
        },
        methods: {
            change(dom){
                let a=document.getElementsByClassName("left_list");
                for(let i=0;i<4;i++){
                    a[i].setAttribute("class","left_list");
                }
                dom.srcElement.setAttribute("class", "left_list bottom")
            },
            article(dom){
                this.$options.methods.change(dom);
                this.show1=true;
                this.show2=false;
                this.show3=false;
                this.show4=false;
            },
            publick(dom){
                this.$options.methods.change(dom);

                this.show1=false;
                this.show2=true;
                this.show3=false;
                this.show4=false;
            },
            check(dom){
                this.$options.methods.change(dom);
                this.show1=false;
                this.show2=false;
                this.show3=true;
                this.show4=false;
            },
            talk(dom){
                this.$options.methods.change(dom);
                this.show1=false;
                this.show2=false;
                this.show3=false;
                this.show4=true;
            }
        }
    }
</script>
<style scoped>
    .manager_box {
        height: 100%;
        box-sizing: border-box;
    }
    .manager_box .header {
        border: 1px solid black;
        width: 100%;
        height: 18%;
        box-sizing: border-box;
        position: relative;
    }
    .manager_box .title {
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
    .manager_box .left {
        height: 82%;
        width: 18%;
        float: left;
        border: 1px solid black;
        box-sizing: border-box;
    }
    .manager_box .left div {
        margin-top: 30px;
        margin-left: 20%;
        text-align: center;
        cursor: pointer;
        width: 60%;
        /*border-bottom:1px solid black;*/
    }
    .manager_box .right {
        width: 82%;
        height: 82%;
        margin-left: 18%;
        border: 1px solid black;
        box-sizing: border-box;
    }
    .bottom {
        border-bottom: 1px solid black;
    }
</style>