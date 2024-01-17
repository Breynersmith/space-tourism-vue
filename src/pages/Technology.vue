<script setup>
    import Header from '../components/Header.component.vue'
    import {
        ref,
        onMounted,
        onBeforeMount,
        reactive,
        onUpdated
    } from 'vue'
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
    //technology
    /*----------------------------------*/
    import dataJson from '../data.json'
    const dataTech = ref(dataJson.technology)
    const currentImage = ref(dataJson.technology[0].images.url)
    let isActive = ref(0)
    let imageClass = reactive({
        value: ''
    });
    const showImage = (imageUrl, index) => {
        isActive.value = index
        currentImage.value = imageUrl
        imageClass.value = `image-${index}`
        setTimeout(() => {
            imageClass.value = ''
        }, 1000)


    }
    onMounted(() => {
        showImage(dataJson.technology[0].images.url, 0)
    })




    //funcion para cambiar el estado del boton activo
    
</script>

<template>
    <div :class="ancho < 600 ? 'mobile' : ancho < 900 ? 'tablet' : 'desktop'"
        class="homepage  overflow-hidden h-[100vh] desktopxs:px-[10%] flex flex-col">
        <div>
            <Header />
        </div>
        <div class="text-white flex flex-col  overflow-hidden">
            <h1 class="text-center font-barlow-condensed text-[1rem] uppercase tabletxs:text-left  tabletxs:ml-[5rem]"><span>03</span> Space launch 101</h1>

            <div class="flex flex-col tabletxs:flex-row tabletxs:mt-[5rem] desktopmd:flex-wrap">
                
                
                <div 
                :class="imageClass"
                class="flex  w-[100%] h-[25%] tabletxs:w-[12rem] desktopmd:w-[15rem] desktopmd:h-[15rem] tabletxs:h-[12rem]  mx-auto box-img mt-8 ] tabletxs:order-2 tabletxs:rounded-full tabletxs:overflow-hidden">
                    <img  class="w-full img object-cover opacity-85  tabletxs:w-[100%]" v-if="currentImage" :src="currentImage"
                        :alt="dataTech[isActive].name">
                 </div>

                <div class="flex order-1 flex-row tabletxs:flex-col tabletxs:w-[10%] justify-center items-center gap-4 mt-2 tabletxs:ml-[1rem] desktopmd:w-[100%] desktopmd:flex-row desktopmd:order-2 desktopmd:mt-[3rem]">

                    <button 
                    class="w-9 h-9  border-2 border-[#D0D6F9] hover:opacity-100 rounded-full text-xs font-barellow-condensed font-bold"
                        @click="showImage(dataTech[0].images.url, dataTech[0].index)">
                        1
                    </button>
                    <button 
                    class="w-9 h-9  border-2 border-[#D0D6F9] hover:opacity-100 rounded-full text-xs font-barellow-condensed font-bold"
                        @click="showImage(dataTech[1].images.url, dataTech[1].index)">
                        2
                    </button>
                    <button 
                    class="w-9 h-9  border-2 border-[#D0D6F9] hover:opacity-100 rounded-full text-xs font-barellow-condensed font-bold"
                        @click="showImage(dataTech[2].images.url, dataTech[2].index)">
                        3
                    </button>

                </div>

                <div 
                :class="imageClass"
                class="order-2 desktopmd:order-1 tabletxs:w-[50%]  text-center mt-6">

                    <p class="text-[.8rem]">The terminology...</p>

                    <h1 class="uppercase font-bellefair text-[1.4rem] desktopmd:text-[2.5rem] text-[#D0D6F9] text-center">{{ dataTech[isActive].name }}
                    </h1>

                    <p :class="imageClass" class="order-3 text-[.8rem] desktopmd:text-[1rem] mb-4 mt-4 px-[8%]">{{ dataTech[isActive].description }}
                    </p>
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
        0% {
            opacity: 0;
            transform: translatex(-100%);
        }

        100% {
            opacity: 1;
            transform: translateX( 0);
        }
    }

    .boton-activo {
        background-color: #1619259c;
    }

    .boton-inactivo {
        background-color: #D0D6F9;
    }
    .active {
        opacity: 1;
        background-color: #D0D6F9;
    }

    .mobile {
        min-height: 100vh;
        width: 100%;
        background-image: url(../assets/technology/background-technology-mobile.jpg);
        background-position: center;
        background-size: cover;
        transition: background-size 5s ease-in-out;
        animation: girar 15s linear infinite; 
    }
    
    @keyframes girar {
        0% {
           
        background-repeat: no-repeat;
        background-position: 0% 0%;
        }

        50% {
            background-position: 80% 50%;
        }
    
        100% {
 
        background-position: 100% 100%;
        }
    }

    .tablet {
        min-height: 100vh;
        width: 100%;
        background-image: url(../assets/technology/background-technology-tablet.jpg);
        background-position: center;
        background-size: cover;
        transition: background-size 5s ease-in-out;
        animation: girar 15s linear infinite alternate;
    }

    .desktop {
        min-height: 100vh;
        width: 100%;
        background-image: url(../assets/technology/background-technology-desktop.jpg);
        background-position: center;
        background-size: cover;
        transition: background-size 5s ease-out;
        animation: girar 15s ease-in-out infinite alternate; 
    }
</style>