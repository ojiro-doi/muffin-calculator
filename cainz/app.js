const btn = 
    {
        price: [100, 110, 120, 130],
        name: ["プレーン", "チョコ", "抹茶", "イチゴ"]
    };


let total = 0;
let number = 0;
const btnlength=btn.name.length;
const $button = document.getElementsByClassName("btn");
const $buttonName=$button.querySelect
const $numberdisplay = document.getElementById("number-dis");
const $totaldisplay = document.getElementById("total-dis");

// class Button{
//     constructor(price,name){
//         this.price=price;
//         this.name=name;
//     }
// }



//クリック時のpriceの合計、回数を表示
const ClickButton = (e) => {
    for (let i = 0; i < btnlength; i++) {
        if (btn.name[i] === e.target.textContent) {
            total += btn.price[i];
            number++;
        }
    }

    console.log(e.target);
    Display();
}


// ボタン
const Button_function = () => {
    for (let i = 0; i < btnlength; i++) {
        // ボタン名前
        $button[i].textContent = btn.name[i];
    }


    for (let j = 0; j < btnlength; j++) {
        // ボタンclick
        $button[j].addEventListener("click", (e) => {
            ClickButton(e);
            console.log(total);
            console.log(number);
        });
    }
}


//画面表示
const Display = () => {
    $numberdisplay.textContent = number;
    $totaldisplay.textContent = total;
}

Button_function();
Display();
