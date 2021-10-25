import React, {Component} from "react";
import Box from "./Box";
class MainC extends Component{
    state={
        boxes:[{name:"maria", age:32,title:"CEO"},
        {name:"kati", age:32,title:"Designer"},
      {name:"mari", age:32,title:"Developer"},
    ]
    };
    changeNameHandler=()=>
    {console.log("wow..");
};
    render(){
        return (
            <>
            <main>
                <Box name={this.state.boxes[0].name}
                age={this.state.boxes[0].age}
                title={this.state.boxes[0].title}
                />
                <Box name={this.state.boxes[1].name}
                age={this.state.boxes[0].age}
                title={this.state.boxes[0].title}
                />
                <Box name={this.state.boxes[2].name}
                age={this.state.boxes[0].age}
                title={this.state.boxes[0].title}/>
                
                

        </main>
        <button onCLick={this.changeNameHandler}>Click Me</button>
        </>
        );
    }
}
export default MainC;