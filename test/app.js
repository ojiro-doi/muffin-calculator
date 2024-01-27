const quiz = [
    {
        question: "1.液体に溶かしてたんぱく質を効率的に摂取できる粉末状のサプリとはどれ？",
        answers: [
            "bcaa",
            "eaa",
            "プロテイン",
            "マルトデキストリン"
        ],
        correct: "プロテイン"
    }, {
        question: "2.一般的に大胸筋のトレーニングとされているのはどれ？",
        answers: [
            "ダンベルローイング",
            "ダンベルフライ",
            "ダンベルショルダープレス",
            "ダンベルフレンチプレス"
        ],
        correct: "ダンベルフライ"
    }, {
        question: "3.コンパウンド種目はどれ？",
        answers: [
            "サイドレイズ",
            "レッグエクステンション",
            "ケーブルフライ",
            "ラットプルダウン"
        ],
        correct: "ラットプルダウン"
    }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


const $button = document.getElementsByClassName("btn");
let buttonLength = $button.length//選択肢の数

//クイズの問題文、選択肢を表示
const setupQuiz = () => {
    document.getElementById("js-question").textContent = quiz[quizIndex].question;//=で上書きすることができる
    let buttonIndex = 0;

    while (buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}

setupQuiz();

const clickHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent) {
        window.alert("正解！");
        score++;
    }
    else {
        window.alert("不正解！");
    }

    quizIndex++;

    if (quizIndex < quizLength) {
        //問題が残っていれば実行
        setupQuiz();
    } else {
        //問題がなければ実行
        window.alert("終了！あなたの正解数は"+score+"/"+quizLength+"です！");
        location.reload();
    }
};

//ボタンをクリックしたら正誤判定
let handlerINdex = 0;
while (handlerINdex < buttonLength) {
    $button[handlerINdex].addEventListener("click", (e) => {
        clickHandler(e);
    });
    handlerINdex++;
}






