
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

//ボタン
const buttonName = () => {
    for (let i = 0; i < btnLength; i++) {
        // ボタン名前
        $buttonName[i].textContent = btn[i].name;
    }
};

//画面表示
const display = () => {
    $numberdisplay.textContent = number;
    $totaldisplay.textContent = total;
};

const displayLog = () => {
    if (number % 3 === 0 && number !== 0) {
        console.log("totalから-30");
    }
    console.log(`number : ${number}`);
    console.log(`total  : ${total}`);
    console.log("");
};

const displayColor = () => {
    if (number % 3 === 0 && number !== 0) {
        $numberdisplay.classList.add('highlighted_3');
    } else {
        $numberdisplay.classList.remove('highlighted_3');
    }
    if (number === 6 && total > 880 || number === 9 && total > 1260) {
        console.log("セットの方が安い");
        $totaldisplay.classList.add('highlighted');
    } else {
        $totaldisplay.classList.remove('highlighted');
        console.log("単品の方が安い")
    }
};

//初期表示
buttonName();
display();

class click {
    constructor(buttonId, buttonNumber) {
        this.buttonId = buttonId;
        this.buttonNumber = buttonNumber;
    }

    clickFunction() {
        //計算
        if (this.buttonId === `btn${this.buttonNumber}`) {
            console.log("clickインスタンスが作成されました");
            total += btn[this.buttonNumber].price;
            number++;
            if (number % 3 === 0 && number !== 0) {
                total -= 30;
            }
        }
    }
};

const buttonClick = (buttonId) => {
    //クリック前のvalueを保存
    total_pre = total;
    number_pre = number;
    for (let i = 0; i < btnLength; i++) {
        const clickInstance = new click(buttonId, i);
        clickInstance.clickFunction();
    }

    // 画面表示更新
    display();
    displayColor();
    displayLog();
};

const resetValue = () => {
    total = 0;
    number = 0;
    console.log("resetされました");
    display();
    displayLog();
    displayColor();
};

const undoValue = () => {
    total = total_pre;
    number = number_pre;
    console.log("一つ前に戻りました");
    display();
    displayLog();
    displayColor();
};




