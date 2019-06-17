<template>
    <div>
        <div class="purchase-header">
            <img src="../assets/images/left-arrow.svg" alt="" width="20" @click="goBack" >
            <p class="font-18">Покупка</p>
        </div>
        <div class="purchase-block-1">
            <p class="purchase-text-1 font-16">Способ доставки</p>
            <div class="btn-wraper">
                <button v-bind:class="{ 'activRed': currentType == 1 }" class="purchase-button-1" @click="selectType(1)">Самовызов</button>
                <button v-bind:class="{ 'activRed': currentType == 2 }" class="purchase-button-2" @click="selectType(2)">Курьером</button>
            </div>
            <div v-if="currentType == 1">
                <p class="purchase-text-1 font-14">Информация о доставке</p>
                <div class="purchase-info">
                    <div>
                        <p class="purchase-text-2 font-12">Стоимость:</p>
                        <p class="purchase-text-2 font-12">Дата и время доставки:</p>
                    </div>
                    <div>
                        <p class="purchase-text-3 font-14">Бесплатно</p>
                        <p class="purchase-text-3 font-14"><span>1 апреля </span>, с 09:00 до 22:00</p>
                    </div>
                </div>
                <div class="line-grey"></div>

                <!--<p class="purchase-text-1 font-14">Информация о покупателе</p>-->
                <div class="purchase-your-city-in purchase-your-info">
                    <p class="purchase-text-4 font-14">Информация о покупателе</p>
                    <span class="font-14"><button class="font-14" @click="isEditing = !isEditing">
                        {{ isEditing ? 'Сохранить' : 'Изменить' }}
                    </button>
                     <button v-if="isEditing" @click="isEditing = false" class="font-14">Cancel</button>
                    </span>
                </div>
                <!--<span class="font-14">Изменить</span>-->

                <div class="purchase-info">
                    <div  :class="{'d-none': isEditing}">
                        <p class="purchase-text-2 font-12">ФИО:</p>
                        <p class="purchase-text-2 font-12">Номер телефона:</p>
                        <p class="purchase-text-2 font-12">E-mail адрес:</p>
                    </div>
                    <div  :class="{'d-with-100': isEditing}">
                        <p class="purchase-text-3 font-14"><input type="text" v-model="user.name" :disabled="!isEditing" :class="{'edit-save': isEditing}"></p>
                        <p class="purchase-text-3 font-14"><input type="text" v-model="user.phone" :disabled="!isEditing" :class="{'edit-save': isEditing}"></p>
                        <p class="purchase-text-3 font-14"><input type="text" v-model="user.email" :disabled="!isEditing" :class="{'edit-save': isEditing}"></p>
                    </div>
                </div>

                <div class="line-grey"></div>
                <p class="purchase-text-1 font-14">Адрес доставки</p>
                <div class="purchase-input-country">
                    <md-autocomplete v-model="selectedCountry" :md-options="countries">
                        <label>Город</label>
                    </md-autocomplete>
                </div>
                <div class="purchase-input">
                    <input class="font-14"  type="text" placeholder="Улица/микрорайон">
                </div>
                <div class="purchase-input">
                    <input class="font-14"  type="text" placeholder="Дом/Строение">
                </div>
                <div class="purchase-input">
                    <input class="font-14"  type="text" placeholder="Квартира/Офис">
                </div>
                <div class="block-btn"><button class="font-14">Купить</button></div>
            </div>
            <div v-if="currentType == 2">
                <p class="purchase-text-1 font-14">Можно забрать</p>
                <div class="purchase-info">
                    <div>
                        <p class="purchase-text-2 font-12">Дата</p>
                    </div>
                    <div>
                        <p class="purchase-text-3 font-14"><span>1 апреля </span></p>
                    </div>
                </div>
                <div class="purchase-your-city">
                    <div>
                        <p class="purchase-text-2 font-12">Ваш город</p>
                    </div>
                    <div class="purchase-your-city-in">
                        <p class="purchase-text-4 font-14">г. Алматы</p>
                        <span class="font-14">Изменить</span>
                    </div>
                </div>

                <div class="top-purchase-container purchase-ration">
                    <div class="ratio-type">
                        <md-radio v-model="radio" value="one"></md-radio>
                        <div style="width: 0.5rem; height: 2rem"></div>
                    </div>
                    <div class="ratio-text">
                        <p class="font-16 type-1">ул. Казыбек Би, д. 122</p>
                        <p class="font-12 type-2">Пн-Пт 09:00-22:00 ; Сб-Вс 09:00-12:00   </p>
                    </div>
                </div>
                <div class="top-purchase-container purchase-ration">
                    <div class="ratio-type">
                        <md-radio v-model="radio" value="two"></md-radio>
                        <div style="width: 1rem; height: 2rem"></div>
                    </div>
                    <div class="ratio-text">
                        <p class="font-16 type-1">ул. Казыбек Би, д. 122</p>
                        <p class="font-12 type-2">Пн-Пт 09:00-22:00 ; Сб-Вс 09:00-12:00   </p>
                    </div>
                </div>
                <div class="block-btn"><button class="font-14" @click="gotoNext">Продолжить покупку</button></div>
            </div>

        </div>

    </div>
