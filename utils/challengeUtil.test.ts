import {
  grossProfitMarginResult,
  netProfitMarginResult, workingCapitalRatioResult
} from "./challengeUtils";

describe('Challenge Utils Test', ()=>{

  it('Gross Profit Margin Result Test', ()=>{
    expect(grossProfitMarginResult(100, 100)).toBe('100%')
    expect(grossProfitMarginResult(100, 0)).toBe('NA')
    expect(grossProfitMarginResult(0, 0)).toBe('NA')
  })

  it('Net Profit Margin Result Test', ()=>{
    expect(netProfitMarginResult(100, 50)).toBe('50%')
    expect(netProfitMarginResult(0, 0)).toBe('NA')
    expect(netProfitMarginResult(0, 200)).toBe('NA')
  })

  it('Working Capital Ratio Result Test', ()=>{
    expect(workingCapitalRatioResult(100, 50, 100, 50)).toBe('100%')
    expect(workingCapitalRatioResult(100, 50, 50, 50)).toBe('NA')
    expect(workingCapitalRatioResult(50, 50, 40, 50)).toBe('0%')
  })

})

