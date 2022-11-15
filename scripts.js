function calculateTips(event) {
  event.preventDefault();

  let bill = document.getElementById('bill').value;
  let serviceQualit = document.getElementById('serviceQualit').value;
  let people = document.getElementById('people').value;

  if(bill == '' | people <= 1 ) {
    alert("Por favor, preencha todos os campos...")
    return;
  }

  if(people == '' | people <= 1) {
    people = 1;
  }

  let totalPeople = bill / people;
  // totalPeople = totalPeople.toFixed(2);

  let total = (bill * serviceQualit) / people;
  // total = total.toFixed(2);

  let totalPay = totalPeople + total;
  totalPay = totalPay.toFixed(2);

  document.getElementById('tip').innerHTML = total;
  document.getElementById('tipTotal').innerHTML = totalPeople;
  document.getElementById('pay').innerHTML = totalPay;

  document.getElementById('totalTips').style.display = "block";
  document.getElementById('totalValue').style.display = "block";
  document.getElementById('totalPay').style.display = "block";
}

document.getElementById('totalTips').style.display = "none";

document.getElementById('totalValue').style.display = "none";

document.getElementById('totalPay').style.display = "none";

document.getElementById('tipsForm').addEventListener('submit', calculateTips);