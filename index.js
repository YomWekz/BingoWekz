
function changeColor(cell){ cell.classList.toggle("selected"); }
function toggleColor(element){ if (element.style.backgroundColor === 'red' ) { element.style.backgroundColor === '';} else { element.style.backgroundColor === 'red';}}


console.log("Hello World");
let B = false,
    I = false,
    N = false,
    G = false,
    O = false;
let k = [];

let BNumber, INumber, NNumber, GNumber, ONumber

function newNumber(maxNumber) {
    let x = Math.floor(Math.random() * maxNumber) + 1;
    let a1 = Math.floor(Math.random() * 15) + 1;
    let a2 = Math.floor(Math.random() * 15) + 1;
    let a3 = Math.floor(Math.random() * 15) + 1;
    let a4 = Math.floor(Math.random() * 15) + 1;

    let b = Math.floor(Math.random() * 15) + 16;
    let b1 = Math.floor(Math.random() * 15) + 16;
    let b2 = Math.floor(Math.random() * 15) + 16;
    let b3 = Math.floor(Math.random() * 15) + 16;
    let b4 = Math.floor(Math.random() * 15) + 16;

    let x1 = Math.floor(Math.random() * 15) + 31;
    let c = Math.floor(Math.random() * 15) + 31;
    let c1 = Math.floor(Math.random() * 15) + 31;
    let c2 = Math.floor(Math.random() * 15) + 31;
    let c3 = Math.floor(Math.random() * 15) + 31;
    let c4 = Math.floor(Math.random() * 15) + 31;

    let d = Math.floor(Math.random() * 15) + 46;
    let d1 = Math.floor(Math.random() * 15) + 46;
    let d2 = Math.floor(Math.random() * 15) + 46;
    let d3 = Math.floor(Math.random() * 15) + 46;
    let d4 = Math.floor(Math.random() * 15) + 46;

    let e = Math.floor(Math.random() * 15) + 61;
    let e1 = Math.floor(Math.random() * 15) + 61;
    let e2 = Math.floor(Math.random() * 15) + 61;
    let e3 = Math.floor(Math.random() * 15) + 61;
    let e4 = Math.floor(Math.random() * 15) + 61;

    // if ..... else if .... else statement
    // Conditional operator:
    // GTE > =, LTE < =, EQ ==, NEQ ! =, AND &&, OR ||
    if (x <= 15) {
        if (x != a1 || x != a2 || x != a3 || x != a4) { let x = Math.floor(Math.random() * maxNumber) + 1; }
        console.log(`New number ${x} belongs to "B"`);
        B = true;
        BNumber = x;


        if (!k.includes(x)) {

            document.querySelector(`#td1`).textContent = x;
            k.push(x)
        }
        if (!k.includes(a1)) {

            document.querySelector(`#td6`).textContent = a1;
            k.push(a1)
        }
        if (!k.includes(a2)) {

            document.querySelector(`#td11`).textContent = a2;
            k.push(a2)
        }
        if (!k.includes(a3)) {

            document.querySelector(`#td16`).textContent = a3;
            k.push(a3)
        }
        if (!k.includes(a4)) {

            document.querySelector(`#td21`).textContent = a4;

            k.push(a4)
        }



    } else if (x >= 16 && x <= 30) {
        console.log(`New number ${x} belongs to "I"`);
        I = true;
        INumber = x;
        if (!k.includes(b)) {

            document.querySelector(`#td2`).textContent = b;
            k.push(b)
        }
        if (!k.includes(b1)) {

            document.querySelector(`#td7`).textContent = b1;
            k.push(b1)
        }
        if (!k.includes(b2)) {

            document.querySelector(`#td12`).textContent = b2;
            k.push(b2)
        }
        if (!k.includes(b3)) {

            document.querySelector(`#td17`).textContent = b3;
            k.push(b3)
        }
        if (!k.includes(b4)) {

            document.querySelector(`#td22`).textContent = b4;

            k.push(b4)
        }
    } else if (x >= 31 && x <= 45) {
        console.log(`New number ${x} belongs to N`);
        N = true;
        NNumber = x;
        if (!k.includes(c)) {

            document.querySelector(`#td3`).textContent = c;
            k.push(c)
        }
        if (!k.includes(c1)) {

            document.querySelector(`#td8`).textContent = c1;
            k.push(c1)
        }

        if (!k.includes(c3)) {

            document.querySelector(`#td18`).textContent = c3;
            k.push(c3)
        }
        if (!k.includes(c4)) {

            document.querySelector(`#td23`).textContent = c4;

            k.push(c4)
        }
    } else if (x >= 46 && x <= 60) {
        console.log(`New number ${x} belongs to G`);
        G = true;
        GNumber = x;

        if (!k.includes(d)) {

            document.querySelector(`#td4`).textContent = d;
            k.push(d)
        }
        if (!k.includes(d1)) {

            document.querySelector(`#td9`).textContent = d1;
            k.push(d1)
        }
        if (!k.includes(d2)) {

            document.querySelector(`#td14`).textContent = d2;
            k.push(d2)
        }
        if (!k.includes(d3)) {

            document.querySelector(`#td19`).textContent = d3;
            k.push(d3)
        }
        if (!k.includes(d4)) {

            document.querySelector(`#td24`).textContent = d4;

            k.push(d4)
        }
    } else if (x >= 61 && x <= 75) {
        console.log(`New number ${x} belongs to O`);
        O = true;
        ONumber = x;

        if (!k.includes(e)) {

            document.querySelector(`#td5`).textContent = e;
            k.push(e)
        }
        if (!k.includes(e1)) {

            document.querySelector(`#td10`).textContent = e1;
            k.push(e1)
        }
        if (!k.includes(e2)) {

            document.querySelector(`#td15`).textContent = e2;
            k.push(e2)
        }
        if (!k.includes(e3)) {

            document.querySelector(`#td20`).textContent = e3;
            k.push(e3)
        }
        if (!k.includes(e4)) {

            document.querySelector(`#td25`).textContent = e4;

            k.push(e4)
        }
    } else {
        console.log(`New number ${x} is invalid`);
    }


    if (B == true && I == true && N == true && G == true && O == true) {
        console.log(`BINGO!!!!!`);
        console.table({
            B: BNumber,
            I: INumber,
            N: NNumber,
            G: GNumber,
            O: ONumber,
        }

        )
    }
}

{ }

//newNumber(75);

// LOOPS 
//for(let counter = 10; counter >= 0; counter += 1){
//   console.log(`Current counter is ${counter}`);
//}

let counter = 5;
//for(counter; counter >= 0; counter--){
//   console.log(`Current counter is ${counter}`);
//   if (counter = 2) break;
//
//
//newNumber(75);

//}

//while (counter >= 0) {
//    console.log(`while, current counter is ${counter}`);
//    if (counter=2) break;
//
//    newNumber(75);
//    counter--;
//}



while (B == false || I == false || N == false || G == false || O == false) {

    newNumber(75);
}


