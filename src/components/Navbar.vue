<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { RouterLink, useRoute } from "vue-router";
import logoFull from "@/assets/images/MMC-logo.png";
import { useContactModal } from "@/composables/useContactModal";

const route = useRoute();

const { openModal } = useContactModal();

const activeSection = ref("inicio");
const isMobileMenuOpen = ref(false);
const isInsigniasDropdownOpen = ref(false);

const sections = ["inicio", "productos", "nosotros", "pagos", "clientes"];

const insignias = [
  { 
    nombre: "DevOps Engineer Associate",
    slug: "devops-engineer-associate"
  },
  { 
    nombre: "DevOps Engineer Practitioner",
    slug: "devops-engineer-practitioner"
  },
  { 
    nombre: "DevOps Engineer Professional",
    slug: "devops-engineer-professional"
  },
  { 
    nombre: "DevSecOps Engineer Practitioner",
    slug: "devsecops-engineer-practitioner"
  },
];

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

const handleLinkClick = (e, section) => {
  e.preventDefault();
  activeSection.value = section;
  isMobileMenuOpen.value = false;
  // Solo hacer scroll para inicio, pagos y clientes
  if (["inicio", "pagos", "clientes"].includes(section)) {
    if (section === "inicio") {
      // Si es inicio, siempre ir al top de la página
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      // Para pagos y clientes, hacer scroll a la sección
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const offsetTop = rect.top + scrollTop - 80; // Ajustar para el navbar fijo
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });
        }
      }, 150);
    }
  }
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
    <RouterLink
      to="/"
      class="flex items-center shrink-0"
      aria-label="Marzan Mercado Consulting"
    >
      <img
        :src="logoFull"
        alt="Marzan Mercado Consulting"
        class="h-12 md:h-16 my-2 w-auto border rounded-[2px] border-white"
      />
    </RouterLink>

    <!-- Desktop Menu -->
    <ul class="hidden lg:flex items-center gap-3 justify-center flex-1">
      <li>
        <RouterLink
          v-if="route.name !== 'home'"
          to="/"
          :class="[
            'text-white border px-4 py-2 rounded-lg transition-colors duration-200 hover:border-white/40 font-medium uppercase',
            route.name === 'home' ? 'border-white' : 'border-transparent',
          ]"
          >Inicio</RouterLink
        >
        <a
          v-else
          :class="[
            'text-white border px-4 py-2 rounded-lg transition-colors duration-200 hover:border-white/40 font-medium uppercase',
            activeSection === 'inicio' ? 'border-white' : 'border-transparent',
          ]"
          href="#inicio"
          @click="(e) => handleLinkClick(e, 'inicio')"
          >Inicio</a
        >
      </li>
      <li>
        <RouterLink
          :to="{ name: 'productos-servicios' }"
          :class="[
            'text-white border px-4 py-2 rounded-lg transition-colors duration-200 hover:border-white/40 font-medium uppercase',
            route.name === 'productos-servicios'
              ? 'border-white'
              : 'border-transparent',
          ]"
          >PRODUCTOS Y SERVICIOS</RouterLink
        >
      </li>
      <li>
        <RouterLink
          :to="{ name: 'nosotros' }"
          :class="[
            'text-white border px-4 py-2 rounded-lg transition-colors duration-200 hover:border-white/40 font-medium uppercase',
            route.name === 'nosotros' ? 'border-white' : 'border-transparent',
          ]"
          >NOSOTROS</RouterLink
        >
      </li>
      <li 
        class="relative"
        @mouseenter="isInsigniasDropdownOpen = true"
        @mouseleave="isInsigniasDropdownOpen = false"
      >
        <RouterLink
          :to="{ name: 'insignias' }"
          :class="[
            'text-white border px-4 py-2 rounded-lg transition-colors duration-200 hover:border-white/40 font-medium uppercase',
            route.name === 'insignias' || route.name === 'insignia-detalle' ? 'border-white' : 'border-transparent',
          ]"
          >INSIGNIAS</RouterLink
        >
        <!-- Dropdown Menu -->
        <div
          v-if="isInsigniasDropdownOpen"
          class="absolute top-full left-0 mt-1 w-96 bg-white rounded-lg shadow-2xl z-50 border border-gray-300 overflow-hidden"
        >
          <div class="py-1">
            <RouterLink
              :to="{ name: 'insignias' }"
              class="block px-5 py-3 text-[#4f2d7f] hover:bg-[#4f2d7f] hover:text-white transition-colors font-bold uppercase text-xs tracking-wide border-b border-gray-200"
              @click="isInsigniasDropdownOpen = false"
            >
              Ver Todas las Insignias
            </RouterLink>
            <RouterLink
              v-for="insignia in insignias"
              :key="insignia.slug"
              :to="{ name: 'insignia-detalle', params: { slug: insignia.slug } }"
              class="block px-5 py-3.5 text-gray-800 hover:bg-[#4f2d7f] hover:text-white transition-colors text-sm font-medium leading-relaxed"
              @click="isInsigniasDropdownOpen = false"
            >
              {{ insignia.nombre }}
            </RouterLink>
          </div>
        </div>
      </li>
      <li>
        <RouterLink
          v-if="route.name !== 'home'"
          to="/#pagos"
          :class="[
            'text-white border px-4 py-2 rounded-lg transition-colors duration-200 hover:border-white/40 font-medium uppercase',
            'border-transparent',
          ]"
          >PAGOS</RouterLink
        >
        <a
          v-else
          :class="[
            'text-white border px-4 py-2 rounded-lg transition-colors duration-200 hover:border-white/40 font-medium uppercase',
            activeSection === 'pagos' ? 'border-white' : 'border-transparent',
          ]"
          href="#pagos"
          @click="(e) => handleLinkClick(e, 'pagos')"
          >PAGOS</a
        >
      </li>
      <li>
        <RouterLink
          v-if="route.name !== 'home'"
          to="/#clientes"
          :class="[
            'text-white border px-4 py-2 rounded-lg transition-colors duration-200 hover:border-white/40 font-medium uppercase',
            'border-transparent',
          ]"
          >NUESTROS CLIENTES</RouterLink
        >
        <a
          v-else
          :class="[
            'text-white border px-4 py-2 rounded-lg transition-colors duration-200 hover:border-white/40 font-medium uppercase',
            activeSection === 'clientes'
              ? 'border-white'
              : 'border-transparent',
          ]"
          href="#clientes"
          @click="(e) => handleLinkClick(e, 'clientes')"
          >NUESTROS CLIENTES</a
        >
      </li>
    </ul>

    <!-- Desktop Contact Button -->
    <button
      @click="openModal"
      class="hidden md:inline-flex items-center rounded-md bg-[#7f42d5] text-white text-lg px-5 py-3 border border-white/0 hover:border-white hover:bg-white/0 transition-colors font-semibold uppercase cursor-pointer"
    >
      CONTÁCTANOS
    </button>

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
        <RouterLink
          v-if="route.name !== 'home'"
          to="/"
          :class="[
            'block text-white border px-4 py-3 rounded-lg transition-colors duration-200 hover:border-white/40 font-medium uppercase',
            route.name === 'home' ? 'border-white' : 'border-transparent',
          ]"
          @click="isMobileMenuOpen = false"
          >Inicio</RouterLink
        >
        <a
          v-else
          :class="[
            'block text-white border px-4 py-3 rounded-lg transition-colors duration-200 hover:border-white/40 font-medium uppercase',
            activeSection === 'inicio' ? 'border-white' : 'border-transparent',
          ]"
          href="#inicio"
          @click="(e) => handleLinkClick(e, 'inicio')"
          >Inicio</a
        >
      </li>
      <li>
        <RouterLink
          :to="{ name: 'productos-servicios' }"
          :class="[
            'block text-white border px-4 py-3 rounded-lg transition-colors duration-200 hover:border-white/40 font-medium uppercase',
            route.name === 'productos-servicios'
              ? 'border-white'
              : 'border-transparent',
          ]"
          @click="isMobileMenuOpen = false"
          >PRODUCTOS Y SERVICIOS</RouterLink
        >
      </li>
      <li>
        <RouterLink
          :to="{ name: 'nosotros' }"
          :class="[
            'block text-white border px-4 py-3 rounded-lg transition-colors duration-200 hover:border-white/40 font-medium uppercase',
            route.name === 'nosotros' ? 'border-white' : 'border-transparent',
          ]"
          @click="isMobileMenuOpen = false"
          >NOSOTROS</RouterLink
        >
      </li>
      <li>
        <div>
          <button
            @click="isInsigniasDropdownOpen = !isInsigniasDropdownOpen"
            :class="[
              'w-full text-left text-white border px-4 py-3 rounded-lg transition-colors duration-200 hover:border-white/40 font-medium uppercase flex items-center justify-between',
              route.name === 'insignias' || route.name === 'insignia-detalle' ? 'border-white' : 'border-transparent',
            ]"
          >
            INSIGNIAS
            <i 
              :class="[
                'fas transition-transform',
                isInsigniasDropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down'
              ]"
            ></i>
          </button>
          <!-- Mobile Dropdown -->
          <div
            v-if="isInsigniasDropdownOpen"
            class="mt-2 bg-[#4f2d7f]/95 rounded-lg overflow-hidden"
          >
            <RouterLink
              :to="{ name: 'insignias' }"
              class="block px-4 py-3 text-white hover:bg-white/10 transition-colors text-sm font-semibold uppercase border-b border-white/20"
              @click="isMobileMenuOpen = false; isInsigniasDropdownOpen = false"
            >
              Ver Todas
            </RouterLink>
            <RouterLink
              v-for="insignia in insignias"
              :key="insignia.slug"
              :to="{ name: 'insignia-detalle', params: { slug: insignia.slug } }"
              class="block px-6 py-3 text-white/90 hover:bg-white/10 hover:text-white transition-colors text-sm"
              @click="isMobileMenuOpen = false; isInsigniasDropdownOpen = false"
            >
              {{ insignia.nombre }}
            </RouterLink>
          </div>
        </div>
      </li>
      <li>
        <RouterLink
          v-if="route.name !== 'home'"
          to="/#pagos"
          :class="[
            'block text-white border px-4 py-3 rounded-lg transition-colors duration-200 hover:border-white/40 font-medium uppercase',
            'border-transparent',
          ]"
          @click="isMobileMenuOpen = false"
          >PAGOS</RouterLink
        >
        <a
          v-else
          :class="[
            'block text-white border px-4 py-3 rounded-lg transition-colors duration-200 hover:border-white/40 font-medium uppercase',
            activeSection === 'pagos' ? 'border-white' : 'border-transparent',
          ]"
          href="#pagos"
          @click="(e) => handleLinkClick(e, 'pagos')"
          >PAGOS</a
        >
      </li>
      <li>
        <RouterLink
          v-if="route.name !== 'home'"
          to="/#clientes"
          :class="[
            'block text-white border px-4 py-3 rounded-lg transition-colors duration-200 hover:border-white/40 font-medium uppercase',
            'border-transparent',
          ]"
          @click="isMobileMenuOpen = false"
          >NUESTROS CLIENTES</RouterLink
        >
        <a
          v-else
          :class="[
            'block text-white border px-4 py-3 rounded-lg transition-colors duration-200 hover:border-white/40 font-medium uppercase',
            activeSection === 'clientes'
              ? 'border-white'
              : 'border-transparent',
          ]"
          href="#clientes"
          @click="(e) => handleLinkClick(e, 'clientes')"
          >NUESTROS CLIENTES</a
        >
      </li>
      <li>
        <button
          @click="
            () => {
              openModal();
              isMobileMenuOpen = false;
            }
          "
          class="block w-full text-center rounded-md bg-[#7f42d5] text-white px-5 py-3 border border-white/0 hover:border-white hover:bg-white/0 transition-colors font-semibold uppercase mt-2 cursor-pointer"
        >
          CONTÁCTANOS
        </button>
      </li>
    </ul>
  </div>
</template>
