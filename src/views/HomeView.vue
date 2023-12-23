<script setup>

</script>


<template>
  <div>
     <header class="flex items-center justify-between shadow-sm ">
   <div class="mx-4">
     <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="">
   </div>
   <div class="flex gap-x-10">
     <a href="" class=" text-black font-bold">Home</a>
     <a href="" class=" text-black font-bold">Product</a>
     <a href="" class=" text-black font-bold">Feature</a>
     <a href="" class=" text-black font-bold">Marketplace</a>
     <a href="" class=" text-black font-bold">Company</a>
   </div>
   <div>
     <button class="shadow-md hover:shadow-lg bg-[#f77555] px-2 py-2 mx-2 my-2 rounded-full text-white w-24">
       Log in 
     </button>
   </div>

 </header>
 <nav class="pt-40 bg-gradient-to-r  pb-50">

   <div class="flex flex-row  justify-center justify-items-center items-start ">
     <div class=" w-1/3  ">  
       <div>
         <!-- <div class="border-2 mb-5 border-gray-50 p-1 shadow-md rounded-full w-3/5">
           Regarder une presentation 
         </div> -->
       </div>
       <h1 class="font-bold text-6xl mb-5 tracking-wide " >
         La plateforme de commerce internationale
       </h1>
       <div>
         <p class="text-xl">
           Créez votre entreprise avec Shopify pour vendre en ligne, hors ligne et partout où se trouvent vos clients.
         </p>
       </div>
       <div class="mt-10">
         
         <div class="flex border-2 border-gray-50 pt-1  pb-1 pl-4 rounded-full w-full shadow-lg bg-white">
             <input type="text" name="" id="" placeholder="Votre adresse email" class="border-none hover:border-none w-full focus:border-none outline-none bg-transparent focus:outline-none ring-0 focus-within:ring-0">
             <button class="p-4 rounded-full bg-black text-white w-2/3 mr-2">
               Démarer un essai gratuit
             </button>
         </div>
       </div>
       <div class="mt-5">
         <p class="text-xl">
           Essayez Shopify gratuitement pendant 3 jours, aucune carte de crédit requise. En saisissant votre e-mail, vous acceptez de recevoir des e-mails de marketing de la part de Shopify.
         </p>
       </div>
     </div>
     <div >
       <img src="../assets/images/back.png" alt=""  class="w-full  ">
     </div>
   </div>
   <div class="absolute inset-x-0 top-[calc(100%-10rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
      <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#f77555] to-[#9089fc] opacity-50 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
    </div>
  </nav>

  <article class="mt-20">
   <section>
    <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
      <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#f77555] to-[#9089fc] opacity-50 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
    </div>
     <div class="flex flex-row gap-10 justify-center">
       <div>
         <img src="../assets/images/back2.jpg" alt="" class="w-full">
       </div>

       <div class="w-1/3 ">
         <p class=" text-4xl mb-5 tracking-wide">

             Découvrez pourquoi des millions d’entrepreneurs choisissent Shopify pour lancer et développer leur entreprise —
         </p>
         <div class="pt-10 bg-gradient-to-r from-white  to-red-400 pl-10 pb-5">
           <p class="font-bold text-3xl mb-5">
             d’une petite structure, jusqu’au statut de marque mondiale
           </p>
         </div>
         <div class="mt-10">
          
           <div class="flex justify-between">
            <StatisticCard title="170+" libelle="de marchands dans le monde"></StatisticCard>
            <StatisticCard title="444 Md $US" libelle="d’activité économique mondiale"></StatisticCard>
           </div>

           <div class="flex justify-between pt-20">
            <StatisticCard title="10%" libelle="du e-commerce total des États-Unis"></StatisticCard>
            <StatisticCard title="Des millions" libelle="de marchands dans le monde"></StatisticCard>
           </div>
          
         </div>
       </div>
     </div>
   </section>
   
  </article>

  <article class="mt-40 p-4">
    <section>
      <div class="absolute inset-x-0 top-[calc(100%-10rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%+30rem)]" aria-hidden="true">
      <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#f77555] to-[#9089fc] opacity-50 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
    </div>
      <div class="ml-28">
        <p class="font-bold">
          DECOUVREZ LA PLUS  GRANDE COMMUNAUTE AXEE  SUR LE COMMERCE
        </p>
      </div>
        <div class="flex justify-center gap-x-1">
          <DiscoverCard title="Plus" text="Une solution de commerce pour  les marques digitales en plein  essor" > 
          <img src="../assets/images/1card-icon.svg" alt="">
        </DiscoverCard>

        <DiscoverCard title="Plus" text="Une solution de commerce pour  les marques digitales en plein  essor" > 
          <img src="../assets/images/2card-icon.svg" alt="">
        </DiscoverCard>

        <DiscoverCard title="Partenaire" text="Proposer plusieurs expertises aux marchands " > 
          <img src="../assets/images/3card-icon.svg" alt="">
        </DiscoverCard>

        <DiscoverCard title="Developpeurs" text="Faconner l'avenir de l'ecommerce avec nos solutions innovantes" > 
          <img src="../assets/images/4card-icon.svg" alt="">
        </DiscoverCard>
        </div>
    
    </section>
  </article>
  <div class="absolute inset-x-0 top-[calc(100%+10rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%+50rem)]" aria-hidden="true">
      <div class="relative right-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#f77555] to-[#9089fc] opacity-50 sm:right-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
    </div>
  <article class="mt-40 p-4">
    <div class="ml-28 mb-2">
      <p class="font-bold">
          CONCEVEZ VOTRE BOUTIQUE EN LIGNE
      </p>
      <p class="font-bold text-4xl">
          Créez votre boutique à votre facon
      </p>
    </div>
    <div class="mt-10 flex justify-center ">
      <img src="../assets/images/preview.png" alt="" class="rounded-lg w-5/6">
    </div>

    <div class="flex flex-row  justify-center justify-items-center gap-x-1 mt-4 mx-28">
      <ShopPreview
        title="Créez une boutique en ligne"
        libelle="
