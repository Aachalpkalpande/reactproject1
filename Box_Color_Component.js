import React from 'react'

export default function Box_Color_Component({color , color2, color1}) {

    const boxStyle={
        width: '400px',
       
        height:'400px',
        
        
       // backgroundColor:color1,
        backgroundColor:color,
       // backgroundColor:color2,

    }
  return (
   /* <>
    <div style={boxStyle}>
      
      The New Color is {color1}
         </div>
 </>
*/

<>
<div style={boxStyle}>
  
  The New Color is {color}
     </div>
</>
  )
}
