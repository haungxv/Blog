<template>
    <div class="change_big">
        <div>可对文章进行修改操作：</div>
        <h4>{{msg}}</h4>
        <div>文章内容：</div>
        <textarea>{{content}}</textarea><br/>
        技术分享：
        <input type="radio" value="tech" name="kind" checked="checked"/><br/>
        生活随笔：
        <input type="radio" value="life" name="kind" />
        <div class="change_public">发表文章</div>
        <div class="change_back" @click="chback">返回</div>
    </div>
</template>

<script>
    export default {
        name: "change",
        props: ['msg'],
        data() {
            return {
                content: "xxxxxxxxxxxxxxxxxxx"
            }
        },
        methods:{
            chback(){
               this.$emit("changeBack")
            }
        }
    }
</script>

<style scoped>
    .change_big .change_public {
        border: 1px solid black;
        margin-top: 10px;
        text-align: center;
        width: 80px;
        cursor: pointer;

    }

    .change_big .change_back {
        border: 1px solid black;
        margin-top: 10px;
        text-align: center;
        width: 80px;
        cursor: pointer;
    }
</style>