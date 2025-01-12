import { db } from "./firebase.js";
import {collection,addDoc,onSnapshot,Timestamp,query,where,orderBy,getDocs,deleteDoc,doc} from "firebase/firestore";

export function Chatroom(room,username){

	let curroom = room;
	let curuser = username;
	const dbRef = collection(db,'chats');
	let unsubscribe = null;
	const addChat = async(message)=>{

		const now = new Date();

		const chat = {
			username:curuser,
			room:curroom,	
			message,
			created_at:Timestamp.fromDate(now) 

		};

		try{
			const response = await addDoc(dbRef,chat);

		}catch(err){
			console.log("Error addchat ",err);
			throw err;
		}

	}

	const getChats = (callback)=>{

		if(unsubscribe){
			unsubscribe();
		}

		// if(unsubscribe)unsubscribe();

		unsubscribe = onSnapshot(query(dbRef,where('room','==',curroom),orderBy('created_at')),docSnap=>{


            docSnap.docChanges().forEach(item=>{

            	console.log(item);
            	if(item.type === "added"){
            		callback(item.doc.data());

            	}

            });

		});

	}

	const updateChatroom = (newroom)=>{
		curroom = newroom;

	}

	const updateUsername= (newusername)=>{
		curuser = newusername;
		localStorage.setItem('username',curuser); 


	}

	// Delete All message every 20s

	const deleteAllMessages =()=>{

		const setinterval = setInterval( async()=>{

			try{

				const getdatas = await getDocs(dbRef) ;

				if(getdatas.empty){

					clearInterval(setinterval);

					return true;
				}

				getdatas.forEach(async getdata=>{
					await deleteDoc(doc(db,"chats",getdata.id));
				});

			}catch(err){
				console.log("error deleteing message",err);
			}


		} ,20000);

	}

	// deleteAllMessages();

	return {addChat,getChats,updateChatroom,updateUsername}; 

}