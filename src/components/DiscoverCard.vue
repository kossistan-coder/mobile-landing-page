<template>

    <div>
        <div class="shadow-lg w-96 m-2 p-8 rounded-md">
            <div class="rounded-full  {{ color }}">
                <slot></slot>
            </div>
            <div class="mt-5 ">
                <p class="font-bold text-2xl">{{ title }}</p>
                <p class="text-gray-500">
                    {{ text }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'DiscoverCard',

    props:{
        icon : String ,
        title : String,
        text:String ,
        color : String ,
    }
}
</script>