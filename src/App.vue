<script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import ContactModal from "@/components/ContactModal.vue";
import { useContactModal } from "@/composables/useContactModal";

const { isModalOpen, closeModal } = useContactModal();
</script>

<template>
  <Navbar />
  <router-view />
  <Footer />
  
  <!-- Modal de Contacto Global - Disponible en todas las vistas -->
  <ContactModal :isOpen="isModalOpen" @close="closeModal" />
</template>
