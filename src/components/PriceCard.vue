<template>
    <div class="rounded-xl hover:shadow-md  p-4 w-96 " :class="{'bg-[#2563eb]' :active , 'bg-transparent':!active }">
        <p class="font-bold text-6xl text-white mb-4">
            {{ price }}
        </p>
        <p class="text-gray-200 mb-4 font-bold text-xl">
            {{ author }}
        </p>
        <div class="w-64">
            <p class="text-gray-200 mb-10">
                {{ libelle }}
            </p>
        </div>
        <button class="rounded-full bg-white p-4 mb-10 w-full font-bold text-black">
            Démarer maintenant
        </button>
        <slot></slot>

    </div>
</template>
<script>
    export default {
        name : 'PriceCard',
        props:{
            price:String,
            author:String,
            libelle:String ,
            active:Boolean,
            color : String,

        }
    }
</script>