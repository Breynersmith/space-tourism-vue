<script setup>

import { ref, onMounted } from 'vue';
const iconMain = ref(false)




let showMenu = ref(true);
let route = ref(window.location.hash);

const isActive = (targetRoute) => `#${targetRoute}` === route.value;
const handleShowMenu = () => {
    iconMain.value = !iconMain.value
    showMenu.value = !showMenu.value
    console.log(showMenu.value);
    console.log(transitions.value);
}

onMounted(() => {
    showMenu.value = true
})



</script>

<template>
    <header class="p-6 flex justify-between ">
        <div  
        class="scale-[70%]">
            <img
            src="../assets/shared/logo.svg" alt="">
        </div>
        <div 
        :class="transitions">
            <nav 
        :class="showMenu  ? 'open' : 'close'"
        class="translate-x-[100%] tabletmd:translate-x-0 overflow-hidden w-[58%] h-[100%] z-10 tabletxs:h-auto tabletxs:block text-white bg-[#494747d8]  :bg-[#8080802c] tabletxs:-mr-10 tabletxs:-mt-5 tabletxs:w-[70%] desktopxs:w-[60%] desktopmd:w-[80%] desktopmd:-mr-[15%] rounded-bl-3xl font-barlow uppercase absolute  right-0 top-0 tabletxs:relative ">
            <ul class="flex flex-col tabletxs:flex-row tabletxs:text-[.7rem] justify-start gap-6   tabletxs:justify-evenly mt-28 tabletxs:mt-6 ml-16 tabletxs:ml-0  opacity-[.7]">
                <li>
                    <router-link 
                    to="/"
                    :class="{active : isActive('home') }" ><span class="font-bold mr-[3px]">00</span> Home</router-link>
                </li>

                <li>
                    <router-link 
                    :class="{active : isActive('home') }"
                    to="/destinations">
                        <span class="font-bold mr-[3px]">01</span>Destination
                    </router-link>
                </li>
                <li>
                    <router-link
                    :class="{active : isActive('home') }"
                    to="/crew">
                        <span class="font-bold mr-[3px]">02</span>Crew</router-link>
                    </li>
                <li>
                    <router-link
                    :class="{active : isActive('home') }"
                    to="/technology">
                        <span class="font-bold mr-[3px]">03</span> Technology
                    </router-link>
                </li>
            </ul>
        </nav>
        </div>

        <div 
        @click="handleShowMenu"
        :class="transitions"
        class="mt-2 tabletxs:hidden cursor-pointer z-50">
        <i 
        :class="!iconMain ? 'fa-bars' : 'fa-xmark'"
        class="fa-solid text-white"></i>

        </div>
    </header>
</template>

<style scoped>

.open {
    overflow: hidden;
    color: aliceblue;
    transform: translateX(100%);
    transition: all 1s ease-in-out;
}
@media (min-width: 640px) {
    .open {
        padding-top: 10px;
        height: 5rem;
        width: 111%;
        margin-right: 5rem;
        padding-right: 2rem;
        transform: translateX(20%);
        transform: translateY(-10%);
    }
}

@media (min-width: 950px) {
    .open {
        padding-top: 10px;
        height: 5rem;
        width: 180%;
        margin-right: -15rem;
        padding-right: 25rem;
        transform: translateY(-10%);
    }
}



.close {
    overflow: hidden;
    color: aliceblue;
    transform: translateX(0%);
    transition: all 1s ease-in-out;

}


nav  {
    backdrop-filter: blur(.9rem);
}

.router-link-active {
    border-bottom: 3px solid white !important;
    padding-bottom: 10px;
    color: white;
}
.inactive {
    border-bottom: 2px solid white;
}
.fade {
    animation: fade .3s ease-in-out;
}

</style>