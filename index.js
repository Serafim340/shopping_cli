const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

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
                cart.push(itemName);
                i++;
                askForItem(); 
            });
        } else {
            console.log(`Количество товаров: ${cart.length}`);

            const index = cart.indexOf("пример_1"); // Удаление определенного товара из корзины
            if (index !== -1) {
                cart.splice(index, 1);
            }

            cart.push("пример_2"); // Добавление товара в конец корзины

            for (const item of cart) {
                console.log(`В корзине: ${item}`);
            }

            rl.close();
        }
    };

    askForItem();
});
