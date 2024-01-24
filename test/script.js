//変数
let x = "Hello World!";

// x="Hello Everyone!"

//定数（書き換えできない）
const y = "Yeah World!";

//配列
let a = ["one","two","three","four"];

//ループ文
// let index = 0;
// while(index < a.length)//a.length 配列の長さを表す
// {
//     console.log(a[index]);
//     index++; //mustで書いとく
// }

//if else
// if(a.length > 4)
// {
//     console.log("よいしょ");
// }
// else
// {
//     console.log("よいsh...");
// }

//関数
const test = (arg) => {
    if(a.length > arg) {
        console.log("よいしょ");
    }
    else {
        console.log("よいsh...");
    }
};

//オブジェクト
const b = {
    color: "pink",
    size: "large",
    purfume: "mint",
    test2: () => {
        console.log("Hello World!");
    }
};

document.getElementsByTagName("button")[0].addEventListener("click", ()=> {
    window.alert("hello world!");
})







