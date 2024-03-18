let B = false,
    I = false,
    N = false,
    G = false,
    O = false;
    
    let BNumber, INumber, NNumber, GNumber, ONumber;

function newNumber() {
    let x = Math.floor(Math.random() * 75) + 1;
    if (x <= 15) {
        generateNewNumber(15);
        B = true;
        BNumber = x;
    } else if (x >= 16 && x <= 30) {
        generateNewNumber(30);
        I = true;
        INumber = x;
    }
    else if (x >= 31 && x <= 42) {
        generateNewNumber(42);
        N = true;
        NNumber = x;
    }
    else if (x >= 46 && x <= 60) {
        generateNewNumber(60);
        G = true;
        GNumber = x;
    }
    else if (x >= 61 && x <= 75) {
        generateNewNumber(75);
        O = true;
        ONumber = x;
    }

    if (B == true && I == true && N == true && G == true && O == true) {
        console.log("BINGOOOOO BES PRAMISESS")
        console.table({
            B: BNumber,
            I: INumber,
            N: NNumber,
            G: GNumber,
            O: ONumber,
        })
    }

}

function generateNewNumber(maxNumber) {
    const min = (maxNumber - 15) + 1;
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(maxNumber);

    let x = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);

    switch (maxNumber) {
        case 15:
            return console.log(`B: ${x}`)
        case 30:
            return console.log(`I: ${x}`)
        case 42:
            return console.log(`N: ${x}`)
        case 60:
            return console.log(`G: ${x}`)
        case 75:
            return console.log(`O: ${x}`)
    }

}
console.log(newNumber());

//LOOPS
//let counter = 10
//for( counter; counter >= 0; counter--) {
 // console.log(current counter is ${counter});
////if (counter ==3) break;
////newNumber(75)
//}

//let counter = 10
//while(counter >= 0) {
//console.log(current counter is ${counter});
///counter--;
//}

//counter = 5
//do{
  //  console.log(current counter is ${counter});
 //   counter--;

//}while(counter >= 0);
while(!B||!I||!N||!G||!O){
  newNumber(75);
}