<script setup>
import laptopImage from "@/assets/images/image5377.png";
import cppLogo from "@/assets/images/C++.png";
import cLogo from "@/assets/images/C.png";
import pythonLogo from "@/assets/images/Python.png";
import nodeLogo from "@/assets/images/node.png";
import netcoreLogo from "@/assets/images/netcore.png";
import dockerLogo from "@/assets/images/docker.png";
import csharpLogo from "@/assets/images/cshar.png";

const tecnologias = [
  { name: "C#", logo: csharpLogo },
  { name: "C++", logo: cppLogo },
  { name: "C", logo: cLogo },
  { name: "Python", logo: pythonLogo },
  { name: "Node.js", logo: nodeLogo },
  { name: ".NET Core", logo: netcoreLogo },
  { name: "Docker", logo: dockerLogo },
];
</script>

<template>
  <section id="productos" class="py-20 px-4 md:px-8 lg:px-16">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Imagen Laptop (Left Side) -->
        <div class="order-2 lg:order-1">
          <div class="relative">
            <img
              :src="laptopImage"
              alt="Desarrollo de Software Cloud-Native"
              class="w-full h-auto rounded-lg object-contain"
            />
          </div>
        </div>

        <!-- Contenido de Texto (Right Side) -->
        <div class="order-2">
          <!-- Heading pequeño -->
          <p
            class="text-gray-400 text-lg text-center md:text-start uppercase tracking-wide mb-2"
          >
            DESARROLLO DE SOFTWARE
          </p>

          <!-- Título Principal -->
          <h2
            class="text-3xl md:text-4xl text-center md:text-start font-bold text-[#4f2d7f] mb-2"
          >
            Desarrollo de Software
          </h2>

          <!-- Subtítulo -->
          <h3
            class="text-2xl md:text-3xl text-center md:text-start text-[#4f2d7f] mb-6"
          >
            Cloud-Native
          </h3>

          <!-- Párrafo descriptivo -->
          <p class="text-gray-700 text-lg leading-relaxed mb-8 text-left">
            Diseñamos y desarrollamos tus aplicaciones y microservicios con una
            arquitectura Cloud-Native, flexibles, adaptables, gestionables,
            observables y altamente resilientes. Nuestros proyectos son
            DevSecOps-ready dentro de la arquitectura cloud.
          </p>

          <!-- Grid de Logos de Tecnologías -->
          <div class="grid grid-cols-4 md:grid-cols-5 gap-4">
            <div
              v-for="(tech, index) in tecnologias"
              :key="index"
              class="border-4 border-gray-200 rounded-lg p-3 md:p-4 flex items-center justify-center aspect-square hover:shadow-md transition-shadow"
            >
              <img
                :src="tech.logo"
                :alt="tech.name"
                class="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
