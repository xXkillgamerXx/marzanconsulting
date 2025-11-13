<script setup>
import cisaLogo from "@/assets/images/CISA_Logo.png";
import cisLogo from "@/assets/images/cis-logo.png";
import isoLogo from "@/assets/images/iso-27001-logo.png";
import nistLogo from "@/assets/images/nist-csf-final.png";
import EscudoLogo from "@/assets/images/escudo.png";

const estandares = [
  { name: "CISA", logo: cisaLogo },
  { name: "CIS", logo: cisLogo },
  { name: "ISO 27001", logo: isoLogo },
  { name: "NIST CSF", logo: nistLogo },
];

const validaciones = [
  "Validación del Cumplimiento de Seguridad de tu Infraestructura Cloud-Native",
  "Validación del Cumplimiento ISO o del Cumplimiento NIST CSF de los procesos tecnológicos",
  "Validación de la Seguridad de la Cadena de Suministro y del Ciclo de Vida del Software",
];
</script>

<template>
  <section id="ciberseguridad" class="py-20 px-4 md:px-8 lg:px-16 bg-white">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Sección Izquierda: Auditoría IT en Ciberseguridad -->
        <div>
          <!-- Heading pequeño -->
          <p class="text-gray-400 text-lg text-center md:text-start uppercase tracking-wide mb-2">
            CIBERSEGURIDAD
          </p>

          <h2 class="flex flex-col md:flex-row gap-2 text-[#4f2d7f] mb-4">
            <div class="text-3xl md:text-4xl font-bold text-center md:text-start">Auditoría IT</div>
            <div class="text-3xl md:text-4xl text-center md:text-start">en Ciberseguridad</div>
          </h2>

          <!-- Primer Párrafo -->
          <p class="text-gray-700 text-lg leading-relaxed mb-6">
            Realizamos una evaluación completa de cumplimiento Cloud-Native de
            la seguridad de tu infraestructura, políticas y operaciones,
            enfocándonos en la seguridad de la Cadena de Suministro de Software y
            los vectores de ataque recientes que afectan la estabilidad y
            seguridad de la plataforma Kubernetes. Nuestros procesos de
            auditoría Cloud-Native están basados en estándares CIS, CISA y NSA.
          </p>

          <!-- Segundo Párrafo -->
          <p class="text-gray-700 text-lg leading-relaxed">
            Realizamos evaluaciones a nivel corporativo de procesos, políticas y
            operaciones tecnológicas basadas en estándares ISO/IEC 27001,
            Catálogo de Protección Base IT y COBIT 5. El objetivo es asegurar
            que los controles IT protejan los activos tecnológicos corporativos
            y estén alineados con los objetivos del negocio.
          </p>
        </div>

        <!-- Sección Derecha: Estándares -->
        <div>

          <!-- Título Estándares -->
          <h3 class="text-2xl md:text-3xl mt-8 text-center font-bold text-[#4f2d7f] mb-8">
            Estándares
          </h3>

          <!-- Grid de Logos de Estándares -->
          <div class="grid grid-cols-4 gap-1 mb-10">
            <div
              v-for="(estandar, index) in estandares"
              :key="index"
              class="flex items-center justify-center"
            >
              <div class="overflow-hidden bg-white flex items-center justify-center p-2 md:p-3">
                <img
                  :src="estandar.logo"
                  :alt="estandar.name"
                  class="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          <!-- Lista de Validaciones -->
          <div class="space-y-4">
            <div
              v-for="(validacion, index) in validaciones"
              :key="index"
              class="flex items-center gap-3"
            >
              <!-- Icono de escudo con check -->
              <div  class="flex-shrink-0 border-2 border-gray-300 h-14 w-14 rounded-lg flex items-center justify-center">
                <img class="w-12 p-2" :src="EscudoLogo" alt="">
              </div>
              <!-- Texto de validación -->
              <p class="text-gray-700 text-lg leading-relaxed flex-1">
                {{ validacion }}
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

