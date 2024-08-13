import "./App.css"

const Navbar = () => {
    return ( 
        <div className="Header">
        <h1>Shoes</h1>
    <nav>
     <a href="/">Home</a>
     <a href="/products">Products</a>
     <a href="/about">About</a>
     <a href="/services">Services</a>
     <a href="/contact">Contact</a>
   </nav>
   </div>

     );
}
 
export default Navbar;