<script setup>
import { computed } from "vue";
import avanexLogo from "@/assets/images/clientes/Avanex-logo.png";
import bancoPopular from "@/assets/images/clientes/Banco-Popular-Dominicano.png";
import bricksLogo from "@/assets/images/clientes/bricks_logo_sin_fondo_1_720.png";
import cardnetLogo from "@/assets/images/clientes/Cardnet-Nos-Une-Logo.png";
import gamDevelopment from "@/assets/images/clientes/Gam Development.png";
import metaconxept from "@/assets/images/clientes/Metaconxept.png";
import novositLogo from "@/assets/images/clientes/NOVOSIT-logo.png";
import qikBanco from "@/assets/images/clientes/Qik-Banco-Digital-Dominicano.png";
import sicflexLogo from "@/assets/images/clientes/SicFlex-Cloud-Software-Solution.svg";
import wepsysLogo from "@/assets/images/clientes/wepsys-srl.png";
// Lista de clientes
// Lista de clientes
const clientes = [
  { name: "Avanex", logo: avanexLogo, height: "120px" },
  { name: "Banco Popular", logo: bancoPopular, height: "120px" },
  { name: "Bricks", logo: bricksLogo, height: "120px" },
  { name: "Cardnet", logo: cardnetLogo, height: "120px" },
  { name: "Gam Development", logo: gamDevelopment, height: "120px" },
  { name: "Metaconxept", logo: metaconxept, height: "120px" },
  { name: "Novosit", logo: novositLogo, height: "120px" },
  { name: "Qik Banco", logo: qikBanco, height: "120px" },
  { name: "SicFlex", logo: sicflexLogo, height: "120px" },
  { name: "Wepsys", logo: wepsysLogo, height: "120px" },
];


// Duplicar los clientes para el efecto infinito
const clientesDuplicados = computed(() => [...clientes, ...clientes]);
</script>

<template>
  <section id="clientes" class="bg-white ">
    <!-- Sección Superior Púrpura -->
    <div class="bg-[#4f2d7f] py-12 px-4 md:px-8 lg:px-16">
      <div class="max-w-7xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 uppercase">
          NUESTROS CLIENTES
        </h2>
        <p class="text-lg md:text-xl text-white/90 uppercase">
          ALGUNOS CLIENTES DE NUESTRA EMPRESA
        </p>
      </div>
    </div>

    <!-- Sección Blanca con Carrusel -->
    <div class="bg-white py-12 md:py-4 overflow-hidden">
      <div class="relative w-full">
        <!-- Carrusel Infinito -->
        <div class="flex animate-scroll">
          <!-- Primera pasada -->
          <div
            v-for="(cliente, index) in clientesDuplicados"
            :key="`first-${index}`"
            class="flex-shrink-0 mx-6 md:mx-8 flex items-center justify-center"
            :style="{ width: '200px', height: cliente.height || '120px' }"
          >
            <img
              :src="cliente.logo"
              :alt="cliente.name"
              class="max-w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
            />
          </div>
          <!-- Segunda pasada (para efecto infinito continuo sin saltos) -->
          <div
            v-for="(cliente, index) in clientesDuplicados"
            :key="`second-${index}`"
            class="flex-shrink-0 mx-6 md:mx-8 flex items-center justify-center"
            :style="{ width: '200px', height: cliente.height || '120px' }"
          >
            <img
              :src="cliente.logo"
              :alt="cliente.name"
              class="max-w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Sección Inferior Púrpura -->
    <div class="bg-[#4f2d7f] h-[150px]"></div>
  </section>
</template>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  display: flex;
  animation: scroll 25s linear infinite;
  will-change: transform;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform: translateZ(0);
}

.animate-scroll:hover {
  animation-play-state: paused;
}
</style>

