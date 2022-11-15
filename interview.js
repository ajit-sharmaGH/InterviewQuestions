var readlineSync = require("readline-sync");

const chalk = require("chalk");

{
    var userName = readlineSync.question(
        chalk.bgWhite.red("May I have your name first ? ")
    );
    var score = 0;
    // console.log(userName);

    var welcomeMessage = "welcome " + userName;
    console.log(welcomeMessage);
    var userAnswerAge = readlineSync.question(
        "Are you older than 30? if yes press Y for yes or N for no : "
    );
    console.log("You enterd " + userAnswerAge);
    if (userAnswerAge === "N") {
        console.log(chalk.green("you are right here eligible for interview just proceed ahead "));
        score = score + 1;
        var userCurrentAge = readlineSync.question(
            " Tell me your current age in words !"
        );
        console.log("you entered " + userCurrentAge);
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
        console.log(chalk.bgRed("You need at least a guider like a good and experiance teacher "));
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

            var enter = readlineSync.question(" Press ENTER to proceed : ");
            console.log(enter);


        } else {
            console.log(
                chalk.bgRed("Your answer is wrong, the correct answer is " + answer)
            );

            var enter = readlineSync.question(" Press ENTER to proceed : ");
            console.log(enter);


        }
    }





    qna(" 1. What is the output of this code ?\n function test(x,y){\n if(x>y){\n document.write(x);\n} else{\n document.write(y);\n }\n}\n test(5,8); \n type your ans here : ", "8");


    qna(
        " 2. Who is the current CEO of GOOGLE ?: Please type the opt only\n a - Satya Nadela,\n b -Bill Gates,\n c -Sundar Pichai,\n d - Non of the above \n type the opt here : ",
        "c"
    );
    qna(
        "3. What is the output of the following code ?\n function test(number)\n{\n while(number<5){\n number++;\n}\n return number;\n}\n alert(test(2));\n Type your ans here : ", "5"
    );

    qna(
        "4. What shape results will form from the following code ?\n <svg width=''100'' height=''100''>\n <line x1=''50'' y1=''0'' x2=''50'' y2= ''100'' \n style=''stroke:black''/>\n <line x1=''0'' y1=''50'' x2=''100'' y2=''50'' \n style=''stroke:black''/>\n </svg>\n a. plus sign\n b. minus sign\n c. perpendicular\n d. none of these\n type your ans here :  ", "a");


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
                "Sorry to say \n You are rejected !\n You need to score at least 3 marks \n our team suggests -- plz go through the revision and check where did you mistaken "
            )
        );
    }
}