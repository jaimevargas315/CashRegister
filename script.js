let price = (Math.random() * (15 - 3) + 3).toFixed(2);
let cid = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]];

let total = 0;
for (let i = 0; i < cid.length; i++) {
  total += (cid[i][1]);
  total = Math.round(total * 100) / 100; 
}
const cash = document.querySelector("#cash")
const change = document.querySelector("#change-due");
const purchase = document.querySelector("#purchase-btn");
const drawer = document.querySelector("#drawer");
const charge = document.querySelector("#total");

charge.innerText = "Total: " +price;

drawer.innerText = "";
drawer.innerText += "Pennies: $" + Number.parseFloat(cid[0][1].toFixed(2)) + "\n"; 
drawer.innerText += "Nickels: $" + Number.parseFloat(cid[1][1].toFixed(2)) + "\n";
drawer.innerText += "Dimes: $" + Number.parseFloat(cid[2][1].toFixed(2)) + "\n";
drawer.innerText += "Quarters: $" + Number.parseFloat(cid[3][1].toFixed(2)) + "\n";
drawer.innerText += "Ones: $" + Number.parseFloat(cid[4][1].toFixed(2)) + "\n";
drawer.innerText += "Fives: $" + Number.parseFloat(cid[5][1].toFixed(2)) + "\n";
drawer.innerText += "Tens: $" + Number.parseFloat(cid[6][1].toFixed(2)) + "\n";
drawer.innerText += "Twenties: $" + Number.parseFloat(cid[7][1].toFixed(2)) + "\n";
drawer.innerText += "Hundreds: $" + Number.parseFloat(cid[8][1].toFixed(2)) + "\n";

purchase.onclick = process;
function process() 
{
  let input = cash.value;
  let cashBack = input - price;
  cashBack = Math.round(cashBack * 100) / 100;
  if (input < price) {
    alert("Customer does not have enough money to purchase the item")
  }
  if (input == price) {
    change.innerText = "No change due - customer paid with exact cash";
    change.style.visibility = 'visible';
  }
  if (cashBack > total) {
    change.innerText = "Status: INSUFFICIENT_FUNDS"; 
    change.style.visibility = 'visible';
  }
  if(cashBack == total)
  {
    change.innerText = "Status: CLOSED \n";
    change.style.visibility = 'visible';
  }
  if(cashBack < total && input != price && input > price)  
  {
    change.innerText = "Status: OPEN \n";
    change.style.visibility = 'visible';
  }
  if 
  ((cashBack < total && input != price)||(cashBack == total)) 
  { 

    let hundred = 0;
    let twenty = 0;
    let ten = 0;
    let five = 0;
    let one = 0;
    let quarter = 0.0;
    let dime = 0.0;
    let nickel = 0.0;
    let penny = 0.0;
    let insufficient = false;



    while (cashBack > 0 && insufficient == false) 
    {

      if (cashBack >= 100 && cid[8][1] > 100) {
        cashBack -= 100;
        cid[8][1] -= 100;
        hundred += 100;
        continue;
      }
      if (cashBack >= 20 && cid[7][1] > 0) {
        cashBack -= 20;
        cid[7][1] -= 20;
        twenty += 20;
        continue;
      }
      if (cashBack >= 10 && cid[6][1] > 0) {
        cashBack -= 10;
        cid[6][1] -= 10;
        ten += 10;
        continue;
      }
      if (cashBack >= 5 && cid[5][1] > 0) {
        cashBack -= 5;
        cid[5][1] -= 5;
        five += 5;
        continue;
      }
      if (cashBack >= 1 && cid[4][1] > 0) {
        cashBack -= 1;
        cid[4][1] -= 1;
        one += 1;
        continue;
      }
      if (cashBack >= .25 && cid[3][1] > 0) {
        cashBack -= .25;
        cid[3][1] -= .25;
        quarter += .25;
        continue;
      }
      if (cashBack >= .10 && cid[2][1] > 0) {
        cashBack -= .10;
        cid[2][1] -= .10;
        dime += .10;
        continue;
      }
      if (cashBack >= .5 && cid[1][1] > 0) {
        cashBack -= .5;
        cid[1][1] -= .5;
        nickel += .5;
        continue;
      }
      if (cashBack.toFixed(2) > cid[0][1].toFixed(2)) {
        change.innerText = "Status: INSUFFICIENT_FUNDS";
        insufficient = true;
        break;
      }
      if (cashBack.toFixed(2) >= .01 && cid[0][1] > 0) {
        cashBack -= .01;
        cid[0][1] -= .01;
        penny += .01;
        continue;
      } 
    }

price = (Math.random() * (15 - 3) + 3).toFixed(2);
charge.innerText = "Total: " +price;


drawer.innerText = "";
drawer.innerText += "Pennies: $" + Number.parseFloat(cid[0][1].toFixed(2)) + "\n";
drawer.innerText += "Nickels: $" + Number.parseFloat(cid[1][1].toFixed(2)) + "\n";
drawer.innerText += "Dimes: $" + Number.parseFloat(cid[2][1].toFixed(2)) + "\n";
drawer.innerText += "Quarters: $" + Number.parseFloat(cid[3][1].toFixed(2)) + "\n";
drawer.innerText += "Ones: $" + Number.parseFloat(cid[4][1].toFixed(2)) + "\n";
drawer.innerText += "Fives: $" + Number.parseFloat(cid[5][1].toFixed(2)) + "\n";
drawer.innerText += "Tens: $" + Number.parseFloat(cid[6][1].toFixed(2)) + "\n";
drawer.innerText += "Twenties: $" + Number.parseFloat(cid[7][1].toFixed(2)) + "\n";
drawer.innerText += "Hundreds: $" + Number.parseFloat(cid[8][1].toFixed(2)) + "\n";

  

    if(insufficient == false)
    {
    if (hundred > 0) {
      change.innerText += "HUNDRED: $" + hundred + "\n";
    }
    if (twenty > 0) {
      change.innerText += "TWENTY: $" + twenty + "\n";
    }
    if (ten > 0) {
      change.innerText += "TEN: $" + ten + "\n";
    }
    if (five > 0) {
      change.innerText += "FIVE: $" + five + "\n";
    }
    if (one > 0) {
      change.innerText += "ONE: $" + one + "\n";
    }
    if (quarter > 0) {
      change.innerText += "QUARTER: $" + Number.parseFloat(quarter.toFixed(2)) + "\n";
    }
    if (dime > 0) {
      change.innerText += "DIME: $" + Number.parseFloat(dime.toFixed(2)) + "\n";
    }
    if (nickel > 0) {
      change.innerText += "NICKEL: $" + Number.parseFloat(nickel.toFixed(2)) + "\n";
    }
    if (penny > 0) {
      change.innerText += "PENNY: $" + Number.parseFloat(penny.toFixed(2)) + "\n";
    }
    }
  }
}

