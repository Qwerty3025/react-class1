import { useState } from "react";
import "./App.css"
import myImage from './assests/my-image.png';




const Home = () => {

  const[color, setColor] = useState ("Red");

  // const name = document.getElementById("name")
  // const inputValue = name.value;
  // const age = document.getElementById("age")
  // const inputValue1 = age.value;
  // const huby = document.getElementById("huby")
  // const inputValue2 = huby.value;
  // console.log(name, age, document)

  const items = 
    {
      name:"Samuel",
      color:"Red",
      size:"40"

    }
  

    return ( 
        <div className="Home">
    <div className="container-home">
      <h1>Step up your game <br/> 
       With our premium
     <br/> Collection
      </h1>
     <p>With our variety of styles, fabrics and trims, let us help you design a on of a kind outfit.</p>
    <div className="btn">
     <button>Shop Now</button>
</div>
</div>


<div className="container-home2">
<img src={myImage} alt="Description" />
</div>

<div>
  {/* <h1>My name is {items.name} my best color is {color}</h1> */}
</div>
<form action="#">
<label>Username : </label>
<input type="text"name="" id="name"/><br/> <br /> <br /> <br />
<label>Age : </label>
<input type="text" name="" id="age" /><br /> <br /> <br />
<label>Huby : </label>
<input type="text" name="" id="huby" /><br /> <br /> <br />
</form>

   <div className="location">
    <ul>
    <li>Location</li>
    <li>Location</li>
    <li>Location</li>
    <li>Location</li>
    </ul>
   </div>
        </div>
     );
}
 
export default Home;