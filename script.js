var a = 3;
var b = 8;
var c = 2;

var D = Math.pow(b,2) - 4*a*c;

if (D < 0) {
	console.log ('There are no roots!');
} else
	if (D === 0) {
	var x1 = -b + Math.sqrt(D)/ 2*a;
	console.log ('x1 =', x1);
}
	else {
	x1 = -b + Math.sqrt(D)/ 2*a;
    var x2 = -b - Math.sqrt(D)/ 2*a;
	console.log ('x1 =', x1);
	console.log ('x2 =', x2);
}	

