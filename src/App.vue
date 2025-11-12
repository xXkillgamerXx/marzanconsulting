<script setup>
import Navbar from "@/components/Navbar.vue";
import HeroSection from "@/components/HeroSection.vue";
import ProductosServicios from "@/components/ProductosServicios.vue";
import Ciberseguridad from "@/components/Ciberseguridad.vue";
import Training from "@/components/Training.vue";
import SolucionesAI from "@/components/SolucionesAI.vue";
import EthicalHacking from "@/components/EthicalHacking.vue";
import CloudNativeSecurity from "@/components/CloudNativeSecurity.vue";

</script>

<template>
  <Navbar />

  <HeroSection />

  <ProductosServicios />
  <Ciberseguridad />
  <EthicalHacking />
  <CloudNativeSecurity />
  <Training/>
  <SolucionesAI/>
</template>
