<script setup>
import backgroundImage from "@/assets/images/Photo-10.jpg";
import { useContactModal } from "@/composables/useContactModal";

const { openModal } = useContactModal();
</script>

<template>
  <section 
    id="contacto" 
    class="relative flex items-center h-[600px]"
    :style="{
      padding: '150px 30px',
      backgroundColor: '#f5f7fa',
      backgroundImage: `linear-gradient(180deg, rgba(79, 45, 127, 0.54), rgba(79, 45, 127, 0.54)), url(${backgroundImage})`,
      backgroundPosition: '0px 0px, 50% 50%',
      backgroundSize: 'auto, cover',
      backgroundAttachment: 'scroll, fixed',
      backgroundRepeat: 'no-repeat'
    }"
  >

    <!-- Contenido -->
    <div class="relative z-10 w-full max-w-7xl mx-auto text-center">
      <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
        OFRECEMOS VALOR Y CALIDAD<br />
        PARA TODA SU EMPRESA
      </h2>
      
      <p class="text-white/90 mb-8 max-w-2xl mx-auto">
        Estamos para servirle. Si desea obtener más información puede contactarnos.
      </p>

      <div class="mt-8">
        <button
          @click="openModal"
          class="inline-flex items-center rounded-md bg-[#7f42d5] text-white px-10 py-5 font-semibold uppercase hover:bg-[#7f42d5]/80 transition-colors cursor-pointer"
        >
          CONTÁCTANOS
        </button>
      </div>
    </div>
  </section>
</template>

