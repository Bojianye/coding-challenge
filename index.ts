import data from './data.json'
import numeral from 'numeral'
import {
  grossProfitMarginResult,
  isAssetsCredit,
  isAssetsDebit,
  isExpenses,
  isLiabilitiesCredit, isLiabilitiesDebit,
  isRevenue,
  isSalesDebit, netProfitMarginResult, workingCapitalRatioResult
} from "./utils/challengeUtils";
import {DataType} from "./dataType";


let revenue = 0, expenses = 0, salesDebit = 0
let assetsDebit = 0, assetsCredit = 0
let liabilityDebit = 0, liabilityCredit = 0

const resultData = data.data as DataType[]

for (const item of resultData){
  if (isRevenue(item)){
    revenue += item.total_value
  }
  if (isExpenses(item)){
    expenses += item.total_value
  }
  if (isSalesDebit(item)){
    salesDebit += item.total_value
  }
  if (isAssetsDebit(item)){
    assetsDebit += item.total_value

  }
  if (isAssetsCredit(item)){
    assetsCredit += item.total_value

  }
  if (isLiabilitiesDebit(item)){
    liabilityDebit += item.total_value

  }
  if (isLiabilitiesCredit(item)){
    liabilityCredit += item.total_value
  }
}

console.log(`Revenue: ${numeral(revenue).format('$0,0')}`)
console.log(`Expenses: ${numeral(expenses).format('$0,0')}`)
console.log(`Gross Profit Margin: ${grossProfitMarginResult(salesDebit, revenue)}`)
console.log(`Net Profit Margin: ${netProfitMarginResult(revenue, expenses)}`)
console.log(`Working Capital Ratio: ${workingCapitalRatioResult(assetsDebit, assetsCredit, liabilityCredit, liabilityDebit)}`)
