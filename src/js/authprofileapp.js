import {Authorize} from "./authorize.js";
import {UiElement} from "./uielement.js";


// UI
const logoutbtn = document.getElementById('logoutbtn');
const userinfodiv = document.getElementById('userinfo');

// Authorize Instantiate
 const authorize = Authorize();

// UiElement Instantiate
const uiele = UiElement(userinfodiv);

//get info and render
authorize.getUser((data)=>{
uiele.userInfoEle(data)
console.log(data)

})


//login
logoutbtn.addEventListener('click',(e)=>{


	const {logoutUser} = Authorize();
	logoutUser();
})

