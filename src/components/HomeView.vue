<template>
    <!-- sidebar -->
    <div class="container flex flex-col sm:flex-row flex-1 mx-auto px-3 my-3  rounded-[50px] border-0 sm:border overflow-hidden">
        <div class="flex items-center mr-4 flex-wrap gap-8 w-[100%] sm:gap-0 sm:w-[250px] sm:flex-nowrap sm:flex-col sm:items-start  py-5 px-6 border-0 sm:border-r">

            <div class="sneakers py-3">
                <h1 class="font-bold text-xl pb-3">CATEGORY</h1>
                <div class="flex gap-3 items-center">
                    <input type="radio" class="cursor-pointer" name="profession" id="sneaker" value="sneaker">
                    <label class="text-md font-[500] py-1" for="sneaker">Sneakers</label>
                </div>
                <div class="flex gap-3 items-center">
                    <input type="radio" class="cursor-pointer" name="profession" id="flat" value="flat">
                    <label class="text-md font-[500] py-1" for="flat">Flats</label>
                </div>
                <div class="flex gap-3 items-center">
                    <input type="radio" class="cursor-pointer" name="profession" id="sandle" value="sandle">
                    <label class="text-md font-[500] py-1" for="sandle">Sandals</label>
                </div>
                <div class="flex gap-3 items-center">
                    <input type="radio" class="cursor-pointer" name="profession" id="heel" value="heel">
                    <label class="text-md font-[500] py-1" for="heel">Heels</label>
                </div>
            </div>
            <!-- end sneakers  -->
            <div class="price py-5">
                <h1 class="font-bold text-xl pb-3">Price</h1>
                <div class="flex gap-3 items-center">
                    <input type="radio" class="cursor-pointer" name="profession" id="all" value="all">
                    <label class="text-md font-[500] py-1" for="all">All</label>
                </div>
                <div class="flex gap-3 items-center">
                    <input type="radio" class="cursor-pointer" name="profession" id="medium" value="medium">
                    <label class="text-md font-[500] py-1" for="medium">$50-$100</label>
                </div>
                <div class="flex gap-3 items-center">
                    <input type="radio" class="cursor-pointer" name="profession" id="large" value="large">
                    <label class="text-md font-[500] py-1" for="large">$100-$150</label>
                </div>
                <div class="flex gap-3 items-center">
                    <input type="radio" class="cursor-pointer" name="profession" id="over" value="over">
                    <label class="text-md font-[500] py-1" for="over">$50-$100</label>
                </div>
            </div>
            <!-- end price  -->
            <div class="colors py-5">
                <h1 class="font-bold text-xl pb-3">Colors</h1>
                <div class="flex gap-3 items-center">
                    <input type="radio" class="cursor-pointer " name="profession" id="colorall" value="colorall">
                    <label class="text-md font-[500] py-1" for="colorall">All</label>
                </div>
                <div class="flex gap-3 items-center">
                      <input type="radio" class="cursor-pointer" name="profession" id="blue" value="blue">
                    <label class="text-md font-[500] py-1" for="blue">blue</label>
                </div>
                <div class="flex gap-3 items-center">
                    <input type="radio" class="cursor-pointer" name="profession" id="green" value="green">
                    <label class="text-md font-[500] py-1" for="green">green</label>
                </div>
                <div class="flex gap-3 items-center">
                    <input type="radio" class="cursor-pointer" name="profession" id="yellow" value="yellow">
                    <label class="text-md font-[500] py-1" for="yellow">yellow</label>
                </div>
            </div>
            <!-- end colors  -->
        </div>
        <!-- end sidebar  -->
        <div class="home-section w-[100%]">
        <div class="home-nav flex h-[60px] items-center justify-between  py-1 border-b px-5">
            <input type="search" class="border-2 px-5 py-1 outline-none" placeholder="search">
            <router-link class="flex gap-2 text-gray-500 hover:text-black" to="/cart">
                <i class="bi bi-bag-heart-fill text-2xl"></i>
                <span class="text-black">{{ shop.cartQuantity }}</span>
            </router-link>
        </div>
          <!-- end nav -->
          <div class="recomemded container mx-auto px-4 mt-4">
            <h1 class="font-bold text-xl">Recomended</h1>
            <div class="buttons pt-3 flex gap-5 flex-wrap">
                <button class="btn py-2 px-8 border font-medium text-md" >All products</button>
                <button class="btn py-2 px-8 border font-medium text-md" >Nike</button>
                <button class="btn py-2 px-8 border font-medium text-md" >Adidas</button>
                <button class="btn py-2 px-8 border font-medium text-md" >vans</button>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 justify-items-center container mx-auto px-4 my-8">
        <router-link class="w-70 py-5 px-3 flex flex-col gap-2 border" v-for="item in shop.sale" :to="`/item/${item.id}`">
        <img class="w-[100%] h-[100%]" :src="item.img" alt="Card Photo"
         />

        <div class="flex flex-col ">
            <h2 class="pb-1 pt-5">{{ item.title }}</h2>
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
           <div class="price flex items-center gap-3 py-1">
            <p class="font-bold text-sm line-through">${{ item.prevPrice}}</p>
            <p class="font-bold text-sm ">${{ item.newPrice}}</p>
           </div>
           <div class="shop">
            <router-link class="flex justify-end text-gray-500 hover:text-black" to="/cart">
                <i class="bi bi-bag-heart-fill text-xl"></i>
                <span class="text-black"></span>
            </router-link>
           </div>
        </div>
        </router-link>
    </div>
        </div>
        <!-- end home-section -->
        

    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { RouterLink } from "vue-router"
import { useShopStore } from "../stores/shop";

const shop = useShopStore()



</script>

<style>

</style>