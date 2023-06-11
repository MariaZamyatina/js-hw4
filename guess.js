const rl = require('readline').createInterface(process.stdin, process.stdout);

function question(number,counter,sum_counter,success) {
    rl.question(`\nвведите число: `,(input) => {
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
        question(number,counter,sum_counter,success);    
    })  
}

function game(func) {
    number = Math.floor(Math.random()*10);
    console.log(`\nугадайте число от 0 до 9\nДля выхода из игры введите quit`);
    console.log(`\n////загаданное число: ${number} ////\n`);
    func(number,counter=0,sum_counter=0,success=0);
    };

game(question);

