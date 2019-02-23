<template>
    <div class="manager">
        <Sign @signIn="back" v-if="show"></Sign>
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
                show:true
            }
        },
        methods: {
            sign() {
            //
            //     let qs = require('qs');
            //     let instance = axios.create({
            //         headers: {'content-type': 'application/x-www-form-urlencoded'}
            //     });
            //     let data = qs.stringify({
            //         "name": this.ch_name,
            //         "expired": this.ch_time,
            //         "desc": this.ch_desc,
            //     });
            //     instance.post("http://39.108.147.179:802/api/v1/work/modify/", data)
            //         .then((res) => {
            //             if (res.data.status === 200) {
            //                 console.log("登陆成功！");
            //                 // this.show = !this.show;
            //             }
            //             this.ch_name = '';
            //             this.ch_time = '';
            //             this.ch_desc = '';
            //         })
            //         .catch((err) => {
            //             console.log(err)
            //         })
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