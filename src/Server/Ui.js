import * as GAS from './AppsScript'

export function enable () {
  addMenu()
}

export function addMenu (e) {
  const ui = GAS.getUi()
  const authMode = GAS.getAuthMode()
  const isAuth = !(e && e.authMode === authMode.NONE)
  const menu = ui.createAddonMenu()
  if (!isAuth) {
    menu.addItem('Enable', 'enable')
  } else {
    menu.addItem('Show Sidebar', 'showSidebar')
  }
  menu.addToUi()
}

export function include (filename) {
  return GAS.HtmlServiceCreateHtml(filename).getContent()
}

export function showSidebar () {
  const ui = GAS.getUi()
  const template = getTemplate()
  template.command = ''
  const html = template.evaluate()
    .setTitle('Menu')
    .setWidth(1000)
  ui.showSidebar(html)
}

export function getTemplate (path = null) {
  const template = GAS.HtmlServiceCreateTemplateFromFile('base')
  template.path = path
  template.env = process.env.NODE_ENV
  return template
}
