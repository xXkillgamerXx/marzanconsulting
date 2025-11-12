<script setup>
import ethicalHackingImage from "@/assets/images/Ethical Hacking.webp";
import EscudoLogo from "@/assets/images/escudo.png";

const serviciosEthicalHacking = ["Ingeniería Reversa", "PenTesting"];
</script>

<template>
  <section id="ciberseguridad" class="py-20 px-4 md:px-8 lg:px-16 bg-white">

  <div class="max-w-7xl mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-32">
    <!-- Imagen Ethical Hacking (Left Side) -->
    <div class="order-2 lg:order-1">
      <div
        class="relative w-full min-h-[400px] lg:min-h-[500px] bg-gray-200 rounded-lg overflow-hidden"
      >
        <img
          :src="ethicalHackingImage"
          alt="Ethical Hacking"
          class="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>

    <!-- Contenido de Texto (Right Side) -->
    <div class="order-2">
      <!-- Heading pequeño -->
      <p
        class="text-gray-400 text-lg text-center md:text-start uppercase tracking-wide mb-2"
      >
        ETHICAL HACKING
      </p>

      <!-- Título Principal -->
      <h2
        class="flex gap-2 text-4xl md:text-4xl text-center md:text-start  text-[#4f2d7f] mb-6"
      >
        <div class="font-bold">Ethical</div> <div class="">Hacking</div>
      </h2>

      <!-- Primer Párrafo -->
      <p class="text-gray-700 text-lg leading-relaxed mb-6">
        Realizamos un proceso de detección de vulnerabilidades (pentesting)
        en los sistemas, aplicaciones, datos y la infraestructura de la
        organización. Nuestro enfoque es principalmente grayhat, lo que nos
        permite realizar ataques controlados con el consentimiento de
        nuestros clientes, y mediante el uso de exploits existentes y
        scripts propietarios.
      </p>

      <!-- Segundo Párrafo -->
      <p class="text-gray-700 text-lg leading-relaxed mb-8">
        Nuestros procesos incluyen el ganar acceso no autorizado a sistemas
        de computadoras, aplicaciones o datos e ingeniería reversa, para
        finalmente producir un informe de vulnerabilidades encontradas y el
        nivel de seguridad de los sistemas y la infraestructura evaluada.
      </p>

      <!-- Lista de Servicios -->
      <div class="space-y-4">
        <div
          v-for="(servicio, index) in serviciosEthicalHacking"
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
  </div>
  </div>

  </section>
</template>

