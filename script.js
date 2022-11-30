// var x=10;
// console.log('Hello World!');
// console.log('isi dari variable x adalah '+x);
// //alert('hello world');
// // var nama = prompt('Masukan nama anda: ');
// // alert(nama);
// var text = confirm('kamu yakin');
// if (text===true) {
// 	alert('user menekan ok');
// }else{
// 	alert('user menekan cancel');
// }
// alert('selamat datang');
// var lagi=true;
// while(lagi){
// 	var name = prompt('masukan nama');
// 	alert('hallo '+name);
// 	lagi=confirm('coba lagi');
// }
// alert('terima kasih');
var x = prompt('masukan angka');
if(x % 2 === 0){
	alert(x+ ' adalah angka genap')
}else if(x % 2 ===1){
	alert(x+' adalah angka ganjil')
}else{
	alert('salah')
}