Utilisez notre éditeur de boutique avec fonction glisser-déposer pour donner vie à vos idées. Aucune expérience en codage n’est requise, juste de bonnes idées"
      />

      <ShopPreview
        title="Créez une boutique en ligne"
        libelle="
Utilisez notre éditeur de boutique avec fonction glisser-déposer pour donner vie à vos idées. Aucune expérience en codage n’est requise, juste de bonnes idées"
      />


      <ShopPreview
        title="Créez une boutique en ligne"
        libelle="
Utilisez notre éditeur de boutique avec fonction glisser-déposer pour donner vie à vos idées. Aucune expérience en codage n’est requise, juste de bonnes idées"
      />
    </div>
  </article>

  <article class="mt-24">
    <div class="ml-28 w-1/3">
      <p class="text-6xl font-bold">
        Découvrez nos astuces pour gérer une entreprise en ligne
      </p>
    </div>

    <div>
      <div class="flex flex-row  justify-center justify-items-center mt-24 gap-x-8">
        <ProductCard
         
          libelle="Créer sa marque de vêtements : le guide en 10 étapes"
        >
        <img src="../assets/images/back1.png" alt="" class="w-full h-72 mb-10 rounded-tl-md rounded-tr-md">
        </ProductCard>


        <ProductCard
         
          libelle="Créer sa marque de vêtements : le guide en 10 étapes"
        >
        <img src="../assets/images/product1.jpg" alt="" class="w-full h-72 mb-10 rounded-tl-md rounded-tr-md">
        </ProductCard>


        <ProductCard
         
          libelle="Créer sa marque de vêtements : le guide en 10 étapes"
        >
        <img src="../assets/images/back2.jpg" alt="" class="w-full h-72 mb-10 rounded-tl-md rounded-tr-md">
        </ProductCard>

        <ProductCard
         
          libelle="Créer sa marque de vêtements : le guide en 10 étapes"
        >
        <img src="../assets/images/image-2.webp" alt="" class="w-full h-72 mb-10 rounded-tl-md rounded-tr-md">
        </ProductCard>
     
    </div>
    </div>
  </article>
  <div class="absolute inset-x-0 top-[calc(50%+200rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%+200rem)]" aria-hidden="true">
      <div class="relative right-[calc(5%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#f77555] to-[#9089fc] opacity-50 sm:right-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
    </div>
  <article class="mt-24">

    <div class="flex flex-row  justify-center gap-x-4 justify-items-center">
      <div>
        <img src="../assets/images/explore.avif" alt="" >
      </div>
      <div>
        <div class="w-[650px]">
          <p class="mb-10">POINT DE VENTE</p>
          <p class="text-6xl font-bold">Un point de vente flexible pour propulser votre magasin</p>
          <p class="mt-10 text-lg">Un système PDV permettant aux clients d’effectuer leurs achats de façon flexible, en ligne ou en magasin.</p>
          <br>
          <button class="shadow-md hover:shadow-lg bg-black px-4 py-4 mx-2 my-2 rounded-full text-white min-w-24">
        Payer maintenant
     </button>
        </div>
      </div>
    </div>
  </article>

  <article class="mt-24">

