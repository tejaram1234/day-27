localStorage.setItem("firstName", "Tejaram");
localStorage.setItem("lastName", "Akkpalli");
localStorage.setItem("country", "India");
localStorage.setItem("city", "Tirupati");

const name = localStorage.getItem("firstName");

//Q2.....
const student = {
  firstName: "Tejaram",
  lastName: "Akkupalli",
  age: 25,
  skills: ["JavaScript", "HTML", "CSS"],
  country: "India",
  enrolled: {
    HTML: true,
    CSS: true,
    React: false
  }
};
localStorage.setItem("student", JSON.stringify(student));
JSON.parse(localStorage.getItem("student"));

//Q3...

const personAccount = {
  firstName: "Tejaram",
  lastName: "Akkupalli",
  incomes: new Map(),
  expenses: new Map(),
  totalIncome: function () {
    let total = 0;
    for (const [amount] of this.incomes) {
      total += amount;
    }
    return total;
  },
  totalExpense: function () {
    let total = 0;
    for (const [amount] of this.expenses) {
      total += amount;
    }
    return total;
  },
  accountInfo: function () {
    return `Account information for ${this.firstName} ${
      this.lastName
    }: \nTotal Income: ${this.totalIncome()} \nTotal Expenses: ${this.totalExpense()} \nAccount Balance: ${this.accountBalance()}`;
  },
  addIncome: function (amount, description) {
    this.incomes.set(amount, description);
  },
  addExpense: function (amount, description) {
    this.expenses.set(amount, description);
  },
  accountBalance: function () {
    return this.totalIncome() - this.totalExpense();
  }
};