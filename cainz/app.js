
const btn = [
    {
        price: 100, name: "プレーン"
    }, {
        price: 110, name: "チョコ"
    }, {
        price: 120, name: "抹茶"
    }, {
        price: 130, name: "イチゴ"
    },
];

let total = 0;
const $button = document.getElementsByTagName("button");

const ClickButton = (e) => {
for (let i = 0; i < btn.length; i++) {
    if(btn[i].name===e.target.textContent){
        total += btn[i].price;
    }
}
 
    console.log(e.target);


    console.log(total);
}

// ボタン
const button_function = () => {
    for (let i = 0; i < btn.length; i++) {
        // ボタン名前
        $button[i].textContent = btn[i].name;
    }

    for (let j = 0; j < btn.length; j++) {
        // ボタンclick
        $button[j].addEventListener("click", (e) => {
            ClickButton(e);

        });
    }
}

button_function();



//画面表示

console.log("Hello, World!"); 