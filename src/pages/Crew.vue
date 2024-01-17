<script setup>
import Header from '../components/Header.component.vue'
import { ref, onMounted, onBeforeMount, reactive, onUpdated } from 'vue'

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



/* --------------------------------*/
    //crew
/*----------------------------------*/

import dataJson from '../data.json'

const crewData = ref(dataJson.crew)
const currentImage = ref(dataJson.crew[0].images.png)
let isActive = ref(0)
let imageClass = reactive({ value: '' });


const showImage = (imageUrl, index ) =>{
    
    isActive.value = index
    currentImage.value = imageUrl
    imageClass.value = `image-${index}`

    setTimeout(() => {
        imageClass.value = ''
    }, 1000)


}
onMounted(() => {
    showImage(dataJson.crew[0].images.png, 0)
})





</script>

<template>
    <div
    :class="ancho < 680 ? 'mobile' : ancho > 680 ? 'tablet' : 'desktop' "
    class="homepage overflow-x-hidden h-[100vh] desktopxs:px-[10%] flex flex-col">
        <div>
            <Header />
        </div>
        <div 
        class="text-white ">
            <h1 
            class="text-center font-barlow-condensed text-[1rem] uppercase tabletxs:text-left tabletxs:ml-[4rem]"><span>00</span> Meet your crew</h1>

            <div 
            class="flex flex-wrap tabletxs:flex-nowrap tabletxs:mt-[2rem]">
            <div 
            :class="imageClass"
            class="text-center px-8 order-1 tabletxs:w-[100%]">
                <div class="text-center flex flex-col-reverse mt-10">
                    <h2 
                    class="uppercase font-bellefair text-[.8rem] desktopmd:text-[1rem] opacity-50">{{ crewData[isActive].role }}</h2>
                <h3 
                class="uppercase font-bellefair text-[1.5rem] text-[#D0D6F9] desktopmd:text-[2rem]">{{ crewData[isActive].name }}</h3>
                </div>
                <p class="text-[.8rem] mb-4 mt-4 desktopmd:text-[1rem]">{{ crewData[isActive].bio }}</p>
            </div>

            <div 
                class="w-full flex flex-row tabletxs:flex-col  justify-center items-center gap-4 mt-4 order-3 absolute top-[90%] tabletxs:relative tabletxs:-mt-[0rem] tabletmd:mt-[0rem] tabletxs:-ml-[5rem] tabletmd:-ml-[10rem] desktopmd:flex-row desktopmd:absolute desktopmd:top-[80%]">

                <button  
                v-for="crew in dataJson.crew" :key="crew.index"
                        class="w-4 h-4 opacity-30 bg-[#D0D6F9] hover:opacity-100 rounded-full"
                        :class="{ 'active': isActive == crew.index }"
                        @click="showImage(crew.images.png, crew.index)">
                </button>
           
            </div>
            <div class="order-2 w-[12rem] tabletxs:w-[60%] desktopmd:w-[37%]  mx-auto box-img ">
                <div
                :class="imageClass"
                class="tebletxs:w-[100%] desktopmd:scale-[160%]  desktopmd:mt-8"
                v-if="'img-active'">
                    <img 
                    
                    class="w-full h-full img"
                    v-if="currentImage"
                    :src="currentImage" alt="">
                </div>
                    
                
                
            </div>
            </div>
        </div>
    </div>
</template>

<style scoped>



.value {
    transition: all 1s ease-in-out;
    animation: left 1s ease-out;
}


@keyframes left {
    0%{
        opacity: 0;
        transform: scale(0);
    }
    100%{
        opacity: 1;
        transform: scale(1);
    }
}
.active {
    opacity: 1;
    background-color: #D0D6F9;
}
.mobile{
    min-height: 100vh;
    width: 100%;
    background-image: url(../assets/crew/background-crew-mobile.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    animation:  animated-mobile 50s linear infinite alternate;
}






.tablet{
    min-height: 100vh;
    width: 100%;
    background-image: url(../assets/crew/background-crew-tablet.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    animation:  animated-mobile 50s linear infinite alternate;

}


.desktop{
    min-height: 100vh;
    width: 100%;
    background-image: url(../assets/crew/background-crew-desktop.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    animation: animated-mobile 50s linear infinite alternate;
}



@keyframes animated-mobile {
    0% {
        background-position: 0% 100%;
    }
    100% {
        background-position: 0% 0% ;
    }
}
</style>