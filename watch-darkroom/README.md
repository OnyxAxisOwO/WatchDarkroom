# 小黑屋 · Watch Dark Room

<p align="center">
  <img src="qr.png" alt="Watch Dark Room" width="180" />
</p>

<p align="center">
  <b>专为小米 Vela 智能手表（Xiaomi Watch / Band 等快应用设备）打造的纯原生文字冒险移植作</b>
  <br>
  移植改编自经典开源神作 <a href="https://adarkroom.doublespeakgames.com/">A Dark Room</a>（MIT 协议）
</p>

<p align="center">
  <a href="https://github.com/OnyxAxisOwO/WatchDarkroom/actions/workflows/build.yml">
    <img src="https://github.com/OnyxAxisOwO/WatchDarkroom/actions/workflows/build.yml/badge.svg" alt="Build Status" />
  </a>
  <img src="https://img.shields.io/badge/Platform-Xiaomi%20Vela%20%7C%20QuickApp-orange.svg" alt="Platform" />
  <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License" />
  <img src="https://img.shields.io/badge/Version-vYYYY.M.D.H.m.s-informational.svg" alt="Versioning" />
</p>

---

## 📖 故事背景

你在漆黑、寒冷中醒来，身边只有一座将熄的火堆。

从生火、添柴开始，温暖会吸引一位神秘的**建造者**前来，她能帮你打造陷阱与工具。渐渐地，流浪者循着火光聚拢，一个小小的聚居地在森林边缘成形——棚屋、猎人小屋、制革坊、炼钢厂依次立起，村庄日益喧闹。

但森林之外，是一片被遗忘的荒原。废城、矿井、沼泽、古老的战场散落其间，潜伏着野兽与劫掠者。在荒原最深处，一艘**坠毁的星舰**正等待着被重新唤醒。

收集、建造、远征、战斗——最终修复星舰，挣脱这片灰烬之地，飞向群星。

---

## 🎮 游戏特色与系统

- 🏕️ **生火间（A Dark Room）**：保持火堆燃烧维持室温，唤醒建造者，解锁陷阱、手推车、棚屋等一系列建筑与工具。
- 🌲 **森林与村落生态**：分配村民为伐木工、猎人、制革师、熏肉师、铁矿工等多种职业，每 10 秒享受自动化产出。
- ⚔️ **装备与制造工坊**：打造火把、骨枪、水箱、车队、皮甲、钢剑、步枪以及荒野发现的外星制造机高阶科技装备。
- 🗺️ **荒野大地图探险**：基于 ASCII 网格的回合制大地图探索，实时管理水和熏肉补给，搜刮洞穴、废城、矿井、沼泽、古战场等 14 种地标与遭遇战。
- 🚀 **太空脱离微操小游戏**：修复坠毁星舰，躲避密集陨石带冲出大气层，可用外星合金强化船体与引擎。
- 🔄 **轮回重生**：通关后保留声望（Prestige）开启全新周目，体验多重挑战。
- ⌚ **纯原生快应用实现**：完全针对手表性能与触控调优，无庞大前端框架包袱，内存占用低、响应即时。

---

## ⌚ 手表专属优化与设置

为了让腕上体验更舒适流畅，本项目针对智能手表屏幕做了深度定制：

- **极简分类设置面板**：主菜单精简为游戏偏好、攻略指南、高级与调试、关于小黑屋 4 大核心分类，次级选项归类收纳，彻底告别手表小屏多按键混乱。
- **11 种专属个性化配色主题**：经典暗夜、护眼墨绿、深海青、暖褐羊皮、午夜蓝、护眼米白、樱花浅粉、幻梦星紫、烈火赤红、炽阳余烬、纯白之境。配色主题已全面与所有设置菜单及弹窗联动变色，高颜值且护眼。
- **游戏倍速调节**：支持 0.5x ~ 3.0x 多档运行倍速，碎片时间轻松游玩。
- **通勤爆率加成**：爆率倍数自由切换，通勤摸鱼更畅快。
- **内置辅助与调测**：作弊修改小键盘、场景直通跳转、太空小游戏单独测试。
- **系统信息与性能跑分**：内置 CPU 性能基准测试与设备详细参数查看。
- **闪存写入优化**：智能防抖合并保存机制（3 秒窗口聚合落盘），离开/切后台瞬时落盘，彻底告别频繁写入卡顿。

---

## 🏷️ 版本号机制

本项目使用精确的时间戳版本管理规范：

- **版本名称（`versionName`）**：格式为 `vYYYY.M.D.H.m.s`（例如 `v2026.9.5.10.3.49`，年.月.日.时.分.秒自然数值，不补前导零）。
- **版本代码（`versionCode`）**：当前 Unix 时间戳秒数（严格单调递增整数，保证系统更新顺利识别）。
- **构建钩子自动化**：每次执行 `npm run start` / `npm run build` / `npm run release` 时，会自动触发 `scripts/version.js` 同步更新 `manifest.json`、`package.json` 及手表端“关于”页面。
- **打包产物**：输出安装包自动带有当前版本命名，如 `org.onyxaxis.adr.release.v2026.9.5.10.32.31.rpk`。

---

## 🛠️ 本地开发与构建

### 1. 安装依赖

确保已安装 [Node.js](https://nodejs.org/)（建议 Node.js 18 或 20 以上）：

```bash
cd watch-darkroom
npm install
```

### 2. 常用开发命令

| 命令 | 描述 |
|------|------|
| `npm run start` | 启动编译并监听文件变动（配合 Vela 模拟器或真机调试） |
| `npm run build` | 编译打包 Debug 调试版 RPK 安装包 |
| `npm run release` | 编译打包 Release 生产发布版 RPK 安装包 |
| `npm run version:update` | 手动更新生成当前时间戳版本号 |
| `node scripts/version.js <版本号>` | 自定义指定版本号（如 `node scripts/version.js v2026.9.5.12.0.0`） |
| `npm run lint` | 代码风格检查与自动修复 |

### 3. 安装到手表

构建成功后，在 `watch-darkroom/dist/` 目录下会生成 `.rpk` 安装包。可以使用 **AIoT-IDE** 或 **Vela 快应用开发助手** 推送安装至连接的手表或模拟器。

> 注：签名证书默认位于 `watch-darkroom/sign/`（已配置 `.gitignore`，切勿提交私钥证书至公开仓库）。

---

## 🤖 GitHub Actions 持续集成

仓库配置了全自动 CI/CD 工作流（`.github/workflows/build.yml`）：

- **代码提交自动构建**：每次推送代码至 `main` 分支均会自动执行环境初始化、证书生成与项目构建。
- **发布产物归档**：构建生成的 Debug & Release `.rpk` 文件会自动保存为 Artifacts 供随时下载。
- **Release 自动挂载**：当推送 `v*` 格式的 Release 标签或在 GitHub 创建 Release 时，安装包将自动挂载至 Release 资产列表中。

---

## 👥 作者与仓库

- **作者**：[OnyxAxis](https://onyxaxis.org)
- **GitHub 仓库**：[OnyxAxisOwO/WatchDarkroom](https://github.com/OnyxAxisOwO/WatchDarkroom)

---

## 📄 开源许可与致谢

- 本项目遵循 [MIT 许可证](LICENSE)。
- 游戏原作：[A Dark Room](https://adarkroom.doublespeakgames.com/) © Doublespeak Games（MIT License）。
- 特别鸣谢原作者 Michael Townsend 及所有开源贡献者。
