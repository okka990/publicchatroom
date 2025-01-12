
import {Chatroom} from "./chat.js";
import {Lielements} from './lielement.js';
// UI
const chatrooms = document.querySelector('.chatrooms');
const chatul = document.querySelector('.chat-ul');
const chatform = document.querySelector('.chat-form');
const userform = document.querySelector('.user-form');
const msg = document.querySelector('.msg');
const roomtitle = document.querySelector('.roomtitle');
import "@fortawesome/fontawesome-free/css/all.min.css";


const getlocalname = localStorage.username ? localStorage.username : "Guest";
userform.username.placeholder = `Username is ${getlocalname} `;
roomtitle.textContent = "General";



// chatroom instance
const chatroom = Chatroom("general",getlocalname);
roomtitle.textContent = "General";

// lielement instance
const domli = Lielements(chatul);
// console.log(domli);

// start chat
chatform.addEventListener('submit',(e)=>{
	e.preventDefault();
	const message = chatform.message.value.trim();
	chatroom.addChat(message)
		.then(()=>chatform.reset())
		.catch(err=>console.log(err));

});

// update username

userform.addEventListener('submit',(e)=>{
	e.preventDefault();
	const newusername = userform.username.value.trim();
	chatroom.updateUsername(newusername);
	userform.reset();

	// show & hide msg
	msg.innerText = `Name updated to ${newusername} ` ;
	userform.username.placeholder = `Username is ${newusername} `;

	setTimeout(()=>msg.innerText='',3000);

});

// update chatroom
chatrooms.addEventListener('click',(e)=>{
	e.preventDefault();
	const getbtn = e.target.closest('button') ;
	if(getbtn){

		// reset li
		domli.resetli();

		const getroomid = getbtn.getAttribute('id');
		// console.log(getroomid); 

		const gettitle = getbtn.querySelector('h3').innerText;

		//update room title dynamically
		roomtitle.textContent = gettitle;
		// console.log(roomtitle.innerText[0].toUpperCase());

		//update chat room
		chatroom.updateChatroom(getroomid);

		// fetch get chats
		chatroom.getChats((data)=>{
			domli.newli(data)
		});

	}
});

// get chats
chatroom.getChats((data)=>{

	// return data ;
	domli.newli(data)
});