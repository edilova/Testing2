<template>
    <div>
        <div class="purchase-header">
            <img src="../assets/images/left-arrow.svg" alt="" width="20" @click="goBack" >
            <p class="font-18">Тип покупки</p>
        </div>
        <div class="top-purchase top-purchase-container">
            <p class="top-text font-14">Выберите самый удобный для вас тип покупки </p>
        </div>
        <div class="top-purchase-container purchase-ration">
            <div class="ratio-type">
                <md-radio v-model="radio" value="one"></md-radio>
                <div style="width: 0.5rem; height: 2rem"></div>
            </div>
            <div class="ratio-text">
                <p class="font-18 type-1">Онлайн покупка</p>
                <p class="font-12 type-2">Покупка банковской картой или на месте выдачи</p>
            </div>
        </div>
        <div class="top-purchase-container purchase-ration">
            <div class="ratio-type">
                <md-radio v-model="radio" value="two"></md-radio>
                <div style="width: 1rem; height: 2rem"></div>
            </div>
            <div class="ratio-text">
                <p class="font-18 type-1">В рассрочку/кредит</p>
                <p class="font-12 type-2">Оформление покупки в рассрочку от 3 месяцев </p>
            </div>
        </div>
        <div class="block-btn"><button class="font-14" @click="gotoPurchase">Выбрать продавца</button></div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import VueMaterial from 'vue-material'
    import 'vue-material/dist/vue-material.min.css'
    import 'vue-material/dist/theme/default.css'

    Vue.use(VueMaterial)

    export default {
        name: "PurchaseType",
        data() {
            return{
                radio: 'accent',
            }
        },
        methods: {
            goBack(){
                // this.$router.push('/filter')
                this.$router.push({ path: '/product' })
            },
            gotoPurchase(){
                this.$router.push({ path: '/purchase' })
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import '../assets/styles/main.scss';

    .purchase-header{
        width: 100%;
        height: 4rem;
        line-height: 20px;
        text-align: center;
        color: $mainColor2;
        font-family: 'Roboto', sans-serif;
        background: #FFFFFF;
        box-shadow: 0px 4px 4px rgba(231, 231, 231, 0.25);
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            position: absolute;
            left: 0;
            margin: 0px 10px 0px 10px;
        }
        h1{
            margin: 0;
        }
    }
    .top-purchase{
        height: 40px;
    }
    .purchase-ration{
        height: 80px;
    }
    .top-purchase-container{
        width: 100%;
        background: #FFFFFF;
        box-shadow: 0px 4px 4px rgba(231, 231, 231, 0.25);
        margin-top: 0.7rem;
        display: flex;
        align-items: center;
        padding: 0.3rem 1rem 0.3rem 1rem;
        .top-text{
            line-height: 24px;
            color: rgba(40, 47, 54, 0.5);
        }
    }
    .ratio-type{
        display: block;
        align-items: end;
    }
    .ratio-text{
        p{
            margin: 0;
            padding: 0;
        }
        .type-1{
            font-family: 'Roboto', sans-serif;
            line-height: 20px;
            color: $mainColor2;
            font-weight: 500;
        }
        .type-2{
            font-family: 'Open Sans', sans-serif;
            line-height: 24px;
            font-weight: normal;
            margin-top: 0.5rem;
        }
    }
    .block-btn{
        width: 290px;
        height: 40px;
        background: #792A22;
        border-radius: 4px;
        margin: 1.5rem auto 1.5rem auto;
        display: flex;
        justify-content: center;
        align-items: center;
        line-height: 20px;
        button{
            text-align: center;
            color: #FFFFFF;
        }
    }
</style>
