import commander from 'commander'
import fs from 'fs'
import path from 'path'
import { sync } from 'globby'
import { execSync } from 'child_process'

function rewriteJs (fromPath, targetPath) {
  const basename = path.basename(fromPath, '.js')
  const writePath = path.join(targetPath, basename + '.js.html')
  const content = fs.readFileSync(fromPath)
  const js = `<script>
window.addEventListener('load', function() {
  ${content}
}) 
</script>`
  fs.writeFileSync(writePath, js)
}

function build (mode) {
  const cmd = `NODE_ENV=${mode} webpack --mode=${mode}`
  console.log(`execute '${cmd}'`)
  console.log(execSync(cmd).toString())
}

function deploy (mode) {
  const rootPath = path.resolve(__dirname, '../')
  const deployPath = path.resolve(rootPath, 'deploy', mode)
  const srcs = ['build/server.bundle.js', 'appsscript.json']
  srcs.forEach((f) => {
    const dst = path.resolve(deployPath, path.basename(f))
    fs.copyFileSync(path.resolve(rootPath, f), dst)
    console.log(`copy ${f}`)
  })
  const staticPath = path.resolve(rootPath, 'static')
  sync(staticPath + '/*.html').forEach((f) => {
    const dst = path.resolve(deployPath, path.basename(f))
    fs.copyFileSync(path.resolve(rootPath, f), dst)
    console.log(`copy ${f}`)
  })
  rewriteJs(
    path.resolve(rootPath, 'build/client.bundle.js'),
    deployPath)
  const cmd = `cd ${deployPath}; clasp push`
  execSync(cmd)
  console.log(`execute '${cmd}'`)
}

function main () {
  const env = process.env.NODE_ENV || 'development'
  commander
    .option('--upload', 'push to Apps Script')
    .option('-m, --mode [mode]', 'mode', /^(development|production)$/, env)
    .parse(process.argv)
  if (commander.mode !== 'production' && commander.mode !== 'development') {
    throw new Error(`invalid mode ${commander.mode}`)
  }
  build(commander.mode)
  if (commander.upload) {
    deploy(commander.mode)
  }
}

main()
