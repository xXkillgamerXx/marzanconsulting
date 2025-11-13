<script setup>
import paypalLogo from "@/assets/images/paypal.png";
import pagosBackground from "@/assets/images/Actualiza-Web-como-aceptar-pagos-en-linea.jpg";
</script>

<template>
  <section id="pagos" class="bg-white">
    <!-- Sección de Pagos con fondo -->
    <div 
      class="relative flex items-center justify-center py-20"
      :style="{
        padding: '150px 30px',
        backgroundColor: '#f5f7fa',
        backgroundImage: `linear-gradient(180deg, rgba(79, 45, 127, 0.54), rgba(79, 45, 127, 0.54)), url(${pagosBackground})`,
        backgroundPosition: '0px 0px, 50% 50%',
        backgroundSize: 'auto, cover',
        backgroundAttachment: 'scroll, fixed',
        backgroundRepeat: 'no-repeat'
      }"
    >
      <!-- Contenido -->
      <div class="relative z-10 w-full max-w-7xl mx-auto text-center px-4">
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
          Pagos
        </h2>
        
        <!-- Botón PayPal -->
        <div class="mt-8">
          <a
            href="https://www.paypal.com/paypalme/marzanconsulting"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center rounded-full bg-[#FFC439] hover:bg-[#FFB800] px-10 py-5 transition-colors shadow-lg"
          >
            <!-- Logo PayPal -->
            <img 
              :src="paypalLogo" 
              alt="PayPal" 
              class="h-auto w-80 px-18"
            />
          </a>
        </div>
      </div>
    </div>

  </section>
</template>

