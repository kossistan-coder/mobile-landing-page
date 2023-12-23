<template>

    <div>
        <div class="shadow-lg rounded-md pb-2 w-96 ">
          <div>
            <slot></slot>
          </div>
           <div class="p-4 font-bold text-2xl pb-10">
             <p>{{ libelle }}</p>
           </div>

           <div class="p-4 font-bold">
                <p>Lire la suite</p>
           </div>
        </div>
        
    </div>
</template>
<script>
    export default {
        name :'ProductCard',

        props :{
            image : String,
            libelle : String ,
        }
    }
</script>