<template>
  <div id="app">
    <!--<ProductList></ProductList>-->
    <router-view/>
  </div>
</template>

<script>
  import ProductList from './components/ProductList'

export default {
    name: 'app',
    // components:{
    //   ProductList
    // }
}
</script>

<style>

</style>
