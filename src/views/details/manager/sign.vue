<template>
    <div class="sign">
        <div>
            <form>
                <label for="user">用户名：</label>
                <input type="text" id="user" v-model="user"><br/>
                <label for="password">密码：</label>
                <input type="text" id="password" v-model="password">
                <div class="remember">
                    <div class="remember_box"></div>
                    <div class="remember_word">记住密码</div>
                </div>
                <div class="sign_button" @click="sign">登陆</div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "sign",
        data() {
            return {
                user: '',
                password: ''
            }
        },
        methods:{
            sign(){
                this.$emit('signIn')
            }
        }
    }
</script>

<style scoped>
    .sign form {
        margin: 0 auto;
        border: 1px solid black;
        width: 400px;
        margin-top:100px;
    }

    .sign label {
        width: 20%;
        display: inline-block;
        /*border: 1px solid black;*/
        text-align: right;
        margin-left: 14%;
    }

    .sign input {
        width: 50%;
    }
    .sign .remember{
        /*border:1px solid red;*/
        margin-left:20%;
        width:40%;
        margin-top:50px;
    }
    .sign .remember_box {
        width: 15px;
        height: 15px;
        border: 1px solid black;
        float: left;
        margin-top: 2.5px;
    }

    .sign .remember_word {
        /*border:1px solid black;*/
        height: 20px;
    }
    .sign .sign_button{
        margin:0 auto;
        width:15%;
        border:1px solid black;
        text-align: center;
        margin-top:50px;
        cursor:pointer;
    }

</style>