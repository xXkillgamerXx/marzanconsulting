<script setup>
import { computed, ref, onMounted } from 'vue';
import { useRoute, RouterLink } from 'vue-router';
import pagosBackground from "@/assets/images/Actualiza-Web-como-aceptar-pagos-en-linea.jpg";
import g1352 from "@/assets/images/g1352.png";
import g1388 from "@/assets/images/g1388.png";
import g1424 from "@/assets/images/g1424.png";
import g1460 from "@/assets/images/g1460.png";
import checkIcon from "@/assets/images/check.svg";

const route = useRoute();
const isModalPrecioOpen = ref(false);

const abrirModalPrecio = () => {
  isModalPrecioOpen.value = true;
};

const cerrarModalPrecio = () => {
  isModalPrecioOpen.value = false;
};

const insigniasData = {
  "devops-engineer-associate": {
    id: 1,
    imagen: g1388,
    nombre: "DevOps Engineer Associate",
    color: "bg-blue-400",
    precio: "779 USD por persona",
    precioNumero: 779,
    minimo: 8,
    maximo: null,
    descripcion: "Certificación de nivel asociado en DevOps",
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
    color: "bg-orange-500",
    precio: "1,299 USD por persona",
    precioNumero: 1299,
    minimo: 10,
    maximo: null,
    descripcion: "Certificación de nivel practicante en DevOps",
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
    color: "bg-blue-600",
    precio: "1,699 USD por persona",
    precioNumero: 1699,
    minimo: 8,
    maximo: 12,
    descripcion: "Certificación de nivel profesional en DevOps",
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
    color: "bg-green-500",
    precio: "1,999 USD por persona",
    precioNumero: 1999,
    minimo: 4,
    maximo: null,
    descripcion: "Certificación de nivel practicante en DevSecOps",
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

const insignia = computed(() => {
  const slug = route.params.slug;
  return insigniasData[slug] || null;
});

onMounted(() => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
</script>

<template>
  <div v-if="insignia">
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
          {{ insignia.nombre }}
        </h1>
        <p class="text-lg md:text-xl lg:text-2xl text-white uppercase tracking-wide">
          CERTIFICACIÓN EN DEVOPS/DEVSECOPS
        </p>
      </div>
    </section>

    <!-- Contenido -->
    <div class="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div class="max-w-7xl mx-auto">
        
        <!-- Grid: Imagen y Habilidades -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
          <!-- Imagen de la Insignia -->
          <div class="flex flex-col items-center lg:items-start">
            <div class="w-full max-w-md mb-6">
              <img
                :src="insignia.imagen"
                :alt="insignia.nombre"
                class="w-full h-auto object-contain"
              />
            </div>
            
            <!-- Botón Comprar -->
            <div class="w-full max-w-md">
              <button
                @click="abrirModalPrecio"
                class="w-full bg-[#4f2d7f] hover:bg-[#3d2363] text-white font-bold py-3 px-8 rounded-lg transition-colors uppercase text-center"
              >
                Comprar
              </button>
            </div>
          </div>

          <!-- Habilidades -->
          <div>
            <h2 class="text-2xl md:text-3xl font-bold text-[#4f2d7f] mb-6 uppercase">
              Habilidades y Competencias
            </h2>
            <ul class="space-y-3">
              <li
                v-for="(habilidad, index) in insignia.habilidades"
                :key="index"
                class="flex items-start gap-3"
              >
                <img 
                  :src="checkIcon" 
                  alt="Check" 
                  class="w-6 h-6 md:w-7 md:h-7 mt-1 flex-shrink-0"
                />
                <span class="text-base md:text-lg leading-relaxed" style="color: #364050;">
                  {{ habilidad }}
                </span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>

    <!-- Modal de Precio -->
    <div
      v-if="isModalPrecioOpen && insignia"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4"
      @click.self="cerrarModalPrecio"
    >
      <div class="bg-white rounded-lg shadow-2xl max-w-md w-full relative z-10">
        <!-- Header del Modal -->
        <div class="bg-[#4f2d7f] text-white px-6 py-4 flex justify-between items-center rounded-t-lg">
          <h3 class="text-xl md:text-2xl font-bold uppercase">Precio</h3>
          <button
            @click="cerrarModalPrecio"
            class="text-white hover:text-gray-200 transition-colors"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Contenido del Modal -->
        <div class="p-6 text-center">
          <div class="flex justify-center mb-6">
            <div class="w-48 h-48 md:w-56 md:h-56 flex items-center justify-center">
              <img
                :src="insignia.imagen"
                :alt="insignia.nombre"
                class="w-full h-full object-contain"
              />
            </div>
          </div>
          
          <h4 class="text-xl md:text-2xl font-bold text-[#4f2d7f] mb-4 uppercase flex flex-col gap-1">
            <div>{{ insignia.nombre.split(' ').slice(0, -1).join(' ') }}</div>
            <div>{{ insignia.nombre.split(' ').slice(-1).join(' ') }}</div>
          </h4>
          
          <p class="text-3xl md:text-4xl font-bold text-[#4f2d7f] mb-2">
            ${{ insignia.precioNumero }} USD por persona
          </p>

          <div class="text-gray-700 mb-4 space-y-1">
            <p class="text-base md:text-lg">
              Mínimo {{ insignia.minimo }} personas*
            </p>
            <p v-if="insignia.maximo" class="text-base md:text-lg">
              Máximo {{ insignia.maximo }} personas*
            </p>
          </div>
          
          <p class="text-gray-600 mb-6">
            {{ insignia.descripcion }}
          </p>
        </div>

        <!-- Footer del Modal -->
        <div class="bg-gray-100 px-6 py-4 flex justify-end gap-4 rounded-b-lg">
          <button
            @click="cerrarModalPrecio"
            class="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors font-semibold"
          >
            Cerrar
          </button>
          <a
            href="https://www.paypal.com/paypalme/marzanconsulting"
            target="_blank"
            rel="noopener noreferrer"
            class="px-6 py-2 bg-[#4f2d7f] text-white rounded-lg hover:bg-[#3d2363] transition-colors font-semibold"
          >
            Pagar
          </a>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="py-20 px-4 text-center">
    <h2 class="text-2xl font-bold text-[#4f2d7f] mb-4">Insignia no encontrada</h2>
    <RouterLink to="/insignias" class="text-[#4f2d7f] hover:underline">
      Volver a Insignias
    </RouterLink>
  </div>
</template>

