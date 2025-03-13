document.addEventListener('DOMContentLoaded', function () {


    const quizOptions = document.querySelector(".quiz-options")
    
    console.log(quizOptions.children)
    const selectedQuiz = quizOptions.childrens
    function selectQuiz() {
        quizOptions.addEventListener("click",(e)=>{
            const quizName = e.target.innerHTML
            console.log(e.target.style.color="pink")
            startQuiz(quizName)
        })
    }
    function startQuiz(quizName){
        console.log("selected quiz "+quizName)
        home.style.display="none"
        quiz.style.display="flex"
    }

    selectQuiz();
    const quizSubmitButton = document.getElementById("quiz-submit")
    quizSubmitButton.addEventListener("click", showResult);



    const home = document.querySelector(".home")
    let user;
    // let  quiz;
    const quiz = document.querySelector(".quiz")
    const result = document.querySelector(".result")
    const addUser = document.getElementById("addUser")

    addUser.addEventListener("click", function () {
        const userNameInput = document.getElementById("userName")
        user = userNameInput.value;
        if (!user) return;
        console.log("User clicked " + user)
    })

    function showResult() {
        quiz.style.display = "none";
        result.style.display = "block";
    }
    const restartQuizButton = document.querySelector(".quiz-restart-button");
    const homePageButton = document.querySelector(".quiz-home-button");

    restartQuizButton.addEventListener("click", function () {
        quiz.style.display = "flex";
        result.style.display = "none";
    });
    homePageButton.addEventListener("click", function () {
        home.style.display = "grid";
        quiz.style.display = "none";
        result.style.display = "none";
    });

    // console.log(home)
})