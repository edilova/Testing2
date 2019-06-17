<template>

    <div>
        <div class="filter-header">
            <img src="../assets/images/left-arrow.svg" alt="" width="20" @click="goBack" >
            <p class="font-18">Фильтр</p>
        </div>
        <div class="filter-body">
            <collapse :selected="false">
                <div slot="collapse-header">
                    ТОВАРЫ
                </div>
                <div slot="collapse-body">
                    <div>
                        <md-checkbox class="color-font font-14" v-model="array" value="1">Ноутбуки (23)</md-checkbox>
                        <md-checkbox class="color-font font-14" v-model="array" value="2">Наушники (45)</md-checkbox>
                        <md-checkbox class="color-font font-14" v-model="array" value="3">Смартфоны (13)</md-checkbox>
                        <md-checkbox class="color-font font-14" v-model="array" value="4">Планшеты (35)</md-checkbox>
                        <md-checkbox class="color-font font-14" v-model="array" value="5">Плейеры (5)</md-checkbox>
                        <md-checkbox class="color-font font-14" v-model="array" value="6">Чехлы для ноутбуков (23)</md-checkbox>
                        <md-checkbox class="color-font font-14" v-model="array" value="6">Чехлы для смарфонов (46)</md-checkbox>

                    </div>
                </div>
            </collapse>
            <div class="line-grey"></div>
            <collapse :selected="false">
                <div slot="collapse-header">
                    ЦЕНА
                </div>
                <div slot="collapse-body">
                    frf
                </div>
            </collapse>
            <div class="line-grey"></div>
            <collapse :selected="false">
                <div slot="collapse-header">
                    ЦВЕТ
                </div>
                <div slot="collapse-body">
                    <div class="filter-color">
                        <div>
                            <md-checkbox class="color-font font-14" v-model="array" value="black">Черный</md-checkbox>
                            <md-checkbox class="color-font font-14" v-model="array" value="white">Белый</md-checkbox>
                            <md-checkbox class="color-font font-14" v-model="array" value="grey">Серый</md-checkbox>
                        </div>
                        <div>
                            <md-checkbox class="color-font font-14" v-model="array" value="gold">Золотой</md-checkbox>
                            <md-checkbox class="color-font font-14" v-model="array" value="pink">Розовый</md-checkbox>
                            <md-checkbox class="color-font font-14" v-model="array" value="green">Зеленый</md-checkbox>
                        </div>
                    </div>
                </div>
            </collapse>
            <div class="line-grey"></div>
            <collapse :selected="false">
                <div slot="collapse-header">
                    РАЗМЕР ЭКРАНА
                </div>
                <div slot="collapse-body">
                    <div class="all-sizes">
                        <div v-for="item in buttons" v-on:click="provide(item)" v-bind:class="{clicked: contains(sizes, item)}" class="one-size">{{ item.name }}</div>
                    </div>
                </div>
            </collapse>
            <div class="line-grey"></div>
            <collapse :selected="false">
                <div slot="collapse-header">
                    ОТЗЫВЫ ПОКУПАТЕЛЕЙ
                </div>
                <div slot="collapse-body">
                    <div>
                        <div class="feedback">
                            <div><md-radio v-model="radio" value="all"></md-radio></div>
                            <p>Любой рейтинг</p>
                        </div>
                        <div class="feedback">
                            <div><md-radio v-model="radio" value="one"></md-radio></div>
                            <div class="for-star">
                                <img src="../assets/images/star.svg" alt="">
                                <img src="../assets/images/star.svg" alt="">
                                <img src="../assets/images/star.svg" alt="">
                                <img src="../assets/images/star.svg" alt="">
                                <img src="../assets/images/stargrey.svg" alt="">
                                <p> и более</p>
                            </div>
                        </div>
                        <div class="feedback">
                            <div><md-radio v-model="radio" value="two"></md-radio></div>
                            <div class="for-star">
                                <img src="../assets/images/star.svg" alt="">
                                <img src="../assets/images/star.svg" alt="">
                                <img src="../assets/images/star.svg" alt="">
                                <img src="../assets/images/stargrey.svg" alt="">
                                <img src="../assets/images/stargrey.svg" alt="">
                                <p> и более</p>
                            </div>
                        </div>
                        <div class="feedback">
                            <div><md-radio v-model="radio" value="three"></md-radio></div>
                            <div class="for-star">
                                <img src="../assets/images/star.svg" alt="">
                                <img src="../assets/images/star.svg" alt="">
                                <img src="../assets/images/stargrey.svg" alt="">
                                <img src="../assets/images/stargrey.svg" alt="">
                                <img src="../assets/images/stargrey.svg" alt="">
                                <p> и более</p>
                            </div>
                        </div>

                    </div>
                </div>
            </collapse>
            <div class="line-grey"></div>
            <collapse :selected="false">
                <div slot="collapse-header">
                    ВСТРОЕННАЯ ПАМЯТЬ
                </div>
                <div slot="collapse-body">
                    frf
                </div>
            </collapse>
            <div class="line-grey"></div>
            <collapse :selected="false">
                <div slot="collapse-header">
                    ЗАДНЯЯ КАМЕРА
                </div>
                <div slot="collapse-body">
                    frf
                </div>
            </collapse>
            <div class="line-grey"></div>
            <collapse :selected="false">
                <div slot="collapse-header">
                    ПЕРЕДНЯЯ КАМЕРА
                </div>
                <div slot="collapse-body">
                    frf
                </div>
            </collapse>
            <div class="line-grey"></div>
            <collapse :selected="false">
                <div slot="collapse-header">
                    РАЗРЕШЕНИЕ ЭКРАНА
                </div>
                <div slot="collapse-body">
                    frf
                </div>
            </collapse>
            <div class="line-grey"></div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Collapse from 'vue-collapse'
    import VueMaterial from 'vue-material'
    import 'vue-material/dist/vue-material.min.css'
    import 'vue-material/dist/theme/default.css'

    Vue.use(VueMaterial)

    export default {
        name: "FilterList",
        data() {
            return{
                checkedProduct: true,
                radio: 'accent',
                array: [],
                boolean: false,
                string: null,
                novalue: null,
                disabled: true,
                obj1: {name: 'obj1'},
                obj2: {name: 'obj2'},
                obj: null,
                indeterminate: true,
                currentTab: 0,
                buttons: [
                    {name: '5.5'},
                    {name: '5.7'},
                    {name: '5.0'},
                    {name: '6.0'},
                    {name: '4.7'},
                    {name: '4.3'},
                ],
                sizes: [],
            }
        },
        methods: {
            goBack(){
                // this.$router.push('/filter')
                this.$router.push({ path: '/' })
            },
            selectProduct(){
                this.checkedProduct = ! this.checkedProduct
            },
            selectTab(selectedTab){
                this.currentTab = selectedTab
            },
            provide(item){
                if(this.sizes.indexOf(item) == -1)
                {
                    this.sizes.push(item);
                }
                else
                {
                    this.sizes.splice(this.sizes.indexOf(item), 1);
                }
            },
            contains(arr, item){
                return arr.indexOf(item) != -1;
            },
        },
        components:{
            Collapse
        }
    }
