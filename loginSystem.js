const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Predefined dictionary of users
const users = {};

function register(username, password) {
    if (users[username]) {
        console.log("Username already exists.");
        return;
    }

    if (password.length < 8) {
        console.log("Password is too short.");
        return;
    }

    users[username] = password;
    console.log("Registration Successful!");
}

function login(username, password) {
    if (!users[username]) {
        console.log("Username does not exist.");
        return;
    }

    if (users[username] !== password) {
        console.log("Incorrect password.");
        return;
    }

    console.log("Login Successful!");
}

function mainMenu() {
    rl.question('Choose an option: Register, Login, Quit: ', (option) => {
        if (option.toLowerCase() === 'quit') {
            console.log("Goodbye!");
            rl.close();
            return;
        }

        rl.question('Enter username: ', (username) => {
            rl.question('Enter password: ', (password) => {
                if (option.toLowerCase() === 'register') {
                    register(username, password);
                } else if (option.toLowerCase() === 'login') {
                    login(username, password);
                }

                rl.close();
            });
        });
    });
}

mainMenu();
