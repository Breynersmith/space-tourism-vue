<script setup>
import Header from '../components/Header.component.vue'
import { ref, onMounted, onBeforeMount } from 'vue'

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



</script>

<template>
    <div 
    :class="ancho < 600 ? 'mobile' : ancho < 900 ? 'tablet' : 'desktop'"
    class="homepage overflow-x-hidden overflow-y-hidden h-[100vh] desktopxs:px-[10%] ">
        <div>
            <Header />
        </div>
        <div class="desktopxs:flex desktopxs:items-center  transition">
            <div class="text-white text-center px-6 mb-14 desktopxs:w-[50%] ">
                <h5 class="uppercase font-barlow-condensed space-x-[4.75] -mb-3 desktopxs:mt-28 text-[1.2rem]">So, you want to travel to</h5>
                <h1 class="font-bellefair uppercase text-[4rem] tabletxs:text-[6rem] mt-2  font-[400] desktopxs:text-[8rem] text-[#D0D6F9]">Space</h1>
                <p class="text-[.81rem] font-barlow tabletxs:px-32 desktopxs:px-16 desktopxs:text-justify mt-4">
                    Let’s face it; if you want to go to space, you might as well genuinely go to 
                    outer space and not hover kind of on the edge of it. Well sit back, and relax 
                    because we’ll give you a truly out of this world experience! 
                </p>
            </div>
            
            <div class="rounded-full w-[10.5rem] h-[10.5rem] mx-auto  flex justify-center items-center mt-12 tabletxs:mt-18 tabletxs:scale-[60%] desktopxs:scale-[140%] relative ">
                <button class="w-[10rem] desktopxs:w-[10rem] h-[10rem] desktopxs:h-[10rem] mx-auto px-auto uppercase text-[.81rem] tabletxs:text-[1.5rem] font-bellefair  bg-white px-6 py-4 rounded-full animacion btn font-bold stroke-black stroke-2 desktopxs:text-[1.5rem] "><router-link to="/destinations">Explore</router-link>
                </button>
    
            </div>
        </div>
         
    </div>
</template>

<style  scoped>




.mobile{
    min-height: 100%;
    width: 100%;
    background-image: url(../assets/home/fondo-home-mobile.jpg);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: cover;
    animation:  animated-mobile 20s linear infinite alternate;
}

                @keyframes animated-mobile {
                    0% {
                        background-position: 0% 100%;
                    }
                    100% {
                        background-position: 0% 0% ;
                    }
                }
               


.tablet{
    min-height: 100%;
    width: 100%;
    background-image: url(../assets/home/background-home-desktop.jpg);
    background-position: center;
    background-repeat: no-repeat;
    animation:  animated-mobile 20s linear infinite alternate;
    
}

        @media screen and (min-width: 900px) {
            .tablet{
                background-image: url(../assets/home/fondo-destok-optimizado.jpg);
            }
        }


.desktop{
    min-height: 100%;
    width: 100%;
    background-image: url(../assets/home/background-home-desktop.jpg);
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: cover;
    animation:  animated-mobile 20s linear infinite alternate;
}




button { 
    
    animation:  miany  1s infinite alternate;
    
}
        @keyframes miany {
            0% {
                outline: 2px solid;
                outline-color: #57575763;
            }           
            100% {
                outline: 30px solid #98989863;
            }
        }



button:hover { 
    
    animation:  hover  1s infinite alternate;
    
}
        @keyframes hover {
            0% {
                outline: 2px solid;
                outline-color: #91909063;
            }

    

	100% {
		outline: 30px solid #98989863;
	}
}

.transition {
    animation: opacity 2s ease-out;
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