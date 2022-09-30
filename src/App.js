import react from 'react'
import playground from './imageall/peaplayground.png'
import kid from './imageall/เด็กชิงช้าlogo.png'
import './App.css';
function sayHello() {
  alert('You clicked me!');
  }
function App() {
  return (
    
   <div className="App">
     
       
        <nav class="menu-bar">
  <div class="group">
    <a class="item title"
          href="https://www.pea.co.th"
          target="_blank"
          rel="noopener noreferrer">
            PEA.COM</a>
  
  
  </div>
  <div class="group">
    <a class="item"
    href="https://intranet.pea.co.th"
    target="_blank"
    rel="noopener noreferrer">
     INTRANET PEA
    </a>
    
  </div>
  </nav>
  
  
  <center>
  
         <logo style={{ display: "flex", justifyContent: "center" }}>
          
          <img src ={playground} alt='' style={{ width: "40%" }}/>
         
         </logo>
         
         <kid style={{ display: "flex", justifyContent: "center" }}>
          
          <img src ={kid} alt='' style={{ width: "60%"  }} />
         
         </kid>
       
         <hover>
         <button className="button" ><span>LET'S GO</span> </button>
         </hover>
         

        
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
   </center> 
        
        <h1>
        <about onClick={sayHello}>About PLAYGROUND</about>
        </h1>
 
  
<div class="gallery-wrapper">
  <div class="gallery-scroll">
    <div class="gallery">
      <div class="item">
        <img src="https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Image" />
      </div>
      <div class="item">
        <img src="https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Image" />
      </div>
      <div class="item">
        <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Image" />
      </div>
      <div class="item">
        <img src="https://images.unsplash.com/photo-1476673160081-cf065607f449?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Image" />
      </div>
      <div class="item">
        <img src="https://images.unsplash.com/photo-1476673160081-cf065607f449?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Image" />
      </div>
      <div class="item">
        <img src="https://images.unsplash.com/photo-1476673160081-cf065607f449?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Image" />
      </div>
      <div class="item">
        <img src="https://images.unsplash.com/photo-1476673160081-cf065607f449?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Image" />
      </div>
      <div class="item">
        <img src="https://images.unsplash.com/photo-1476673160081-cf065607f449?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Image" />
      </div>
    </div>
  </div>
</div>
</div>






  );
}



export default App;
