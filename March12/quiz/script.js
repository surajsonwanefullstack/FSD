document.addEventListener('DOMContentLoaded', function () {
    function startQuiz() {

        const quizOptions = document.querySelector(".quiz-options")
        const selectedQuiz = quizOptions.children[0]
        selectedQuiz.addEventListener('click', (event) => {
            console.log(event)
        })
        home.classList.remove('show')
        result.classList.remove('show')
        quiz.classList.add('show')
        console.log(selectedQuiz)

    }

    const quizSubmitButton = document.getElementById("quiz-submit")
    quizSubmitButton.addEventListener("click", showResult);
 


    const home = document.querySelector(".home")
    let user ;
    // let  quiz;
    const quiz = document.querySelector(".quiz")
    const result = document.querySelector(".result")
    const addUser = document.getElementById("addUser")

    addUser.addEventListener("onChange", function() {
        const userNameInput =document.getElementById ("userName")
        userNameInput.addEventListener("click",(event)=>{
         if(!event.target.value) return
        user = event.target.value
        })
        console.log("User clicked "+user)
    })

    function showResult(){
        quiz.style.display = "none";
        result.style.display="block";
    }
    const restartQuizButton = document.querySelector(".quiz-restart-button"); 
    const homePageButton = document.querySelector(".quiz-home-button");
    
    restartQuizButton.addEventListener("click", function() {
        quiz.style.display = "block";
        result.style.display="none";
    });
    homePageButton.addEventListener("click", function() {
        home.style.display = "block";
        quiz.style.display="none";
        result.style.display="none";
    });
    
    // console.log(home)
})