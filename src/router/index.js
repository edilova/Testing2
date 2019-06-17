import Vue from 'vue'
import Router from 'vue-router'
import FilterList from '@/components/FilterList'
import ProductList from '@/components/ProductList'
import Product from '@/components/Product'
import PurchaseType from '@/components/PurchaseType'
import Purchase from '@/components/Purchase'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'ProductList',
            component: ProductList
        },
        {
            path: '/filter',
            name: 'FilterList',
            component: FilterList
        },
        {
            path: '/product',
            name: 'Product',
            component: Product
        },
        {
            path: '/purchasetype',
            name: 'PurchaseType',
            component: PurchaseType
        },
        {
            path: '/purchase',
            name: 'Purchase',
            component: Purchase
        }
    ]
})
