<template>
    <div class="essay">
        <h4>{{msg}}</h4>
        <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX文章内容XXXXXXXXXXXXXX</p>
        <div @click="Back" class="Back">返回目录</div>
        <div class="essay_talk">留言功能</div>
    </div>
</template>

<script>
    export default {
        name: "articles",
        props: ["msg"],
        data() {
            return {}
        },
        methods: {
            Back() {
                this.$emit("Back")
            }
        }
    }
</script>

<style scoped>
    .essay .Back {
        cursor: pointer;
    }
    .essay .essay_talk{
        margin-top:30px;
    }
</style>