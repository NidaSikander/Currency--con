#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue.bold("\n Welcome to My Currency-Converter\n"));

let currency :any = {
    USD : 1,
    EUR :0.91,
    GBP :0.76,
    INR :74.57,
    PKR :280,
};

let user_answer =await inquirer.prompt(
    [
    {
    name :"from",
     type :"list",
     message:"Select the currency to convert from",
     choices :["USD","EUR","GBP","INR","PKR"]
    
},
{
    name: "to",
    type: "list",
    message:"Select the currency to convert into",
    choices :["USD","EUR","GBP","INR","PKR"]
},
{
    name: "amount",
    type:"number",
    message: "Enter Your Amount to convert:",
    
}
]
)

let fromAmount  = currency[user_answer.from] //exchange rate
let toAmount= currency[user_answer.to] //exchange  rate
let amount = user_answer.amount
let baseAmount= amount / fromAmount
let converted_amount = baseAmount * toAmount
console.log(converted_amount);





