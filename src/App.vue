<script setup>
import Navbar from "@/components/Navbar.vue";
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
import ContactModal from "@/components/ContactModal.vue";
import Footer from "@/components/Footer.vue";
import { useContactModal } from "@/composables/useContactModal";

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

// Modal de contacto global
const { isModalOpen, closeModal } = useContactModal();
</script>

<template>
  <Navbar />

  <HeroSection />

  <ProductosServicios />
  <Ciberseguridad />
  <EthicalHacking />

  <CloudNativeSecurity />
  <Training />
  <SolucionesAI />
  <InsigniasSection />

  <ContactSection />

  <ClientesSection :clientes="clientes" />
  <TestimoniosSection />
  <PagosSection />
  <OficinaSection />

  <Footer />

  <!-- Modal de Contacto Global -->
  <ContactModal :isOpen="isModalOpen" @close="closeModal" />
</template>
