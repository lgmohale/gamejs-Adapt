const readline  = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const arr = ['.', '/', '\\'];

rl.question('PLEASE ENTER NUMBER OF HOUSES?', (testCase) =>{
    console.clear();
    testCase = Number(testCase);
    if(testCase < 1 || testCase > 40){
        console.log('NUMBER OF HOUSES MUST BE BETWEEN 1 AND 40');
        process.exit(0);
    }
    else {
        const funHouseFn = (testCase, houseNumber) => {
            let funHouse = '';
            if(testCase > 0){
                testCase--;
                houseNumber++;
            rl.question('ENTER THE WIDTH ', (width) =>{
                if(width < 5 || width > 20){
                    process.exit(0);
                }
                rl.question('ENTER THE LENGTH ', (length) =>{
                    if(length < 5 || length > 20){
                        process.exit(0);
                    }
                    else{
                        for(let j = 1; j <= width; j++){
                            for(let k = 1; k <= length; k++){
                                if( j == 1 || j == width ||  k == 1 || k == length) {
                                    if(j != 1 && j == k - 1){
                                        funHouse += '&';
                                    } else if (k != 1 && k == j - 1) {
                                        funHouse += '*';
                                    }
                                    else{
                                        funHouse += 'x';
                                    }
                                }
                                else{
                                    funHouse += arr[Math.floor(Math.random()*arr.length)];
                                }
                            }
                            funHouse += '\n';
                        }                       
                    }
                    console.log('HOUSE '+ houseNumber +'\n' + funHouse);
                    funHouseFn(testCase, houseNumber);
                });
            });
        }
        else{
            console.log('0 0');
            rl.close();
        }
    };
        funHouseFn(testCase, 0);
    }
});

rl.on('close', () =>{
    process.exit(0);
});