"use strict";
let arg1, arg2, problemStatement;

function createNewProblem() {
    arg1 = Math.floor(Math.random() * 9) + 1;
    arg2 = Math.floor(Math.random() * 9) + 1;
    problemStatement.html(String(arg1) + ' x ' + String(arg2));
}

function setup() {
    noCanvas();
    // generate random problemStatement
    problemStatement = createP();
    
    createNewProblem();
    let input = createInput();
    let button = createButton("Kiểm tra");
    let verdict = createP();

    problemStatement.style("font-size: 100px");
    verdict.style("font-size: 20px");

    button.mousePressed(() => {
        if (int(input.value()) === arg1 * arg2) {
            verdict.html("Câu trả lời của bạn đúng rồi\n");
            input.value("");
            createNewProblem();
        } else {
            verdict.html("Câu trả lời của bạn sai rồi\n");
        }
        
    });

}