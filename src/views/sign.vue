<template>
    <div class="sign">
        <div class="sign_title">
            <a href="javascript:;" class="sign_a_1">个人博客</a>
            <a href="javascript:;" class="sign_a_2">personal&nbsp;&nbsp;blog</a>
        </div>
        <div class="sign_content">
            <img class="sign_img" alt="个人博客" src="/src/images/9.png"/>
            <form>
                <span class="sign_word">账号登陆</span>
                <div class="sign_input_1">
                    <i class="sign_i_1"></i>
                    <input type="text" id="user" v-model="account"><br/>
                </div>
                <div class="sign_input_2">
                    <i class="sign_i_2"></i>
                    <input type="text" id="password" v-model="secret">
                </div>
                <div class="remember" @click="remember">
                    <div class="remember_box">
                        <img class="sign_remember_img" v-show="show_rememberImg" src="/src/images/remember.png"/>
                    </div>
                    <div class="remember_word">记住密码</div>
                </div>
                <div class="sign_button" @click="sign">登陆</div>
                <span class="sign_register">还没有账号？<a href="">点击注册</a></span>
            </form>
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
        name: "sign",
        data() {
            return {
                account: '',
                secret: '',
                show_rememberImg: false,
            }
        },
        methods: {
            sign() {
                let qs = require('qs');
                let instance = axios.create({});
                let data = {
                    "account": this.account,
                    "secret": this.secret,
                    "type": 100,
                };
                instance.post("http://39.108.84.51:8888/cms/token", data)
                    .then((res) => {
                        if (res.status) {
                            console.log("登陆成功！");
                            this['sign/setToken'](res.data.token);
                            localStorage.setItem("token", res.data.token);
                            localStorage.setItem("account", this.account);
                            localStorage.setItem("secret", this.secret);
                            this.account = '';
                            this.secret = '';
                            this.$emit('signIn');
                        }
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            },
            remember() {
                if (this.show_rememberImg) {
                    this.show_rememberImg = false;
                    localStorage.setItem("remember", "false");
                } else {
                    this.show_rememberImg = true;
                    localStorage.setItem("remember", "true");
                }
            },
            ...mapMutations(['sign/setToken']),
        },
        computed:{},
        mounted() {
            if (localStorage.getItem("remember") === "true") {
                this.show_rememberImg = true;
                this.account = localStorage.getItem('account');
                this.secret = localStorage.getItem('secret');
            }
        },

    }
</script>

<style scoped>
    .sign {
        border: 1px solid white;
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        font: 400 14px/1.5 'Hiragino Sans GB', 'WenQuanYi Micro Hei', tahoma, sans-serif;
    }

    .sign_title {
        position: relative;
        width: 980px;
        height: auto;
        margin: 40px auto 30px;
    }

    .sign_title:after {
        display: block;
        clear: both;
        height: 0;
        overflow: hidden;
        visibility: hidden;
        content: ''
    }

    .sign_a_1, .sign_a_2 {
        width: 120px;
        height: 34px;
        display: block;
        color: rgb(67, 205, 207);
        text-decoration: none;
        font-weight: 400;
        font-stretch: normal;
        font-size: 27px;
        font-family: "Hiragino Sans GB", "WenQuanYi Micro Hei", tahoma, sans-serif;
    }

    .sign_a_2 {
        height: 20px;
        letter-spacing: .03em;
        font-size: 15px;
        box-sizing: border-box;
        padding-left: 5px;
    }

    .sign_content {
        margin: 0 auto 70px;
        width: 980px;
    }

    .sign_content:after {
        display: block;
        clear: both;
        height: 0;
        overflow: hidden;
        visibility: hidden;
        content: ''
    }

    .sign_img {
        width: 480px;
        float: left;
        margin-right: 115px;
    }

    .sign form {
        width: 270px;
        height: 341px;
        float: left;
        margin-top: 30px;
    }

    .sign_word {
        font-weight: 400;
        margin-top: 40px;
        margin-bottom: 20px;
        display: block;
        font-size: 16px;
        color: #666;
    }

    .sign_input_1, .sign_input_2 {
        padding: 9px 0;
        position: relative;
        margin-top: 7px;
    }

    .sign_i_1, .sign_i_2 {
        width: 18px;
        height: 18px;
        background-size: 100% 100%;
        position: absolute;
        display: inline-block;
        top: 16px;
        left: 9px;
        line-height: 18px;
        vertical-align: text-top;
    }

    .sign_i_1 {
        background-image: url("/src/images/user.png");
    }

    .sign_i_2 {
        background-image: url("/src/images/password.png");
    }

    .sign input {
        box-sizing: border-box;
        width: 270px;
        padding-left: 34px;
        height: 32px;
        border: 1px solid #aaa;
        line-height: 32px;
        vertical-align: top;
        font-size: 14px;
        font-family: inherit;
        background-color: white;
        cursor: text;
    }

    .sign input:focus {
        outline-color: rgb(67, 200, 207);
        border: 2px rgb(67, 200, 207);
    }

    .sign .remember {
        width: 100px;
        margin-top: 10px;
        cursor: pointer;
        margin-left: 10px;
    }

    .sign .remember_box {
        width: 15px;
        height: 15px;
        border: 1px solid rgb(225, 225, 225);
        position: relative;
        float: left;
        margin-top: 2.5px;
    }

    .sign_remember_img {
        position: absolute;
        width: 20px;
        left: -1px;
        top: -1px;
    }

    .sign .remember_word {
        height: 20px;
        margin-left: 22px;
        color: #666;
    }

    .sign .sign_button {
        width: 270px;
        height: 32px;
        line-height: 32px;
        color: white;
        background-color: rgb(67, 205, 207);
        border-radius: 2px;
        text-align: center;
        margin-top: 30px;
        cursor: pointer;
        letter-spacing: 2em;
        text-indent: 2em;
        font-size: 16px;
    }

    .sign_register {
        display: inline-block;
        margin-top: 6px;
        color: #666;
    }

    .sign_register a {
        width: 120px;
        height: 34px;
        color: rgb(67, 205, 207);
        text-decoration: none;
        font-weight: 400;
        font-stretch: normal;
    }

    .sign_register a:hover {
        text-decoration-line: underline;
    }



</style>       