let sum = " ";
while(true){
    let value = (prompt("masukan sebuah huruf", ''));
    if(!value) break;

    sum+= value;
}

alert(`sum : ` + sum)