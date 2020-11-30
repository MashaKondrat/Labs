document.addEventListener("DOMContentLoaded", () => {

    //Визначення варіанту
    const optionSpan = document.querySelector(".option");
    let num = 7;
    let option = num % 6 + 1;

    optionSpan.textContent = option;

    //Знаходження 3-ї сторони трикутника
    const button = document.querySelector("#button");
    const answerBlock = document.querySelector("#answer"); 

    button.addEventListener("click", function () {

        let katet1 = document.querySelector("#katet1").value;
        let katet2 = document.querySelector("#katet2").value;

        if (katet1 <= 0 || katet2 <= 0) {
            answerBlock.style.color = "red";
            answerBlock.innerHTML = "Довжина катету не можи бути меншою або дорівнювати нулю!";
        } else {
            answer = Math.sqrt((katet1 ** 2) + (katet2 ** 2));
            answerBlock.style.color = "black";
            answerBlock.innerHTML = "Довжина гіпотенузи = " + answer;
            document.querySelector("form").reset();
        }
    });

});
