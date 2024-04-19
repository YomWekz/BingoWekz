console.log("Hello World");
let B = false,
I = false,
N = false,
G = false,
O = false;

let BNumber, INumber, NNumber, GNumber, ONumber
function newNumber(maxNumber) {
    let x = Math.floor(Math.random() * maxNumber) + 1 ;
    let a1 = Math.floor(Math.random() * 15) + 1 ;
    let a2 = Math.floor(Math.random() * 15) + 1 ;
    let a3= Math.floor(Math.random() * 15) + 1 ;
    let a4 = Math.floor(Math.random() * 15) + 1 ;

    let b1 = Math.floor(Math.random() * 15) + 16 ;
    let b2 = Math.floor(Math.random() * 15) + 16 ;
    let b3= Math.floor(Math.random() * 15) + 16 ;
    let b4 = Math.floor(Math.random() * 15) + 16 ;

    let x1 = Math.floor(Math.random() * 15) + 31 ;

    let c1 = Math.floor(Math.random() * 15) + 31 ;
    let c2 = Math.floor(Math.random() * 15) + 31 ;
    let c3= Math.floor(Math.random() * 15) + 31 ;
    let c4 = Math.floor(Math.random() * 15) + 31 ;

    let d1 = Math.floor(Math.random() * 15) + 46;
    let d2 = Math.floor(Math.random() * 15) + 46;
    let d3= Math.floor(Math.random() * 15) + 46 ;
    let d4 = Math.floor(Math.random() * 15) + 46 ;

    let e1 = Math.floor(Math.random() * 15) + 61;
    let e2 = Math.floor(Math.random() * 15) + 61;
    let e3= Math.floor(Math.random() * 15) + 61 ;
    let e4 = Math.floor(Math.random() * 15) + 61 ;

    // if ..... else if .... else statement
    // Conditional operator:
    // GTE > =, LTE < =, EQ ==, NEQ ! =, AND &&, OR ||
    if(x <= 15){
        console.log(New number ${x} belongs to "B");
        B = true;
        BNumber =x;
        document.querySelector(#td1).textContent = x;
        document.querySelector(#td6).textContent = a1;
        document.querySelector(#td11).textContent = a2;
        document.querySelector(#td16).textContent = a3;
        document.querySelector(#td21).textContent = a4;
       

    } else if (x >= 16 && x <= 30) {
        console.log(New number ${x} belongs to "I");
        I = true;
        INumber = x;
        document.querySelector(#td2).textContent = x;
        document.querySelector(#td7).textContent = b1;
        document.querySelector(#td12).textContent = b2;
        document.querySelector(#td17).textContent = b3;
        document.querySelector(#td22).textContent = b4;
    } else if (x >= 31 && x <= 45) {
        console.log(New number ${x} belongs to N);
        N = true;
        NNumber = x;
        document.querySelector(#td3).textContent = x1;
        document.querySelector(#td8).textContent = c1;
        document.querySelector(#td13).textContent = c2;
        document.querySelector(#td18).textContent = c3;
        document.querySelector(#td23).textContent = c4;
    } else if (x >= 46 && x <= 60) {
        console.log(New number ${x} belongs to G);
        G = true;
        GNumber = x;
        document.querySelector(#td4).textContent = x;
        document.querySelector(#td9).textContent = d1;
        document.querySelector(#td14).textContent = d2;
        document.querySelector(#td19).textContent = d3;
        document.querySelector(#td24).textContent = d4;
    } else if (x >= 61 && x <= 75) {
        console.log(New number ${x} belongs to O);
        O = true;
        ONumber = x;
        document.querySelector(#td5).textContent = x;
        document.querySelector(#td10).textContent = e1;
        document.querySelector(#td15).textContent = e2;
        document.querySelector(#td20).textContent = e3;
        document.querySelector(#td25).textContent = e4;
    } else {
        console.log(New number ${x} is invalid);
    }

    
    if (B == true && I == true && N == true && G == true && O == true){
        console.log(BINGO!!!!!);
        console.table({
 B:BNumber,
 I:INumber,
 N:NNumber,
 G:GNumber,
 O:ONumber,
        }

        )
    }
}

{}

//newNumber(75);

// LOOPS 
//for(let counter = 10; counter >= 0; counter += 1){
 //   console.log(Current counter is ${counter});
//}

let counter = 5;
//for(counter; counter >= 0; counter--){
//   console.log(Current counter is ${counter});
//   if (counter = 2) break;
//
//
//newNumber(75);

//}

//while (counter >= 0) {
//    console.log(while, current counter is ${counter});
//    if (counter=2) break;
//
//    newNumber(75);
//    counter--;
//}

function generateUniqueNumber(exclude) {
    let number;
    do {
        number = Math.floor(Math.random() * 15) + 1;
    } while (exclude.includes(number));
    exclude.push(number);
    return number;
}

while (B == false || I == false || N == false || G == false || O == false){
    
    newNumber(75);
}
function    colorChange() {
    var button = document.getElementById('button1').style.backgroundColor;  
    var color = '';
    
    if (color !== 'green') {
        color = 'green';
        document.getElementById('button1').style.backgroundColor = color;       
    
        }
    else if (color == 'green') {
        color = 'red';
        document.getElementById('button1').style.backgroundColor = color; 
    
        }
    }