</script>




<style lang="scss" scoped>
    @import '../assets/styles/main.scss';

    .filter-header{
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
    .filter-body{
    }
    .line-grey{
        width: 341px;
        height: 1px;
        background: rgba(40, 47, 54, 0.15);
        margin-left: auto;
        margin-right: auto;
    }
    .md-checkbox {
        display: flex;
    }
    .md-radio {
        display: flex;
    }
    .filter-color{
        display: flex;
        justify-content: space-between;
    }
    .color-font{
        line-height: 20px;
        color: rgba(40, 47, 54, 0.8);
        font-family: 'Open Sans', sans-serif;
    }
    .for-star{
        height: 3rem;
        display: flex;
        align-items: center;
        p{
            padding-left: 10px;
        }
    }
    .feedback{
        height: 2rem;
        display: flex;
        align-items: center;
        p{
            margin: 0;
            font-size: 14px;
            line-height: 20px;
            color: $mainColor2;
            font-family: 'Open Sans', sans-serif;
        }
    }
    .all-sizes{
        display: flex;
        flex-wrap: wrap;
        padding-left: 0.3rem;
        padding-right: 0.3rem;
        justify-content: start;
        margin-top: 1rem;
    }
    .one-size{
        width: 49px;
        height: 30px;
        font-weight: 600;
        line-height: 20px;
        font-size: 14px;
        font-family: 'Open Sans', sans-serif;
        border: 1px solid rgba(40, 47, 54, 0.15);
        box-sizing: border-box;
        border-radius: 5px;
        margin: 0rem 0.2rem 0.2rem 0.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .clicked{
        border: 1px solid $mainColor1;
    }
</style>
