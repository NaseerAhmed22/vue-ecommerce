<template>
  <div>
    <!-- <h2 class="text-2xl mx-5 mt-3">Shopping Cart</h2> -->

    <div v-if="shop.cartQuantity > 0" class="flex flex-col lg:flex-row lg:gap-6 container mx-auto mt-12 px-5">
      <div class="divide-y divide-gray-300 lg:w-2/3">
        <div v-for="item in shop.cart" class="py-6 flex gap-4">
          
          <div class="flex justify-between w-full items-center  flex-wrap xl:nowrap lg:nowrap md:nowrap :sm:no-wrap">
            <img class="w-32 bg-stone-200 rounded-md" :src="item.img" />
              <div class="price">
                <p class="font-bold text-md ">${{ item.newPrice }}</p>
              </div>
            <div>
              <select
                class="bg-white border border-gray-300 rounded px-2 py-1"
                v-model.number="item.quantity"
              >
                <option v-for="i in item.quantity > 100 ? item.quantity : 100">
                  {{ i }}
                </option>
              </select>
            </div>
            <button class="bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-500 py-1 px-5 rounded text-white font-medium" 
            @click="shop.removeItem(item)">Delete</button>

          </div>
        </div>
      </div>

      <div class="bg-gray-100 rounded-md p-6 lg:w-1/3  flex flex-col gap-6">
        <h3 class="text-lg">Order summary</h3>

        <div class="divide-y divide-gray-300">
          <div class="py-3 flex justify-between">
            <p>Tax</p>
            <p>0.0$</p>
          </div>

          <div class="py-3 flex justify-between">
            <p>Subtotal</p>
           <p> ${{ shop.cartSubTotal }}</p>
          </div>
          <div class="py-3 flex justify-between font-bold">
            <h1>Total</h1>
            <p>${{ shop.cartSubTotal }}</p>
          </div>
        </div>
        <button
          class="flex justify-center bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-500 text-white rounded-md p-3 w-full">
          Checkout
        </button>
      </div>
    </div>

    <div v-else class="flex justify-center items-center mt-5">
      <h1 class="font-bold text-2xl">Your Cart Is Empty!</h1>
    </div>
  </div>
</template>
<script setup>
import { useShopStore } from "../stores/shop";

const shop = useShopStore();
</script>
<style></style>