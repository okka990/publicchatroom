import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signOut } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { sendPasswordResetEmail } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { updateProfile } from "firebase/auth";
export function Authorize(){

	const registerUser = async(fullname,email,password)=>{

		const defaultprofileimg = "https://cdn-icons-png.flaticon.com/512/9203/9203764.png";

		try{

			const userCredential = await createUserWithEmailAndPassword(auth, email, password);
			const user = userCredential.user;

			await updateProfile(user, {
			  displayName: fullname, 
			  photoURL: defaultprofileimg
			}).then(() => {
			 	
		  		setLocalName(userCredential.user);

				// redirect to index.html
				window.location.href = './../index.html';

			});



		}catch(error){
			const errorCode = error.code;
    		const errorMessage = error.message;
			console.log("Error Registering users", errorCode);
			console.log("Error Occur", errorMessage);

		}
		
	}

	//  SignIn
	const loginUser = (email,password)=>{

		signInWithEmailAndPassword(auth, email, password)
		  .then((userCredential) => {
		    // Signed in 

		  	setLocalName(userCredential.user);
		  	// console.log(userCredential)

			window.location.href = './../index.html';

		    // ...
		  })
		  .catch((error) => {
		    const errorCode = error.code;
		    const errorMessage = error.message;
		  });

	}

	//  SignOut
	const logoutUser = ()=>{

		signOut(auth).then(() => {

			unsetLocalName();

		 	window.location.href = './../signin.html';

		}).catch((error) => {
    		const errorMessage = error.message;
			console.log("Error Occur", errorMessage);
		});
	}

	// Reset Password

	const resetPassword = async(email,msg)=>{

		try{
			await sendPasswordResetEmail(auth, email);
			msg.textContent = " reset password send to email . please check your inbox  "
		  	msg.style.color = "green";
		  	msg.style.fontSize = "11px";
		}catch(error){
			msg.textContent = " Error Occur while reset password ";
		  	msg.style.color = "red";
		  	msg.style.fontSize = "11px";

		}

	}

	// Google SignIn
	const googleLogin = ()=>{
		const provider = new GoogleAuthProvider();

		signInWithPopup(auth, provider)
		  .then((result) => {

		  	setLocalName(result.user);

			window.location.href = './../index.html';


		    // This gives you a Google Access Token. You can use it to access the Google API.
		    const credential = GoogleAuthProvider.credentialFromResult(result);
		    const token = credential.accessToken;
		    // The signed-in user info.
		    const user = result.user;
		    // IdP data available using getAdditionalUserInfo(result)
		    // ...
		  }).catch((error) => {
		    // Handle Errors here.
		    const errorCode = error.code;
		    const errorMessage = error.message;
		    // The email of the user's account used.
		    const email = error.customData.email;
		    // The AuthCredential type that was used.
		    const credential = GoogleAuthProvider.credentialFromError(error);
		    // ...
		  });

	}

	// Auth Check
	const isLoggedIn = ()=>{

		onAuthStateChanged(auth, (userdata) => {
		  if(userdata){
		    return true;
		  }else{
		    window.location.href = './../signin.html';


		  }
		});
	}

	// Get User Info
	const getUser = (callback)=>{
		onAuthStateChanged(auth, (userdata) => {
		  if(userdata){
		    callback(userdata);
		  }
		});  
	}

	const setLocalName = (userdata)=>{
		localStorage.setItem('username',userdata.displayName);
	}

	const unsetLocalName = ()=>{
		localStorage.removeItem('username');
	}


	return {registerUser,loginUser,logoutUser,resetPassword,googleLogin,isLoggedIn,getUser}

}