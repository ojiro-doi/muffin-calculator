
const btn = [
    { price: 100, name: "プレーン" },
    { price: 110, name: "おぐらバター" },
    { price: 120, name: "ブルーベリーチーズ" },
    { price: 130, name: "低糖質プレーン" },
    { price: 140, name: "フォンダンショコラ" },
    { price: 150, name: "チョコバナナ" },
    { price: 160, name: "チョコクランチ" },
    { price: 160, name: "オレンジヨーグルト" },
    { price: 160, name: "クリームブリュレ" },
    { price: 160, name: "メロンパン" },
    { price: 160, name: "アップルカスタード" },

]


let total = 0;
let number = 0;
let total_pre = 0;
let number_pre = 0
const btnLength = btn.length;
const $buttonName = document.getElementsByClassName("btn-name");
const $button = document.getElementsByTagName("button");
const $buttonImage = document.getElementsByClassName("Image");

const $numberdisplay = document.getElementById("number-dis");
const $totaldisplay = document.getElementById("total-dis");

// class Button{
//     constructor(price,name){
//         this.price=price;
//         this.name=name;
//     }
// }



// クリック時のpriceの合計、回数を表示
// const ClickButton = (e) => {
//     for (let i = 0; i < btnLength; i++) {
//         if (btn.name[i] === e.target.textContent) {
//             total += btn.price[i];
//             number++;
//         }
//     }

//     console.log(e.target);
//     display();
// }


// const clickedElement = e.target;
// ClickButton();
// console.log(total);
// console.log(number);


//ボタン
const buttonName = () => {
    for (let i = 0; i < btnLength; i++) {
        // ボタン名前
        $buttonName[i].textContent = btn[i].name;
    }
    // $button.addEventListener("click", (e) => {
    //     ClickButton(e);
    //     console.log(total);
    //     console.log(number);
    // });


    // for (let j = 0; j < btnLength; j++) {
    //     // ボタンclick
    //     $button[j].addEventListener("click", (e) => {
    //         ClickButton(e);
    //         console.log(total);
    //         console.log(number);
    //     });
    // }
};

//画面表示
const display = () => {
    $numberdisplay.textContent = number;
    $totaldisplay.textContent = total;
}

const displayLog = () => {
    console.log(`回数：${number}`);
    console.log(`合計：${total}`);
}

buttonName();
display();

// const Click = () => {
//     $button.addEventListener("click", (e) => {
//         ClickButton(e);
//         console.log(total);
//         console.log(number);
//     });
// };

class click {
    constructor(buttonId, buttonNumber) {
        this.buttonId = buttonId;
        this.buttonNumber = buttonNumber;
    }

    clickFunction() {
        if (this.buttonId === `btn${this.buttonNumber}`) {
            console.log("clickインスタンスが作成されました");
            total += btn[this.buttonNumber].price;
            number++;
            if (number % 3 === 0) {
                console.log("totalで-30")
                total -= 30;
                $numberdisplay.classList.add('highlighted_3');
            } else {
                $numberdisplay.classList.remove('highlighted_3');
            }
            if (number === 6 && total > 880 || number === 9 && total > 1260) {
                console.log("セットの方が安い")
                $totaldisplay.classList.add('highlighted');
            } else {
                $totaldisplay.classList.remove('highlighted');
            }
        }
        // 画面表示更新
        display();


    }
}




const buttonClick = (buttonId) => {
    //クリック前のvalueを保存
    total_pre = total;
    number_pre = number;
    for (let i = 0; i < btnLength; i++) {
        const clickInstance = new click(buttonId, i);
        clickInstance.clickFunction();
    }
    // const click0 = new click(buttonId, 0);
    // click0.clickFunction();
    // const click1 = new click(buttonId, 1);
    // click1.clickFunction();
    // const click2 = new click(buttonId, 2);
    // click2.clickFunction();

    displayLog();
}

const resetValue = () => {
    total = 0;
    number = 0;
    display();
    displayLog();
}

const undoValue = () => {
    total=total_pre;
    number=number_pre;
    display();
    displayLog();
}




