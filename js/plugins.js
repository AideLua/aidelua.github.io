const { createApp, ref, watchEffect } = Vue

const PLUGINS_URL = "https://aidelua.github.io/AideLua/plugins.json"

const menus = [
  {
    "title": "插件文档",
    "href": "https://aidelua.github.io/AideLua/plugin/",
    "target": "_blank",
    "type": "menu"
  },
  {
    "title": "更多插件",
    "href": "https://www.123pan.com/s/G7a9-cdek",
    "target": "_blank",
    "type": "menu"
  }
]

let app = createApp({
  setup() {
    fetch(PLUGINS_URL)
      .then((res) => res.json())
      .then((json) => (plugins.value = json))
      .catch(function (error) {
        console.error(error)
      })
    const plugins = ref(null)
    const isTop = ref(true)
    return {
      plugins,
      menus,
      isTop
    }
  },
  mounted() {
    this.isTop=getTopState(window)
    window.addEventListener('scroll', () => this.isTop=getTopState(window))
    mdui.mutation()
  },
  updated() {
    mdui.mutation()
  }
})

$$(function () {
  app.mount('#app')
})
