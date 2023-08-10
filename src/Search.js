import {useState } from "react";
import axios from "axios";
import MyTable from "./MyTable";
const Search=()=>
{
	const[rno,setRno]=useState("");
	const [data, setData]=useState([]);
	const handleInput=(e)=>
	{
		setRno(e.target.value);
		console.log(rno);
	}
	const handleForm=()=>
	{
		let url=`http://localhost:4000/student/?rollno=${rno}`;
            axios.get(url).then((res)=>{
          	setData(res.data);
         	});
         	console.log(data);
	}

	      const MyData=data.map((key)=> <MyTable 
	          	       rno={key.rollno}
	          	      nm={key.name}
	          	      ct={key.city}
	          	      fs={key.fees}
	          	      />);
	          
	return(
		<>
		<h1> Search student record</h1>
		Enter Rollno:<input type="text" name="rno" value={rno}
		onChange={handleInput}  />

		<input type="button" value="search" onClick={handleForm} />
		<br /><br />
		<center>
		<table class="table table-bordered"
		 style={{width:'700px', color:'orange', backgroundColor:'black'}}>
		<tr>
		<td> rollno</td>
		<td> name</td>
		<td> City</td>
		<td> fees</td>
		</tr>

		{MyData}
		</table>
        </ center>
        </>
		);
}
export default Search;
