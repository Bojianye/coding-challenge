import {ACCOUNT_CATEGORY, ACCOUNT_TYPE, DataType, VALUE_TYPE} from "../dataType";

export const isRevenue = (item: DataType) => {
  return item.account_category === ACCOUNT_CATEGORY.REVENUE
}

export const isExpenses = (item: DataType) => {
  return item.account_category === ACCOUNT_CATEGORY.EXPENSE
}

export const isSalesDebit = (item: DataType) => {
  return item.account_type === ACCOUNT_TYPE.SALES && item.value_type === VALUE_TYPE.DEBIT
}

export const isAssetsDebit = (item: DataType) => {
  return item.account_category === ACCOUNT_CATEGORY.ASSETS && item.value_type === VALUE_TYPE.DEBIT && ([ACCOUNT_TYPE.CURRENT, ACCOUNT_TYPE.BANK, ACCOUNT_TYPE.CURRENT_ACCOUNTS_RECEIVABLE].includes(item.account_type))
}

export const isAssetsCredit = (item: DataType) => {
  return item.account_category === ACCOUNT_CATEGORY.ASSETS && item.value_type === VALUE_TYPE.CREDIT && ([ACCOUNT_TYPE.CURRENT, ACCOUNT_TYPE.BANK, ACCOUNT_TYPE.CURRENT_ACCOUNTS_RECEIVABLE].includes(item.account_type))
}

export const isLiabilitiesCredit = (item: DataType) => {
  return item.account_category === ACCOUNT_CATEGORY.LIABILITY && item.value_type === VALUE_TYPE.CREDIT && ([ACCOUNT_TYPE.CURRENT, ACCOUNT_TYPE.CURRENT_ACCOUNTS_PAYABLE].includes(item.account_type))
}

export const isLiabilitiesDebit = (item: DataType) => {
  return item.account_category === ACCOUNT_CATEGORY.LIABILITY && item.value_type === VALUE_TYPE.DEBIT && ([ACCOUNT_TYPE.CURRENT, ACCOUNT_TYPE.CURRENT_ACCOUNTS_PAYABLE].includes(item.account_type))
}

export const grossProfitMarginResult = (salesDebit: number, revenue: number) => {
  if (revenue === 0) {
    return 'NA'
  }
  return `${(salesDebit / revenue * 100).toFixed(0)}%`
}

export const netProfitMarginResult = (revenue: number, expenses: number) => {
  if (revenue === 0) {
    return 'NA'
  }
  return `${((revenue - expenses) / revenue * 100).toFixed(0)}%`
}


export const workingCapitalRatioResult = (assetsDebit: number, assetsCredit: number, liabilityCredit: number, liabilityDebit: number) => {
  if (liabilityCredit - liabilityDebit === 0) {
    return 'NA'
  }
  return `${((assetsDebit - assetsCredit) / (liabilityCredit - liabilityDebit) * 100).toFixed(0)}%`
}
