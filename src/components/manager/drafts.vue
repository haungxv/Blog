<template>
    <div class="drafts">草稿箱</div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "drafts",
        methods: {
            getBinList() {
                axios.get("http://113.54.210.74:5000/cms/post/list/draft")
                    .then((res) => {
                        if (res.status) {

                        }
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            },
        },
        mounted() {
            if (window.localStorage.getItem('token')) {
                axios.defaults.headers.common['Authorization'] = "Basic " + btoa(window.localStorage.getItem('token') + ":")
            }
            this.getBinList()
        }

    }
</script>

<style scoped>

</style>