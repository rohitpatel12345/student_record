
import delImg from "./delete.png"
import {useState,useEffect} from "react";
import axios from "axios";
import MyDataComDel from "./MyDataComDel";


const Delete=()=>
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

const tblData=data.map((key)=><MyDataComDel rno={key.rollno}
	                                       nm={key.name}
	                                       ct={key.city}
	                                       fs={key.fees}
	                                       myimg={delImg}
	                                       myid={key.id} />);



	return(
		<>
		<h1> Delete Student Record </h1>
		<table class="table table-bordered" 
		 style={{width:'500', color:'red'}}>
		
		<thead>
		<tr>
		<th>rollno</th>
		<th>Name</th>
		<th>City</th>
		<th>Fees</th>
		<th></th>
		</tr>
		</thead>
		<tbody>
		{tblData}
		</tbody>
		</table>

        </>
		);
}
export default Delete;
