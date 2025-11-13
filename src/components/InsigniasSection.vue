<script setup>
import { RouterLink } from 'vue-router';
import g1352 from "@/assets/images/g1352.png";
import g1388 from "@/assets/images/g1388.png";
import g1424 from "@/assets/images/g1424.png";
import g1460 from "@/assets/images/g1460.png";

const insignias = [
  { id: 2, imagen: g1388, nombre: "DevSecOps Engineer Practitioner" },
  { id: 4, imagen: g1460, nombre: "DevOps Engineer Practitioner" },
  { id: 3, imagen: g1424, nombre: "DevOps Engineer Professional" },
  { id: 1, imagen: g1352, nombre: "DevOps Engineer Associate" },
];

</script>

<template>
  <section id="insignias" class="bg-[#4f2d7f] py-20">
    <div class="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
      <!-- Título y Subtítulo -->
      <div class="text-center mb-12">
        <h2
          class="text-3xl text-white md:text-4xl lg:text-5xl font-bold mb-4 uppercase"
        >
          INSIGNIAS
        </h2>
        <p class="text-white/80 text-base md:text-lg max-w-2xl mx-auto">
          Pregunta por nuestros trainings especializados en DevOps/DevSecOps
        </p>
      </div>

      <!-- Grid de Insignias -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
        <div
          v-for="insignia in insignias"
          :key="insignia.id"
          class="flex flex-col items-center">
          <div class="w-full max-w-[280px] md:max-w-[320px] aspect-square flex items-center justify-center hover:scale-105 transition-transform duration-300">
            <img
              :src="insignia.imagen"
              :alt="insignia.nombre"
              class="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      <!-- Botón de Contacto -->
      <div class="text-center">
        <RouterLink
          to="/insignias"
          class="inline-flex items-center rounded-md bg-white text-[#4f2d7f] px-10 py-5 font-semibold uppercase hover:bg-white/90 transition-colors cursor-pointer"
        >
          SABER MÁS
        </RouterLink>
      </div>
    </div>
  </section>
</template>

