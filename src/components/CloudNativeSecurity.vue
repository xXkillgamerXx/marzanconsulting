<script setup>
import cloudNativeImage from "@/assets/images/Blog-Cyber-Security.webp";
import EscudoLogo from "@/assets/images/escudo.png";

const serviciosCloudNative = [
  "Assessment de Seguridad de tu Infraestructura Cloud-Native",
  "Hardening de tu Infraestructura Cloud-Native",
];
</script>

<template>
  <section id="ciberseguridad" class="py-20 px-4 md:px-8 lg:px-16 bg-white">

  <div class="max-w-7xl mx-auto">
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-32">
    <!-- Contenido de Texto (Left Side) -->
    <div class="order-2 lg:order-1">
      <!-- Heading pequeño -->
      <p
        class="text-gray-400 text-lg text-center md:text-start uppercase tracking-wide mb-2"
      >
        CIBERSEGURIDAD
      </p>

      <!-- Título Principal -->
      <h2
        class="text-3xl md:text-4xl text-center md:text-start font-bold text-[#4f2d7f] mb-2"
      >
        Cloud-Native
      </h2>

      <!-- Subtítulo -->
      <h3
        class="text-2xl md:text-3xl text-center md:text-start text-[#4f2d7f] mb-6"
      >
        Security Specialist
      </h3>

      <!-- Primer Párrafo -->
      <p class="text-gray-700 text-lg leading-relaxed mb-6">
        Contamos con experiencia como Kubernetes Security Specialist (CKS),
        especialistas en seguridad de la cadena de suministro de software
        cloud-native, seguridad de aplicaciones basadas en contenedores,
        plataformas Kubernetes y seguridad cloud. Nuestra experiencia abarca
        toda la cadena: Code, Build, Deploy y Runtime.
      </p>

      <!-- Lista de Servicios -->
      <div class="space-y-4">
        <div
          v-for="(servicio, index) in serviciosCloudNative"
          :key="index"
          class="flex items-center gap-3"
        >
          <!-- Icono de escudo con check -->
          <div
            class="flex-shrink-0 border-2 border-gray-300 h-14 w-14 rounded-lg flex items-center justify-center"
          >
            <img class="w-12 p-2" :src="EscudoLogo" alt="" />
          </div>
          <!-- Texto del servicio -->
          <p class="text-gray-700 text-lg leading-relaxed flex-1">
            {{ servicio }}
          </p>
        </div>
      </div>
    </div>
    <!-- Imagen Cloud-Native Security (Right Side) -->
    <div class="order-1 lg:order-2">
      <div
        class="relative w-full min-h-[400px] lg:min-h-[500px] bg-gray-200 rounded-lg overflow-hidden"
      >
        <img
          :src="cloudNativeImage"
          alt="Cloud-Native Security Specialist"
          class="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
  </div>
  </section>
</template>

