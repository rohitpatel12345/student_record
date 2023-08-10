import axios from 'axios'
import {useNavigate } from 'react-router-dom';


const MyDataComDel=(props)=>
{
	const navigate=useNavigate();
	const recDelete=(id)=>
	{
		console.log(id)
      const ID=id;
      axios.delete(`http://localhost:4000/student/${ID}`)
      .then((res)=>{
      	alert("record successfully inserted deleted !!");
      	
      	navigate('/Display',{replace:true});
      })
      .catch(error=>{
      	console.error(error);
      });
	}
	return(
<>
<tr>
<td>{props.rno}</td>
<td>{props.nm}</td>
<td>{props.ct}</td>
<td>{props.fs}</td>
<td>
<a href="#" onClick={()=>{recDelete(props.myid)}}>
<img src={props.myimg} width="30" height="30" /></a>
</td>
</tr>
</>
	);
}
export default MyDataComDel;