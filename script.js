function displaySeconds(e){
    e.preventDefault()
    const weeks = Number(e.target.weeksInput.value)
    const seconds = weeks * 7 * 24 * 60 * 60
    document.getElementById("displayId").innerText = seconds; 
}

const formShortcut = document.getElementById("weeksToSecondsForm")
formShortcut.addEventListener("submit", displaySeconds)