function checkNumber(){
   let pass = document.getElementById('password');
   let arr = pass.split('');
   for(i=0; i<=arr.length; i++){
   	let result = isNaN(arr[i]);
   	if (result == true){
   		alert('')
       	}
   }

  
}