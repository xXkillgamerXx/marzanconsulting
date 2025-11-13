<script setup>
import { ref, onMounted } from 'vue';
import pagosBackground from "@/assets/images/Actualiza-Web-como-aceptar-pagos-en-linea.jpg";
import cloudNativeIcon from "@/assets/images/iconos/Desarrollo de Software Cloud-Native.png";
import auditoriaSeguridadIcon from "@/assets/images/iconos/Auditoría IT en Ciberseguridad.png";
import ethicalHackingIcon from "@/assets/images/iconos/Ethical Hacking.png";
import securitySpecialistIcon from "@/assets/images/iconos/Cloud-Native Security Specialist.png";
import solucionesAIIcon from "@/assets/images/iconos/Soluciones AI.png";
import trainingDevOpsIcon from "@/assets/images/iconos/Training Especializado en DevOps.png";

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observeElements = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observar todos los elementos con la clase 'scroll-animate'
  const elements = document.querySelectorAll('.scroll-animate');
  elements.forEach((el) => observer.observe(el));
};

onMounted(() => {
  // Ir al top cuando se monta la vista
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  observeElements();
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
        PRODUCTOS Y SERVICIOS
      </h1>
      <p class="text-lg md:text-xl lg:text-2xl text-white uppercase tracking-wide">
        PAQUETES DE PRODUCTOS Y SERVICIOS QUE OFRECEMOS
      </p>
    </div>
  </section>

  <!-- Contenido -->
  <div class="py-20 px-4 md:px-8 lg:px-16 bg-white">
    <div class="max-w-7xl mx-auto">
      
      <!-- Grid de Servicios -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <!-- Desarrollo de Software Cloud-Native -->
        <div class="scroll-animate bg-white border border-gray-300 rounded-lg p-6 hover:shadow-lg transition-shadow">
          <div class="flex justify-center mb-4">
            <img :src="cloudNativeIcon" alt="Cloud Native" class="w-16 h-16 md:w-20 md:h-20" />
          </div>
          <h3 class="text-lg md:text-xl font-bold text-gray-900 uppercase mb-3 text-center">
            Desarrollo de Software Cloud-Native
          </h3>
          <p class="text-sm md:text-base leading-relaxed text-left text-gray-700">
            Diseñamos y desarrollamos tus aplicaciones y microservicios con una arquitectura Cloud-Native, flexibles, adaptables, gestionables, observables y altamente resilientes. Nuestros proyectos son DevSecOps-ready dentro de la arquitectura cloud.
          </p>
        </div>

        <!-- Auditoría IT en Ciberseguridad -->
        <div class="scroll-animate bg-white border border-gray-300 rounded-lg p-6 hover:shadow-lg transition-shadow">
          <div class="flex justify-center mb-4">
            <img :src="auditoriaSeguridadIcon" alt="Auditoría Seguridad" class="w-16 h-16 md:w-20 md:h-20" />
          </div>
          <h3 class="text-lg md:text-xl font-bold text-gray-900 uppercase mb-3 text-center">
            Auditoría IT en Ciberseguridad
          </h3>
          <p class="text-sm md:text-base leading-relaxed text-left text-gray-700">
            Realizamos una evaluación completa del cumplimiento Cloud-Native de la seguridad de su infraestructura, las políticas y las operaciones actuales, considerando principalmente, la seguridad de la Cadena de Suministro del Software y los vectores de ataque más recientes que pueden afectar la estabilidad y seguridad de su plataforma Kubernetes. Nuestros procesos de auditoría Cloud-Native están basados principalmente en los estándares CIS, CISA y NSA.
          </p>
        </div>

        <!-- Ethical Hacking -->
        <div class="scroll-animate bg-white border border-gray-300 rounded-lg p-6 hover:shadow-lg transition-shadow">
          <div class="flex justify-center mb-4">
            <img :src="ethicalHackingIcon" alt="Ethical Hacking" class="w-16 h-16 md:w-20 md:h-20" />
          </div>
          <h3 class="text-lg md:text-xl font-bold text-gray-900 uppercase mb-3 text-center">
            Ethical Hacking
          </h3>
          <p class="text-sm md:text-base leading-relaxed text-left text-gray-700">
            Realizamos un proceso de detección de vulnerabilidades (pentesting) en los sistemas, aplicaciones, datos y la infraestructura de la organización. Nuestro enfoque es principalmente grayhat, lo que nos permite realizar ataques controlados con el consentimiento de nuestros clientes, y mediante el uso de exploits existentes y scripts propietarios.
          </p>
        </div>

        <!-- Cloud-Native Security Specialist -->
        <div class="scroll-animate bg-white border border-gray-300 rounded-lg p-6 hover:shadow-lg transition-shadow">
          <div class="flex justify-center mb-4">
            <img :src="securitySpecialistIcon" alt="Security Specialist" class="w-16 h-16 md:w-20 md:h-20" />
          </div>
          <h3 class="text-lg md:text-xl font-bold text-gray-900 uppercase mb-3 text-center">
            Cloud-Native Security Specialist
          </h3>
          <p class="text-sm md:text-base leading-relaxed text-left text-gray-700">
            Como Certified Kubernetes Security Specialist (CKS) tenemos el conocimiento experto, destrezas y competencias en las mejores prácticas en seguridad de la cadena de suministro del software Cloud-Native, seguridad de aplicaciones basadas en contenedores, las plataformas Kubernetes y la seguridad cloud.
          </p>
        </div>

        <!-- Soluciones AI -->
        <div class="scroll-animate bg-white border border-gray-300 rounded-lg p-6 hover:shadow-lg transition-shadow">
          <div class="flex justify-center mb-4">
            <img :src="solucionesAIIcon" alt="Soluciones AI" class="w-16 h-16 md:w-20 md:h-20" />
          </div>
          <h3 class="text-lg md:text-xl font-bold text-gray-900 uppercase mb-3 text-center">
            Soluciones AI
          </h3>
          <p class="text-sm md:text-base leading-relaxed text-left text-gray-700">
            Ofrecemos servicios de Desarrollo basados en IA generativa con Prompt Engineering y Fine-Tuning, para brindar valor a nuestros clientes y que estos puedan aprovechar las tecnologías emergentes en soluciones de IA.
          </p>
        </div>

        <!-- Training Especializado en DevOps -->
        <div class="scroll-animate bg-white border border-gray-300 rounded-lg p-6 hover:shadow-lg transition-shadow">
          <div class="flex justify-center mb-4">
            <img :src="trainingDevOpsIcon" alt="Training DevOps" class="w-16 h-16 md:w-20 md:h-20" />
          </div>
          <h3 class="text-lg md:text-xl font-bold text-gray-900 uppercase mb-3 text-center">
            Training Especializado en DevOps
          </h3>
          <p class="text-sm md:text-base leading-relaxed text-left text-gray-700 mb-4">
            DevOps es un conjunto de prácticas, filosofías culturales y herramientas que combinan el desarrollo de software y las operaciones de TI para automatizar e integrar los procesos entre ambos. Este enfoque rompe con las barreras tradicionales, permitiendo que los equipos colaboren para entregar aplicaciones y servicios de forma más rápida y fiable. Entre sus principales beneficios se incluyen una entrega más rápida, mayor calidad, mayor eficiencia y una mejor colaboración.
          </p>
          <div class="text-center">
            <button class="bg-[#4f2d7f] hover:bg-[#3d2363] text-white font-bold py-2 px-6 rounded-lg transition-colors uppercase text-sm">
              Ver mas...
            </button>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>
