import React, {useState}  from 'react';

function Banner() {
 const [firstName, setFirstName] = useState('');
 const [lastName, setLastName]   = useState('');
 
 return (
   <div>
     <input

       onChange={(e) => setFirstName(e.target.value)}

       value={firstName}

     />
     <input

       onChange={(e) => setLastName(e.target.value)}

       value={lastName}

     />
     <button onClick={()=> console.log(firstName, lastName) }>ok</button>
   </div>
 );
}
export default Banner;