<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import logoFull from "@/assets/images/MMC-logo.png";
import { useContactModal } from "@/composables/useContactModal";

const { openModal } = useContactModal();

const activeSection = ref("inicio");
const isMobileMenuOpen = ref(false);

const sections = ["inicio", "productos", "nosotros", "pagos", "clientes"];

const updateActiveSection = () => {
  const scrollPosition = window.scrollY + 100;

  for (const section of sections) {
    const element = document.getElementById(section);
    if (element) {
      const offsetTop = element.offsetTop;
      const offsetHeight = element.offsetHeight;

      if (
        scrollPosition >= offsetTop &&
        scrollPosition < offsetTop + offsetHeight
      ) {
        activeSection.value = section;
        break;
      }
    }
  }
};

const handleLinkClick = (section) => {
  activeSection.value = section;
  isMobileMenuOpen.value = false;
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

onMounted(() => {
  window.addEventListener("scroll", updateActiveSection);
  window.addEventListener("hashchange", () => {
    const hash = window.location.hash.slice(1);
    if (sections.includes(hash)) {
      activeSection.value = hash;
    }
  });
  updateActiveSection();
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateActiveSection);
});
</script>

<template>
  <nav
    class="flex items-center justify-between gap-4 px-4 md:px-18 py-3 bg-[#4f2d7f]/90 md:shadow-md border-b border-transparent fixed top-0 left-0 right-0 z-50"
    aria-label="Primary"
  >
    <a
      class="flex items-center shrink-0"
      href="/"
      aria-label="Marzan Mercado Consulting"
    >
      <img
        :src="logoFull"
        alt="Marzan Mercado Consulting"
        class="h-12 md:h-16 my-2 w-auto border rounded-[2px] border-white"
      />
    </a>

    <!-- Desktop Menu -->
    <ul class="hidden lg:flex items-center gap-3 justify-center flex-1">
      <li>
        <a
          :class="[
            'text-white border px-4 py-2 rounded-lg transition-colors duration-200 hover:border-white/40 font-medium uppercase',
            activeSection === 'inicio' ? 'border-white' : 'border-transparent',
          ]"
          href="#inicio"
          @click="handleLinkClick('inicio')"
          >Inicio</a
        >
      </li>
      <li>
        <a
          :class="[
            'text-white border px-4 py-2 rounded-lg transition-colors duration-200 hover:border-white/40 font-medium uppercase',
            activeSection === 'productos'
              ? 'border-white'
              : 'border-transparent',
          ]"
          href="#productos"
          @click="handleLinkClick('productos')"
          >PRODUCTOS Y SERVICIOS</a
        >
      </li>
      <li>
        <a
          :class="[
            'text-white border px-4 py-2 rounded-lg transition-colors duration-200 hover:border-white/40 font-medium uppercase',
            activeSection === 'nosotros'
              ? 'border-white'
              : 'border-transparent',
          ]"
          href="#nosotros"
          @click="handleLinkClick('nosotros')"
          >NOSOTROS</a
        >
      </li>
      <li>
        <a
          :class="[
            'text-white border px-4 py-2 rounded-lg transition-colors duration-200 hover:border-white/40 font-medium uppercase',
            activeSection === 'pagos' ? 'border-white' : 'border-transparent',
          ]"
          href="#pagos"
          @click="handleLinkClick('pagos')"
          >PAGOS</a
        >
      </li>
      <li>
        <a
          :class="[
            'text-white border px-4 py-2 rounded-lg transition-colors duration-200 hover:border-white/40 font-medium uppercase',
            activeSection === 'clientes'
              ? 'border-white'
              : 'border-transparent',
          ]"
          href="#clientes"
          @click="handleLinkClick('clientes')"
          >NUESTROS CLIENTES</a
        >
      </li>
    </ul>

    <!-- Desktop Contact Button -->
    <button
      @click="openModal"
      class="hidden md:inline-flex items-center rounded-md bg-[#7f42d5] text-white text-lg px-5 py-3 border border-white/0 hover:border-white hover:bg-white/0 transition-colors font-semibold uppercase cursor-pointer"
      >CONTÁCTANOS</button
    >

    <!-- Mobile Menu Button -->
    <button
      @click="toggleMobileMenu"
      class="md:hidden flex flex-col gap-1.5 p-2 text-white focus:outline-none"
      aria-label="Toggle menu"
    >
      <span
        :class="[
          'block w-6 h-0.5 bg-white transition-all duration-300',
          isMobileMenuOpen ? 'rotate-45 translate-y-2' : '',
        ]"
      ></span>
      <span
        :class="[
          'block w-6 h-0.5 bg-white transition-all duration-300',
          isMobileMenuOpen ? 'opacity-0' : '',
        ]"
      ></span>
      <span
        :class="[
          'block w-6 h-0.5 bg-white transition-all duration-300',
          isMobileMenuOpen ? '-rotate-45 -translate-y-2' : '',
        ]"
      ></span>
    </button>
  </nav>

  <!-- Mobile Menu -->
  <div
    :class="[
      'fixed top-[73px] left-0 right-0 bg-[#4f2d7f] shadow-lg transition-all duration-300 z-40 md:hidden overflow-y-auto max-h-[calc(100vh-73px)]',
      isMobileMenuOpen
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 -translate-y-full pointer-events-none',
    ]"
  >
    <ul class="flex flex-col p-4 gap-2">
      <li>
        <a
          :class="[
            'block text-white border px-4 py-3 rounded-lg transition-colors duration-200 hover:border-white/40 font-medium uppercase',
            activeSection === 'inicio' ? 'border-white' : 'border-transparent',
          ]"
          href="#inicio"
          @click="handleLinkClick('inicio')"
          >Inicio</a
        >
      </li>
      <li>
        <a
          :class="[
            'block text-white border px-4 py-3 rounded-lg transition-colors duration-200 hover:border-white/40 font-medium uppercase',
            activeSection === 'productos'
              ? 'border-white'
              : 'border-transparent',
          ]"
          href="#productos"
          @click="handleLinkClick('productos')"
          >PRODUCTOS Y SERVICIOS</a
        >
      </li>
      <li>
        <a
          :class="[
            'block text-white border px-4 py-3 rounded-lg transition-colors duration-200 hover:border-white/40 font-medium uppercase',
            activeSection === 'nosotros'
              ? 'border-white'
              : 'border-transparent',
          ]"
          href="#nosotros"
          @click="handleLinkClick('nosotros')"
          >NOSOTROS</a
        >
      </li>
      <li>
        <a
          :class="[
            'block text-white border px-4 py-3 rounded-lg transition-colors duration-200 hover:border-white/40 font-medium uppercase',
            activeSection === 'pagos' ? 'border-white' : 'border-transparent',
          ]"
          href="#pagos"
          @click="handleLinkClick('pagos')"
          >PAGOS</a
        >
      </li>
      <li>
        <a
          :class="[
            'block text-white border px-4 py-3 rounded-lg transition-colors duration-200 hover:border-white/40 font-medium uppercase',
            activeSection === 'clientes'
              ? 'border-white'
              : 'border-transparent',
          ]"
          href="#clientes"
          @click="handleLinkClick('clientes')"
          >NUESTROS CLIENTES</a
        >
      </li>
      <li>
        <button
          @click="() => { openModal(); isMobileMenuOpen = false; }"
          class="block w-full text-center rounded-md bg-[#7f42d5] text-white px-5 py-3 border border-white/0 hover:border-white hover:bg-white/0 transition-colors font-semibold uppercase mt-2 cursor-pointer"
          >CONTÁCTANOS</button
        >
      </li>
    </ul>
  </div>
</template>
