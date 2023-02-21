import logo from './logo.svg';
import './App.css';

function App() {
  return (
<div class = 'main'> 
<div class = "buttons">
  <button btn>Details!</button> 
   <button id="btn2">Change Color </button>
   <button class = "btn1"> Make Copy!</button> 
   <button class="modifytitle">Change Name</button>
    <button id="deletelastcard">Delete</button>
</div>
<div class = "card">
   <h4><b>Pusheen </b></h4>
 <img class="image"
      src = "http://aepicos.com/codepen/images/pusheen1.png">
        </img>
  <details class = 'details'>
    <p> Pusheen, an adorable household name cat. Pusheen goes on many adventures and helps people learn about the cat life. </p>
  </details>
</div>
</div>



  )
}

export default App;
