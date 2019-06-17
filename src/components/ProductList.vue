<template>
    <div>
        <Header></Header>
        <div class="top-filter">
            <div class="top-filter-left">
                <select class="minimal font-12">
                    <option v-for="type in typeOfSorts">{{type.name}}</option>
                </select>
            </div>
           <div class="top-filter-right">
               <button v-bind:class="{'activeTab': currentTab == 1}" @click="selectTab(1)"  class="tab-1"></button>
               <button v-bind:class="{'activeTab2': currentTab == 2}" @click="selectTab(2)"  class="tab-2"></button>

               <!--<img v-bind:class="{'activeTab': currentTab == 1}" @click="selectTab(1)" src="../assets/images/setka.svg" alt="" width="23">-->
               <!--<img v-bind:class="{'activeTab2': currentTab == 2}" @click="selectTab(2)" src="../assets/images/menu-three-outlined-rounded-lines-symbol.svg" alt="" width="23">-->
               <div class="line-vertical"></div>
               <img src="../assets/images/Vector.svg" alt="" width="23">
               <button class="font-12" @click="gotoFilter" >Фильтр</button>
           </div>
        </div>
        <div v-if="currentTab == 1" class="list-body">
            <div class="product-container" @click="gotoProduct">
                <div class="product-images">
                    <img class="product" src="../assets/images/product15.svg" alt="">
                    <img class="favorites" src="../assets/images/heart-in-like-circular-button.svg" alt="" width="25">
                    <img class="plus" src="../assets/images/plus.svg" alt="" width="25">
                </div>
                <div class="product-description">
                    <h5 class="font-12">Диск 9000293 Диск 9000293 Диск</h5>
                    <div class="stars">
                        <img src="../assets/images/star.svg" alt="">
                        <img src="../assets/images/star.svg" alt="">
                        <img src="../assets/images/star.svg" alt="">
                        <img src="../assets/images/star.svg" alt="">
                        <img src="../assets/images/star.svg" alt="">
                        <p class="space font-12"> (143)</p>
                    </div>
                    <p class="price font-10">от <span class="font-14"> 318 000 000тнг </span></p>
                </div>
            </div>
            <div class="product-container">
                <div class="product-images">
                    <img class="product" src="../assets/images/product15.svg" alt="">
                    <img class="favorites" src="../assets/images/heart-in-like-circular-button.svg" alt="" width="25">
                    <img class="plus" src="../assets/images/plus.svg" alt="" width="25">
                </div>
                <div class="product-description">
                    <h5 class="font-12">Диск 9000293 Диск 9000293 Диск</h5>
                    <div class="stars">
                        <img src="../assets/images/star.svg" alt="">
                        <img src="../assets/images/star.svg" alt="">
                        <img src="../assets/images/star.svg" alt="">
                        <img src="../assets/images/star.svg" alt="">
                        <img src="../assets/images/star.svg" alt="">
                        <p class="space font-12"> (143)</p>
                    </div>
                    <p class="price font-10">от <span class="font-14"> 318 000 000тнг </span></p>
                </div>
            </div>
            <div class="product-container">
                <div class="product-images">
                    <img class="product" src="../assets/images/product15.svg" alt="">
                    <img class="favorites" src="../assets/images/heart-in-like-circular-button.svg" alt="" width="25">
                    <img class="plus" src="../assets/images/plus.svg" alt="" width="25">
                </div>
                <div class="product-description">
                    <h5 class="font-12">Диск 9000293 Диск 9000293 Диск</h5>
                    <div class="stars">
                        <img src="../assets/images/star.svg" alt="">
                        <img src="../assets/images/star.svg" alt="">
                        <img src="../assets/images/star.svg" alt="">
                        <img src="../assets/images/star.svg" alt="">
                        <img src="../assets/images/star.svg" alt="">
                        <p class="space font-12"> (143)</p>
                    </div>
                    <p class="price font-10">от <span class="font-14"> 318 000 000тнг </span></p>
                </div>
            </div>
            <div class="product-container">
                <div class="product-images">
                    <img class="product" src="../assets/images/product15.svg" alt="">
                    <img class="favorites" src="../assets/images/heart-in-like-circular-button.svg" alt="" width="25">
                    <img class="plus" src="../assets/images/plus.svg" alt="" width="25">
                </div>
                <div class="product-description">
                    <h5 class="font-12">Диск 9000293 Диск 9000293 Диск</h5>
                    <div class="stars">
                        <img src="../assets/images/star.svg" alt="">
                        <img src="../assets/images/star.svg" alt="">
                        <img src="../assets/images/star.svg" alt="">
                        <img src="../assets/images/star.svg" alt="">
                        <img src="../assets/images/star.svg" alt="">
                        <p class="space font-12"> (143)</p>
                    </div>
                    <p class="price font-10">от <span class="font-14"> 318 000 000тнг </span></p>
                </div>
            </div>
        </div>
        <div v-if="currentTab == 2" class="list-body">
            <div class="product-container2">
                <div class="product-images">
                    <img class="product" src="../assets/images/product15.svg" alt="">
                    <img class="favorites" src="../assets/images/heart-in-like-circular-button.svg" alt="" width="25">
                    <img class="plus" src="../assets/images/plus.svg" alt="" width="25">
                </div>
                <div class="product-description">
                    <h5 class="font-12">Диск 9000293 Диск 9000293 Диск</h5>
                    <div class="stars">
                        <img src="../assets/images/star.svg" alt="">
                        <img src="../assets/images/star.svg" alt="">
                        <img src="../assets/images/star.svg" alt="">
                        <img src="../assets/images/star.svg" alt="">
                        <img src="../assets/images/star.svg" alt="">
                        <p class="space font-12"> (143)</p>
                    </div>
                    <p class="price font-10">от <span class="font-14"> 318 000 000тнг </span></p>
                </div>
            </div>
            <div class="product-container2">
                <div class="product-images">
                    <img class="product" src="../assets/images/product15.svg" alt="">
                    <img class="favorites" src="../assets/images/heart-in-like-circular-button.svg" alt="" width="25">
                    <img class="plus" src="../assets/images/plus.svg" alt="" width="25">
                </div>
                <div class="product-description">
                    <h5 class="font-12">Диск 9000293 Диск 9000293 Диск</h5>
                    <div class="stars">
                        <img src="../assets/images/star.svg" alt="">
                        <img src="../assets/images/star.svg" alt="">
                        <img src="../assets/images/star.svg" alt="">
                        <img src="../assets/images/star.svg" alt="">
                        <img src="../assets/images/star.svg" alt="">
                        <p class="space font-12"> (143)</p>
                    </div>
                    <p class="price font-10">от <span class="font-14"> 318 000 000тнг </span></p>
                </div>
            </div>
            <div class="product-container2">
                <div class="product-images">
                    <img class="product" src="../assets/images/product15.svg" alt="">
                    <img class="favorites" src="../assets/images/heart-in-like-circular-button.svg" alt="" width="25">
                    <img class="plus" src="../assets/images/plus.svg" alt="" width="25">
                </div>
                <div class="product-description">
                    <h5 class="font-12">Диск 9000293 Диск 9000293 Диск</h5>
                    <div class="stars">
                        <img src="../assets/images/star.svg" alt="">
                        <img src="../assets/images/star.svg" alt="">
                        <img src="../assets/images/star.svg" alt="">
                        <img src="../assets/images/star.svg" alt="">
                        <img src="../assets/images/star.svg" alt="">
                        <p class="space font-12"> (143)</p>
                    </div>
                    <p class="price font-10">от <span class="font-14"> 318 000 000тнг </span></p>
                </div>
            </div>
            <div class="product-container2">
                <div class="product-images">
                    <img class="product" src="../assets/images/product15.svg" alt="">
                    <img class="favorites" src="../assets/images/heart-in-like-circular-button.svg" alt="" width="25">
                    <img class="plus" src="../assets/images/plus.svg" alt="" width="25">
                </div>
                <div class="product-description">
                    <h5 class="font-12">Диск 9000293 Диск 9000293 Диск</h5>
                    <div class="stars">
                        <img src="../assets/images/star.svg" alt="">
                        <img src="../assets/images/star.svg" alt="">
                        <img src="../assets/images/star.svg" alt="">
                        <img src="../assets/images/star.svg" alt="">
                        <img src="../assets/images/star.svg" alt="">
                        <p class="space font-12"> (143)</p>
                    </div>
                    <p class="price font-10">от <span class="font-14"> 318 000 000тнг </span></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './Header'


    export default {
        name: "ProductList",
        data() {
            return{
                sortBy:"",
                typeOfSorts: [
                    {
                        id: 1,
                        name: 'Новинки выше'
                    },
                    {
                        id: 2,
                        name: 'Сначала дорогие'
                    }
                ],
                currentTab: 1,
            }
        },
        components:{
            Header,
        },
        methods:{
            gotoFilter(){
                // this.$router.push('/filter')
                this.$router.push({ path: '/filter' })
            },
            selectTab(selectedTab){
                this.currentTab = selectedTab
            },
            gotoProduct(){
                // this.$router.push('/filter')
                this.$router.push({ path: '/product' })
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
    .top-filter-right{
        display: flex;
        align-items: center;
        justify-content: space-around;
        img,.line-vertical{
            margin: 0px 4px 0px 4px;
        }
        button{
            padding: 0.3rem 1rem 0.5rem 0rem;
            line-height: 1.5em;
        }
    }
    .line-vertical{
        height: 13px;
        border: 0.7px solid #DADADA;
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
    .list-body{
        display: flex;
        flex-wrap: wrap;
        padding-left: 1rem;
        padding-right: 1rem;
        justify-content: space-around;
        margin-top: 1rem;
    }
    .product-container{
        width: 10rem;
        height: 14rem;
        background: #FFFFFF;
        border: 1px solid #F4F4F4;
        box-sizing: border-box;
        border-radius: 4px;
        margin-bottom: 0.9rem;
        .product-images{
            display: flex;
            justify-content: center;
            height: 50%;
            .favorites{
                position: relative;
                left: 4.5rem;
                top: -2.2rem;
            }
            .plus{
                position: relative;
                left: 3rem;
                top: 3rem;
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

        h5{
            padding: 1rem 1rem 0.3rem 1rem;
            line-height: 20px;
            color: $mainColor2;
            font-family: 'Open Sans', sans-serif;
            margin-bottom: 0;
            margin-top: 0;
        }
        .stars{
            padding: 0rem 1rem 0rem 1rem;
            display: flex;
            height: 1rem;
            margin-right: 1rem;
        }
        p{
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
    }
    .product-container2{
        width: 96.5%;
        height: 8rem;
        background: #FFFFFF;
        border: 1px solid #F4F4F4;
        box-sizing: border-box;
        border-radius: 4px;
        margin-bottom: 0.9rem;
        display: flex;
        .product-images{
            display: flex;
            justify-content: center;
            width: 50%;
            .favorites{
                position: relative;
                left: 4.5rem;
                top: -2.2rem;
            }
            .plus{
                position: relative;
                left: 3rem;
                top: 2.5rem;
            }
            .product{
                margin: auto;
                position: absolute;
                margin-top: 2rem;
            }
        }
        .product-description{
            width: 50%;
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
            padding: 0rem 1rem 0rem 1rem;
            display: flex;
            height: 1rem;
            margin-right: 1rem;
        }
        p{
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
    }
    .tab-1{
        width: 20px;
        height: 20px;
        background: url(../assets/images/setka.svg) no-repeat center center;
        background-size: cover;
        border: none;
    }
    .tab-2{
        width: 20px;
        height: 20px;
        background: url(../assets/images/menu-3-lines.svg) no-repeat center center;
        background-size: cover;
        border: none;
    }
    .activeTab{
        background-image: url("../assets/images/menu-active.svg");
    }
    .activeTab2{
        background-image: url("../assets/images/three-line-active.svg");
    }
</style>
