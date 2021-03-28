import React, {
  Component
} from 'react';
// import React from 'react';

import Navbar from './Components/Navbar'


function App() {
  return (
    <div >
      
  
        <Navbar></Navbar>

        <div style = {{ height: "400px",backgroundColor: "#D8DDDF",marginTop: 6
                }}>
            
            <div style = {{ height: "30px",backgroundColor: "#D1D6D8"
                }}>
            </div> 
        </div>

        <div style = {{ height: "500px",backgroundColor: "#D8DDDF",marginTop: 0
                }}>
            <div style = {{ height: "30px",backgroundColor: "#D1D6D8"
                }}>
            </div>
        </div>
            
     
    </div>
  );
}

export default App;

