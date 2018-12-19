import fs from 'fs'
import path from 'path'
import * as _ from 'underscore'
import commander from 'commander'

function camel (name, zeroCap = false) {
  if (name === '') {
    return ''
  }
  const keys = name.split('_')
  if (!zeroCap) {
    const camelKeys = [
      keys[0][0].toLowerCase() + keys[0].slice(1).toLowerCase()
    ].concat(keys.slice(1).map((key) => (key[0] + key.slice(1).toLowerCase())))
    return camelKeys.join('')
  } else {
    return keys.map((key) => (key[0] + key.slice(1).toLowerCase()))
  }
}

export function generateApi (apis) {
  const templatePath = path.resolve(__dirname, 'api_template.tmpl')
  const content = fs.readFileSync(templatePath, 'utf-8')
  const template = _.template(content)
  return template({ apis, camel })
}

function readMaster (path) {
  const content = fs.readFileSync(path, 'utf-8').toString()
  const returnValue = []
  for (let line of content.split('\n').slice(1)) {
    if (line === '') {
      continue
    }
    const row = line.split('\t')
    if (row.length < 3) {
      throw new Error(`row: ${row}`)
    }
    const parameters = readListValue(row[2])
    const actionParameters = [...parameters, ...readListValue(row[3])]
    returnValue.push({
      action: row[0],
      name: row[1],
      parameters,
      actionParameters
    })
  }
  return returnValue
}

function readListValue (value) {
  let values = []
  if (value !== '') {
    values = value.split(',')
  }
  return values
}

function generate () {
  const masterPath = path.resolve(__dirname, 'api.tsv')
  const savePath = path.resolve(__dirname, '../../', 'src/Client/Store/Api/Actions.js')
  const apis = readMaster(masterPath)
  const data = generateApi(apis)
  console.log(`save to ${savePath}`)
  fs.writeFileSync(savePath, data)
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
  generate(commander.mode)
}

main()
