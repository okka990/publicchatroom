import {Authorize} from "./authorize.js";


// UI
const resetpasswordform = document.getElementById('resetpasswordform');
const msg = document.getElementById('msg');
//login
resetpasswordform.addEventListener('submit',(e)=>{
	e.preventDefault();

	const resetemail = document.getElementById('resetemail').value.trim();


	// console.log(signinemail,signpassword)

	const {resetPassword} = Authorize();
	resetPassword(resetemail,msg);

})
