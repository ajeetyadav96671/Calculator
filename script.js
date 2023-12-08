function clearValues() {
  document.getElementById("result").value = "";
}

function calculateValues() {
  var calculatedResult = document.getElementById("result").value;
  document.getElementById("result").value = eval(calculatedResult);
}