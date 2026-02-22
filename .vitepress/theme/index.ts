import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { MAIN_SITE_URL } from '../urls'

/** 将 .VPNavBarTitle 内的链接 href 强制指向主站 */
function patchTitleLink() {
  const link = document.querySelector('.VPNavBarTitle a') as HTMLAnchorElement | null
  if (link && link.href !== MAIN_SITE_URL) {
    link.href = MAIN_SITE_URL
  }
}

export default {
  extends: DefaultTheme,
  enhanceApp() {
    if (typeof document === 'undefined') return

    // 初始修补 + DOM 变化时持续修补
    const observer = new MutationObserver(patchTitleLink)
    const tryObserve = () => {
      const navbar = document.querySelector('.VPNavBar')
      if (navbar) {
        patchTitleLink()
        observer.observe(navbar, { childList: true, subtree: true })
      } else {
        requestAnimationFrame(tryObserve)
      }
    }
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', tryObserve)
    } else {
      tryObserve()
    }
  },
} satisfies Theme
