<template>
    <div class="user">
        <div class="over" @click="menuClose" v-if="show_mask"></div>
        <div class="header">
            <div class="header_left" @click="menuShow">
                <div class="header_left_icon">
                    <div v-for="n in 3" class="bar"></div>
                </div>
                <span>MENU</span>
            </div>
            <div class="header_right">
                <div class="header_right_img">
                    <img src="/src/images/search.png"/>
                </div>
                <div class="header_right_title">个人博客</div>
                <div class="header_right_sign">SIGN</div>
            </div>
        </div>
        <div class="left">
            <div class="left_close">
                <span @click="menuClose">CLOSE</span>
                <img class="left_close_img" @click="menuClose" src="/src/images/back.png"/>
            </div>
            <div class="left_list font_color" @click="changeClick($event,0)">首页</div>
            <div class="left_list" @click="changeClick($event,1)">技术分享</div>
            <div class="left_list" @click="changeClick($event,2)">生活随笔</div>
            <div class="left_list" @click="changeClick($event,3)">关于自己</div>
            <div class="left_list" @click="changeClick($event,4)">给我留言</div>
            <div class="left_list" @click="changeClick($event,5)">项目合作</div>
        </div>
        <!--<div class="below">-->
            <!--<Home v-if="show_content[0]"></Home>-->
            <!--<Technology v-if="show_content[1]"></Technology>-->
            <!--<Life v-if="show_content[2]"></Life>-->
            <!--<mySelf v-if="show_content[3]"></mySelf>-->
            <!--<Comment v-if="show_content[4]"></Comment>-->
            <!--<workTogether v-if="show_content[5]"></workTogether>-->
        <!--</div>-->
    </div>
</template>

