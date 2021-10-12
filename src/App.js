import './App.css';
const Box= (props)=>{
  return <div className="box">
    <div>
<h2>{props.name}</h2>
<p>Title: {props.title}</p>
<p>Age: {props.age}</p>  </div>

</div>


};
function App() {
  return (
    <div >
    <header>
<h1>Logo</h1>
</header>
<main>
  <Box name="MAria" title="CEO" age="29"/>
  <Box name="MArta" title="Designer" age="49"/>
  <Box name="MAntyla" title="MD" age="89"/>
 

</main>
<footer>
<p><small>Copyrights</small></p>
</footer>




      
  
        
    </div>
  );
}

export default App;
