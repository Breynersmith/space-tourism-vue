<script setup>
import dataJson from '../data.json'

import Header from '../components/Header.component.vue'
import { ref, onMounted, onBeforeMount, reactive } from 'vue'

let ancho = ref(window.innerWidth);

const handleResize = () => {
    ancho.value = window.innerWidth
}

onMounted(() => {
    window.addEventListener('resize', handleResize)
})

onBeforeMount(() => {
    window.removeEventListener('resize', handleResize);
})

/*
---------------------------------------
Destinations 
-------------------------------------
*/

const dataDestinations = ref(dataJson.destinations);

const currentImage = ref(dataJson.destinations[0].images.png)
let isActive = ref(0)
const imgClass  = reactive({ value: '' })
const showImage = (imageUrl, index) =>{
    isActive.value = index
    currentImage.value = imageUrl
    imgClass.value = `image-${index}`

    setTimeout(() =>{
        imgClass.value = ''
    }, 1000)
}

onMounted(() => {
    showImage(dataJson.destinations[0].images.png, 0)
})
</script>

<template>

        <div 
    :class="ancho < 600 ? 'mobile' : ancho < 900 ? 'tablet' : 'desktop'"
    class=" h-[100%] desktopxs:px-[10%]  text-white">
    <div class="h-[10%]">
        <Header/>
    </div>
        <main class="w-[100%] h-[90%]   px-[10%] transition overflow-hidden">
            <h1 class="text-center font-barlow-condensed text-[1rem] uppercase -mt-0 tabletxs:mt-[2rem] tabletxs:text-left tabletxs:mb-[1rem]"><span>01</span> Pick your destination</h1>
           <div class="tabletxs:flex">
            <div 
            :class="imgClass"
            class="w-[50%] mt-4 mx-auto mb-16 ">
                <img 
                class="tabletxs:scale-75"
                v-if="currentImage"
                :src="currentImage" >
            </div>

            <div class="tabletxs:w-[50%] mt-[6rem]">
            <ul 
            
            class="flex justify-center items-center gap-6 font-barlow-condensed text-[1.1rem] -mt-16">
                <li v-for="destino in dataJson.destinations" :key="destino.index">
                    <button 
                    :class="{ 'active': isActive == destino.index }"
                    @click.toggle="showImage(destino.images.png, destino.index)">{{ destino.name }}</button>
                </li>
            </ul>
            <article>
                <h2 
                :class="imgClass"
                class="font-bellefair text-[3rem] text-center  uppercase text-[#D0D6F9]">{{ dataDestinations[isActive].name }}
            </h2>

                <p 
                :class="imgClass"
                class="text-center text-[.8rem] -mt-4">
                    {{ dataDestinations[isActive].description }}</p>
                <hr class="mt-6 mb-12 opacity-40">
                <div class="flex flex-col text-center">
                  <div>
                    <h3 class="text-[.6rem] uppercase">
                      Avg. distance
                    </h3>
                    <h2 
                    :class="imgClass"
                    class="text-[1.3rem] uppercase font-bellefair">{{dataDestinations[isActive].distance}}</h2>
                  </div>
                  <div>
                    <h3 class="text-[.6rem] uppercase">
                        Est. travel time
                    </h3>
                    <h2 
                    :class="imgClass"
                    class="text-[1.3rem] uppercase font-bellefair">
                        {{dataDestinations[isActive].travel}}

                    </h2>
                  </div>
                </div>
                
              </article>
            </div>
           </div>
           
    
            
          </main>
    </div>
</template>

<style scoped>
.mobile{
    min-height: 100vh;
    width: 100%;
    background-image: url(../assets/destination/fondo.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    animation: girar 20s linear infinite alternate;

}

@keyframes girar {
    0% {
        background-position: 10% 10% ;
        }
    
        100% {
 
        background-position: 50% 50%;
        }
}

.tablet{
    min-height: 100vh;
    width: 100%;
    background-image: url(../assets/destination/background-destination-tablet.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.desktop{
    min-height: 100vh;
    width: 100%;
    background-image: url(../assets/destination/background-destination-desktop.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.active {
    border-bottom: 2px solid lightgray;
}

.value {
    transition: all 1s ease-in-out;
    animation: moveL 1s ease-out;}

@keyframes moveL {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0);
    }
}
.inactive {
    border-bottom: 0px;
}

.box-img img {
    width: 100%
}

@keyframes rotacion {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.transition {
    animation: opacity 1s ease-out;
}


@keyframes opacity {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}



</style>