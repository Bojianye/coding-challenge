export enum ACCOUNT_TYPE {
  SALES = 'sales',
  OVERHEADS = 'overheads',
  CURRENT_ACCOUNTS_RECEIVABLE = 'current_accounts_receivable',
  BANK = 'bank',
  FIXED = 'fixed',
  CURRENT_ACCOUNTS_PAYABLE = 'current_accounts_payable',
  TAX = 'tax',
  CURRENT = 'current',
  PAYROLL = 'payroll'
}

export enum ACCOUNT_CATEGORY {
  REVENUE = 'revenue',
  EXPENSE = 'expense',
  ASSETS = 'assets',
  LIABILITY = 'liability',
}

export enum VALUE_TYPE {
  CREDIT = 'credit',
  DEBIT = 'debit',
}

export type DataType = {
  account_category: ACCOUNT_CATEGORY
  account_code: string
  account_currency: string
  account_identifier: string
  account_status: string
  value_type: VALUE_TYPE
  account_name: string
  account_type: ACCOUNT_TYPE
  account_type_bank: string
  system_account: string
  total_value: number
}
