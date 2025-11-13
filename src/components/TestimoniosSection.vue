<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import juanMendoza from "@/assets/images/Juan Mendoza.png";
import francisReyes from "@/assets/images/FRANCIS REYES.png";
import stalinRivas from "@/assets/images/Stalin Rivas.png";
import qikLogo from "@/assets/images/Qik.png";
import comillasImg from "@/assets/images/comillas.png";

const testimonios = ref([
  {
    id: 1,
    nombre: "Juan Mendoza",
    empresa: "Sicflex Cloud Software Solution",
    cargo: "Gerente de Desarrollo",
    imagen: juanMendoza,
    testimonio:
      "Gracias al equipo de Marzan Mercado Consulting por su profesionalismo y dedicación durante todo el proceso de migración a la nueva infraestructura de Google. La transición fue impecable y notamos una mejora inmediata en el rendimiento y la fiabilidad. Para Sicflex Cloud, la nueva arquitectura ha optimizado nuestros procesos y nos permite ofrecer un mejor servicio a nuestros clientes. La migración a Google Cloud se completó sin problemas y hemos visto una reducción en los tiempos de respuesta de la aplicación. Ahora podemos escalar nuestros servicios de manera más eficiente, lo que significa que nuestros clientes experimentan menos interrupciones y una mayor disponibilidad. ¡Trabajar con un equipo de profesionales del nivel de Marzan Mercado Consulting es lo mejor que ha sucedido en nuestra empresa!",
    rating: 5,
  },
  {
    id: 2,
    nombre: "Francis Reyes",
    empresa: "Novosit SRL",
    cargo: "Gerente General",
    imagen: francisReyes,
    testimonio:
      "Trabajar con el equipo de Marzan Mercado Consulting transformó por completo nuestra Plataforma ProDoctivity Cloud. Modernizaron nuestra infraestructura con Kubernetes e integraron la automatización DevOps en nuestro flujo de trabajo. Ahora implementamos más rápido, escalamos sin esfuerzo y operamos con mucha mayor fiabilidad y confianza. Nuestro rendimiento ha mejorado, los costes se han optimizado y nos sentimos preparados para el futuro como nunca antes. ¡Una experiencia realmente extraordinaria!",
    rating: 5,
  },
  {
    id: 3,
    nombre: "Stalin Rivas",
    empresa: "Wepsys Latam | Insoltech",
    cargo: "CEO",
    imagen: stalinRivas,
    testimonio:
      "Contar con el apoyo de profesionales de alto perfil como los pertenecientes a Marzan Mercado Consulting genera altos niveles de confianza a todo el personal que forma parte de los proyectos de implementación de SDLCs y ALMs, elementos que en Wepsys Latam e Insoltech impulsamos constantemente, tanto internamente como para ambientes en nuestros clientes. Recientemente hemos implementado todo un ciclo de vida de desarrollo de software utilizando las más recientes y mejores prácticas de DevSecOps resultando en una implementación exitosa para uno de nuestros clientes del sector bancario en Panamá. Continuaremos utilizando los servicios de MMC en todos los proyectos futuros en los que sea posible, para así mantener el nivel de excelencia que hasta ahora hemos podido llevar a nuestros clientes.",
    rating: 5,
  },
  {
    id: 4,
    nombre: "Qik",
    empresa: "Banco Digital",
    cargo: "",
    imagen: qikLogo,
    testimonio:
      "Durante el año 2023, Marzan Mercado Consulting fue un socio clave en el fortalecimiento de nuestra gobernanza tecnológica y en la mejora de la resiliencia operativa. Sus servicios de consultoría y auditoría IT nos permitieron identificar riesgos críticos, cerrar brechas de cumplimiento y elevar nuestros estándares de seguridad sin afectar la continuidad del negocio. Su enfoque combinó experiencia técnica con una metodología clara y orientada a resultados. Gracias a su acompañamiento, implementamos controles más robustos, optimizamos procesos internos y alineamos nuestras prácticas con marcos regulatorios y de seguridad reconocidos. Este trabajo se tradujo en beneficios tangibles: mayor eficiencia, mejor gestión del riesgo y una base sólida para el crecimiento futuro. Valoramos especialmente la profesionalidad y compromiso de Marzan. Su aporte nos ha permitido operar con mayor confianza en un entorno digital cada vez más complejo.",
    rating: 5,
  },
]);

const currentIndex = ref(0);
const autoplayInterval = ref(null);

const nextTestimonial = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonios.value.length;
};

