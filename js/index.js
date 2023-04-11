const { createApp, ref, watchEffect } = Vue

const RELEASES_URL = "https://gitee.com/api/v5/repos/Jesse205/AideLua/releases/latest"

// 获取元素的绝对位置坐标（像对于页面左上角）
function getElementPagePositionY(element) {

  //计算y坐标
  var actualTop = element.offsetTop;
  var current = element.offsetParent;
  while (current !== null) {
    actualTop += (current.offsetTop + current.clientTop);
    current = current.offsetParent;
  }
  //返回结果
  return actualTop
}
const appConfig = ref(null)

fetch(RELEASES_URL)
  .then((response) => response.json())
  .catch(function (error) {
    console.warn(error)
  })
  .then((json) => (appConfig.value = json))
  .catch(function (error) {
    console.warn(error)
  })

var app = createApp({
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
          summary: '多种多样的支持库，帮助用户战胜选择困难症',
          src: 'images/screenshot_libraries.jpg'
        },
        {
          title: '强大的模板',
          summary: '采用模块化模板，大幅提升了模板定制难度',
          src: 'images/screenshot_template.jpg'
        },
        {
          title: '自由的插件',
          summary: '随时出问题的插件，提升用户应急处突能力',
          src: 'images/screenshot_plugins.jpg'
        },
        {
          title: '卡顿的体验',
          summary: '非常卡顿的体验，慢慢帮助用户摆脱手机开发',
          src: 'images/screenshot_lag.jpg'
        }
      ],
      developers: [
        {
          name: 'Eddie',
          summary: '软件&网站开发',
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
          icon: 'email-outline',
          href: 'mailto:jesse205@qq.com',
          tooltip: {
            content: '邮箱：jesse205@qq.com'
          }
        },
        {
          title: 'QQ频道',
          icon: 'account-group-outline',
          href: 'https://pd.qq.com/s/n51c4k',
          tooltip: {
            content: '频道号：t37c1u1nmw'
          }
        },
        {
          title: '体验群',
          icon: 'account-group-outline',
          href: 'https://jq.qq.com/?_wv=1027&k=aKHQdqlL',
          tooltip: {
            content: '群号：628045718'
          }
        },
        {
          title: '内测群',
          icon: 'account-group-outline',
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

    return {
      appConfig
    }
  },
  mounted() {
    this.isTop = getTopState(window)
    let infoSpaceY = getElementPagePositionY(document.getElementById('appInfoSpace'))
    window.addEventListener('scroll', () => this.isTop = window.scrollY <= infoSpaceY)
    mdui.mutation()
  },
  updated() {
    mdui.mutation()
  }
})

