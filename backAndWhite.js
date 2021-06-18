const squareGrid = (numberOfProblems, grid) => {
    // this is according to my interpretation of the instructions
    let gridRow = grid.trim().split('\n');
    let sortableRows = [];
    let results = "";
    for (let i = 0; i < gridRow.length; i++) {
        sortableRows.push(['line' + (i + 1), gridRow[i].trim().split('*').length]);
    }
    sortableRows = sortableRows.sort((a, b) => {
        return a[1] - b[1];
    });

    for (let j = 0; j < numberOfProblems; j++) {
        results += sortableRows[j][0].replace('line','') + '\n';
    }
    return results;

}
console.log(squareGrid(2, ".. \n" + ". \n" + ".. \n" + "* \n" + ".. \n" + ".. \n"));