<template>
    <div>
        <Header></Header>
        <div class="top-filter">
            <div class="top-filter-left">
                <select class="minimal font-18">
                    <option v-for="type in typeOfSorts">{{type.name}}</option>
                </select>
            </div>
        </div>
        <div>
            <div class="product-container">
                <div v-if="currentImg == 1" class="product-images">
                    <img class="product" src="../assets/images/product15.svg" alt="" width="210">
                    <img class="favorites" src="../assets/images/heart-in-like-circular-button.svg" alt="" width="25">
                </div>
                <div v-if="currentImg == 2" class="product-images">
                    <img class="product" src="../assets/images/product15.svg" alt="" width="210">
                    <img class="favorites" src="../assets/images/heart-in-like-circular-button.svg" alt="" width="25">
                </div>
                <div v-if="currentImg == 3" class="product-images">
                    <img class="product" src="../assets/images/product15.svg" alt="" width="210">
                    <img class="favorites" src="../assets/images/heart-in-like-circular-button.svg" alt="" width="25">
                </div>
                <div class="for-carousel">
                    <div v-bind:class="{'activeImg': currentImg == 1 }" class="line-button" @click="selectImg(1)"></div>
                    <div v-bind:class="{'activeImg': currentImg == 2 }" class="line-button" @click="selectImg(2)"></div>
                    <div v-bind:class="{'activeImg': currentImg == 3 }" class="line-button" @click="selectImg(3)"></div>
                </div>
                <div class="line-grey"></div>
                <div class="block-with-star">
                    <div class="font-12 font-type-1">BMW</div>
                    <div class="stars">
                        <img src="../assets/images/star.svg" alt="">
                        <img src="../assets/images/star.svg" alt="">
                        <img src="../assets/images/star.svg" alt="">
                        <img src="../assets/images/star.svg" alt="">
                        <img src="../assets/images/star.svg" alt="">
                        <p class="font-type-0 space font-12"> (143)</p>
                    </div>
                </div>
                <div><h5 class="font-18 font-type-2">Диск 9000293 Диск 9000293 Диск 9000293</h5></div>
                <div class="block-price">
                    <div class="font-type-3 font-14">318 000 000тнг</div>
                    <div><p class="font-10 font-type-4">в рассрочку <span class="font-12">123 990т</span> х12 мес</p></div>
                </div>
                <div class="line-grey"></div>
                <div class="block-changes">
                    <div>
                        <p class="font-type-4 font-10">Ширина, высота, диаметр</p>
                        <p class="font-type-3 font-14">185 / 55 / 55</p>
                    </div>
                    <div>
                        <button class="font-type-5 font-14">Изменить опции</button>
                    </div>
                </div>
                <div class="line-grey"></div>
                <div class="block-counter">
                    <button class="minus-btn" @click="decrementCounter"></button>
                    <p class="font-18">{{counter}}</p>
                    <button class="plus-btn" @click="incrementCounter"></button>
                </div>
                <div class="block-btn"><button class="font-14" @click="gotoPurchaseType">Выбрать продавца</button></div>
            </div>

        </div>
    </div>
</template>

