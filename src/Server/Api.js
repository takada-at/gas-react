import * as GAS from './AppsScript'

export function getUserEmail () {
  return GAS.SessionGetEffectiveUser().getEmail()
}

export function getSheetValues (col) {
  return GAS.getActiveSheet().getRange(1, col, 5, 1).getValues()
}
