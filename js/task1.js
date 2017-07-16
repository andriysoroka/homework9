
var sh = "",
	y2 = 0;

while (y2 < 8) {
	var x2 = 0;
	while (x2 < 8) {
		if ((x2 + y2) % 2 === 0) {
      		sh += " ";
		} else {
      		sh += "#";
		}
		x2++;
  	}	
	sh += "\n";
	y2++;
}

console.log(sh);
