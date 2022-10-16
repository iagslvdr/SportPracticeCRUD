const select = document.querySelector("#select")
const start = document.querySelector("#start")
const end = document.querySelector("#end")
const submit = document.querySelector("#submit")


submit.addEventListener("click", () => {
    const sportPractice = {
        start: start.value,
        end: end.value,
        sport: select.value
    }
    createSportPractice(sportPractice)
    updateList()
})






  