</template>

<script>
    import Vue from 'vue'
    import VueMaterial from 'vue-material'
    import 'vue-material/dist/vue-material.min.css'
    import 'vue-material/dist/theme/default.css'

    Vue.use(VueMaterial)


    export default {
        name: "Purchase",
        data() {
            return{
                radio: 'accent',
                selectedCountry: null,
                countries: [
                    'Алматы',
                    'Астана',
                    'Караганда',
                    'Тараз',
                    'Атырау',
                    'Актобе',
                ],
                currentType: 1,
                isEditing: false,
                user: {
                    name: 'Асан Н.Е',
                    email: 'smith@gmail.com',
                    phone: '8 707 123 45 46'
                }
            }
        },
        methods: {
            goBack(){
                // this.$router.push('/filter')
                this.$router.push({ path: '/purchasetype' })
            },
            selectType(selectedType){
                this.currentType = selectedType
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
    .purchase-block-1{
        background-color: #fff;
        margin-top: 3px;
        p{
            margin: 0;
        }
        .purchase-text-1{
            line-height: 25px;
            font-family: 'Roboto', sans-serif;
            font-weight: 500;
            color: $mainColor2;
            padding: 0.5rem 1rem 0.5rem 1rem;
        }
        .purchase-button-1, .purchase-button-2{
            width: 170px;
            height: 40px;
            background: #FFFFFF;
            border: 1px solid $mainColor3;
            box-sizing: border-box;
            color: $mainColor3;
            font-size: 14px;
            line-height: 20px;
            font-family: 'Open Sans', sans-serif;
        }
        .activRed{
            background: $mainColor3;
            color: #fff;
        }
    }
    .btn-wraper{
        display: flex;
        justify-content: center;
    }
    .purchase-button-1{
        border-radius: 4px 0px 0px 4px;
    }
    .purchase-button-2{
        border-radius: 0px 4px 4px 0px;
    }
    .purchase-info,{
        display: flex;
        padding: 0.5rem 1rem 0.5rem 1rem;
    }
    .purchase-your-city{
        display: block;
        padding: 0.5rem 1rem 0.5rem 1rem;
    }
    .purchase-your-city-in{
        display: flex;
        justify-content: space-between;
        button{
            line-height: 20px;
            font-family: 'Roboto', sans-serif;
            color: $mainColor3

        }
    }
    .purchase-your-info{
        padding: 0.5rem 1rem 0.5rem 1rem;
    }
    .purchase-text-2{
        line-height: 20px;
        font-family: 'Open Sans', sans-serif;
        color: rgba(40, 47, 54, 0.5);
        padding-bottom: 0.5rem;
    }
    .purchase-text-3{
        line-height: 20px;
        font-family: 'Open Sans', sans-serif;
        font-weight: 600;
        color: $mainColor2;
        padding-left: 10px;
        padding-bottom: 0.5rem;
        span{
            color: $mainColor3;
        }
    }
    .purchase-text-4{
        line-height: 20px;
        font-family: 'Open Sans', sans-serif;
        color: $mainColor2;
        font-weight: 600;
    }
    .line-grey{
        width: 100%;
        height: 1px;
        background: rgba(40, 47, 54, 0.15);
        margin-left: auto;
        margin-right: auto;
        margin-top: 1rem;
    }
    .purchase-input{
        padding: 0rem 1rem 1rem 1rem;
        input{
            width: 100%;
            height: 40px;
            background: #FFFFFF;
            border: 1px solid rgba(40, 47, 54, 0.15);
            box-sizing: border-box;
            border-radius: 4px;
            padding-left: 1rem;
            outline: none;
        }
    }
    .purchase-input-country{
        padding: 0rem 1rem 0rem 1rem;
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
            font-family: 'Open Sans', sans-serif;
            line-height: 20px;
            color: $mainColor2;
            font-weight: 600;
        }
        .type-2{
            font-family: 'Open Sans', sans-serif;
            line-height: 20px;
            font-weight: normal;
            margin-top: 0.5rem;
            color: rgba(40, 47, 54, 0.5);
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
    .edit-save{
        width: 100%;
        height: 40px;
        background: #FFFFFF;
        border: 1px solid rgba(40, 47, 54, 0.15);
        box-sizing: border-box;
        border-radius: 4px;
        padding-left: 1rem;
        outline: none;
    }
    .d-none{
        display: none;
    }
    .d-with-100{
        width: 100%;
    }
</style>
