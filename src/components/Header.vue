<template>
    <header>
        <div class="inner">
            <nav>
                <div class="header-block">
                    <div><label for="nav"><img class="icon-logo" src="../assets/images/menu.svg" alt=""></label></div>

                    <h1 class="font-18">Nomstore</h1>
                    <div class="for-input font-12"><input type="text" v-model="search" placeholder="Поиск..."></div>
                    <!--<a href="#" class="logo">Logo</a>-->

                    <input type="checkbox" id="nav" />
                    <img class="icon-logo" src="../assets/images/shopping-cart.svg" alt="">

                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Service</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style lang="scss" scoped>
    @import '../assets/styles/main.scss';

    .icon-logo{
        height: 26px;
        width: 26px;
        margin: 0px 5px 0px 5px;
    }
    .icon-shopping-cart{
        height: 26px;
        width: 26px;
    }
    header {
        width: 100%;
        color: $mainColor1;
        .header-block{
            display: flex;
            height: 4rem;
            align-items: center;
            justify-content: space-around;
            h1{
                font-family: 'Roboto', sans-serif;
            }
        }
    }
    .inner{
        width: 100%;
        background: #FFFFFF;
        box-shadow: 0px 4px 4px rgba(231, 231, 231, 0.25);
    }
    .for-input{
        background: #F4F4F4;
        border-radius: 4px;
        margin: 0px 10px 0px 10px;
    }
    input{
        height: 2rem;
        margin: 0px 10px 0px 10px;
        border-radius: 4px;
        border: none;
        padding-left: 1.4rem;
        background: url(../assets/images/search.png) no-repeat left center;
    }
    input::placeholder{
        font-size: 16px;
    }
    h1 {
        text-align: center;
        margin: 0px 5px 0px 5px;
    }
    [type="checkbox"],
    label {
        display: none;
    }
    @media screen and (max-width: 768px) {
        nav ul {
            display: none;
        }
        label {
            display: block;
            cursor: pointer;
        }
        label:after {
            content: '';
        }
        [type="checkbox"]:checked ~ ul {
            display: block;
            z-index: 9999;
            position: absolute;
            left: 20px;
            top: 40px;
        }
        nav a {
            color: #777;
            text-decoration: none;
        }
        nav ul li {
            display: block;
            float: none;
            width: 100%;
            text-align: left;
            text-indent: 20px;
        }
        nav > ul > li {
            margin-left: 0px;
        }
        nav > ul li ul li {
            display: block;
            float: none;
        }
        nav > ul li ul {
            display: block;
            position: relative;
            width: 100%;
            z-index: 9999;
            float: none;
        }
        h1 {
            font-size: 26px;
        }
    }
</style>
