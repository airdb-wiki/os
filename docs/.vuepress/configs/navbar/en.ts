import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from '../meta'

export const navbarEn: NavbarConfig = [
  {
    text: 'Guide',
    link: '/guide/',
  },
  {
    text: 'Linux',
    link: '/linux/',
  },
  {
    text: 'MacOS',
    children: [
      {
        text: '4 Layer',
        children: [
          '/reference/plugin/pwa.md',
          '/reference/plugin/pwa-popup.md',
        ],
      },
    ],
  },
  {
    text: 'Windows',
    children: [
      {
        text: 'wsl',
        children: [
          '/windows/README.md',
        ],
      },
    ],
  },
]
