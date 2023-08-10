import react from "react";
import {Outlet,Link} from "react-router-dom";

const Layout=()=>
{
  return(
		 <>
		 <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style={{color: "red"}}>
  <div class="container-fluid"  >
    <Link class="navbar-brand" to="/">Student Detail</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
      <li class="nav-item">
          <Link to="/" class="nav-link active">Home</Link >
        </li>
        <li class="nav-item">
       < Link to="/insert" class="nav-link ">insertRec </Link>
        </li>
        <li class="nav-item">
          <Link to="/display" class="nav-link">Display</Link >
        </li>
        <li class="nav-item">
          <Link to="/search" class="nav-link">Search</Link>
        </li> <li class="nav-item">
          <Link to="/update" class="nav-link">Update</Link>
        </li>
         <li class="nav-item">
          <Link to="/delete" class="nav-link">Delete</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
<Outlet/>
	  </>
		 );

}
export default Layout;