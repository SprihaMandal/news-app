import  { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <ul class="navbar-nav">
      <li class="nav-item active">
         <Link to="/"><a class="nav-link" href="#">Home</a></Link>
      </li>
        
      <li class="nav-item active">
     <Link to="about"> <a class="nav-link" href="#">About</a></Link>
       </li>
       <li class="nav-item active">
          <Link to="jobs"><a class="nav-link" href="#">Work with us</a></Link>
        </li>
        <li class="nav-item active">
          <Link to="feedback"><a class="nav-link" href="#">Feedback</a></Link>
        </li>
      </ul>
      </nav>

      <Outlet />



 
    </>
  )
};

export default Layout;