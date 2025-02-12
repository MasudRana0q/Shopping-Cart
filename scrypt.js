
cartItemPlusMinus("128GbPlusBtn", "numberOf128Gb", "iphone128Price", 1000, true); 
cartItemPlusMinus("128GbMinusBtn",  "numberOf128Gb", "iphone128Price", 1000, false);

cartItemPlusMinus("iphomeCasePlusBtn", "numberofIphoneCase", "iphoneCasePrice", 50, true);
cartItemPlusMinus("iphomeCaseMinusBtn", "numberofIphoneCase", "iphoneCasePrice", 50, false);




function cartItemPlusMinus(btnId, inputId, priceId, priceUnit, isIncrement) {
    let gb128PlusBtn = document.getElementById(btnId);
    gb128PlusBtn.addEventListener('click', function(){
    let numberOf128Gb = document.getElementById(inputId).value || 0;
    let numberOf128GbFloat = parseFloat(numberOf128Gb);
    let newNumber = isIncrement ? numberOf128GbFloat + 1 : numberOf128GbFloat - 1;
    if (newNumber < 0) newNumber = 0;
    document.getElementById(inputId).value = newNumber;

    // price per Item Calculation Start
    let iphone128Price = document.getElementById(priceId).innerText;
    let iphone128PriceNum = parseFloat(iphone128Price);
    let newprice = priceUnit * newNumber;
    if (newprice < 0) newprice = 0;
    document.getElementById(priceId).innerText = newprice;
    // Price Per Item Calculation End



            // Subtotoal
    let iphone128Price2 = document.getElementById("iphone128Price").innerText;
let iphone128PriceNum2 = parseFloat(iphone128Price2);

let iphoneCasePrice = document.getElementById("iphoneCasePrice").innerText;
let iphoneCasePriceNum = parseFloat(iphoneCasePrice);
let totalPrice = iphone128PriceNum2 + iphoneCasePriceNum
document.getElementById("subtotal").innerText = totalPrice;

        // Text
        let text = totalPrice * 15 / 100;
        document.getElementById("tex").innerText = text;
        // Final Price
        document.getElementById("finalPrice").innerText = totalPrice + text;
})
}