const prevTestimonial = () => {
  currentIndex.value =
    currentIndex.value === 0
      ? testimonios.value.length - 1
      : currentIndex.value - 1;
};

const goToTestimonial = (index) => {
  currentIndex.value = index;
};

const startAutoplay = () => {
  autoplayInterval.value = setInterval(() => {
    nextTestimonial();
  }, 5000); // Cambia cada 5 segundos
};

const stopAutoplay = () => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value);
    autoplayInterval.value = null;
  }
};

onMounted(() => {
  startAutoplay();
});

onUnmounted(() => {
  stopAutoplay();
});
</script>

<template>
  <section id="testimonios" class="bg-white py-20">
    <div class="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
      <!-- Título y Subtítulo Centrados -->
      <div class="text-center mb-12">
        <h2
          class="text-3xl text-[#4f2d7f] md:text-4xl lg:text-5xl font-bold mb-4 uppercase"
        >
          TESTIMONIOS
        </h2>
        <p class="text-lg md:text-xl text-[#4f2d7f] uppercase">
          LO QUE DICEN NUESTROS CLIENTES
        </p>
      </div>

      <!-- Carousel Container -->
      <div
        class="relative"
        @mouseenter="stopAutoplay"
        @mouseleave="startAutoplay"
      >
        <!-- Botones de Navegación - Fuera de la card -->
        <button
          @click="prevTestimonial"
          class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white/90 hover:bg-white text-[#4f2d7f] p-4 md:p-5 rounded-full transition-all z-10 shadow-lg hover:shadow-xl"
          aria-label="Testimonio anterior"
        >
          <svg
            class="w-8 h-8 md:w-10 md:h-10"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        <!-- Testimonios Carousel -->
        <div
          class="relative overflow-hidden rounded-2xl bg-[#4f2d7f] shadow-xl"
        >
          <div
            class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
          >
            <div
              v-for="testimonio in testimonios"
              :key="testimonio.id"
              class="flex items-center min-w-full px-8 md:px-16 py-12 md:py-16"
            >
              <div class="max-w-5xl mx-auto">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <!-- Comilla Grande y Texto -->
                  <div class="lg:col-span-2 relative">
                    <!-- Comilla de Apertura - Imagen -->
                    <div
                      class="absolute -top-2 -left-2 select-none pointer-events-none z-0"
                    >
                      <img
                        :src="comillasImg"
                        alt="Comillas decorativas"
                        class="w-[60px] md:w-[80px] h-auto opacity-30"
                      />
                    </div>

                    <!-- Texto del Testimonio -->
                    <p
                      class="text-white text-lg md:text-xl leading-relaxed relative z-10 pt-8 pl-4"
                    >
                      {{ testimonio.testimonio }}
                    </p>
                  </div>

                  <!-- Información del Cliente -->
                  <div
                    class="lg:col-span-1 flex flex-col items-center text-center"
                  >
                    <div
                      class="w-48 h-48 md:w-56 md:h-56 rounded-full bg-white/10 border-4 border-white/20 mb-6 flex items-center justify-center overflow-hidden"
                    >
                      <img
                        :src="testimonio.imagen"
                        :alt="testimonio.nombre"
                        class="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <p class="text-white font-bold text-3xl mb-2">
                      {{ testimonio.nombre }}
                    </p>
                    <p
                      v-if="testimonio.cargo"
                      class="text-white/80 text-lg mb-1"
                    >
                      {{ testimonio.cargo }}
                    </p>
                    <p class="text-white/80 text-lg mb-2">
                      {{ testimonio.empresa }}
                    </p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          @click="nextTestimonial"
          class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white/90 hover:bg-white text-[#4f2d7f] p-4 md:p-5 rounded-full transition-all z-10 shadow-lg hover:shadow-xl"
          aria-label="Siguiente testimonio"
        >
          <svg
            class="w-8 h-8 md:w-10 md:h-10"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>

        <!-- Indicadores -->
        <div class="flex justify-center gap-2 mt-8">
          <button
            v-for="(testimonio, index) in testimonios"
            :key="testimonio.id"
            @click="goToTestimonial(index)"
            class="w-3 h-3 rounded-full transition-all"
            :class="
              currentIndex === index
                ? 'bg-[#4f2d7f] w-8'
                : 'bg-[#4f2d7f]/40 hover:bg-[#4f2d7f]/60'
            "
            :aria-label="`Ir al testimonio ${index + 1}`"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>
