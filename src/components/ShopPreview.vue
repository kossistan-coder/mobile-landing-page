<template>

    <div class="h-24 w-2/3 m-10">
        <div class="w-full h-1 rounded-full bg-slate-400 hover:bg-orange-500 mb-2">
            
        </div>
        <p class="font-bold text-md">
            {{ title }}
        </p>
        <div class="w-full mt-4">
            <p>
                {{ libelle }}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name : 'ShopPreview',
        props:{
            title : String ,
            libelle : String ,
        }
    }
</script>