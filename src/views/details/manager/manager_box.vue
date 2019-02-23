<template>
    <div class="manager_box">
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
                <div class="header_right_back">退出</div>
            </div>
        </div>
        <div class="left">
            <div class="left_close">
                <span @click="menuClose">CLOSE</span>
                <img class="left_close_img" @click="menuClose" src="/src/images/back.png"/>
            </div>
            <div class="left_list font_color" @click="changeClick($event,0)">我的文章</div>
            <div class="left_list" @click="changeClick($event,1)">发表文章</div>
            <div class="left_list" @click="changeClick($event,2)">查看浏览量</div>
            <div class="left_list" @click="changeClick($event,3)">查看留言</div>
            <div class="left_list" @click="changeClick($event,4)">回收站</div>
            <div class="left_list" @click="changeClick($event,5)">草稿箱</div>
        </div>
        <div class="right">
            <write-article v-if="show_content[0]"></write-article>
            <publish v-if="show_content[1]"></publish>
            <check v-if="show_content[2]"></check>
            <talk v-if="show_content[3]"></talk>
            <bin v-if="show_content[4]"></bin>
            <drafts v-if="show_content[5]"></drafts>
        </div>
    </div>
</template>

<script>
    import writeArticle from "./details/article.vue";
    import Check from "./details/check.vue";
    import Publish from "./details/publish.vue";
    import Talk from "./details/talk.vue";
    import Bin from "./details/bin.vue";
    import Drafts from "./details/drafts.vue";


    export default {
        name: "manager_box",
        components: {Publish, Check, writeArticle, Talk, Bin, Drafts},
        data() {
            return {
                show_content: [true, false, false, false, false, false],
                show_mask: false,
            }
        },
        methods: {
            changeColor(dom) {
                let a = document.getElementsByClassName("left_list");
                for (let i = 0; i < 6; i++) {
                    a[i].setAttribute("class", "left_list");
                }
                dom.srcElement.setAttribute("class", "left_list font_color")
            },
            isShow(a) {
                for (let i = 0; i < 6; i++) {
                    if (i === a) {
                        this.show_content[`${a}`] = true;
                        continue;
                    }
                    this.show_content[`${i}`] = false;
                }
            },
            changeClick(dom, a) {
                this.changeColor(dom);
                this.isShow(a);
                this.menuClose();
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
        },
        mounted() {

        }
    }
</script>
<style scoped>
    .manager_box {
        font-family: "apercu", sans-serif;
        height: 100%;
        box-sizing: border-box;
        background-color: #f4f7f6;
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

    .manager_box .header {
        width: 100%;
        height: 70px;
        line-height: 73px;
        box-sizing: border-box;
        position: fixed;
        top: 0;
        left: 0;
        font-size: 13px;
        font-weight: 400;
        background-color: #f4f7f6;
        z-index: 302;
    }

    .manager_box .header:after {
        display: block;
        clear: both;
        content: '';
    }

    .header_left {
        box-sizing: border-box;
        height: 70px;
        line-height: 73px;
        padding: 0 24px;
        float: left;
        min-width: 115px;
        border-bottom: 1px solid #E6EAEA;
        border-right: 1px solid #E6EAEA;
        color: #202121;
        cursor: pointer;
        overflow: hidden;
        transition: all 0.3s ease-in-out;
    }

    .header_left:hover {
        color: #A6ABAB;
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
        background: #A6ABAB;
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
        height: 70px;
        line-height: 73px;
        border-bottom: 1px solid #E6EAEA;
        margin-left: 115px;
        position: relative;
    }

    .header_right_img {
        box-sizing: border-box;
        float: left;
        width: 70px;
        height: 69px;
    }

    .header_right_img img {
        width: 18px;
        height: 18px;
        position: absolute;
        top: 26px;
        left: 26px;
    }

    .header_right_title {
        box-sizing: border-box;
        height: 69px;
        line-height: 73px;
        margin-left: 70px;
        margin-right: 120px;
        text-align: center;
        font-weight: 500;
        font-size: 18px;
        letter-spacing: 7px;
        text-indent: 7px;
    }

    .header_right_back {
        background-color: rgb(67, 205, 207);
        color: white;
        cursor: pointer;
        letter-spacing: 5px;
        text-indent: 5px;
        border-radius: 15px;
        text-align: center;
        position: absolute;
        top: 20px;
        right: 20px;
        width: 90px;
        height: 30px;
        line-height: 30px;
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

    .left_list:nth-child(5) {
        border-bottom: 1px solid #E6EAEA;
    }

    .manager_box .right {
        box-sizing: border-box;
        height: calc(100% - 70px);
        /*border: 1px solid black;*/
        margin-top: 70px;
    }


</style>