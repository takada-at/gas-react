/*
  global HtmlService Logger ScriptApp Session SpreadsheetApp
 */
export function getAuthMode () {
  return ScriptApp.AuthMode
}

export function getUi () {
  return SpreadsheetApp.getUi()
}

export function getActiveSheet () {
  return SpreadsheetApp.getActiveSheet()
}

export function HtmlServiceCreateTemplateFromFile (title) {
  return HtmlService.createTemplateFromFile(title)
}

export function HtmlServiceCreateHtml (title) {
  return HtmlService.createHtmlOutputFromFile(title)
}

export function log (...args) {
  Logger.log(...args)
}

export function SessionGetEffectiveUser () {
  return Session.getEffectiveUser()
}
