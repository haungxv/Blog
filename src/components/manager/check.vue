<template>
    <div class="check">
        <div class="look">总阅读量：{{lookNumber}}</div>
        <div class="praise">总点赞量：{{praiseNumber}}</div>
        <div class="article">
            <div class="total">每篇文章阅读与点赞量：</div>
            <ul>
                <li v-for="list in lists" :key="list.id">
                    <div>{{list.id}}.{{list.name}}</div>
                    <div>阅读量：{{list.lookNumber}}</div>
                    <div>点赞量：{{list.praiseNumber}}</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "check",
        data() {
            return {
                lookNumber: 123,
                praiseNumber: 456,
                lists: [
                    {
                        id: 1,
                        name: "文章1",
                        lookNumber: 678,
                        praiseNumber: 901
                    },
                    {
                        id: 2,
                        name: "文章2",
                        lookNumber: 6,
                        praiseNumber: 91
                    },
                    {
                        id: 3,
                        name: "文章3",
                        lookNumber: 45,
                        praiseNumber: 1
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .check .look {
        margin-top: 20px;
        margin-left: 20px;
    }

    .check .praise {
        margin-top: 20px;
        margin-left: 20px;
    }
.check .total{
    margin-top: 20px;
    margin-left: 20px;
}
    .check li {
        list-style: none;
    }
</style>