<script>
    import Home from "../components/user/home.vue";
    import Technology from "../components/user/technology.vue";
    import Life from "../components/user/life.vue";
    import mySelf from "../components/user/myself.vue";
    import Comment from "../components/user/comment.vue";
    import workTogether from "../components/user/work.vue";

    export default {
        name: "user",
        components: {Comment, workTogether, Life, mySelf, Home, Technology},
        data() {
            return {
                show_content: [true, false, false, false, false, false],
                show_mask:false,
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
            isShow(a) {
                for (let i = 0; i < 6; i++) {
                    if (i === a) {
                        this.$set(this.show_content, a, true);
                        continue;
                    }
                    this.$set(this.show_content, i, false);
                }
            },
            changeClick(dom, a) {
                this.changeStyle(dom);
                this.isShow(a)
            },
            menuClose() {
                document.getElementsByClassName("left")[0]
                    .setAttribute("class", "left positionChange_2");
                this.show_mask = false;
            },
            menuShow() {
                document.getElementsByClassName("left")[0]
                    .setAttribute("class", "left positionChange_1");
                this.show_mask = true;
            },
        }
    }
</script>

<style scoped>
    .user {
        font-family: "apercu", sans-serif;
        width:100%;
        height: 100%;
        box-sizing: border-box;
        background-color: #fff;
        position: relative;
        border: 1px solid white;
    }
    .over {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        background-color: #000;
        opacity: 0.7;
        -moz-opacity: 0.7;
        z-index: 303;
    }

    .user .header {
        width: 100%;
        height:60px;
        line-height: 62px;
        box-sizing: border-box;
        position: fixed;
        top: 0;
        left: 0;
        font-size: 13px;
        font-weight: 400;
        z-index: 302;
    }

    .user .header:after {
        display: block;
        clear: both;
        content: '';
    }

    .header_left {
        box-sizing: border-box;
        height:60px;
        line-height: 62px;
        padding: 0 24px;
        float: left;
        min-width: 115px;
        border-bottom: 1px solid #f0f0f0;
        border-right: 1px solid #f0f0f0;
        color: #202121;
        cursor: pointer;
        overflow: hidden;
        transition: all 0.3s ease-in-out;
    }

    .header_left:hover {
        color: rgb(255, 212, 100);
    }

    .header_left_icon {
        top: -1px;
        margin-right: 8px;
        vertical-align: middle;
        position: relative;
        display: inline-block;
        width: 15px;
        height: 13px;
    }

    .bar {
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: #202121;
        border-radius: 2px;
        overflow: hidden;
    }

    .bar:nth-child(1) {
        top: 0;
    }

    .bar:nth-child(2) {
        top: 4px;
    }

    .bar:nth-child(3) {
        top: 8px;
    }

    .bar:after {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        background: rgb(255, 212, 100);
        position: absolute;
        top: 0;
        left: 100%;
        z-index: 1;
        transition: 0.3s;
    }

    .bar:nth-child(1):after {
        transition-delay: 0.1s;
    }

    .bar:nth-child(2):after {
        transition-delay: 0.2s;
    }

    .bar:nth-child(3):after {
        transition-delay: 0.3s;
    }

    .header_left:hover .header_left_icon .bar::after {
        left: 0;
    }

    .header_left span {
        transition: all 0.3s ease-in-out;
    }

    .header_right {
        box-sizing: border-box;
        height: 60px;
        line-height: 62px;
        border-bottom: 1px solid #f0f0f0;
        margin-left: 115px;
        position: relative;
    }

    .header_right_img {
        box-sizing: border-box;
        float: left;
        width: 70px;
        height: 59px;
    }

    .header_right_img img {
        width: 18px;
        height: 18px;
        position: absolute;
        top: 21px;
        left: 26px;
    }

    .header_right_title {
        box-sizing: border-box;
        height: 59px;
        line-height: 62px;
        margin-left: 70px;
        margin-right: 120px;
        text-align: center;
        font-weight: 500;
        font-size: 18px;
        letter-spacing: 7px;
        text-indent: 7px;
    }

    .header_right_sign {
        background-color: rgb(242, 105, 100);
        color: white;
        cursor: pointer;
        letter-spacing: 2px;
        text-indent: 2px;
        border-radius: 16px;
        text-align: center;
        position: absolute;
        top: 14px;
        right: 20px;
        width: 90px;
        height: 32px;
        line-height: 32px;
    }
    .left {
        width: 270px;
        height: 100%;
        position: fixed;
        top: 0;
        left: -270px;
        box-sizing: border-box;
        z-index: 304;
        background: #f4f7f6;
    }

    @keyframes positionChange_1 {
        from {
            left: -270px;
        }
        to {
            left: 0
        }
    }

    .positionChange_1 {
        animation: positionChange_1 0.5s;
        animation-timing-function: linear;
        left: 0;
    }

    @keyframes positionChange_2 {
        from {
            left: 0;
        }
        to {
            left: -270px;
        }
    }

    .positionChange_2 {
        animation: positionChange_2 0.5s;
        animation-timing-function: linear;
    }

    .font_color {
        color: rgb(67, 205, 207);
    }

    .left_close {
        margin-top: 40px;
        position: relative;
        height: 26px;
        transition: 0.1s;
    }

    .left_close:hover {
        color: #A6ABAB;
    }

    .left_close span {
        cursor: pointer;
        display: inline-block;
        position: absolute;
        top: 2px;
        right: 53px;
        font-size: 14px;
    }

    .left_close_img {
        width: 17px;
        height: 17px;
        cursor: pointer;
        position: absolute;
        top: 3px;
        right: 25px;
    }

    .left_list {
        box-sizing: border-box;
        width: 99%;
        padding-left: 55px;
        cursor: pointer;
        height: 65px;
        line-height: 67px;
        border-top: 1px solid #E6EAEA;
        letter-spacing: 1px;
    }

    .left_list:hover {
        background-color: white;
    }

    .left_list:nth-child(2) {
        margin-top: 40px;
    }

    .left_list:nth-child(7) {
        border-bottom: 1px solid #E6EAEA;
    }


    .user .below {
        box-sizing: border-box;
        margin: 0 12%;
        height: 80%;
        border: 1px solid black;
    }
</style>