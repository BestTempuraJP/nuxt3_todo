import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import { VAlert, VBtn, VCard, VCheckbox, VContainer, VForm, VIcon, VTable, VTextField } from 'vuetify/components'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components: {
      VAlert,
      VBtn,
      VCard,
      VCheckbox,
      VContainer,
      VForm,
      VIcon,
      VTable,
      VTextField
    }
  })

  nuxtApp.vueApp.use(vuetify)
})
