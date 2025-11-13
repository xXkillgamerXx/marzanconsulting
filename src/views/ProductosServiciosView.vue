<script setup>
import { ref, onMounted } from 'vue';
import pagosBackground from "@/assets/images/Actualiza-Web-como-aceptar-pagos-en-linea.jpg";

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observeElements = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observar todos los elementos con la clase 'scroll-animate'
  const elements = document.querySelectorAll('.scroll-animate');
  elements.forEach((el) => observer.observe(el));
};

onMounted(() => {
  // Ir al top cuando se monta la vista
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  observeElements();
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
        PRODUCTOS Y SERVICIOS
      </h1>
      <p class="text-lg md:text-xl lg:text-2xl text-white uppercase tracking-wide">
        PAQUETES DE PRODUCTOS Y SERVICIOS QUE OFRECEMOS
      </p>
    </div>
  </section>

  <!-- Contenido -->
  <div class="py-20 px-4 md:px-8 lg:px-16 bg-white">
    <div class="max-w-7xl mx-auto">
      
      <!-- Título Principal -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4f2d7f] mb-8 uppercase">
          NUESTROS SERVICIOS
        </h2>
      </div>

      <!-- Introducción -->
      <div class="mb-16 mx-auto">
        <p class="scroll-animate text-base md:text-lg lg:text-xl leading-relaxed text-left mb-6 text-gray-700">
          Ofrecemos Soluciones de Automatización de procesos de negocios para las diversas areas empresariales, los cuales incluyen la definición de nuevos procesos, optimización de procesos existentes, integrando y comunicando plataformas tecnológicas diversas, todo a travéz del Desarrollo del Software.
        </p>
        <p class="scroll-animate text-base md:text-lg lg:text-xl leading-relaxed text-left mb-6 text-gray-700">
          Nos encanta trabajar en proyectos innovadores, que requieran de Ingeniería de Software Avanzada y Tecnología de Contenedores y Kubernetes.
        </p>
        <p class="scroll-animate text-base md:text-lg lg:text-xl leading-relaxed text-left mb-8 text-gray-700">
          Tráiga sus ideas, y nosotros la haremos realidad en forma de nueva tecnología al alcance de sus manos.
        </p>
        <p class="scroll-animate text-2xl md:text-3xl font-bold text-[#4f2d7f] text-center">
          Somos Ingenieros Expertos
        </p>
      </div>

      <!-- Grid de Servicios -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <!-- OUTSOURCING -->
        <div class="scroll-animate bg-white border border-gray-300 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
          <div class="flex justify-center mb-4">
            <i class="fas fa-cogs text-[#4f2d7f] text-5xl md:text-6xl"></i>
          </div>
          <h3 class="text-lg md:text-xl font-bold text-gray-900 uppercase mb-3">
            OUTSOURCING
          </h3>
          <p class="text-sm md:text-base leading-relaxed text-center text-gray-700">
            Desarrollo de Productos Especializados de Software con C/C++/Java o C#, tales como: Middlewares y Servicios Windows y Linux. También trabajamos con Python y Javascript.
          </p>
        </div>

        <!-- MOBILE APPS -->
        <div class="scroll-animate bg-white border border-gray-300 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
          <div class="flex justify-center mb-4">
            <i class="fas fa-mobile-alt text-[#4f2d7f] text-5xl md:text-6xl"></i>
          </div>
          <h3 class="text-lg md:text-xl font-bold text-gray-900 uppercase mb-3">
            MOBILE APPS
          </h3>
          <p class="text-sm md:text-base leading-relaxed text-center text-gray-700">
            Desarrollo de Apps para Teléfonos y Tablets, para las plataformas Apple iOS y Google Android.
          </p>
        </div>

        <!-- DISEÑO DE APLICACIONES -->
        <div class="scroll-animate bg-white border border-gray-300 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
          <div class="flex justify-center mb-4">
            <i class="fas fa-laptop-code text-[#4f2d7f] text-5xl md:text-6xl"></i>
          </div>
          <h3 class="text-lg md:text-xl font-bold text-gray-900 uppercase mb-3">
            DISEÑO DE APLICACIONES
          </h3>
          <p class="text-sm md:text-base leading-relaxed text-center text-gray-700">
            Servicios para diseñar y documentar Proyectos de Software. Experiencia con Rational y UML.
          </p>
        </div>

        <!-- ASP.NET, MVC Y PHP -->
        <div class="scroll-animate bg-white border border-gray-300 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
          <div class="flex justify-center mb-4">
            <i class="fas fa-code text-[#4f2d7f] text-5xl md:text-6xl"></i>
          </div>
          <h3 class="text-lg md:text-xl font-bold text-gray-900 uppercase mb-3">
            ASP.NET, MVC Y PHP
          </h3>
          <p class="text-sm md:text-base leading-relaxed text-center text-gray-700">
            Experiencia en el desarrollo de Aplicaciones Web para Windows y Linux.
          </p>
        </div>

        <!-- INTEGRACIÓN DE APLICACIONES -->
        <div class="scroll-animate bg-white border border-gray-300 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
          <div class="flex justify-center mb-4">
            <i class="fas fa-cloud text-[#4f2d7f] text-5xl md:text-6xl"></i>
          </div>
          <h3 class="text-lg md:text-xl font-bold text-gray-900 uppercase mb-3">
            INTEGRACIÓN DE APLICACIONES
          </h3>
          <p class="text-sm md:text-base leading-relaxed text-center text-gray-700">
            Experiencia integrando Aplicaciones contra CRMs, Software de Colaboración, Bases de Datos Relacionales, Web APIs, Windows y Linux APIs, otros.
          </p>
        </div>

        <!-- APLICACIONES DE SERVIDOR -->
        <div class="scroll-animate bg-white border border-gray-300 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
          <div class="flex justify-center mb-4">
            <i class="fas fa-server text-[#4f2d7f] text-5xl md:text-6xl"></i>
          </div>
          <h3 class="text-lg md:text-xl font-bold text-gray-900 uppercase mb-3">
            APLICACIONES DE SERVIDOR
          </h3>
          <p class="text-sm md:text-base leading-relaxed text-center text-gray-700">
            Experiencia con Vert.x, Kafka, Git, Apache, Apache Solr, Nginx, Docker, Circle Ci, Google Cloud, Kubernetes, AWS, IBM BlueMix, otros.
          </p>
        </div>

        <!-- AUTENTICACIÓN DE 2 FACTORES -->
        <div class="scroll-animate bg-white border border-gray-300 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
          <div class="flex justify-center mb-4">
            <i class="fas fa-key text-[#4f2d7f] text-5xl md:text-6xl"></i>
          </div>
          <h3 class="text-lg md:text-xl font-bold text-gray-900 uppercase mb-3">
            AUTENTICACIÓN DE 2 FACTORES
          </h3>
          <p class="text-sm md:text-base leading-relaxed text-center text-gray-700">
            Experiencia integrando Aplicaciones Web con Soluciones 2-Factor Authentication tales como Fortinet Authenticator
          </p>
        </div>

        <!-- SEGURIDAD DE APLICACIONES -->
        <div class="scroll-animate bg-white border border-gray-300 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
          <div class="flex justify-center mb-4">
            <i class="fas fa-chart-bar text-[#4f2d7f] text-5xl md:text-6xl"></i>
          </div>
          <h3 class="text-lg md:text-xl font-bold text-gray-900 uppercase mb-3">
            SEGURIDAD DE APLICACIONES
          </h3>
          <p class="text-sm md:text-base leading-relaxed text-center text-gray-700">
            Experiencia integrando Aplicaciones Windows y Linux con Tarjetas Microchip o SmartCards de marcas tales como CryptoFlex, Gemalto, ACOS5, ACOS6, otras.
          </p>
        </div>

        <!-- MACHINE LEARNING & DEEP LEARNING -->
        <div class="scroll-animate bg-white border border-gray-300 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
          <div class="flex justify-center mb-4">
            <i class="fas fa-eye text-[#4f2d7f] text-5xl md:text-6xl"></i>
          </div>
          <h3 class="text-lg md:text-xl font-bold text-gray-900 uppercase mb-3">
            MACHINE LEARNING & DEEP LEARNING
          </h3>
          <p class="text-sm md:text-base leading-relaxed text-center text-gray-700">
            Ofrecemos asesorías y entrenamientos para proyectos Machine Learning & Deep Learning para Android, Windows y Linux, y para la Plataforma Google Cloud.
          </p>
        </div>

        <!-- CIBERSEGURIDAD GREYHAT -->
        <div class="scroll-animate bg-white border border-gray-300 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
          <div class="flex justify-center mb-4">
            <i class="fas fa-lock text-[#4f2d7f] text-5xl md:text-6xl"></i>
          </div>
          <h3 class="text-lg md:text-xl font-bold text-gray-900 uppercase mb-3">
            CIBERSEGURIDAD GREYHAT
          </h3>
          <p class="text-sm md:text-base leading-relaxed text-center text-gray-700">
            Entrenamientos Greyhat en Ciberseguridad para Android, Windows y Linux, y para la Plataforma Google Cloud.
          </p>
        </div>

        <!-- GESTIÓN DE PROYECTOS -->
        <div class="scroll-animate bg-white border border-gray-300 rounded-lg p-6 text-center hover:shadow-lg transition-shadow md:col-start-2 lg:col-start-2">
          <div class="flex justify-center mb-4">
            <i class="fas fa-flag text-[#4f2d7f] text-5xl md:text-6xl"></i>
          </div>
          <h3 class="text-lg md:text-xl font-bold text-gray-900 uppercase mb-3">
            GESTIÓN DE PROYECTOS
          </h3>
          <p class="text-sm md:text-base leading-relaxed text-center text-gray-700">
            Ofrecemos Gestión de Proyectos con PM4R y Scrum.
          </p>
        </div>

      </div>

    </div>
  </div>

  <!-- Banner SERVICIOS PARA MIPYMES -->
  <section 
    class="relative flex items-center justify-center h-[400px] md:h-[500px]"
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
        SERVICIOS PARA MIPYMES
      </h1>
      <p class="text-lg md:text-xl lg:text-2xl text-white uppercase tracking-wide">
        SERVICIOS DE ASESORÍA QUE OFRECEMOS PARA LAS MIPYMES
      </p>
    </div>
  </section>

  <!-- Contenido MIPYMES -->
  <div class="py-20 px-4 md:px-8 lg:px-16 bg-white">
    <div class="max-w-7xl mx-auto">
      
      <!-- Título Principal -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4f2d7f] mb-8 uppercase">
          NUESTROS SERVICIOS
        </h2>
      </div>

      <!-- Introducción -->
      <div class="mb-16 mx-auto">
        <p class="scroll-animate text-base md:text-lg lg:text-xl leading-relaxed text-left mb-6 text-gray-700">
          El objetivo de nuestros paquetes de servicios para las MIPYMES, es ayudar a las pequeñas y medianas empresas a lograr una transformación digital efectiva, lo que a su vez permite el aumento de su visibilidad para nuevos clientes, así como reforzar la confianza de sus actuales clientes, y por ende un aumento en las ventas.
        </p>
        <p class="scroll-animate text-base md:text-lg lg:text-xl leading-relaxed text-left mb-8 text-gray-700">
          Tráiga sus ideas, y nosotros la haremos realidad en forma de nueva tecnología al alcance de sus manos.
        </p>
        <p class="scroll-animate text-2xl md:text-3xl font-bold text-[#4f2d7f] text-center">
          Somos Ingenieros Expertos
        </p>
      </div>

      <!-- Grid de Servicios MIPYMES -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <!-- CREACIÓN DE DOMINIOS -->
        <div class="scroll-animate bg-white border border-gray-300 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
          <div class="flex justify-center mb-4">
            <i class="fas fa-copyright text-[#4f2d7f] text-5xl md:text-6xl"></i>
          </div>
          <h3 class="text-lg md:text-xl font-bold text-gray-900 uppercase mb-3">
            CREACIÓN DE DOMINIOS
          </h3>
          <p class="text-sm md:text-base leading-relaxed text-center text-gray-700">
            Gestión de Nombres de Dominios para Websites. Le asesoramos en la selección correcta y apropiada del nombre de dominio para su negocio en línea. Luego procedemos a crearle su dominio en internet.
          </p>
        </div>

        <!-- CREACIÓN DEL WEBSITE -->
        <div class="scroll-animate bg-white border border-gray-300 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
          <div class="flex justify-center mb-4">
            <i class="fas fa-desktop text-[#4f2d7f] text-5xl md:text-6xl"></i>
          </div>
          <h3 class="text-lg md:text-xl font-bold text-gray-900 uppercase mb-3">
            CREACIÓN DEL WEBSITE
          </h3>
          <p class="text-sm md:text-base leading-relaxed text-center text-gray-700">
            Le creamos su website, y le asesoramos en la producción apropiada del contenido de sus páginas web.
          </p>
        </div>

        <!-- SEO Y SEM -->
        <div class="scroll-animate bg-white border border-gray-300 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
          <div class="flex justify-center mb-4">
            <i class="fas fa-chart-line text-[#4f2d7f] text-5xl md:text-6xl"></i>
          </div>
          <h3 class="text-lg md:text-xl font-bold text-gray-900 uppercase mb-3">
            SEO Y SEM
          </h3>
          <p class="text-sm md:text-base leading-relaxed text-center text-gray-700">
            Le asesoramos en todos los aspectos de Ranking de sus páginas web (optimización de websites para mejorar ranking en Google y otros buscadores) y publicidad por internet con Ad Words y Ad Sense.
          </p>
        </div>

        <!-- HOSTING DEL WEBSITE CON G CLOUD -->
        <div class="scroll-animate bg-white border border-gray-300 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
          <div class="flex justify-center mb-4">
            <i class="fab fa-google text-[#4f2d7f] text-5xl md:text-6xl"></i>
          </div>
          <h3 class="text-lg md:text-xl font-bold text-gray-900 uppercase mb-3">
            HOSTING DEL WEBSITE CON G CLOUD©
          </h3>
          <p class="text-sm md:text-base leading-relaxed text-center text-gray-700">
            Proveemos la Gestión del hosting de su website con Google® Cloud©.
          </p>
        </div>

        <!-- CUENTAS EMPRESARIALES CON G SUITE -->
        <div class="scroll-animate bg-white border border-gray-300 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
          <div class="flex justify-center mb-4">
            <i class="fas fa-at text-[#4f2d7f] text-5xl md:text-6xl"></i>
          </div>
          <h3 class="text-lg md:text-xl font-bold text-gray-900 uppercase mb-3">
            CUENTAS EMPRESARIALES CON G SUITE©
          </h3>
          <p class="text-sm md:text-base leading-relaxed text-center text-gray-700">
            Le ayudamos en la creación de Cuentas Empresariales de e-mails con Google® G Suite©, y le ayudamos en la migración desde cuentas de mails comunes a su nueva cuenta empresarial.
          </p>
        </div>

        <!-- GESTIÓN DE GOOGLE MY BUSINESS -->
        <div class="scroll-animate bg-white border border-gray-300 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
          <div class="flex justify-center mb-4">
            <i class="fas fa-store text-[#4f2d7f] text-5xl md:text-6xl"></i>
          </div>
          <h3 class="text-lg md:text-xl font-bold text-gray-900 uppercase mb-3">
            GESTIÓN DE GOOGLE® MY BUSINESS©
          </h3>
          <p class="text-sm md:text-base leading-relaxed text-center text-gray-700">
            Le ayudamos en su registro con Google® My Business© (Mi Negocio©) y en la creación de su contenido.
          </p>
        </div>

        <!-- E-COMMERCE CON PAYPAL -->
        <div class="scroll-animate bg-white border border-gray-300 rounded-lg p-6 text-center hover:shadow-lg transition-shadow md:col-start-2 lg:col-start-2">
          <div class="flex justify-center mb-4">
            <i class="fab fa-paypal text-[#4f2d7f] text-5xl md:text-6xl"></i>
          </div>
          <h3 class="text-lg md:text-xl font-bold text-gray-900 uppercase mb-3">
            E-COMMERCE CON PAYPAL®
          </h3>
          <p class="text-sm md:text-base leading-relaxed text-center text-gray-700">
            Le ayudamos a integrar PayPal® en su sitio web, para que pueda vender a sus clientes y recibir pagos con tarjetas por internet.
          </p>
        </div>

      </div>

    </div>
  </div>
</template>
