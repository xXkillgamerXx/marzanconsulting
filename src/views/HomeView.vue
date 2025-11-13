<script setup>
import { onMounted, nextTick } from "vue";
import { useRoute } from "vue-router";
import HeroSection from "@/components/HeroSection.vue";
import ProductosServicios from "@/components/ProductosServicios.vue";
import Ciberseguridad from "@/components/Ciberseguridad.vue";
import Training from "@/components/Training.vue";
import SolucionesAI from "@/components/SolucionesAI.vue";
import EthicalHacking from "@/components/EthicalHacking.vue";
import CloudNativeSecurity from "@/components/CloudNativeSecurity.vue";
import ClientesSection from "@/components/ClientesSection.vue";
import TestimoniosSection from "@/components/TestimoniosSection.vue";
import InsigniasSection from "@/components/InsigniasSection.vue";
import PagosSection from "@/components/PagosSection.vue";
import ContactSection from "@/components/ContactSection.vue";
import OficinaSection from "@/components/OficinaSection.vue";
import patternBg from "@/assets/images/g840.png";

const route = useRoute();

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

  // Observar elementos con animate-slide-up para activarlos cuando aparecen
  const slideUpObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Activar la animación removiendo y agregando la clase
        entry.target.classList.remove('animate-slide-up');
        void entry.target.offsetWidth; // Forzar reflow
        entry.target.classList.add('animate-slide-up');
        slideUpObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const slideUpElements = document.querySelectorAll('.animate-slide-up');
  slideUpElements.forEach((el) => slideUpObserver.observe(el));
};

// Importar logos de clientes
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

// Manejar scroll a sección cuando se navega con hash
onMounted(() => {
  nextTick(() => {
    if (route.hash) {
      const hash = route.hash.slice(1); // Remover el #
      if (['pagos', 'clientes'].includes(hash)) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const offsetTop = element.offsetTop - 80;
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            });
          }
        }, 300);
      } else {
        // Si no hay hash, ir al top
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    } else {
      // Si no hay hash, ir al top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
    // Iniciar observador de animaciones
    observeElements();
  });
});
</script>

<template>
  <HeroSection />

  <div
    class="relative text-center"
    :style="{
      marginTop: '0px',
      marginBottom: '0px',
      paddingTop: '0px',
      paddingBottom: '50px',
      backgroundColor: '#fff',
      backgroundImage: `linear-gradient(90deg, hsla(0, 0%, 100%, 0.9), #fff 50%, #fff 0, hsla(0, 0%, 100%, 0.9)), url(${patternBg})`,
      backgroundPosition: '0px 0px, 50% 50%',
      backgroundSize: 'auto, auto',
      backgroundRepeat: 'repeat, repeat',
      backgroundAttachment: 'scroll, scroll',
      fontWeight: '300',
    }"
  >
    <div class="relative z-10">
      <div class="scroll-animate">
        <ProductosServicios />
      </div>
      <div class="scroll-animate">
        <Ciberseguridad />
      </div>
      <div class="scroll-animate">
        <EthicalHacking />
      </div>
      <div class="scroll-animate">
        <CloudNativeSecurity />
      </div>
      <div class="scroll-animate">
        <Training />
      </div>
      <div class="scroll-animate">
        <SolucionesAI />
      </div>
    </div>
  </div>

  <div class="scroll-animate">
    <InsigniasSection />
  </div>

  <div class="scroll-animate">
    <ContactSection />
  </div>

  <ClientesSection :clientes="clientes" />
  <div class="scroll-animate">
    <TestimoniosSection />
  </div>
  <div class="scroll-animate">
    <PagosSection />
  </div>
  <div class="scroll-animate">
    <OficinaSection />
  </div>
</template>

