const rl = require('readline').createInterface(process.stdin, process.stdout);

function question() {
    return new Promise((resolve,reject) => {
        rl.question(`\nвведите число: `,(input) => {
            resolve(input);
        })
    })
}

async function game(counter,sum_counter,success) {  
    number = Math.floor(Math.random()*10);
    console.log(`\nугадайте число от 0 до 9\nДля выхода из игры введите quit`);
    console.log(`\n////загаданное число: ${number} ////\n`);
    while (true) {   
        const input = await question();
        counter++;
        sum_counter++;
        switch (true) {
        case input > number:               
                console.log(`Попытка №: ${counter}`);
                console.log('ваше число больше загаданного');
                break
            case input < number:
                console.log(`Попытка №: ${counter}`);
                console.log('ваше число меньше загаданного');    
                break
            case input == number:   
                success++;        
                console.log(`Попытка №: ${counter}`); 
                console.log(`вы угадали!`); 
                number = Math.floor(Math.random()*10);
                console.log(`\n//// новое загаданное число: ${number} ////\n`)
                break
            case typeof(input) != number && input !== 'quit':
                console.log(`Попытка №: ${counter}`);
                console.log(`Вы ввели не число\n`);
                break   
            case input=='quit':
                console.log(`Вы вышли из игры.\nОбщее количество попыток ${sum_counter-1}. Из них успешных: ${success}\n`);
                rl.close(); 
                return
        }       
    }
}

game(0,0,0);