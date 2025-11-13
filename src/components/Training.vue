<script setup>
import trainingImage from "@/assets/images/pexels-photo-247819.jpg";
import EscudoLogo from "@/assets/images/escudo.png";

const serviciosTraining = [
  "Training en Big Data y Machine Learning",
  "Training en DEVOPS/DEVSECOPS",
  "Training en Ingeniería Reversa",
  "Training en Ciberseguridad Cloud-Native",
];
</script>

<template>
  <section id="training" class="py-20 px-4 md:px-8 lg:px-16">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Imagen Training (Left Side) -->
        <div
          class="order-1 lg:order-2 h-full bg-[url('@/assets/images/pexels-photo-247819.jpg')] rounded-lg bg-[50%_50%] bg-contain bg-repeat"
        >
          <div class="min-h-[400px]"></div>
        </div>

        <!-- Contenido de Texto (Right Side) -->
        <div class="order-2">
          <!-- Heading pequeño -->
          <p
            class="text-gray-400 text-lg text-center md:text-start uppercase tracking-wide mb-2"
          >
            TRAININGS
          </p>

          <!-- Título Principal -->
          <h2 class="text-center md:text-start text-[#4f2d7f] mb-6">
            <div class="text-3xl md:text-4xl font-bold">
              Training en Big Data/ML
            </div>
            <div class="text-1xl md:text-2xl mt-2">
              Criptografía y Ciberseguridad <br />
              Cloud-Native
            </div>
          </h2>

          <!-- Primer Párrafo -->
          <p class="text-gray-700 text-lg leading-relaxed mb-6 text-left">
            Estos entrenamientos son especializados y nuestro personal tiene más
            de 5 años en los tópicos de Big Data, Machine Learning/Deep
            Learning.
          </p>

          <!-- Segundo Párrafo -->
          <p class="text-gray-700 text-lg leading-relaxed mb-8 text-left">
            Nuestra experiencia en Ciberseguridad, Criptografía e Ingeniería
            Reversa es de más de 20 años, y hemos ya impartido estos
            entrenamientos con éxito para algunos de nuestros clientes.
          </p>

          <!-- Lista de Servicios -->
          <div class="space-y-4">
            <div
              v-for="(servicio, index) in serviciosTraining"
              :key="index"
              class="flex items-center gap-3 justify-start animate-slide-left"
              :style="{ animationDelay: `${index * 0.1}s` }"
            >
              <!-- Icono de escudo con check -->
              <div
                class="shrink-0 border-2 border-gray-300 h-14 w-14 rounded-lg flex items-center justify-center"
              >
                <img class="w-12 p-2" :src="EscudoLogo" alt="" />
              </div>
              <!-- Texto del servicio -->
              <p
                class="text-gray-700 text-lg leading-relaxed text-left font-bold w-full"
              >
                {{ servicio }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
