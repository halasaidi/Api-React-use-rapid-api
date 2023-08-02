import React, { useEffect, useState } from "react";
import './App.css'
function App() {
  
  const [EndPoint, setEndPoint] = useState('')
  const [Container, setContainer] = useState([])
  const FatchData=async()=>{
    const url =`https://yummly2.p.rapidapi.com/feeds/auto-complete?q=${EndPoint}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4958e3dedcmsh77f1b3d598066fbp1e830ejsn8c2d21434d94',
		'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
 
	const data = await response.json();
	console.log(data);
  if(data&&data.searches){
    setContainer(data.searches)
  }
  else{
    setContainer([])
  }
} catch (error) {
	console.error(error);
}
  }
 useEffect(()=>{
  FatchData()
 // eslint-disable-next-line react-hooks/exhaustive-deps
 },[EndPoint])
 console.log(Container)

  const onchangehandeler = (e) => {
    setEndPoint(e.target.value)
  }

  const submitFormHandeler = (e) => {
    e.preventDefault()
    FatchData()

  }
return(
  <>
  <h2>Fetching Data From Rapid Api</h2>
  <form onSubmit={submitFormHandeler}>

<label> Enter the food </label>

<input placeholder="Search Food" value={EndPoint} onChange={onchangehandeler} />

<button> Search </button>

</form>
{Container.map((item,index)=>{
  return(<div id="item" key={index}>{item}</div>)
})}

  </>
)
}

export default App;


