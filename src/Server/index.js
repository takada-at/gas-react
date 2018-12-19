/*
 global global
 */
import { addMenu, enable, include, showSidebar } from './Ui'
import { getSheetValues, getUserEmail } from './Api'

function onInstall (e) {
  addMenu(e)
}

global.getUserEmail = getUserEmail
global.enable = enable
global.include = include
global.getSheetValues = getSheetValues
global.showSidebar = showSidebar
global.onOpen = addMenu
global.onInstall = onInstall

export default {
  enable, addMenu, include, getSheetValues, getUserEmail, onInstall
}
