
import {format}	from "date-fns"; 

export function UiElement(divele){
	const userInfoEle = (data)=>{

		const {uid,email,displayName,photoURL} = data;
		const createdtime = data.metadata.creationTime;

		// const getdate = new Date(createdtime).getDate();
		// const getmonth = new Date(createdtime).getMonth();
		// const getyear = new Date(createdtime).getFullYear();

		// const months = [  "January", "February", "March", "April", "May", "June",  "July", "August", "September", "October", "November", "December"];
		// const formatdate = ` ${getdate} ${months[getmonth]} ${getyear} `;
		const formatdate = format(new Date(createdtime) ,"d/MMM/yyyy");


		const html = `
				<img src="https://cdn-icons-png.flaticon.com/512/9203/9203764.png" width="80" class="profile icon" />
				<p>UID: ${uid}</p>
				<p>Name: ${displayName}</p>
				<p>Email: ${email}</p>
				<p>Created At: ${formatdate} </p>

		`;

		divele.innerHTML = html;

	} 

	return {userInfoEle}
}