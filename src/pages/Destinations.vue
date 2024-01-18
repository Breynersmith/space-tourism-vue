<script setup>
    import dataJson from '../data.json'
    import Header from '../components/Header.component.vue'
    import {
        ref,
        onMounted,
        onBeforeMount,
        reactive
    } from 'vue'
    let ancho = ref(window.innerWidth);
    const handleResize = () => {
        ancho.value = window.innerWidth
    }
    onMounted(() => {
        window.addEventListener('resize', handleResize)
        isMoon.value = true
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
    let isActive = ref(false)
    //variable para cambiar la imagen e informacion de destinos
    
    let name = ref(dataDestinations.value[0].name)
    let description = ref(dataDestinations.value[0].description)
    let distance = ref(dataDestinations.value[0].distance)
    let travel = ref(dataDestinations.value[0].travel)

    let miclase = ref('')
    let isMoon = ref(false)
    let isEuropa = ref(false)
    let isTitan = ref(false)
    let isMars = ref(false)
    const showMoon = () => {
        name = dataDestinations.value[0].name
        description = dataDestinations.value[0].description
        distance = dataDestinations.value[0].distance
        travel = dataDestinations.value[0].travel
        miclase.value = 'name-animated-one'
        isMoon.value = true;
        isEuropa.value = false;
        isTitan.value = false;
        isMars.value = false;
    }
    const showEuropa = () => {
        name = dataDestinations.value[1].name
        description = dataDestinations.value[1].description
        distance = dataDestinations.value[1].distance
        travel = dataDestinations.value[1].travel
        miclase.value = 'name-animated-two'
        isMoon.value = false;
        isEuropa.value = true;
        isTitan.value = false;
        isMars.value = false;
    }
    const showTitan = () => {
        name = dataDestinations.value[2].name
        description = dataDestinations.value[2].description
        distance = dataDestinations.value[2].distance
        travel = dataDestinations.value[2].travel
        miclase.value = 'name-animated-three'
        isMoon.value = false;
        isEuropa.value = false;
        isTitan.value = true;
        isMars.value = false;
    }
    const showMars = () => {
        description = dataDestinations.value[3].description
        distance = dataDestinations.value[3].distance
        travel = dataDestinations.value[3].travel
        name = dataDestinations.value[3].name
        miclase.value = 'name-animated'
        
        isMoon.value = false;
        isEuropa.value = false;
        isTitan.value = false;
        isMars.value = true;
    }
    onMounted(() => {
        //showImage(dataJson.destinations[0].images.png, 0)
    })
    // 
</script>

<template>

    <div :class="ancho < 600 ? 'mobile' : ancho < 900 ? 'tablet' : 'desktop'"
        class=" h-[100%] desktopxs:px-[10%]  text-white">
        <div class="h-[10%]">
            <Header />
        </div>
        <transition>
            <main class="w-[100%] h-[90%]   px-[10%] transition overflow-hidden">
                <h1
                    class="text-center font-barlow-condensed text-[1rem] uppercase -mt-0 tabletxs:mt-[2rem] tabletxs:text-left tabletxs:mb-[1rem]">
                    <span>01</span> Pick your destination</h1>
                <div class="tabletxs:flex">
                    <div :class="{ 'isMoon': isMoon, 'isEuropa': isEuropa, 'isTitan': isTitan, 'isMars': isMars }"
                        class="w-[18rem] h-[18rem] mt-4 mx-auto mb-16  rounded-full">
    
                    </div>
    
                    <div>
    
                    </div>
    
                    <div class="tabletxs:w-[50%] desktopmd:w-[40%] mt-[6rem]">
                        <ul class="flex justify-center items-center gap-6 font-barlow-condensed text-[1.1rem] -mt-16">
                            <li class="flex flex-row gap-4">
                                <button :class="isMoon ? 'active' : ''" @click="showMoon">Moon
                                </button>
    
                                <button :class="isEuropa ? 'active' : ''" @click="showEuropa">Europa</button>
    
                                <button :class="isTitan ? 'active' : ''" @click="showTitan">Titan</button>
                                <button :class="isMars ? 'active' : ''" @click="showMars">Mars</button>
                            </li>
                        </ul>
                        <article>
                            <h2  
                            :class="{ 'name-animated-one': isMoon, 'name-animated-two': isEuropa, 'name-animated-three': isTitan, 'name-animated': isMars }"
                            class=" font-bellefair text-[3rem] text-center  uppercase text-[#D0D6F9]">
                                {{name}}
                            </h2>
                            
    
                            <p  
                            :class="{ 'name-animated-one': isMoon, 'name-animated-two': isEuropa, 'name-animated-three': isTitan, 'name-animated': isMars }"
                            class="text-center text-[.8rem] -mt-4 transition-opacity">
                                {{ description }}</p>
                            <hr class="mt-6 mb-12 opacity-40">
                            <div class="flex flex-col text-center">
                                <div>
                                    <h3 class="text-[.6rem] uppercase">
                                        Avg. distance
                                    </h3>
                                    <h2  
                                    :class="{ 'name-animated-one': isMoon, 'name-animated-two': isEuropa, 'name-animated-three': isTitan, 'name-animated': isMars }"
                                    class="text-[1.3rem] uppercase font-bellefair">
                                        {{ distance}} </h2>
                                </div>
                                <div>
                                    <h3 class="text-[.6rem] uppercase">
                                        Est. travel time
                                    </h3>
                                    <h2 
                                    :class="{ 'name-animated-one': isMoon, 'name-animated-two': isEuropa, 'name-animated-three': isTitan, 'name-animated': isMars }"
                                    class="text-[1.3rem] uppercase font-bellefair">
                                        {{ travel }}
    
                                    </h2>
                                </div>
                            </div>
    
                        </article>
                    </div>
                </div>
    
            </main>
        </transition>
        
    </div>
</template>

<style scoped>
    .mobile {
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
            background-position: 10% 10%;
        }

        100% {

            background-position: 50% 50%;
        }
    }

    .tablet {
        min-height: 100vh;
        width: 100%;
        background-image: url(../assets/destination/background-destination-tablet.jpg);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        animation: girar 20s linear infinite alternate;
    }

    .desktop {
        min-height: 100vh;
        width: 100%;
        background-image: url(../assets/destination/background-destination-desktop.jpg);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        animation: girar 20s linear infinite alternate;
    }

    .active {
        border-bottom: 2px solid lightgray;
    }

    .value {
        transition: all 1s ease-in-out;
        animation: moveL 1s ease-out;
    }

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

    .isMoon {
        border-radius: 50%;
        background-image: url(../assets/destination/image-moon.png);
        background-position: center;
        opacity: 0.8;
        transform: rotate(0deg);
        transition: all .7s ease-in-out;
        box-shadow: 0px 0px 15px 0px #d0d6f96f;
    }

    .isEuropa {
        border-radius: 50%;
        background-image: url(../assets/destination/image-europa.png);
        background-position: center;
        transform: rotate(90deg);
        opacity: 0.8;
        transition: all .7s ease-in-out;
        box-shadow: 0px 0px 15px 0px #8c52185d;
    }

    .isTitan {
        border-radius: 50%;
        background-image: url(../assets/destination/image-titan.png);
        background-position: center;
        transform: rotate(180deg);
        opacity: 0.8;
        transition: all .7s ease-in-out;
        box-shadow: 0px 0px 15px 0px #f9e7d07c;
    }

    .isMars {
        border-radius: 50%;
        background-image: url(../assets/destination/image-mars.png);
        background-position: center;
        transform: rotate(360deg);
        opacity: 0.8;
        transition: all .7s ease-in-out;
        box-shadow: 0px 0px 15px 0px #a0896c7c;
    }

    .name-animated {
        opacity: 0.8;
        transform: scaleX(1.2);
        transition: transform 1s ease-in-out;
        animation: name-animated 1s ease-in-out;
    }

    @keyframes name-animated {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    .name-animated-one {
        opacity: 0.8;
        animation: name-animated 1s ease-in;
        transform: scaleX(1.1);
        transition: transfor, 1s ease-in;

    }
    .name-animated-two {
        opacity: 0.8;
        animation: name-animated 1s ease-in-out;
        transform: scaleX(1.2);
        transition: all 1s ease-in-out;

    }
    .name-animated-three {
        opacity: 0.8;
        animation: name-animated 1s ease-in;
        transform: scaleX(1.1);
        transition: all 1s ease-in;
        
    }
</style>