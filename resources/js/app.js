import './bootstrap'
import '../css/app.css'

import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { ZiggyVue } from '../../vendor/tightenco/ziggy'

// ✅ AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

const appName = import.meta.env.VITE_APP_NAME || ''

createInertiaApp({
  title: title => `${title} - ${appName}`,
  resolve: name =>
    resolvePageComponent(
      `./Pages/${name}.vue`,
      import.meta.glob('./Pages/**/*.vue')
    ),
  setup({ el, App, props, plugin }) {
    const vueApp = createApp({ render: () => h(App, props) })

    vueApp.use(plugin)
    vueApp.use(ZiggyVue)

    // 🔥 INIT AOS (SEKALI SAJA)
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,        // animasi cuma sekali (lebih ringan)
      offset: 80,
    })

    vueApp.mount(el)
  },
  progress: {
    color: '#4B5563',
  },
})
