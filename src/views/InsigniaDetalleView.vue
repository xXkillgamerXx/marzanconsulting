<script setup>
import { computed, onMounted } from 'vue';
import { useRoute, RouterLink } from 'vue-router';
import pagosBackground from "@/assets/images/Actualiza-Web-como-aceptar-pagos-en-linea.jpg";
import g1352 from "@/assets/images/g1352.png";
import g1388 from "@/assets/images/g1388.png";
import g1424 from "@/assets/images/g1424.png";
import g1460 from "@/assets/images/g1460.png";

const route = useRoute();

const insigniasData = {
  "devops-engineer-associate": {
    id: 1,
    imagen: g1352,
    nombre: "DevOps Engineer Associate",
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
    imagen: g1388,
    nombre: "DevSecOps Engineer Practitioner",
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
          <div class="flex justify-center lg:justify-start">
            <div class="w-full max-w-md">
              <img
                :src="insignia.imagen"
                :alt="insignia.nombre"
                class="w-full h-auto object-contain"
              />
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
                <i class="fas fa-check-circle text-[#4f2d7f] text-xl mt-1 flex-shrink-0"></i>
                <span class="text-base md:text-lg leading-relaxed" style="color: #364050;">
                  {{ habilidad }}
                </span>
              </li>
            </ul>
          </div>
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

