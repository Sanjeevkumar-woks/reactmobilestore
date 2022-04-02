import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
 <PhoneList/>
    </div>
  );
}

function PhoneList(){
  const [mobiles,setMobiles]=useState([]);

  useEffect( ()=>{
    fetch("https://mobilesstore.herokuapp.com/mobiles")
  .then((data)=>data.json())
  .then((mbs)=> setMobiles(mbs));
  },[]);
  
  return(
    <div className="App phone-list-container">  
    {mobiles.map((mobile)=>
      <Phone key={mobile._id} mobile={mobile}/>
    )}
     </div>
  );

}


function Phone({mobile}){
 
  return <div className='phone-container'>
<img src={mobile.img} alt={mobile.model} className="phone-picture"/>
<h2 className='phone-name'>{mobile.model}</h2>
<p className='phone-company'>{mobile.company}</p>
  </div>
}

export default App;
