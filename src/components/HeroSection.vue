<script setup>
import logoMini from "@/assets/images/logo- mini.png";
import heroVideo from "@/assets/videos/video-mmc-bg.mp4";

const scrollToClientes = (e) => {
  e.preventDefault();
  const element = document.getElementById('clientes');
  if (element) {
    const offsetTop = element.offsetTop - 80; // Offset para el navbar
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
};
</script>

<template>
  <section id="inicio" class="relative h-[100vh] pt-20">
    <video
      class="absolute inset-0 w-full h-full object-cover"
      :src="heroVideo"
      autoplay
      muted
      loop
      playsinline
    ></video>
    <div class="absolute inset-0 bg-[#4f2d7f99]"></div>

    <div class="relative z-10 h-full flex items-center justify-center px-6">
      <div class="text-center text-white">
        <img
          :src="logoMini"
          alt="MMC isotipo"
          class="mx-auto h-32 w-auto mb-6"
        />
        <h1
          class="text-4xl md:text-7xl mb-12 tracking-tight font-bold uppercase"
        >
          MARZAN MERCADO<br class="hidden md:block" />CONSULTING
        </h1>
        <p class="my-10 text-lg md:text-xl font-normal leading-relaxed">
          LA CALIDAD DEL SERVICIO Y NUESTRO COMPROMISO PARA LOGRAR RESULTADOS
          <br />
          EXTRAORDINARIOS ES LO QUE NOS HACE DIFERENTES.
        </p>
        <div class="mt-8">
          <a
            href="#clientes"
            @click="scrollToClientes"
            class="inline-flex items-center rounded-md bg-[#7f42d5] text-white px-10 py-5 font-semibold border-2 border-white/0 uppercase hover:border-white hover:bg-[#7f42d5]/60 transition-colors cursor-pointer"
            >NUESTROS CLIENTES</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

