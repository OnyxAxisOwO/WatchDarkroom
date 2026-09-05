const fs = require('fs')
const path = require('path')

function formatVersion(d = new Date()) {
  const y = d.getFullYear()
  const m = d.getMonth() + 1
  const day = d.getDate()
  const h = d.getHours()
  const min = d.getMinutes()
  const s = d.getSeconds()
  return `v${y}.${m}.${day}.${h}.${min}.${s}`
}

function getVersionCode(d = new Date()) {
  return Math.floor(d.getTime() / 1000)
}

const now = new Date()
const customVersion = process.argv[2]
const versionName = customVersion || formatVersion(now)
const versionCode = getVersionCode(now)

const rootDir = path.resolve(__dirname, '..')
const manifestPath = path.join(rootDir, 'src', 'manifest.json')
const packagePath = path.join(rootDir, 'package.json')

// 更新 src/manifest.json
if (fs.existsSync(manifestPath)) {
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'))
  manifest.versionName = versionName
  manifest.versionCode = versionCode
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n', 'utf8')
  console.log(`[version] Updated src/manifest.json: versionName=${versionName}, versionCode=${versionCode}`)
}

// 更新 package.json
if (fs.existsSync(packagePath)) {
  const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'))
  pkg.version = versionName
  fs.writeFileSync(packagePath, JSON.stringify(pkg, null, 2) + '\n', 'utf8')
  console.log(`[version] Updated package.json: version=${versionName}`)
}
