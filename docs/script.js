function createMultiplicationTable(size) {
    var table = document.createElement('table');
    table.style.width = '100%';
    table.setAttribute('border', '1');

    for (var i = 1; i <= size; i++) {
        var row = table.insertRow(-1);
        for (var j = 1; j <= size; j++) {
            var cell = row.insertCell(-1);
            cell.textContent = i * j;
            cell.style.padding = '5px';
            cell.style.textAlign = 'center';
        }
    }

    return table;
}

var multiplicationTable = createMultiplicationTable(12); // ここで表のサイズを指定
document.getElementById('multiplicationTable').appendChild(multiplicationTable);
