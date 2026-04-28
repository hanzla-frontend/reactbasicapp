import React from 'react';
import { useState } from "react";


// import { Container } from './styles';

function OnChange() {
      const [text, setText] = useState("");
<input 
      type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
}

export default OnChange;