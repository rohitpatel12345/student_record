
import {useState} from "react";
import axios from "axios";

const InsertRec=()=>
{
	const [input,setInput]=useState({});

	const handleInput=(e)=>
	{
		let name=e.target.name;
		let value=e.target.value;
		setInput(values=>({...values,[name]:value}));

	}
	const handleSubmit=(e)=>
	{
		axios.post("http://localhost:4000/student", input)
		.then((res)=>{
            e.preventDefault();
			console.warn(input);
		});
		alert("record successfully inserted");
	} 

	return(
		    <>
		    <body bgcolor="pink">
		    <center>
            <h1>Insert Student Record </h1>
           < div style={{width:'500px'}}>
            
            <div class="mb-3 mt-3">
             <label for="rollno" class="form-lable">Rollno:</label>
             <input type="text" class="form-control" id="rollno"
             placeholder="Enter rollno" name="rollno" value={input.rollno}
             onChange={handleInput} />
             </div>
             <div class="mb-3">
             <label for="name" class="form-lable">Name:</label>
             <input type="text" class="form-control" id="name"
             placeholder="enter your name" name="name" value={input.name}
             onChange={handleInput} />
             </div>
             <div class="mb-3">
             <label for="name" class="form-lable">City:</label>
             <input type="text" class="form-control" id="city"
             placeholder="enter your city" name="city" value={input.city}
             onChange={handleInput} />
             </div>
             <div class="mb-3">
             <label for="name" class="form-lable">fees:</label>
             <input type="text" class="form-control" id="fees"
             placeholder="enter your fees" name="fees" value={input.fees}
             onChange={handleInput} />
             </div>
             <button type="submit" onClick={handleSubmit}>Submit</button>
            </div>
            </center>
            </body>
            
            </>
		  );
} 
export default InsertRec;
