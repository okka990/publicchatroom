import {Authorize} from "./authorize.js";
import "@fortawesome/fontawesome-free/css/all.min.css";


// UI
const signinform = document.getElementById('signinform');
const googleloginbtn = document.getElementById('googleloginbtn');

//login
signinform.addEventListener('submit',(e)=>{
	e.preventDefault();

	const signinemail = document.getElementById('signinemail').value.trim();
	const signpassword = document.getElementById('signinpassword').value.trim();

	// console.log(signinemail,signpassword)

	const {loginUser} = Authorize();
	loginUser(signinemail,signpassword);

})

// Google login
googleloginbtn.addEventListener('click',(e)=>{

	const {googleLogin} = Authorize();
	googleLogin();

})