const list=document.querySelector("#list")

function createList(sportPractice){
    const newLi = document.createElement('li')
    newLi.innerHTML=`
    Começo: ${sportPractice.start}<br>
    Fim: ${sportPractice.end}<br>
    Esporte: ${sportPractice.sport}
    `
    list.appendChild(newLi)
}

function updateList(){
    const dbSportPractice= listSportPractice()
    dbSportPractice.forEach(createList)
}

function createSportPractice(sportPractice) {
    const sportPractices = listSportPractice()
    sportPractices.push(sportPractice)
    setLocalStorage(sportPractices)
    
}

function listSportPractice() {
    return getLocalStorage();
}

function updateSportPractice(index, sportPractice) {
    const newSportPractice=getLocalStorage()
    newSportPractice[index]=sportPractice
    setLocalStorage(newSportPractice)
}

function deleteSportPractice(index) {
    const deletedSportPractice=getLocalStorage()
    deletedSportPractice.splice(index, 1)
    setLocalStorage(deletedSportPractice)

}

const setLocalStorage = (sportPractices)=> localStorage.setItem("sportPractices", JSON.stringify(sportPractices))
const getLocalStorage= ()=> JSON.parse(localStorage.getItem("sportPractices")) ?? []

