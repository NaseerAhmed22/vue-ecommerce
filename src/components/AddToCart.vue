<template>
    <div class="flex flex-col items-center justify-center mt-[120px] mb-5 md:flex-wrap lg:flex-nowrap md:flex-row px-3 gap-20">
    <img class="w-[100%] sm:w-[50%]" :src="item.img" alt="image" />

    <div class="border-0 sm:border flex flex-col items-center p-5 ">
        <h2 class="text-2xl font-bold py-2">{{ item.title }}</h2>
        <div class="flex gap-3 py-1">
                <div class="flex items-center">
                    <Icon icon="ri:star-fill" class="text-yellow-500"/>
                    <Icon icon="ri:star-fill" class="text-yellow-500"/>
                    <Icon icon="ri:star-fill" class="text-yellow-500"/>
                    <Icon icon="ri:star-fill" class="text-yellow-500"/>
                </div>
                <div class="review">
                    <p>{{ item.reviews }}</p>
                </div>
            </div>
            <div class="price flex items-center gap-8 py-3">
            <p class="font-bold text-2xl line-through">${{ item.prevPrice}}</p>
            <p class="font-bold text-2xl ">${{ item.newPrice}}</p>
            <router-link class="flex justify-end text-gray-500 hover:text-black" to="/cart">
                <i class="bi bi-bag-heart-fill text-xl"></i>
            </router-link>
           </div>
      <button
        class="flex justify-center w-[250px] bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-500 text-white rounded-md mt-3
         p-3 w-50"
        @click="addToCard">
        <div>Add to cart</div>
      </button>
    </div>
  </div>
</template>
  
<script setup>
import { Icon } from '@iconify/vue'
import {useRoute} from 'vue-router'
import { useShopStore } from '../stores/shop';

const route = useRoute()
const shop = useShopStore()

const item = shop.sale.find((item) => item.id === route.params.id)

const addToCard = () => {
shop.addToCart(item)
 }
 </script>
<style>
    
</style>