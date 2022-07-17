let myAccount = {
  name: 'Manon',
  income: 0,
  expense: 0
}


const addExpense = (account, amount) => {
  account.expense += amount
}

const addIncome = (account, amount) => {
  account.income += amount
}

const resetAccount = account => {
  account.income = 0
  account.expense = 0
}

const getAccountSummary = account => {
  let total = account.income - account.expense
  console.log(`Hi ${account.name}, your account has ${total}$, ${account.income}$ of income, and ${account.expense}$ of expenses`)
}


addExpense(myAccount, 2.5)
getAccountSummary(myAccount)
addIncome(myAccount, 100)
getAccountSummary(myAccount)
addExpense(myAccount, 25.5)
getAccountSummary(myAccount)
resetAccount(myAccount)
getAccountSummary(myAccount)




// ----------------- BE CAREFUL OF SCOPE OF MODIFICATION  NOT LIKE RUBY ----------------------

const eraseAccount = account => {
  account = {}
}
eraseAccount(myAccount)
console.log(myAccount)
// hasnt been deleted!!!!!!!!!!!!!!!!!!
// cant only manipulate properties, not the object itself.


let otherAccount = myAccount
otherAccount.name = 'Guido'
console.log(myAccount)

// has been modified!!!!!!
