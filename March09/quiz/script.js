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

    const home = document.querySelector(".home")
    const quiz = document.querySelector(".quiz")
    const result = document.querySelector(".result")

    console.log(home)
})