// 游戏 UI 配色主题（已全面应用于游戏主界面与所有设置子页面）
// 每套主题都尽量护眼、对比适中
export var THEMES = [
  {
    name: '经典暗夜',
    bg: '#000000', text: '#ffffff', dim: '#888888',
    btnBg: '#1a1a1a', btnBorder: '#333333',
    accent: '#c8a000', divider: '#222222',
    gain: '#4caf50', lose: '#e05050'
  },
  {
    name: '护眼墨绿',
    bg: '#0b1a14', text: '#d6f0e2', dim: '#5e8a76',
    btnBg: '#10271d', btnBorder: '#1f4533',
    accent: '#39d98a', divider: '#173326',
    gain: '#52e0a0', lose: '#e07a7a'
  },
  {
    name: '深海青',
    bg: '#06151f', text: '#cfeaf2', dim: '#5b8392',
    btnBg: '#0c2530', btnBorder: '#1c4250',
    accent: '#34c8e0', divider: '#143038',
    gain: '#4fd6c0', lose: '#e08080'
  },
  {
    name: '暖褐羊皮',
    bg: '#1a130c', text: '#f0e2c8', dim: '#9a8460',
    btnBg: '#291f14', btnBorder: '#473826',
    accent: '#e0a850', divider: '#332617',
    gain: '#9cc060', lose: '#e09060'
  },
  {
    name: '午夜蓝',
    bg: '#0a0f1f', text: '#dbe2f5', dim: '#6a7299',
    btnBg: '#141b30', btnBorder: '#283050',
    accent: '#6c8cff', divider: '#1c2440',
    gain: '#6fcf97', lose: '#e07a8a'
  },
  {
    name: '护眼米白',
    bg: '#f3ecdd', text: '#2a2722', dim: '#8a8070',
    btnBg: '#e6dcc6', btnBorder: '#cbbd9c',
    accent: '#b07a2a', divider: '#d8cdb4',
    gain: '#3a8a3a', lose: '#b03a3a'
  },
  {
    name: '樱花浅粉',
    bg: '#180c14', text: '#ffe8f2', dim: '#a86c8a',
    btnBg: '#281322', btnBorder: '#4a243f',
    accent: '#ff66a3', divider: '#381a30',
    gain: '#50d890', lose: '#ff3366'
  },
  {
    name: '幻梦星紫',
    bg: '#120b1f', text: '#eee2ff', dim: '#8e70b8',
    btnBg: '#1f1335', btnBorder: '#3e2468',
    accent: '#aa66ff', divider: '#2c184a',
    gain: '#4ed69a', lose: '#ff5577'
  },
  {
    name: '烈火赤红',
    bg: '#180808', text: '#ffe5e5', dim: '#a86060',
    btnBg: '#280e0e', btnBorder: '#4d1c1c',
    accent: '#ff3b30', divider: '#381414',
    gain: '#4cd964', lose: '#ff2d55'
  },
  {
    name: '炽阳余烬',
    bg: '#1a0e05', text: '#ffeacc', dim: '#a37648',
    btnBg: '#2c1709', btnBorder: '#522c12',
    accent: '#ff8800', divider: '#3b200c',
    gain: '#55d470', lose: '#ff4444'
  },
  {
    name: '纯白之境',
    bg: '#ffffff', text: '#111111', dim: '#666666',
    btnBg: '#f2f3f5', btnBorder: '#dcdfe6',
    accent: '#0066cc', divider: '#e4e7ed',
    gain: '#28a745', lose: '#dc3545'
  }
]

import storage from '@system.storage'

export function applyTheme(ctx, onApplied) {
  if (!ctx.theme) ctx.theme = THEMES[0]
  storage.get({
    key: 'darkroom_theme',
    success: function (v) {
      var i = parseInt(v, 10)
      if (!isNaN(i) && THEMES[i]) {
        ctx.theme = THEMES[i]
      } else {
        ctx.theme = THEMES[0]
      }
      if (onApplied) onApplied(ctx.theme)
    },
    fail: function () {
      ctx.theme = THEMES[0]
      if (onApplied) onApplied(ctx.theme)
    }
  })
}

export var SPEEDS = [
  { label: '1.0x', value: 1.0 },
  { label: '1.2x', value: 1.2 },
  { label: '1.5x', value: 1.5 },
  { label: '2.0x', value: 2.0 }
]