<div class="grid grid-col-3 grid-flow-col  justify-center gap-x-4 justify-items-center">
 
  <div>
    <div class="w-[800px]">
      <p class="mb-10">UN PAIEMENT RAPIDE ET FIABLE</p>
      <p class="text-6xl font-bold">Le meilleur processus de paiement avec conversion intégrée au monde</p>
      <p class="mt-10 text-lg">Optimisez votre activité avec Shop Pay, la solution de paiement en un clic qui augmente le taux de conversion.</p>
      <br>
      <button class="shadow-md hover:shadow-lg bg-black px-4 py-4 mx-2 my-2 rounded-full text-white min-w-24">
          Payer maintenant
      </button>
    </div>
  </div>

  <div class="bg-gray-100 p-10 w-[600px] h-[500px] rounded-lg">
    <img src="../assets/images/greet.webp" alt="" class="w-[600px] rounded-lg absolute rotate-6 origin-bottom">
  </div>
</div>
</article>

<article class="mt-96">
  <div class="bg-[#0f172a] pt-24 pb-24">
  <div class="mb-10">
    <p class="text-6xl font-bold text-white text-center mb-2">Simple pricing, for everyone.</p>
    <p class="text-center text-white">It doesn’t matter what size your business is, our software won’t work well for you.</p>
  </div>
    <div class="grid grid-col-3 grid-flow-col  justify-center gap-x-4 justify-items-center">
    <PriceCard price="$9" libelle="Good for anyone who is self-employed and just getting started." author="Small business" :active=false >
      <div class="flex gap-x-5 mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 text-white h-6">
             <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <span class="text-white">Track up to 50 expenses per month</span>
        </div>

        <div class="flex gap-x-5 mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 text-white h-6">
             <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <span class="text-white">Connect up to 5 bank accounts</span>
        </div>
        <div class="flex gap-x-5 mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 text-white h-6">
             <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <span class="text-white">Send 25 quotes and invoices</span>
        </div>
    </PriceCard>
      <PriceCard price="$15" libelle="Perfect for small / medium sized businesses." author="Small business" :active=true color="bg-[#2563eb]">
        <div class="flex gap-x-5 mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 text-white h-6">
             <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <span class="text-white">Track up to 50 expenses per month</span>
        </div>

        <div class="flex gap-x-5 mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 text-white h-6">
             <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <span class="text-white">Connect up to 5 bank accounts</span>
        </div>
        <div class="flex gap-x-5 mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 text-white h-6">
             <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <span class="text-white">Send 25 quotes and invoices</span>
        </div>

        <div class="flex gap-x-5 mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 text-white h-6">
             <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <span class="text-white">Automated payroll support</span>
        </div>

        <div class="flex gap-x-5 mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 text-white h-6">
             <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <span class="text-white">Export up to 12 reports</span>
        </div>


        <div class="flex gap-x-5 mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 text-white h-6">
             <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <span class="text-white">Bulk reconcile transactions</span>
        </div>

        <div class="flex gap-x-5 mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 text-white h-6">
             <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <span class="text-white">Track in multiple currencies</span>
        </div>
      </PriceCard>

      <PriceCard price="$9" libelle="Good for anyone who is self-employed and just getting started." author="Small business" :active=false>
      <div class="flex gap-x-5 mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 text-white h-6">
             <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <span class="text-white">Track up to 50 expenses per month</span>
        </div>

        <div class="flex gap-x-5 mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 text-white h-6">
             <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <span class="text-white">Connect up to 5 bank accounts</span>
        </div>
        <div class="flex gap-x-5 mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 text-white h-6">
             <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <span class="text-white">Send 25 quotes and invoices</span>
        </div>
    </PriceCard>
    </div>
  </div>
</article>
<article class="mt-10">
  <div class="flex justify-center  justify-items-center">
 
 <div>
   <div class="w-[800px]">
     <p class="text-5xl text-center font-bold">Le meilleur processus de paiement avec conversion intégrée au monde</p>
     <p class="mt-10 text-center text-lg mb-10">Optimisez votre activité avec Shop Pay, la solution de paiement en un clic qui augmente le taux de conversion.</p>

   </div>
 </div>


</div>

<div class="flex justify-center">
   <img src="../assets/images/dark.png" alt="" class=" w-3/4 rounded-lg origin-bottom">
 </div>
</article>
 </div>
</template>

<script>

import StatisticCard from '../components/StatisticCard.vue'
import DiscoverCard from '../components/DiscoverCard.vue'
import  ShopPreview from '../components/ShopPreview.vue'
import ProductCard from '@/components/ProductCard.vue'
import PriceCard from '@/components/PriceCard.vue'

  export default {
    name: 'HomeView',

    components:{
      StatisticCard,
      DiscoverCard,
      ShopPreview,
      ProductCard,
      PriceCard,
    }
  }
</script>
