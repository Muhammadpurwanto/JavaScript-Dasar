var jmlhAngkot=10;
var berjalan =6;
var x=1;
// while( x<=berjalan){
// 	console.log ('angkat no. '+x+' berjalan dengan baik');
// 	x++;
// }
// for (var i = berjalan+1; i <= jmlhAngkot; i++) {
// 	console.log('angkot no. '+i+' tidak beroprasi');
// }
// 	

for(var i=1; i<=jmlhAngkot; i++){
	if(i<=4 || i==6){
		console.log ('angkat no. '+i+' berjalan dengan baik');
	}else if(i==5 || i==8 || i==10){
		console.log('angkit no. '+i+' sedang lembur');
	}else{
		console.log('angkot no. '+i+' tidak beroprasi');
	}
}

