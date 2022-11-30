// membuat object
// object literal
// var mhs={
// 	name : "sandhika galih",
// 	umur : 31,
// 	ips : [3.00, 2.50, 3.20],
// 	alamat : {
// 		jalan : "jl. abc no.123",
// 		kota : "bandung",
// 		provinsi : "jawa barat"
// 	}
// };

// objec function declaration
// function buatObjectMahasiswa(name, nrp, email, jurusan){
// 	var mhs={};
// 	mhs.name=name;
// 	mhs.nrp=nrp;
// 	mhs.email=email;
// 	mhs.jurusan=jurusan;
// 	return mhs;
// }
// var mhs1=buatObjectMahasiswa('nofariza', '13245324', 'nofa@gmail.com', 'ekonomi')

// Object Constructor
function Mahasiswa(name, nrp, email, jurusan){
	this.name=name;
	this.nrp=nrp;
	this.email=email;
	this.jurusan=jurusan;
}
var mhs4= new Mahasiswa('erik', '2937265372', 'erik@1412', "mesin")