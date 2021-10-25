const Box=(props)=> {
    const changeNameHandler=()=>{
console.log("wow....")
    };
    return (
        <div className="box">
            <div>
            <h2>{props.name}</h2>
      <p>Title: {props.title}</p>
      <p>Age: {props.age}</p>  
      <button onClick={changeNameHandler}>Click Me</button>

</div>
</div>

    )
}
export default Box;
