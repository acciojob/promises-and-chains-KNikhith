//your JS code here. If required.
const form=document.getElementById("form");

form.addEventListener("submit",(e)=>{
	e.preventDefault();

	let name=document.getElementById("name").value;
	let age=Number(document.getElementById("age").value);

	if(!name || !age){
		alert("Please enter valid details");
		return;
	}
	let checkEligibility=new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(age> 18){
				resolve(`Welcome, ${name}. You can vote.`)
			}
			else{
				reject(`Oh sorry ${name}. You aren't old enough.`)
			}
		},4000);
	});
	checkEligibility.then((message)=>alert(message))
	.catch((message)=>alert(message));
})