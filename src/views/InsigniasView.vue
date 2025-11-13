<script setup>
import { ref, computed, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import pagosBackground from "@/assets/images/Actualiza-Web-como-aceptar-pagos-en-linea.jpg";
import g1352 from "@/assets/images/g1352.png";
import g1388 from "@/assets/images/g1388.png";
import g1424 from "@/assets/images/g1424.png";
import g1460 from "@/assets/images/g1460.png";
import checkIcon from "@/assets/images/check.svg";

// Datos completos de las insignias con habilidades
const insigniasData = {
  "devops-engineer-associate": {
    id: 1,
    imagen: g1388,
    nombre: "DevOps Engineer Associate",
    slug: "devops-engineer-associate",
    color: "bg-blue-400",
    habilidades: [
      "Version control",
      "Code maintainability",
      "Container architecture",
      "Microservices essential",
      "Cloud-native landscape",
      "Docker essential",
      "Kubernetes essential",
      "Continuous integration (CI)",
      "Continuous delivery (CD)",
      "Monitoring and observability",
      "Site Reliability Engineering (SRE)"
    ]
  },
  "devops-engineer-practitioner": {
    id: 4,
    imagen: g1460,
    nombre: "DevOps Engineer Practitioner",
    slug: "devops-engineer-practitioner",
    color: "bg-orange-500",
    habilidades: [
      "Version control",
      "Code maintainability",
      "Container architecture",
      "Microservices essential",
      "Cloud-native landscape",
      "Docker essential",
      "Kubernetes Administration",
      "Kubernetes for Application Developers",
      "Continuous integration (CI)",
      "Continuous delivery (CD)",
      "Monitoring and observability",
      "Site Reliability Engineering (SRE)",
      "Deployment automation",
      "Test automation"
    ]
  },
  "devops-engineer-professional": {
    id: 3,
    imagen: g1424,
    nombre: "DevOps Engineer Professional",
    slug: "devops-engineer-professional",
    color: "bg-blue-600",
    habilidades: [
      "Version control",
      "Code maintainability",
      "Container architecture",
      "Microservices essential",
      "Cloud-native landscape",
      "Cloud infrastructure",
      "Kubernetes Administration",
      "Kubernetes for Application Developers",
      "Continuous integration (CI)",
      "Continuous delivery (CD)",
      "Monitoring and observability",
      "Site Reliability Engineering (SRE)",
      "Deployment automation",
      "Image security",
      "Container security",
      "Test automation",
      "Empowering teams to choose tools (stack or toolchain)",
      "Learning culture",
      "Transformational leadership"
    ]
  },
  "devsecops-engineer-practitioner": {
    id: 2,
    imagen: g1352,
    nombre: "DevSecOps Engineer Practitioner",
    slug: "devsecops-engineer-practitioner",
    color: "bg-green-500",
    habilidades: [
      "Version control",
      "Code maintainability",
      "Container architecture",
      "Microservices architecture",
      "Cloud-native landscape",
      "Kubernetes Administration",
      "Kubernetes for Application Developers",
      "Kubernetes for Security Especialists",
      "Continuous integration (CI)",
      "Continuous delivery (CD)",
      "Secure coding",
      "SCA/SAST tools",
      "Monitoring and observability",
      "Shifting left on security",
      "Vulnerability scanning",
      "Pipeline security",
      "Image security",
      "Container security",
      "Runtime security",
      "Kubernetes security",
      "Auditing Cloud-Native security",
      "Hardening Cloud-Native security"
    ]
  }
};

const insignias = Object.values(insigniasData);

const insigniasSeleccionadas = ref([null, null]);

const actualizarSeleccion = () => {
  // Asegurar que el array tenga exactamente 2 elementos
  if (insigniasSeleccionadas.value.length < 2) {
    insigniasSeleccionadas.value.push(null);
  }
};

const todasHabilidades = computed(() => {
  if (!insigniasSeleccionadas.value[0] || !insigniasSeleccionadas.value[1]) return [];
  const habilidades1 = insigniasSeleccionadas.value[0].habilidades || [];
  const habilidades2 = insigniasSeleccionadas.value[1].habilidades || [];
  const todas = [...new Set([...habilidades1, ...habilidades2])];
  return todas.sort();
});

const tieneHabilidad = (insignia, habilidad) => {
  return insignia.habilidades && insignia.habilidades.includes(habilidad);
};

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
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-20">
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

      <!-- Sección de Comparación -->
      <div class="border-t-2 border-gray-200 pt-12">
        <h3 class="text-2xl md:text-3xl font-bold text-[#4f2d7f] mb-8 text-center uppercase">
          Comparación
        </h3>
        <p class="text-base text-gray-600 mb-8 text-center">
          Selecciona dos insignias para comparar sus habilidades y competencias
        </p>
        
        <!-- Selectores de Insignias -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-4xl mx-auto">
          <div>
            <label class="block text-sm font-semibold text-[#4f2d7f] mb-2 uppercase">
              Insignia 1
            </label>
            <select
              v-model="insigniasSeleccionadas[0]"
              @change="actualizarSeleccion"
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#4f2d7f] focus:outline-none text-gray-700"
            >
              <option :value="null">Selecciona una insignia</option>
              <option
                v-for="insignia in insignias"
                :key="insignia.slug"
                :value="insignia"
                :disabled="insigniasSeleccionadas[1]?.slug === insignia.slug"
              >
                {{ insignia.nombre }}
              </option>
            </select>
          </div>
          
          <div>
            <label class="block text-sm font-semibold text-[#4f2d7f] mb-2 uppercase">
              Insignia 2
            </label>
            <select
              v-model="insigniasSeleccionadas[1]"
              @change="actualizarSeleccion"
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#4f2d7f] focus:outline-none text-gray-700"
            >
              <option :value="null">Selecciona una insignia</option>
              <option
                v-for="insignia in insignias"
                :key="insignia.slug"
                :value="insignia"
                :disabled="insigniasSeleccionadas[0]?.slug === insignia.slug"
              >
                {{ insignia.nombre }}
              </option>
            </select>
          </div>
        </div>

        <!-- Vista de Comparación -->
        <div v-if="insigniasSeleccionadas[0] && insigniasSeleccionadas[1]" class="mt-12">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div
              v-for="(insignia, index) in insigniasSeleccionadas"
              :key="insignia.slug"
              class="bg-white border-2 border-[#4f2d7f] rounded-lg p-6"
            >
              <div class="text-center mb-6">
                <div class="flex justify-center mb-4">
                  <div class="w-38 h-52 flex items-center justify-center">
                    <img
                      :src="insignia.imagen"
                      :alt="insignia.nombre"
                      class="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <h4 class="text-xl md:text-2xl font-bold text-[#4f2d7f] uppercase">
                  {{ insignia.nombre }}
                </h4>
              </div>
              <div class="space-y-2 max-h-[500px] overflow-y-auto">
                <div
                  v-for="habilidad in todasHabilidades"
                  :key="habilidad"
                  class="flex items-start gap-2"
                >
                  <img
                    v-if="tieneHabilidad(insignia, habilidad)"
                    :src="checkIcon"
                    alt="Check"
                    class="w-5 h-5 mt-1 flex-shrink-0"
                  />
                  <span
                    v-else
                    class="w-5 h-5 mt-1 flex-shrink-0 text-gray-300"
                  >
                    ✕
                  </span>
                  <span
                    :class="[
                      'text-sm md:text-base leading-relaxed',
                      tieneHabilidad(insignia, habilidad) ? 'text-gray-700' : 'text-gray-400 line-through'
                    ]"
                  >
                    {{ habilidad }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

