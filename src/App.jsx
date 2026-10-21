import { useState } from "react";
function APP(){
  const [mood,setMood] =useState('happy 😊 ')
  return(
    < div style={{textAlign:'center', marginTOP:'60px',fontFamily: 'sans -serif'}} >
      <h1>Current Mood :</h1>
      <h2 style={{fontSize:'2.5rem'}}>{mood} </h2>
      <div style={{marginTOP:'20px'}}>
        <button onClick={()=>setMood('happy 😊 ')} style={{margin:'5px',padding: '10px 15px'}}>
        happy 😊
        </button>
         <button onClick={()=>setMood('sleepy 😴 ')} style={{margin:'5px',padding: '10px 15px'}}>
          sleepy 😴
         </button>

        <button onClick={()=>setMood('excited 🤩 ')} style={{margin:'5px',padding: '10px 15px'}}>
        excited 🤩  
        </button>
        </div>
       </div>   
      

  );
}
export default APP ;