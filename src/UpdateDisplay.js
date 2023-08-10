
import editImg from "./edit.png"
import { Link} from "react-router-dom"
import { useState, useEffect} from "react";
import axios from "axios";


const UpdateDisplay=(props)=>
{
	return(
<>
<tr>
<td>{props.rno}</td>
<td>{props.nm}</td>
<td>{props.ct}</td>
<td>{props.fs}</td>
<td>
<Link to={`/Editrec/${props.id}`} >
<img src={editImg} width="40" height="40" />
</Link>
</td>
</tr>
</>
 );
}
export default UpdateDisplay;