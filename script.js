//Universal dastur - quyidagi amallarni bajara oladi 🦾!

console.log("Menu:");
console.log("1. Faslni aniqlash");
console.log("2. Yoshingizni aniqlash");
console.log("3. N gacha juft va toq sonlar yigindisini nisbati");
console.log("4. Raqam orqali 'operatorni' aniqlash");

let menu=+prompt("Qaysi funksiyani ishlatmoqchi siz: ");

switch(menu){
    case 1 : fasil() ; break;
    case 2 : yosh() ; break;
    case 3 : nisbat() ; break;
    case 4 : operator() ; break;
    default: console.log("1 dan 4 gacha raqam kiritasiz ;)")
}


// fasl funcsiyasi
function fasil(){
    let month=+prompt("Oyni kiriting: ");

    switch(month){
        case 1 : console.log("Qish fasli"); break;
        case 2 : console.log("Qish fasli"); break;
        case 3 : console.log("Bahor fasli"); break;
        case 4 : console.log("Bahor fasli"); break;
        case 5 : console.log("Bahor fasli"); break;
        case 6 : console.log("Yoz fasli"); break;
        case 7 : console.log("Yoz fasli"); break;
        case 8 : console.log("Yoz fasli"); break;
        case 9 : console.log("Kuz fasli"); break;
        case 10 : console.log("Kuz fasli"); break;
        case 11 : console.log("Kuz fasli"); break;
        case 12 : console.log("Qish fasli"); break;
        default : alert("Qanaqa oy bo'ldi endi bu😂💀"); 
    }
}

// yosh topish funcsiysi
function yosh(){
    let yosh=+prompt("Tug'lgan yilingizni kiriting: ");
    let year=2024;
    alert(`Siz ${year-yosh} yoshda siz =)`);
}

//juft toqlar yigindisi
function nisbat(){
    let n=+prompt("Sonni kiriting: ")
    let sumEven = 0;
    let sumOdd = 0;

    for(let i = 0; i <= n; i++){
        if(i % 2 == 0){
            sumEven += i;  
        }else{
            sumOdd +=i;
        }

    }

    console.log(`Juft sonlar yigindisi: ${sumEven}`);
    console.log(`Toq sonlar yigindisi: ${sumOdd}`);
    console.log(`Ularning nisbatlar: ${sumEven/sumOdd}`);
}


//raqam operatorini aniqlash
function operator(){
    let raqam=+prompt("Raqam kodini kiriting: ");

    switch(raqam){
        case 90 : console.log("Bu raqam 'Beeline'"); break;
        case 91 : console.log("Bu raqam 'Beeline'"); break;
        case 93 : console.log("Bu raqam 'Ucell'"); break;
        case 94 : console.log("Bu raqam 'Ucell'"); break;
        case 95 : console.log("Bu raqam 'Ucell'"); break;
        case 99 : console.log("Bu raqam 'Uzmobile'"); break;
        case 88 : console.log("Bu raqam 'Humans'"); break;
        case 77 : console.log("Bu raqam 'Humans'"); break;
        case 79 : console.log("Bu damashni telefon kodi"); break;
        default: alert("O'ziz toping 😂");
    }
}