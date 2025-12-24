const input = document.getElementById("item-input")
const addButton = document.getElementById("add-button")
const shoppingList = document.getElementById("shopping-list")
const alertRemoved = document.querySelector(".alert-removed")

addButton.addEventListener("click", () => {
    if(!(input instanceof HTMLInputElement)) return

    const itemName = input.value.trim()

    if(itemName === "") return
    
    const listItem = document.createElement("li")
    listItem.classList.add("item")

    const itemContainer = document.createElement("div")
    itemContainer.classList.add("conteiner-item")
    
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.classList.add("check")
    itemContainer.appendChild(checkbox)
    
    const span = document.createElement("span")
    span.textContent = itemName
    itemContainer.appendChild(span)
    console.log(itemContainer)
    listItem.appendChild(itemContainer)
    
    const deleteIcon = document.createElement("i")
    deleteIcon.classList.add("hgi-stroke", "hgi-delete-01", "lixeira")
    deleteIcon.setAttribute("aria-hidden", "true")
    listItem.appendChild(deleteIcon)
    shoppingList.appendChild(listItem)
    
    deleteIcon.addEventListener("click", () => {
        shoppingList.removeChild(listItem)
        alertRemoved.classList.toggle("hidden")
        setTimeout(() => {
            alertRemoved.classList.add("hidden")
        }, 3000)
    }
    )

    const checkboxInput = itemContainer.querySelector(".check")
    checkboxInput.addEventListener("change", () => {
        if(checkboxInput.checked) {
            span.style.textDecoration = "line-through"
        } else {
            span.style.textDecoration = "none"
        }
    })

    input.value = ""
})

alertRemoved.querySelector(".close").addEventListener("click", () => {
    alertRemoved.classList.toggle("hidden")
})