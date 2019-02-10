<template>
    <div class="manager">
        <Sign @signIn="sign" v-if="show"></Sign>
        <ManagerBox @back="back" v-if="!show"></ManagerBox>
    </div>
</template>

<script>
    import Sign from './details/manager/sign.vue'
    import ManagerBox from './details/manager/manager_box.vue'

    export default {
        name: "manager",
        components: {Sign, ManagerBox},
        data() {
            return {
                show: true
            }
        },
        methods: {
            sign() {
                this.show = !this.show;
            },
            back() {
                this.show = !this.show;

            }
        }
    }
</script>

<style scoped>
    .manager {
        height: 100%;
    }
</style>