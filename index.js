#!/usr/bin/env node
import inquirer from 'inquirer';
let myBalance = 29000;
let myPinNumber = 4040;
let pinAnswer = await inquirer.prompt([
    {
        type: "number",
        name: "pinNumber",
        message: "Enter your pin number: "
    }
]);
if (pinAnswer.pinNumber === myPinNumber) {
    console.log("Pin Number is correct");
    let operationAns = await inquirer.prompt([
        {
            type: "list",
            name: "operation",
            choices: ["Balance Inquiry", "Withdraw", "Fast Cash"],
            message: "Select your operation: "
        }
    ]);
    if (operationAns.operation === "Balance Inquiry") {
        console.log(`Your balance is ${myBalance}`);
    }
    else if (operationAns.operation === "Withdraw") {
        let withdrawAnswer = await inquirer.prompt([
            {
                type: "number",
                name: "withdrawAmount",
                message: "Enter the amount you want to withdraw: "
            }
        ]);
        if (withdrawAnswer.withdrawAmount <= myBalance) {
            myBalance -= withdrawAnswer.withdrawAmount;
            console.log(`Your balance is ${myBalance}`);
        }
        else {
            console.log("Insufficient Balance");
        }
    }
    else if (operationAns.operation === "Fast Cash") {
        let fastCashAnswer = await inquirer.prompt([
            {
                type: "list",
                name: "fastCashAmount",
                choices: ["1000", "2000", "5000", "10000"],
                message: "Select your fast cash amount: "
            }
        ]);
        myBalance -= +(fastCashAnswer.fastCashAmount);
        console.log(`Your balance is ${myBalance}`);
    }
}
else {
    console.log("Pin Number is incorrect");
}
