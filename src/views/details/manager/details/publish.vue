<template>
    <div class="public">
        <form>
            <div>写文章：</div>
            <textarea></textarea><br/>
            技术分享：
            <input type="radio" value="tech" name="kind" checked="checked"/><br/>
            生活随笔：
            <input type="radio" value="life" name="kind" />
        </form>
        <div class="public_button">发表</div>
    </div>
</template>

<script>
    export default {
        name: "publish"
    }
</script>

<style scoped>
    .public {
        margin-top: 20px;
        margin-left: 20px;
    }

    .public .public_button {
        border: 1px solid black;
        margin-top: 20px;
        width: 55px;
        cursor:pointer;
        text-align: center;
    }
</style>