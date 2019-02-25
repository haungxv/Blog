<template>
    <div class="manager">
        <Sign @signIn="back" v-if="show"></Sign>
        <ManagerBox @back="back" v-if="!show"></ManagerBox>
    </div>
</template>

<script>
    import Sign from './sign.vue'
    import ManagerBox from './manager_box.vue'

    export default {
        name: "manager",
        components: {Sign, ManagerBox},
        data() {
            return {
                show:true
            }
        },
        methods: {
            sign() {

            },
            back(){
                this.show = !this.show;

            }
        },
        mounted(){

        }
    }
</script>

<style scoped>
    .manager {
        height: 100%;
    }
</style>