import delImg from "./delete.png"

import {useState,useEffect} from "react";
import axios from "axios";
import MydataCom from "./MydataCom";

const Display=()=>
{
  const [data,setData]=useState([]);
 
  const loadData=()=>
  {
     axios.get("http://localhost:4000/student")
     .then((res)=>{
     	           setData(res.data);
                  });
  }

useEffect(()=>{ loadData();},[] );

const tblData=data.map((key)=><MydataCom rno={key.rollno}
	                                       nm={key.name}
	                                       ct={key.city}
	                                       fs={key.fees}

	/>);

	return(
		<>
		<h1> Display Student Record </h1>
		<table class="table table-bordered" 
		 style={{width:'500px', color:'red', margin:"auto", backgroundColor:"lightblue"}}>
		<thead>
		<tr>
		<th>rollno</th>
		<th>Name</th>
		<th>City</th>
		<th>Fees</th>
		</tr>
		</thead>
		<tbody>
		{tblData}
		</tbody>
		</table>

        </>
		);
}
export default Display;
