const account = {
  name: 'Manon',
  expenses: [],
  incomes: [],
  addExpense (desc, amount) {
    this.expenses.push({
      description: desc,
      amount: amount
    })
  },
  addIncome (desc, amount) {
    this.incomes.push({
      description: desc,
      amount: amount
    })
  },
  getAccountSummary () {
    totalExpenses = 0
    totalIncomes = 0
    this.expenses.forEach((expense) => {
      totalExpenses = totalExpenses + expense.amount
    })
    this.incomes.forEach((income) => {
      totalIncomes = totalIncomes + income.amount
    })
    total = totalIncomes - totalExpenses
    return `Dear ${this.name}, you currently have ${total} USD on your account, ${totalIncomes} in income and ${totalExpenses} in expenses`
  }
}

account.addExpense('Massage', 25)
account.addExpense('Yoga', 10)
account.addIncome('Salary', 555)


console.log(account)
console.log(account.getAccountSummary())
