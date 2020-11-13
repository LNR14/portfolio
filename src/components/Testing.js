import React, { useState } from 'react'
import {Button } from 'react-bootstrap'
import "./About.css"
import pro1 from "../images/pro1.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)


function Testing(){

    const [isShown, setIsShown] = useState(false);
    
  return (
    <div>
    <FontAwesomeIcon icon={['fab', 'apple']} />
    <FontAwesomeIcon icon={['fab', 'microsoft']} />
    <FontAwesomeIcon icon={['fab', 'google']} />
    <FontAwesomeIcon icon={["fab", "github"]} />
    <FontAwesomeIcon icon={["fab", "algolia"]} />
    With Coffee Checked, these companies always know their coffee is hot and ready!
      <button
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}>
          Hover over me!
        </button>
        {isShown && (
          <div>
            I'll appear when you hover over the button.
          </div>
        )}
  </div>
  )
}
export default Testing

// import React, { useState } from 'react';
// // import './App.css';

// function Testing() {
//   const [isShown, setIsShown] = useState(false);

//   return (
//     <div className="App">
//       <button
//         onMouseEnter={() => setIsShown(true)}
//         onMouseLeave={() => setIsShown(false)}>
//         Hover over me!
//       </button>
//       {isShown && (
//         <div>
//           I'll appear when you hover over the button.
//         </div>
//       )}
//     </div>
//   );
// }

// export default Testing;


