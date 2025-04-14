 for (let x = 1; x <= 12 ; x++) {
    let row = "";
    for (let y = 1; y <=12; y++) {
        row += (x*y).toString().padStart(4, '');
    }
    console.log(row);
 }