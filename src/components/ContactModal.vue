<script setup>
import { ref } from "vue";

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
});

const emit = defineEmits(['close']);

const formData = ref({
  nombre: '',
  email: '',
  empresa: '',
  telefono: '',
  servicio: '',
  mensaje: ''
});

const servicios = [
  { value: '', label: '- Elija un Servicio (Opcional) -' },
  { value: '1', label: 'un Desarrollo de Software Especializado' },
  { value: '2', label: 'una Aplicación Web' },
  { value: '3', label: 'un Portal/Website' },
  { value: '4', label: 'una Integración entre Sistemas' },
  { value: '5', label: 'un Servicio de Consultoría de Software' },
  { value: '6', label: 'otro Tipo de Servicio' },
  { value: '7', label: 'un Training en BigData y Machine Learning' },
  { value: '8', label: 'un Training en Kubernetes y DevOps' },
  { value: '9', label: 'un Training en DevSecOps' },
  { value: '10', label: 'un Training en Seguridad Cloud-Native' }
];

const mensajeLength = ref(0);
const maxChars = 1000;

const handleMensajeChange = (e) => {
  formData.value.mensaje = e.target.value;
  mensajeLength.value = e.target.value.length;
};

const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Obtener el nombre del servicio seleccionado
  const servicioSeleccionado = servicios.find(s => s.value === formData.value.servicio);
  const nombreServicio = servicioSeleccionado ? servicioSeleccionado.label : 'No especificado';
  
  // Construir el cuerpo del mensaje para Gmail
  const cuerpoEmail = `Hola,

Mi nombre es ${formData.value.nombre}
Email: ${formData.value.email}
Empresa: ${formData.value.empresa || 'No especificada'}
Teléfono: ${formData.value.telefono || 'No especificado'}
Servicio de interés: ${nombreServicio}

Mensaje:
${formData.value.mensaje}

Saludos cordiales.`;
  
  // Crear enlace de Gmail
  const emailTo = 'hmarzan@marzanconsulting.com';
  const subject = encodeURIComponent(`Solicitud de Contacto - ${formData.value.nombre}`);
  const body = encodeURIComponent(cuerpoEmail);
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailTo}&su=${subject}&body=${body}`;
  
  // Crear mensaje para WhatsApp
  const mensajeWhatsApp = encodeURIComponent(`Hola, me interesa contactar con ustedes.

Nombre: ${formData.value.nombre}
Email: ${formData.value.email}
Empresa: ${formData.value.empresa || 'No especificada'}
Teléfono: ${formData.value.telefono || 'No especificado'}
Servicio: ${nombreServicio}

${formData.value.mensaje}`);
  const whatsappUrl = `https://wa.me/18093035667?text=${mensajeWhatsApp}`;
  
  // Abrir Gmail y WhatsApp
  window.open(gmailUrl, '_blank');
  window.open(whatsappUrl, '_blank');
  
  // Limpiar formulario
  formData.value = {
    nombre: '',
    email: '',
    empresa: '',
    telefono: '',
    servicio: '',
    mensaje: ''
  };
  mensajeLength.value = 0;
  
  // Cerrar modal
  emit('close');
};

const closeModal = () => {
  emit('close');
};
</script>

<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
    @click.self="closeModal"
  >
    <div class="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
      <!-- Header -->
      <div class="sticky top-0 bg-white  px-6 py-4 flex justify-between items-center">
       <div></div>
        <button
          @click="closeModal"
          class="text-gray-500 hover:text-gray-700 cursor-pointer transition-colors"
          aria-label="Cerrar"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="w-full flex items-center justify-center flex-col">
        <h2 class="text-4xl font-bold text-black">Solicitud</h2>
        <p class="text-gray-600 text-lg mt-1">¿Tienes una pregunta? ¡Contáctanos ahora!</p>
      </div>
      <!-- Form -->
      <form @submit="handleSubmit" class="p-6 space-y-4">
        <!-- Nombre -->
        <div>
          <label for="nombre" class="block text-sm font-medium text-gray-700 mb-1">
            Nombre
          </label>
          <input
            id="nombre"
            v-model="formData.nombre"
            type="text"
            placeholder="Nombre"
            required
            class="w-full px-4 py-2 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4f2d7f]"
          />
        </div>

        <!-- Email -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            id="email"
            v-model="formData.email"
            type="email"
            placeholder="Email"
            required
            class="w-full px-4 py-2  bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4f2d7f]"
          />
        </div>

        <!-- Nombre de la empresa -->
        <div>
          <label for="empresa" class="block text-sm font-medium text-gray-700 mb-1">
            Nombre de la empresa
          </label>
          <input
            id="empresa"
            v-model="formData.empresa"
            type="text"
            placeholder="Nombre de la empresa"
            class="w-full px-4 py-2  bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4f2d7f]"
          />
        </div>

        <!-- Teléfono -->
        <div>
          <label for="telefono" class="block text-sm font-medium text-gray-700 mb-1">
            Teléfono
          </label>
          <input
            id="telefono"
            v-model="formData.telefono"
            type="tel"
            placeholder="Teléfono"
            class="w-full px-4 py-2  bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4f2d7f]"
          />
        </div>

        <!-- Servicio -->
        <div>
          <label for="servicio" class="block text-sm font-medium text-gray-700 mb-1">
            Yo necesito
          </label>
          <select
            id="servicio"
            v-model="formData.servicio"
            class="w-full px-4 py-2  bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4f2d7f]"
          >
            <option v-for="servicio in servicios" :key="servicio.value" :value="servicio.value">
              {{ servicio.label }}
            </option>
          </select>
        </div>

        <!-- Mensaje -->
        <div>
          <label for="mensaje" class="block text-sm font-medium text-gray-700 mb-1">
            Mensajes
          </label>
          <textarea
            id="mensaje"
            v-model="formData.mensaje"
            @input="handleMensajeChange"
            placeholder="Mensaje"
            rows="6"
            :maxlength="maxChars"
            required
            class="w-full px-4 py-2  bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4f2d7f] resize-y"
          ></textarea>
          <p class="text-xs text-gray-500 mt-1">
            {{ mensajeLength }} / {{ maxChars }} caracteres
          </p>
        </div>

        <!-- Botón Enviar -->
        <button
          type="submit"
          class="w-full bg-[#4f2d7f] text-white font-semibold py-3 px-6 rounded-md hover:bg-[#3d2363] transition-colors uppercase"
        >
          ENVIAR MENSAJE
        </button>
      </form>
    </div>
  </div>
</template>

