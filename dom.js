var likes = document.getElementsByClassName("like");

for (let i = 0; i < likes.length; i++) {
  let like = likes[i];
  like.addEventListener("click", function () {
    if (like.style.color === "red") {
      like.style.color = "black";
    } else {
      like.style.color = "red";
    }
  });
}



const plusses = document.getElementsByClassName("plus-btn");
console.log(plusses);
const UnitPrices = [1379, 176, 249];
const prices = document.querySelectorAll(".price");




for (let i = 0; i < plusses.length; i++) {
  plusses[i].addEventListener("click", function () {
    plusses[i].previousElementSibling.value++;

    prices[i].innerText =
      plusses[i].previousElementSibling.value * UnitPrices[i];
    totalPrice();
  });
}


const minuss = document.getElementsByClassName("minus-btn");

for (let i = 0; i < minuss.length; i++) {
  minuss[i].addEventListener("click", function () {
    if (minuss[i].nextElementSibling.value > 1) {
      minuss[i].nextElementSibling.value--;
      prices[i].innerText = minuss[i].nextElementSibling.value * UnitPrices[i];
      totalPrice();
    }
  });
}






function totalPrice() {
  let sum = 0;
  for (let i = 0; i < prices.length; i++) {
    sum += parseFloat(prices[i].innerText);
  }
  inp.value = sum;
  return sum;
}