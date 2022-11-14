function calculateTips(event) {
  event.preventDefault();

  let bill = document.getElementById('bill').value;
  let serviceQualit = document.getElementById('serviceQualit').value;
  let people = document.getElementById('people').value;

  if(bill == '' | serviceQualit == 0) {
    alert("Por favor, preencha os valores...")
    return;
  }

  if(people == '' | people <= 1) {
    people = 1;
  }

  let total = (bill * serviceQualit) / people;
  total = total.toFixed(2);

  document.getElementById('tip').innerHTML = total;
  document.getElementById('totalTips').style.display = "block";
}

document.getElementById('totalTips').style.display = "none";

document.getElementById('tipsForm').addEventListener('submit', calculateTips);