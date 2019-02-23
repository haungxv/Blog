<template>
    <div class="rotation">
        <div class="rotation_img"
             :style="left_position"
             @mouseout="R_mouseout"
             @mouseover="R_mouseover">
            <img src="/src/images/9.png">
            <img src="/src/images/13.png">
            <img src="/src/images/12.png">
            <img src="/src/images/9.png">
            <img src="/src/images/13.png">
            <img src="/src/images/12.png">
            <img src="/src/images/13.png">
        </div>
        <div class="rotation_circle">
            <span class="on" @click="changeCircle(1)"></span>
            <span @click="changeCircle(2)"></span>
            <span @click="changeCircle(3)"></span>
            <span @click="changeCircle(4)"></span>
            <span @click="changeCircle(5)"></span>
        </div>
        <a href="javascript:;" id="prev" class="rotation_arrow" @click="prev">&#60;</a>
        <a href="javascript:;" id="next" class="rotation_arrow" @click="next">&gt;</a>
    </div>
</template>

<script>
    export default {
        name: "rotation",
        data() {
            return {
                left_position: {
                    left: '-1000px'
                },
                index: 1,
                animated: false,
                timer:''
            }
        },
        methods: {
            animate(offset) {
                this.animated = true;
                let newLeft = parseInt(this.left_position.left) + offset;
                let time = 400;//位移总时间
                let interval = 8;//位移间隔时间
                let speed = offset / (time / interval);//每次的位移长度
                let vm = this;
                let go = function () {
                    if (speed < 0 && parseInt(vm.left_position.left) > newLeft || speed > 0 && parseInt(vm.left_position.left) < newLeft) {
                        vm.left_position.left = parseInt(vm.left_position.left) + speed + "px";
                        setTimeout(go, interval);
                    } else {
                        vm.animated = false;
                        vm.left_position.left = newLeft + "px";
                        if (newLeft > -1000) {
                            vm.left_position.left = -5000 + "px";
                        }
                        if (newLeft < -5000) {
                            vm.left_position.left = -1000 + "px";
                        }
                    }
                };
                go();
            },
            showCircle() {
                let circles = document.getElementsByClassName("rotation_circle")[0].getElementsByTagName("span");
                document.getElementsByClassName("on")[0].setAttribute("class", "");
                circles[this.index - 1].setAttribute("class", "on");
            },
            next() {
                if (!this.animated) {
                    if (this.index === 5) {
                        this.index = 1;
                    } else {
                        this.index++;
                    }
                    this.animate(-1000);
                    this.showCircle();
                }
            },
            prev() {
                if (!this.animated) {
                    if (this.index === 1) {
                        this.index = 5;
                    } else {
                        this.index--;
                    }
                    this.animate(1000);
                    this.showCircle();
                }
            },
            changeCircle(num) {
                if (num === this.index || this.animated) {
                    return;
                }
                let offset = parseInt(num - this.index) * (-1000);
                this.index = num;
                if (!animated) {
                    this.animate(offset);
                }
                this.showCircle();
            },
            play() {
                let vm=this;
                this.timer=setInterval(function(){
                    vm.next();
                },3000)
            },
            stop(){
                clearInterval(this.timer);
            },
            R_mouseover(){
                this.stop();
            },
            R_mouseout(){
                this.play();
            }
        },
        mounted() {
            this.play();
        }
    }
</script>

<style scoped>
    .rotation {

    }

    .rotation_img {
        position: absolute;
        left: 0;
        width: 7000px;
        z-index: 1;
    }

    .rotation_img img {
        float: left;
        width: 1000px;
        height: 650px;
    }

    .rotation_circle {
        position: absolute;
        height: 10px;
        width: 90px;
        z-index: 2;
        bottom: 20px;
        left: 0;
        right: 0;
        margin: auto;
        /*border:1px solid black;*/
    }

    .rotation_circle span {
        cursor: pointer;
        float: left;
        border: 1px solid #fff;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #333;
        margin-right: 5px;
    }

    .rotation_circle .on {
        background: rgb(67, 220, 207);
    }

    .rotation_arrow {
        text-decoration: none;
        cursor: pointer;
        display: none;
        line-height: 35px;
        text-align: center;
        font-size: 36px;
        font-weight: bold;
        width: 40px;
        height: 40px;
        position: absolute;
        z-index: 2;
        top: 0;
        bottom: 0;
        margin: auto;
        background-color: RGBA(0, 0, 0, .3);
        color: #fff;
    }

    #prev {
        left: 20px;
    }

    #next {
        right: 20px;
    }

    .rotation_arrow:hover {
        background-color: RGBA(0, 0, 0, .7);
    }

    .rotation:hover .rotation_arrow {
        display: block;
    }

</style>