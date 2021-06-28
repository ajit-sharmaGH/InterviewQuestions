var readlineSync = require("readline-sync");

const chalk = require("chalk");

{
    var userName = readlineSync.question(
        chalk.bgWhite.red("May I have your name first ? ")
    );
    var score = 0;
    console.log(userName);

    var welcomeMessage = "welcome " + userName;
    console.log(welcomeMessage);
    var userAnswerAge = readlineSync.question(
        "Are you older than 30? if yes press Y else N : "
    );
    console.log("You enterd " + userAnswerAge);
    if (userAnswerAge === "N") {
        console.log(chalk.green("you are right just proceed ahead "));
        score = score + 1;
        var userCurrentAge = readlineSync.question(
            " Tell me your current age in words !"
        );
        console.log(userCurrentAge);
    } else {
        console.log(
            chalk.green(
                "Since you are older than 30, so you are getting negative marks : We hire freshers only ! "
            )
        );
        score = score - 1;
    }
    console.log("score is " + score);

    var guider = readlineSync.question(
        " Are you under the guidance of  a professional choose  N or Y ? "
    );
    console.log(guider);

    if (guider === "Y") {
        console.log(chalk.green("you are at a right place then,just chill "));
        score = score + 1;

        console.log(chalk.green("Now your score is : " + score));
    } else {
        console.log(chalk.bgRed("You need at least a guider like mr. Ayan "));
        score = score - 1;

        console.log("score :" + score);
    }

    var enter = readlineSync.question(" Press ENTER key : ");
    console.log(enter);

    console.log(
        chalk.green(
            "So, coming to the point--here is your interview begins\n your first task is related to addition :\n "
        )
    );

    //var score = 0;
    function qna(question, answer) {
        var userAns = readlineSync.question(question);
        if (userAns == answer) {
            score++;
            console.log(chalk.bgYellow("Correct answer"));
        } else {
            console.log(
                chalk.bgRed("Your answer is wrong, the correct answer is " + answer)
            );
        }
    }

    /*function qna(question, answer){
        
         // console.log("numberOne :",  numberOne, "numberTwo :", numberTwo)
         var userAnswer = readlineSync.question(question);
         
       }
         if(userAns==="answer"){
         score++;
         console.log("You are right :\n Go for the next task \n");
       }
        else {
         console.log("Your answer is wrong, the correct ans is :" + answer);
       }
       */

    // use the funtion

    //var aboveAnswer = readlineSync.question("If above ans. is correct type Y if no type N :\n");
    //console.log("You enterd  " + aboveAnswer);

    //console.log(aboveAnswer);

    qna(" 1. Sum of 150 and 270 ? ", "420");
    // console.log("The sum of the numbers : " + result);

    //console.log("Your second task goes here :");

    qna(
        " 2. Who is the current CEO of GOOGLE ?: Please type the opt only\n a - Satya Nadela,\n b -Bill Gates,\n c -Sundar Pichai,\n d - Non of the above ",
        "c"
    );

    console.log("You scored " + score);

    if (score > 2) {
        console.log(
            chalk.green("You are hired !\n Go and inform your parents first ! ")
        );
    } else {
        var loading = readlineSync.question(
            chalk.bgRed(" Loading Please wait \n Press ENTER ---:\n ")
        );
        console.log(loading);
        console.log(
            chalk.bgRed(
                "Sorry to say \n You are rejected !\n You need to score at least 3 marks"
            )
        );
    }
}