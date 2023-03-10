const { createApp, ref, watchEffect } = Vue

const PLUGINS_URL = 'https://aidelua.github.io/AideLua/plugins.json'

const menus = [
  {
    title: '首页',
    href: '/',
    target: '_self',
    type: 'menu'
  },
  {
    title: '插件下载',
    href: '/plugins.html',
    target: '_blank',
    type: 'menu'
  },
  {
    title: '插件文档',
    href: 'https://aidelua.github.io/AideLua/plugin/',
    target: '_blank',
    type: 'menu'
  },
  {
    title: '更多插件',
    href: 'https://www.123pan.com/s/G7a9-cdek',
    target: '_blank',
    type: 'menu'
  }
]

let app = createApp({
  data() {
    const plugins = ref(null)
    const isTop = ref(true)
    const isLoaded = ref(false)
    fetch(PLUGINS_URL)
      .then((res) => res.json())
      .then((json) => {
        plugins.value = json
      })
      .finally(() => {
        isLoaded.value = true
      })
      .catch(function (error) {
        console.error(error)
      })

    return {
      plugins,
      menus,
      isTop,
      isLoaded,
      pathname: window.location.pathname,
    }
  },
  mounted() {
    this.isTop = getTopState(window)
    window.addEventListener('scroll', () => this.isTop = getTopState(window))
    mdui.mutation()
  },
  updated() {
    mdui.mutation()
  }
})

$$(function () {
  app.mount('#app')
})
