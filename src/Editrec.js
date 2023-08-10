import { useParams } from "react-router-dom";
import axios from "axios";
import {useState, useEffect} from "react";

const Editrec=()=>

{
	const [data,setData]=useState([]);
	let {id}=useParams();
    const loadData=()=>
    {
    	let url=`http://localhost:4000/student/${id}`;
    	axios.get(url).then((res)=>{
    		setData(res.data);
    	});
    	console.log(data);
    }
    useEffect(()=>{
    	loadData();
    },[]);

    const handleInput=(e)=>
    {
        let name=e.target.name;
        let value=e.target.value;

        setData(values=>({...values,[name]:value}));
        console.log(data);
    }
    const editSave=()=>
    {
    	axios.put(`http://localhost:4000/student/${id}`,data)
    	.then((res)=>{
    		console.warm(data);
    	});
    	alert("data is successfully updated!!");
    }

	return(
		<>
		<h1> Edit Student Record</h1> 
		Rollno:<input type="text" name="rollno" value={data.rollno}
		onChange={handleInput} />
		<br />
		Name :<input type="text" name="name" value={data.name}
		onChange={handleInput} />
		<br />
		City :<input type="text" name="city" value={data.city}
		onChange={handleInput} />
		<br />
		Fees :<input type="text" name="fees" value={data.fees} 
		onChange={handleInput}/>
		<br />
		<input type="button" value="data updated"
		onClick={editSave} />

		</>);
}
export default Editrec;