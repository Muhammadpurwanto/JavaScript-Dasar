var s='';
for(var i =5; i>0; i--){
 for(var j =0; j<i; j++){
 	s=s+'*';
 	for(var k=0; k<j; k++){
 		s='+';
 	}
 }
 s=s+'\n';
 
}
console.log(s);
