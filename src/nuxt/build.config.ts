import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  externals: [
    'vue-composable-starter',
    '@nuxt/kit',
    '@nuxt/schema',
    'nuxt',
    'vue',
    'defu',
    '@vueuse/shared',
    '@vue/compiler-core',
    '@vue/shared',
    '@vueuse/core',
  ],
})