<script>
    import Header from './Header'

    export default {
        name: "Product",
        data() {
            return{
                sortBy:"",
                typeOfSorts: [
                    {
                        id: 1,
                        name: 'Шины и Диски'
                    },
                    {
                        id: 2,
                        name: 'Еще что-то'
                    }
                ],
                currentTab: 1,
                counter: 1,
                currentImg: 1,
            }
        },
        components:{
            Header,
        },
        methods:{
            selectTab(selectedTab){
                this.currentTab = selectedTab
            },
            selectImg(selectedImg){
                this.currentImg = selectedImg
            },
            incrementCounter() {
                this.counter++;
            },
            decrementCounter() {
                this.counter--;
            },
            gotoPurchaseType(){
                // this.$router.push('/filter')
                this.$router.push({ path: '/purchasetype' })
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/styles/main.scss';

    .top-filter{
        height: 40px;
        width: 100%;
        background: #FFFFFF;
        box-shadow: 0px 4px 4px rgba(231, 231, 231, 0.25);
        margin-top: 0.7rem;
        display: flex;
    }
    .top-filter-left, .top-filter-right{
        width: 50%;
        display: flex;
        align-items: center;
    }
    select {
        background-color: transparent;
        border-radius: 4px;
        border: none;
        display: inline-block;
        font: inherit;
        line-height: 1.5em;
        padding: 0.5em 0.5em 0.5em 0.5em;
        color: $mainColor3;
        font-weight: 500;
        font-family: 'Roboto', sans-serif;
    }
    select.minimal {
        background: url(../assets/images/down-arrow.svg) no-repeat right center;
        background-size: 12px;
        font-family: 'Roboto', sans-serif;
    }

    select.minimal:focus {
        outline: 0;
    }
    select:-moz-focusring {
        color: transparent;
        text-shadow: 0 0 0 #000;
    }

    .product-container{
        width: 100%;
        height: auto;
        background: #FFFFFF;
        border: 1px solid #F4F4F4;
        box-sizing: border-box;
        border-radius: 4px;
        margin-bottom: 0.9rem;
        display: block;
        align-items: center;
        .product-images{
            display: flex;
            justify-content: center;
            height: 15rem;
            .favorites{
                position: relative;
                left: 7.5rem;
                top: -5rem;
            }
            .product{
                margin: auto;
                position: absolute;
                margin-top: 2rem;
            }
        }
        .product-description{
            height: 50%;
        }
        .block-with-star, .block-price, .block-changes{
            display: flex;
            justify-content: space-between;
            padding: 0.6rem 1rem 0rem 1rem;
            align-items: center;
        }
        h5{
            padding: 1rem 1rem 0.3rem 1rem;
            line-height: 20px;
            color: $mainColor2;
            font-family: 'Open Sans', sans-serif;
            margin-bottom: 0;
            margin-top: 0;
        }
        .stars{
            display: flex;
            height: 1rem;
        }
        .font-type-0{
            line-height: 13.5px;
            font-family: 'Open Sans', sans-serif;
            color: rgba(0, 0, 0, 0.5);
            margin: 0;
        }
        .price{
            padding: 0.3rem 1rem 0.3rem 1rem;
            span{
                font-weight: bold;
                line-height: 20px;
                color: $mainColor2;
                padding-left: 3px;
                font-family: 'Open Sans', sans-serif;
            }
        }
        .space{
            margin-left: 10px;
        }
        .for-carousel{
            display: flex;
            justify-content: center;
        }
        .line-button{
            width: 8px;
            height: 2px;
            background: rgba(40, 47, 54, 0.15);
            margin: 0px 5px 0px 5px;
        }
        .activeImg{
            background: $mainColor1,
        }
    }
    .line-grey{
        width: 341px;
        height: 1px;
        background: rgba(40, 47, 54, 0.15);
        margin-left: auto;
        margin-right: auto;
        margin-top: 1rem;
    }
    .block-counter{
        width: 290px;
        height: 40px;
        background: #FFFFFF;
        border: 1px solid #792A22;
        border-radius: 4px;
        margin: 1.5rem auto 0rem auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem 2rem 0.5rem 2rem;
        button{
            width: 13px;
            height: 13px;
            font-size: 3rem;
            border: none;
        }
        p{
            font-weight: bold;
            font-family: 'Open Sans', sans-serif;
        }
        .minus-btn{
            background: url(../assets/images/substract.svg) no-repeat center center;
            background-size: cover;
        }
        .plus-btn{
            background: url(../assets/images/add.svg) no-repeat center center;
            background-size: cover;
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
    .font-type-1{
        line-height: 20px;
        color: $mainColor3;
        font-family: 'Open Sans', sans-serif;
        font-weight: 600;
    }
    .font-type-2{
        line-height: 24px;
        color: $mainColor2;
        font-weight: 500;
        font-family: 'Roboto', sans-serif;
    }
    .font-type-3{
        line-height: 20px;
        color: $mainColor2;
        font-family: 'Open Sans', sans-serif;
        font-weight: bold;
        margin: 5px 0px 0px 0px;
    }
    .font-type-4{
        font-family: 'Open Sans', sans-serif;
        line-height: 20px;
        color: rgba(40, 47, 54, 0.5);
        margin: 0;
        span{
            background: #E28438;
            border-radius: 4px;
            font-weight: bold;
            line-height: 20px;
            color: #fff;
            padding: 5px;
        }
    }
    .font-type-5{
        line-height: 20px;
        color: $mainColor3;
    }
</style>
