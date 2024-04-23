const btn = [
  { price: 130, name: "プレーン" },
  { price: 160, name: "おぐらバター" },
  { price: 160, name: "ブルーベリーチーズ" },
  { price: 130, name: "低糖質プレーン" },
  { price: 180, name: "フォンダンショコラ" },
  { price: 180, name: "チョコバナナ" },
  { price: 160, name: "チョコクランチ" },
  { price: 200, name: "オレンジヨーグルト" },
  { price: 180, name: "クリームブリュレ" },
  { price: 160, name: "メロンパン" },
  { price: 160, name: "アップルカスタード" },
];

// let currentPageURL = location.href;
let total = 0;
let number = 0;
let total_pre = Array(100);
const btnLength = btn.length;
const $buttonName = document.getElementsByClassName("btn-name");
const $button = document.getElementsByTagName("button");
const $buttonImage = document.getElementsByClassName("Image");
const $numberdisplay = document.getElementById("number-dis");
const $totaldisplay = document.getElementById("total-dis");

// ボタン名前
const buttonName = () => {
  for (let i = 0; i < btnLength; i++) {
    $buttonName[i].textContent = btn[i].name;
  }
};

//画面表示

const display = () => {
  if (number >= 0 && total >= 0) {
    $numberdisplay.textContent = number;
    $totaldisplay.textContent = total;
  }
};

const displayLog = () => {
  console.log(`number : ${number}回`);
  console.log(`total  : ${total}円`);
  console.log("");
};

const displayColor = () => {
  if (number % 3 === 0 && number !== 0) {
    $numberdisplay.classList.add("highlighted_3");
  } else {
    $numberdisplay.classList.remove("highlighted_3");
  }
  if (
    (number === 6 && total > 880) ||
    (number === 9 && total > 1280) ||
    (number === 12 && total > 1680)
  ) {
    console.log("セットの方が安い");
    $totaldisplay.classList.add("highlighted");
  } else {
    $totaldisplay.classList.remove("highlighted");
  }
};

const displayFunction = () => {
  display();
  displayLog();
  displayColor();
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
      console.log(
        `${btn[this.buttonNumber].name} : ${btn[this.buttonNumber].price}円`
      );
      total += btn[this.buttonNumber].price;
      number++;
      if (number % 3 === 0 && number !== 0) {
        console.log("-30円引き");
        total -= 30;
      }
    }
  }

  clickFunction_night() {
    if (this.buttonId === `btn${this.buttonNumber}`) {
      console.log("clickインスタンスが作成されました");
      console.log(
        `${btn[this.buttonNumber].name} : ${btn[this.buttonNumber].price}円`
      );
      total += btn[this.buttonNumber].price;
      number++;
      console.log("-30円引き");
      total -= 30;
    }
  }
}

const buttonClick = (buttonId) => {
  //クリック前のvalueを保存
  // total_pre = total;
  total_pre[number] = total;
  // number_pre = number;
  for (let i = 0; i < btnLength; i++) {
    const clickInstance = new click(buttonId, i);
    clickInstance.clickFunction();
  }

  // 画面表示更新
  displayFunction();
};

const buttonClick_night = (buttonId) => {
  //クリック前のvalueを保存
  total_pre[number] = total;
  for (let i = 0; i < btnLength; i++) {
    const clickInstance = new click(buttonId, i);
    clickInstance.clickFunction_night();
  }

  // 画面表示更新
  displayFunction();
};

const resetValue = () => {
  total = 0;
  number = 0;
  console.log("resetされました");
  displayFunction();
};

const undoValue = () => {
  if (number > 0) {
    total = total_pre[number - 1];
    number -= 1;
    console.log("一つ前に戻りました");
    displayFunction();
  } else {
    console.log("これ以上戻ることはできません");
  }
};

const navigate1 = () => {
  resetValue();
  location.href = "index2.html";
};

const navigate2 = () => {
  resetValue();
  location.href = "index.html";
};
