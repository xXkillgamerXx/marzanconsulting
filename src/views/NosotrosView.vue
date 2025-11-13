<script setup>
import { onMounted } from 'vue';
import pagosBackground from "@/assets/images/Actualiza-Web-como-aceptar-pagos-en-linea.jpg";
import ceoImage from "@/assets/images/ceo.png";

onMounted(() => {
  // Ir al top cuando se monta la vista
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
</script>

<template>
  <!-- Banner Header -->
  <section 
    class="relative flex items-center justify-center h-[400px] md:h-[500px] mt-[105px]"
    :style="{
      backgroundImage: `linear-gradient(180deg, rgba(79, 45, 127, 0.85), rgba(79, 45, 127, 0.85)), url(${pagosBackground})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }"
  >
    <div class="relative z-10 w-full max-w-7xl mx-auto text-center px-4">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 uppercase tracking-tight">
        NOSOTROS
      </h1>
      <p class="text-lg md:text-xl lg:text-2xl text-white uppercase tracking-wide">
        CONOCE MÁS SOBRE NUESTRA EMPRESA
      </p>
    </div>
  </section>

  <!-- Contenido Principal -->
  <div class="py-20 px-4 md:px-8 lg:px-16 bg-white">
    <div class="max-w-7xl mx-auto">
      
      <!-- Descripción de la Empresa -->
      <div class="mb-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-8">
          <!-- Texto -->
          <div>
            <!-- Título Principal -->
            <h2 class="text-3xl lg:text-4xl font-bold mb-6 text-[#4f2d7f] text-left">
              MARZAN MERCADO CONSULTING
            </h2>
            
            <p class="text-lg md:text-xl leading-relaxed text-left mb-6 text-gray-700">
              Esta empresa nace en Abril del año 2017, con la iniciativa de proporcionar servicios de gestión y desarrollo de software para las empresas tanto locales como extranjeras. Nuestra empresa provee servicios para las plataformas Windows y Linux, y también proveemos desarrollo e integración de mobile apps para Android y iOS, tanto para teléfonos y tablets.
            </p>
            <p class="text-lg md:text-xl leading-relaxed text-left text-gray-700">
              Fue fundada en República Dominicana por el <strong>Ing. Harold L. Marzan, M.Sc.</strong>, el cual tiene más de 20 años de experiencia en todos los aspectos del ciclo de vida del desarrollo del software.
            </p>
          </div>
          <!-- Imagen del CEO -->
          <div class="flex justify-center lg:justify-end">
            <div 
              :style="{
                width: '100%',
                paddingLeft: '0px',
                backgroundImage: `url(${ceoImage})`,
                backgroundPosition: '50% 50%',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'scroll',
                minHeight: '400px',
                borderRadius: '8px'
              }"
            >
            </div>
          </div>
        </div>
      </div>

      <!-- Visión -->
      <div class="mb-16 md:mb-24">
        <div class="border-l-4 border-[#4f2d7f] pl-6 md:pl-8">
          <h3 class="text-2xl md:text-3xl lg:text-4xl font-bold text-[#4f2d7f] mb-6 text-left uppercase tracking-wide">
            VISIÓN
          </h3>
          <p class="text-base md:text-lg lg:text-xl leading-relaxed text-left max-w-4xl text-gray-700">
            Ser el referente de mayor importancia en la Transformación Digital y Adopción de Tecnologías Cloud de manera segura y confiable de nuestros clientes y el éxito de sus negocios.
          </p>
        </div>
      </div>

      <!-- Misión -->
      <div class="mb-16 md:mb-24">
        <div class="border-l-4 border-[#4f2d7f] pl-6 md:pl-8">
          <h3 class="text-2xl md:text-3xl lg:text-4xl font-bold text-[#4f2d7f] mb-6 text-left uppercase tracking-wide">
            MISIÓN
          </h3>
          <p class="text-base md:text-lg lg:text-xl leading-relaxed text-left max-w-4xl text-gray-700">
            Ayudar a las empresas en la integración de tecnologías y con sus necesidades actuales de software, que le permitan avanzar hacia el desarrollo tecnológico, así como ser su palanca en la Transformación Digital, a través de la modernización de su infraestructura y sus aplicaciones, con GitOps, DevSecOps y tecnologías Cloud-Native, y brindar el soporte, para que nuestros clientes puedan identificar y mitigar vulnerabilidades en sus Sistemas de Información, a través de nuestros servicios de Ingeniería Reversa y Auditoría IT en Ciberseguridad.
          </p>
        </div>
      </div>

      <!-- Valores -->
      <div class="mb-16">
        <div class="border-l-4 border-[#4f2d7f] pl-6 md:pl-8">
          <h3 class="text-2xl md:text-3xl lg:text-4xl font-bold text-[#4f2d7f] mb-8 text-left uppercase tracking-wide">
            VALORES
          </h3>
          <ul class="space-y-5 max-w-4xl">
            <li class="flex items-start gap-4">
              <div class="flex-shrink-0 w-6 h-6 rounded-full bg-[#4f2d7f] flex items-center justify-center mt-1">
                <span class="text-white font-bold text-sm">•</span>
              </div>
              <p class="text-base md:text-lg lg:text-xl leading-relaxed text-left font-medium pt-0.5 text-gray-700">
                Honestidad e Integridad.
              </p>
            </li>
            <li class="flex items-start gap-4">
              <div class="flex-shrink-0 w-6 h-6 rounded-full bg-[#4f2d7f] flex items-center justify-center mt-1">
                <span class="text-white font-bold text-sm">•</span>
              </div>
              <p class="text-base md:text-lg lg:text-xl leading-relaxed text-left font-medium pt-0.5 text-gray-700">
                Hacer lo Correcto.
              </p>
            </li>
            <li class="flex items-start gap-4">
              <div class="flex-shrink-0 w-6 h-6 rounded-full bg-[#4f2d7f] flex items-center justify-center mt-1">
                <span class="text-white font-bold text-sm">•</span>
              </div>
              <p class="text-base md:text-lg lg:text-xl leading-relaxed text-left font-medium pt-0.5 text-gray-700">
                Trabajo Duro y Consistencia.
              </p>
            </li>
            <li class="flex items-start gap-4">
              <div class="flex-shrink-0 w-6 h-6 rounded-full bg-[#4f2d7f] flex items-center justify-center mt-1">
                <span class="text-white font-bold text-sm">•</span>
              </div>
              <p class="text-base md:text-lg lg:text-xl leading-relaxed text-left font-medium pt-0.5 text-gray-700">
                Alentar el Trabajo en Equipo.
              </p>
            </li>
            <li class="flex items-start gap-4">
              <div class="flex-shrink-0 w-6 h-6 rounded-full bg-[#4f2d7f] flex items-center justify-center mt-1">
                <span class="text-white font-bold text-sm">•</span>
              </div>
              <p class="text-base md:text-lg lg:text-xl leading-relaxed text-left font-medium pt-0.5 text-gray-700">
                Exhibir Profesionalismo Constante.
              </p>
            </li>
            <li class="flex items-start gap-4">
              <div class="flex-shrink-0 w-6 h-6 rounded-full bg-[#4f2d7f] flex items-center justify-center mt-1">
                <span class="text-white font-bold text-sm">•</span>
              </div>
              <p class="text-base md:text-lg lg:text-xl leading-relaxed text-left font-medium pt-0.5 text-gray-700">
                Alentar la Proactividad y la Iniciativa Individual.
              </p>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>
