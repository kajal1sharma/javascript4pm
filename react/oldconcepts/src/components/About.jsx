import React from "react"


class About extends React.Component{
  
    constructor(props){
        super(props)

        this.state={flag:"false"}
    }

    clickHandler(){
        console.log(this.state.flag)
        
        let flag3 = this.state.flag ==="true"?"false":"true"; 
      
        this.setState({flag:flag3});
    }

    render(){
        return <div>
            Helllo world
            {console.log(this.state.flag)}
            {this.state.flag}
            <button onClick={this.clickHandler.bind(this)}>toggle</button>
        </div>
    }

}

export default About