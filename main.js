#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome to the Adventure Game ");
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Please Enter your Name"
    }
]);
let opponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "Select your Opponent",
        choices: ["Skeleton", "Alien", "Zombie"]
    }
]);
let p1 = new Player(player.name);
let O1 = new Opponent(opponent.select);
do {
    // Skeleton:
    if (opponent.select == "Skeleton") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would like to do?",
                choices: ["Attack", "Drink portion", "Run for you life"]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${O1.name} fuel is ${O1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You Loose,Better Luck Next Time");
                    process.exit();
                }
            }
            if (num <= 0) {
                O1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${O1.name} fuel is ${O1.fuel}`);
                if (O1.fuel <= 0) {
                    console.log("You Win");
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink portion") {
            p1.fuelIncrease();
            console.log(`You Drink Health Portion you fuel is ${p1.fuel}`);
        }
        if (ask.opt == "Run for you life") {
            console.log("You Loose,Better Luck Next Time.");
            process.exit();
        }
    }
    // Alien:
    if (opponent.select == "Alien") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would like to do?",
                choices: ["Attack", "Drink portion", "Run for you life"]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${O1.name} fuel is ${O1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You Loose,Better Luck Next Time");
                    process.exit();
                }
            }
            if (num <= 0) {
                O1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${O1.name} fuel is ${O1.fuel}`);
                if (O1.fuel <= 0) {
                    console.log("You Win");
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink portion") {
            p1.fuelIncrease();
            console.log(`You Drink Health Portion you fuel is ${p1.fuel}`);
        }
        if (ask.opt == "Run for you life") {
            console.log("You Loose,Better Luck Next Time.");
            process.exit();
        }
    }
    // Zombie:
    if (opponent.select == "Zombie") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would like to do?",
                choices: ["Attack", "Drink portion", "Run for you life"]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${O1.name} fuel is ${O1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You Loose,Better Luck Next Time");
                    process.exit();
                }
            }
            if (num <= 0) {
                O1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${O1.name} fuel is ${O1.fuel}`);
                if (O1.fuel <= 0) {
                    console.log("You Win");
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink portion") {
            p1.fuelIncrease();
            console.log(`You Drink Health Portion you fuel is ${p1.fuel}`);
        }
        if (ask.opt == "Run for you life") {
            console.log("You Loose,Better Luck Next Time.");
            process.exit();
        }
    }
} while (true);
