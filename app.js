const input = document.querySelector("#input")
const totalCount = document.querySelector("#totalCount")
const totalRemained = document.querySelector("#totalRemained")
const lenght = 50

input.addEventListener("input", function (){
    const currentLength= input.value.length
    totalCount.textContent = currentLength
    totalRemained.textContent = lenght - currentLength
})

