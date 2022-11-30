function hasil(n){
	if (n==0) {
		return;
	}
	console.log(n);
	return hasil(n-1);
}
hasil(10);


function perulangan(){
	var hasil=1;
	for(var i=5; i>0; i--){
		hasil*=i;
	}
	return hasil;
}
console.log(perulangan());


function faktorial(n){
	if (n===0) {
		return 1;
	}
	return n* faktorial(n-1);
}
console.log(faktorial(5));