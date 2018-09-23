module.exports = function solveEquation(equation) {
  let massiv = equation.split(' ');

  var a = Number(massiv[0]);

  if (massiv[3]=='-'){
  var b = -Number(massiv[4]);
  }
  else{
  var b = Number(massiv[4]);
  }

  if(massiv[7]=="-") {
  var c = -Number(massiv[8]);
  }
  else{
  var c = Number(massiv[8]);
  }

  var D = (Math.pow(b,2))-(4*a*c);

  var x1 = Math.round(-b+Math.sqrt(D))/(2*a);
  var x2 = Math.round(-b-Math.sqrt(D))/(2*a);

  if (x1 > x2) {
    var newMassiv = [];
    newMassiv.push(x2);
    newMassiv.push(x1);
    }
    else {
    var newMassiv = [];
    newMassiv.push(x1);
    newMassiv.push(x2);
    }
  return newMassiv;
}
