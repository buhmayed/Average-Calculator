document.getElementById("calcbin").addEventListener("click", calcaverage);

function calcaverage() {
  let num1 = +document.getElementById("num1").value;
  let num2 = +document.getElementById("num2").value;
  let num3 = +document.getElementById("num3").value;
  let average = (num1 + num2 + num3) / 3;

  document.getElementById("aveout").innerHTML = average;
}
