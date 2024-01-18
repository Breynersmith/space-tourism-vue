<script setup>
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



/* --------------------------------*/
    //crew
/*----------------------------------*/

import dataJson from '../data.json'

const crewData = ref(dataJson.crew)

let name = ref(crewData.value[0].name)
let role = ref(crewData.value[0].role)
let bio = ref(crewData.value[0].bio)

 

let douglas = ref(false)
let mark = ref(false)
let viktor = ref(false)
let anousheh = ref(false)


console.log(crewData.value);

const showDouglas = () =>{
    name = crewData.value[0].name
    role = crewData.value[0].role
    bio = crewData.value[0].bio
    mark.value = false
    viktor.value = false
    anousheh.value = false
    douglas.value = true
    c

}
const showMark = () =>{
    name = crewData.value[1].name
    role = crewData.value[1].role
    bio = crewData.value[1].bio
    douglas.value = false
    viktor.value = false
    anousheh.value = false
    mark.value = true
    console.log('clase activa : mark', mark.value);
}
const showViktor = () =>{
    name = crewData.value[2].name
    role = crewData.value[2].role
    bio = crewData.value[2].bio
    douglas.value = false
    mark.value = false
    anousheh.value = false
    viktor.value = true
    console.log('clase activa : viktor', viktor.value);
}

const showAnousheh = () =>{
    name = crewData.value[3].name
    role = crewData.value[3].role
    bio = crewData.value[3].bio
    douglas.value = false
    mark.value = false 
    viktor.value = false
    anousheh.value = true
    console.log('clase activa : anousheh', anousheh.value);
}



onMounted(() => {
    douglas.value = true
    mark.value = false
    viktor.value = false
    anousheh.value = false
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
            class="text-center px-8 order-1 tabletxs:w-[100%]">
                <div class="text-center flex flex-col-reverse mt-10">
                    <h2 
                    class="uppercase font-bellefair text-[.8rem] desktopmd:text-[1rem] opacity-50">{{ role }}</h2>
                <h3 
                class="uppercase font-bellefair text-[1.5rem] text-[#D0D6F9] desktopmd:text-[2rem]">{{ name }}</h3>
                </div>
                <p class="text-[.8rem] mb-4 mt-4 desktopmd:text-[1rem]">{{ bio }}</p>
            </div>

            <div 
                class="w-full flex flex-row tabletxs:flex-col  justify-center items-center gap-4 mt-4 order-3 absolute top-[90%] tabletxs:relative tabletxs:-mt-[0rem] tabletmd:mt-[0rem] tabletxs:-ml-[5rem] tabletmd:-ml-[10rem] desktopmd:flex-row desktopmd:absolute desktopmd:top-[80%]">

                <button  
                        class="w-4 h-4 opacity-30 bg-[#D0D6F9] hover:opacity-100 rounded-full"
                        :class="douglas ? 'active' : ''"
                        @click="showDouglas">
                </button>

                <button  
                        class="w-4 h-4 opacity-30 bg-[#D0D6F9] hover:opacity-100 rounded-full"
                        :class="mark ? 'active' : ''"
                        @click="showMark">
                </button>

                <button  
                        class="w-4 h-4 opacity-30 bg-[#D0D6F9] hover:opacity-100 rounded-full"
                        :class="viktor ? 'active' : ''"
                        @click="showViktor">
                </button>

                <button  
                        class="w-4 h-4 opacity-30 bg-[#D0D6F9] hover:opacity-100 rounded-full"
                        :class="anousheh ? 'active' : ''"
                        @click="showAnousheh">
                </button>
           
            </div>
            <div class="order-2 w-[12rem] tabletxs:w-[60%] desktopmd:w-[37%]  mx-auto box-img ">
                <div
                :class="{'douglas' : douglas, 'mark': mark, 'viktor': viktor, 'anousheh' : anousheh }"
                class="tebletxs:w-[100%] desktopmd:w-[15rem] desktopmd:h-[18rem]  desktopmd:mt-8">
                  
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



.douglas {  
    background-image: url(../assets/crew/image-douglas-hurley.png);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.8;
    scale: 1.5;
    transition: all 1s ease-in-out;
}
.mark {
    background-image: url(../assets/crew/image-mark-shuttleworth.png);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.8;
    scale: 1.5;
    transition: all 1s ease-in-out;
}

.viktor {
    background-image: url(../assets/crew/image-victor-glover.png);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.8;
    scale: 1.5;
    transition: all 1s ease-in-out;
}

.anousheh {
    background-image: url(../assets/crew/image-anousheh-ansari.png);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.8;
    scale: 1.5;
    transition: all 1s ease-in-out;
}
</style>