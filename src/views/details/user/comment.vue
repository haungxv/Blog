<template>
    <div class="comment">
        <div class="talk">给我留言:</div>
        <textarea></textarea>
        <div>请留下您联系方式：</div>
        <input type="text" placeholder="邮箱、微信、QQ请至少留下一项">
        <div class="talk_submit">确认提交</div>
    </div>
</template>

<script>
    export default {
        name: "comment"
    }
</script>

<style scoped>
    .comment{
        /*margin-top:20px;*/
        /*margin-left:20px;*/
    }
    .comment input{
        width:200px;
    }
    .comment .talk_submit{
        border:1px solid black;
        margin-top:10px;
        width:100px;
        text-align:center;
        cursor:pointer;
    }
</style>