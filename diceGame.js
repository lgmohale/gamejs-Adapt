const playDice = (str) =>{
    const [ Gunnar, Emma ] = str.split('\n')
    let gunnarResults = Gunnar.split(' ').reduce((total, item) => { return total += Number(item)}, 0);
    let emmaResults = Emma.split(' ').reduce((total, item) => { return total += Number(item)}, 0);
    if (emmaResults > gunnarResults) {
        return "Emma";

    } else if (emmaResults < gunnarResults) {
        return "Gunnar";
    } else {
        return "Tie";
    }
};

console.log(playDice('1 4 1 4 \n 1 6 1 6'));