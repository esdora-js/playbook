import * as path from 'node:path'
import { defineConfig } from 'rspress/config'

// const ECOSYSTEM_NAME = 'Dora Pocket'
const REPO_BASE_URL = 'https://github.com/esdora-js/playbook'
const SITE_BASE_URL = 'https://esdora.js.org' // The root domain for the entire ecosystem
const PROJECT_SLUG = 'playbook'
const UI_SITE_NAME = 'Dora Playbook'
const PROJECT_TAGLINE = '为追求卓越的数字工匠而生'
const SEO_MAIN_TITLE = `${UI_SITE_NAME} - ${PROJECT_TAGLINE}`
const SEO_DESCRIPTION = `《Dora Playbook》是一份为追求卓越的数字工匠打造的实战手册，精选了从代码规范、环境配置到高效工具的最佳实践，旨在全面提升现代开发者的代码质量与工作效率。`
// const MANIFESTO_DETAILS = `我们相信，代码不仅是功能的堆砌，更是技艺与思想的结晶。本手册专为那些不满足于“仅仅能用”的开发者、工程师与创造者而设。它涵盖了从代码哲学、环境配置到高效工具的精选战术与心法，旨在助你淬炼技艺，写就优雅、高效、可维护的传世代码。`
const PROJECT_URL = `${SITE_BASE_URL}/${PROJECT_SLUG}/`
const SOCIAL_PREVIEW_IMAGE_URL = `${SITE_BASE_URL}/${PROJECT_SLUG}/social-preview.png`

export default defineConfig({
  // --- A. 基础与部署配置 ---
  root: path.join(__dirname, 'docs'),
  base: `/${PROJECT_SLUG}/`,
  title: SEO_MAIN_TITLE,
  description: SEO_DESCRIPTION,

  logo: {
    light: '/logo-light.svg',
    dark: '/logo-dark.svg',
  },
  logoText: UI_SITE_NAME,
  icon: '/favicon.ico',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' }],
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'mask-icon', href: '/logo-mask.svg', color: '#7E57C2' }], // 使用 Playbook 品牌色
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],

    ['meta', { name: 'theme-color', content: '#7E57C2' }], // 使用 Playbook 品牌色
    ['meta', { name: 'author', content: 'Esdora-JS Team' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, viewport-fit=cover' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: UI_SITE_NAME }],

    ['meta', { property: 'og:site_name', content: UI_SITE_NAME }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: SEO_MAIN_TITLE }],
    ['meta', { property: 'og:description', content: SEO_DESCRIPTION }],
    ['meta', { property: 'og:image', content: SOCIAL_PREVIEW_IMAGE_URL }],
    ['meta', { property: 'og:url', content: PROJECT_URL }],

    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: SEO_MAIN_TITLE }],
    ['meta', { name: 'twitter:description', content: SEO_DESCRIPTION }],
    ['meta', { name: 'twitter:image', content: SOCIAL_PREVIEW_IMAGE_URL }],
  ],

  themeConfig: {

    lastUpdated: true,
    hideNavbar: 'auto',
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: REPO_BASE_URL,
      },
    ],
    editLink: {
      docRepoBaseUrl: `${REPO_BASE_URL}/tree/main/apps/docs/${PROJECT_SLUG}`,
      text: '在 GitHub 上编辑此页',
    },
    // footer: {
    //   message: `基于 Rspress 构建 | © ${new Date().getFullYear()} Esdora-JS`,
    // },

    footer: {
      message:
        '<p>这是一个包含<a href="https://example.com">链接</a>的<strong>页脚</strong></p>',
    },

    search: true, // Enable search feature
    searchPlaceholderText: '搜索战术与心法...',
    searchNoResultsText: '未找到相关结果',

  },

  globalStyles: path.join(__dirname, 'styles/index.css'),
})
