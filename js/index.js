const { createApp, ref, watchEffect } = Vue

const RELEASES_URL = "https://gitee.com/api/v5/repos/Jesse205/AideLua/releases/latest"


let app = createApp({
  data: () => {
    return {
      pathname: window.location.pathname,
      name: 'Aide Lua Pro',
      description: '一款依赖 Aide 的 Lua 编辑器',
      menus: [
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
          title: '使用文档',
          href: 'https://aidelua.github.io/AideLua/',
          target: '_self',
          type: 'menu'
        },
        {
          type: 'divider'
        },
        {
          title: 'Gitee 仓库',
          href: 'https://gitee.com/AideLua/AideLua',
          target: '_blank',
          type: 'menu'
        },
        {
          title: 'Github 仓库',
          href: 'https://github.com/AideLua/AideLua',
          target: '_blank',
          type: 'menu'
        }
      ],
      screenshot: [
        {
          title: '丰富的支持库',
          summary: '多种多样的支持库，帮助用户解决选择困难症',
          src: 'images/screenshot_libraries.jpg'
        },
        {
          title: '强大的模板',
          summary: '采用模块化模板，大幅提升了模板开发难度',
          src: 'images/screenshot_template.jpg'
        },
        {
          title: '自由的插件',
          summary: '随时可能出问题的插件，培养用户良好的查错习惯',
          src: 'images/screenshot_plugins.jpg'
        },
        {
          title: '卡顿的体验',
          summary: '作者正在竭尽全力通过此工具帮你摆脱手机开发',
          src: 'images/screenshot_lag.jpg'
        }
      ],
      developers: [
        {
          name: 'Eddie',
          summary: 'AideLua软件及网站开发',
          avatar: 'https://q1.qlogo.cn/headimg_dl?dst_uin=2140125724&spec=100'
        },
        {
          name: '0047ol',
          summary: '网站开发',
          avatar: 'https://q1.qlogo.cn/headimg_dl?dst_uin=2088343717&spec=100'
        }
      ],
      contact: [
        {
          title: '电子邮件',
          icon: 'mail',
          href: 'mailto:jesse205@qq.com',
          tooltip: {
            content: '邮箱：jesse205@qq.com'
          }
        },
        {
          title: 'QQ频道',
          icon: 'group',
          href: 'https://pd.qq.com/s/n51c4k',
          tooltip: {
            content: '频道号：t37c1u1nmw'
          }
        },
        {
          title: '体验群',
          icon: 'group',
          href: 'https://jq.qq.com/?_wv=1027&k=aKHQdqlL',
          tooltip: {
            content: '群号：628045718'
          }
        },
        {
          title: '内测群',
          icon: 'group',
          href: 'https://jq.qq.com/?_wv=1027&k=Zuzh1ypf',
          tooltip: {
            content: '群号：680850455'
          }
        }
      ],
      links: [
        {
          name: 'AIDE Pro',
          href: 'https://www.aidepro.top/'
        },
        {
          name: 'MDUI',
          href: 'https://www.mdui.org/'
        },
        {
          name: 'VuePress',
          href: 'https://vuepress.vuejs.org/zh/'
        },
        {
          name: 'Edde 互联',
          href: 'https://jesse205.github.io/'
        },
        {
          name: '哈兔Box',
          href: 'https://gitee.com/Jesse205/hellotool'
        },
        {
          name: '云储',
          href: 'https://yunchu.cxoip.com/'
        }
      ],
      isTop: true,
    }
  },
  setup() {
    const appConfig = ref(null)

    fetch(RELEASES_URL)
      .then((response) => response.json())
      .catch(function (error) {
        console.error(error)
      })
      .then((json) => (appConfig.value = json))
      .catch(function (error) {
        console.error(error)
      })
    return {
      appConfig
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
