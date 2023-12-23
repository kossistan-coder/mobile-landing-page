<template>
    <div>
        <div class="flex gap-x-2 w-72">
                <div class="bg-gradient-to-r  from-orange-500 to-red-400 h-15 w-2 rounded-full">
                 
                </div>
                <div>
                  <div class="flex flex-col  gap-y-2 justify-items-center justify-center">
                    <span class="font-bold text-3xl">
                    {{ title }}
                  </span>
                  <span>
                   {{ libelle }}
                  </span>
                  </div>
                </div>
              </div>
    </div>
</template>
<script>
    export default {
        name : 'StatisCard',
        props :{
            title : String ,
            libelle : String ,
        }
    }
</script>