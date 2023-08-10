import {useState, useEffect } from "react";
import axios from "axios";
import UpdateDisplay from "./UpdateDisplay";
import editImg from "./edit.png";
const Update=()=>
{
	const [data ,setData]=useState([]);
	const loadData=()=>
	{
		axios.get(" http://localhost:4000/student")
		.then((res)=>{
			setData(res.data);
		});

	}
	useEffect(()=>{
		loadData();},[]);

const Mydata=data.map((key)=><UpdateDisplay rno={key.rollno}
	                                        nm={key.name}  ct={key.city}
	                                        fs={key.fees}  id={key.id}
	                                       />);

	return(
		<>
		<center>
        <h1> Update record</h1>
        <table class="table table-bordered">
        <thead>
        <tr>
        <th>rollno</th>
        <th>name</th>
        <th>city</th>
        <th>fees</th>
        </tr>
        </thead>
        <tbody>
        {Mydata}
        </tbody>
        </table>
        </center>
        </>
		);
}
export default Update;

