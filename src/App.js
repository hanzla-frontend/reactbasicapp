import './App.css';
import Child from './Child';
import Counter from './Counter';
import ClickExample from "./ClickExample"
import OnChange from "./OnChange.jsx"
import { useState } from "react";
import Forms from "./Forms.jsx"
function App() {
   const [text, setText] = useState("");
  let name="Ali"
  let age=30
  return (
   <>
   <div>Hello World</div>
   <Child name={name} age={age}/>
   <Counter/>
   <ClickExample />
   <OnChange />

        <br/> <br/>
   <input 
         type="text"
         value={text}
         onChange={(e) => {setText(e.target.value) ; console.log(e.target.value)}}
       />
     <  br /> <  br/>
       <p>Your Name: {text}</p>
       <br/>
       <Forms />
   </>
  );
}

export default App;
