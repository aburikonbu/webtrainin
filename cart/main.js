const priceElements = document.getElementsByClassName("price")
const calcButton = document.getElementById("calc-total-price")
const totalPriceText = document.getElementById("total-price")

function calcTotalPrice(){
    let totalPrice=0
    for(const element of priceElements){
        totalPrice=totalPrice+Number(element.value)
    }
    totalPriceText.textContent=totalPrice
}

calcButton.addEventListener("click",calcTotalPrice)

const additemButton=document.getElementById("add-item")

function addItem(){
    const itemElement=document.getElementsByClassName("item")[0]
    const newItemElement=itemElement.cloneNode(true)
    const form=document.getElementsByTagName("form")[0]
    form.appendChild(newItemElement)
}
additemButton.addEventListener("click",addItem)