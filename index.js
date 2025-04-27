const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function addItem(cart, item) {
    cart.push(item);
    console.log(`Товар добавлен: ${item}`);
}

function removeItem(cart, item) {
    const index = cart.indexOf(item);
    if (index !== -1) {
        cart.splice(index, 1);
        console.log(`Товар удален: ${item}`);
    } else {
        console.log(`Товар '${item}' не найден в корзине.`);
    }
}


function showCart(cart) {
    console.log("\nИтоговый список покупок:");
    for (const item of cart) {
        console.log(`- ${item}`);
    }
}

rl.question("Введите количество желаемых покупок: ", (itemNumber) => {
    const cart = [];
    const itemCount = Number(itemNumber);

    if (isNaN(itemCount)) {
        console.log("Введите корректное число");
        rl.close();
        return;
    }

    let i = 0;

    const askForItem = () => {
        if (i < itemCount) {
            rl.question(`Введите наименование товара ${i + 1}: `, (itemName) => {
                if (itemName.length === 0) {
                    console.log("Пожалуйста, введите наименование.");
                    askForItem(); 
                    return;
                }
                addItem(cart, itemName);
                i++;
                askForItem(); 
            });
        } else {
            console.log(`Количество товаров: ${cart.length} `);

        removeItem(cart, "пример_1");

        addItem(cart, "пример_2");

        showCart(cart);

            rl.close();
        }
    };

    askForItem();
});
