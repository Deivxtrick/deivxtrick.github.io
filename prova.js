document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("#button")
    let counter = 0
    button.addEventListener("click", () => {
        counter++
        button.innerHTML=counter
        if(counter == 69)
            button.innerHTML="nice"
    })
    
})