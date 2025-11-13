<script setup>
import solucionesAIImage from "@/assets/images/Soluciones_AI.png";
import EscudoLogo from "@/assets/images/escudo.png";

const serviciosAI = [
  "Chatbot Asistente Virtual Experto",
  "AI para Generación de Contenido Personalizado",
  "Chatbots de Atención Automatizada al Cliente",
  "Sistemas de Recomendación de Productos o Servicios",
  "Generación de Contenido Creativo",
  "OCR de Documentos",
  "Reconocimiento facial",
];
</script>

<template>
  <section id="soluciones-ai" class="py-20 px-4 md:px-8 lg:px-16">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Contenido de Texto (Left Side) -->
        <div class="order-2 lg:order-1">
          <!-- Heading pequeño -->
          <p
            class="text-gray-400 text-lg text-center md:text-start uppercase tracking-wide mb-2"
          >
            SOLUCIONES AI
          </p>

          <!-- Título Principal -->
          <h2
            class="text-3xl md:text-4xl text-center md:text-start font-bold text-[#4f2d7f] mb-6"
          >
            Soluciones AI
          </h2>

          <!-- Párrafo descriptivo -->
          <p class="text-gray-700 text-lg leading-relaxed mb-8 text-left">
            Ofrecemos servicios de desarrollo de IA generativa, incluyendo
            Prompt Engineering y Fine-Tuning, para ayudar a nuestros clientes a
            aprovechar las tecnologías emergentes de IA.
          </p>

          <!-- Lista de Servicios -->
          <div class="space-y-4">
            <div
              v-for="(servicio, index) in serviciosAI"
              :key="index"
              class="flex items-center gap-3 justify-start animate-slide-up"
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

        <!-- Imagen Soluciones AI (Right Side) -->
        <div
          class="order-1 lg:order-2 h-full bg-[url('@/assets/images/Soluciones_AI.png')]"
          style="
            background-position: 50% 50%;
            background-size: cover;
            min-height: 500px;
            background-repeat: repeat;
            border-radius: 10px;
          "
        ></div>
      </div>
    </div>
  </section>
</template>
