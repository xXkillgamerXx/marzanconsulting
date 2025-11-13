<script setup>
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import pagosBackground from "@/assets/images/Actualiza-Web-como-aceptar-pagos-en-linea.jpg";
import g1352 from "@/assets/images/g1352.png";
import g1388 from "@/assets/images/g1388.png";
import g1424 from "@/assets/images/g1424.png";
import g1460 from "@/assets/images/g1460.png";

const insignias = [
  { 
    id: 1, 
    imagen: g1352, 
    nombre: "DevOps Engineer Associate",
    slug: "devops-engineer-associate",
    color: "bg-blue-400"
  },
  { 
    id: 4, 
    imagen: g1460, 
    nombre: "DevOps Engineer Practitioner",
    slug: "devops-engineer-practitioner",
    color: "bg-orange-500"
  },
  { 
    id: 3, 
    imagen: g1424, 
    nombre: "DevOps Engineer Professional",
    slug: "devops-engineer-professional",
    color: "bg-blue-600"
  },
  { 
    id: 2, 
    imagen: g1388, 
    nombre: "DevSecOps Engineer Practitioner",
    slug: "devsecops-engineer-practitioner",
    color: "bg-green-500"
  },
];

onMounted(() => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
</script>

<template>
  <!-- Banner Header -->
  <section 
    class="relative flex items-center justify-center h-[400px] md:h-[500px] mt-[105px]"
    :style="{
      backgroundImage: `linear-gradient(180deg, rgba(79, 45, 127, 0.85), rgba(79, 45, 127, 0.85)), url(${pagosBackground})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }"
  >
    <div class="relative z-10 w-full max-w-7xl mx-auto text-center px-4">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 uppercase tracking-tight">
        INSIGNIAS
      </h1>
      <p class="text-lg md:text-xl lg:text-2xl text-white uppercase tracking-wide">
        CERTIFICACIONES EN DEVOPS Y DEVSECOPS
      </p>
    </div>
  </section>

  <!-- Contenido -->
  <div class="py-20 px-4 md:px-8 lg:px-16 bg-white">
    <div class="max-w-7xl mx-auto">
      
      <!-- Título Principal -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4f2d7f] mb-8 uppercase">
          NUESTRAS CERTIFICACIONES
        </h2>
        <p class="text-base md:text-lg lg:text-xl leading-relaxed text-center mb-8" style="color: #364050;">
          Pregunta por nuestros trainings especializados en DevOps/DevSecOps
        </p>
      </div>

      <!-- Grid de Insignias -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
        <RouterLink
          v-for="insignia in insignias"
          :key="insignia.id"
          :to="{ name: 'insignia-detalle', params: { slug: insignia.slug } }"
          class="bg-white border border-gray-300 rounded-lg p-6 text-center hover:shadow-xl transition-all hover:scale-105"
        >
          <div class="flex justify-center mb-6">
            <div class="w-48 h-48 md:w-56 md:h-56 flex items-center justify-center">
              <img
                :src="insignia.imagen"
                :alt="insignia.nombre"
                class="w-full h-full object-contain"
              />
            </div>
          </div>
          <h3 class="text-lg md:text-xl font-bold text-gray-900 uppercase mb-4">
            {{ insignia.nombre }}
          </h3>
          <p class="text-sm md:text-base text-[#4f2d7f] font-semibold uppercase">
            Ver Detalles →
          </p>
        </RouterLink>
      </div>

    </div>
  </div>
</template>

