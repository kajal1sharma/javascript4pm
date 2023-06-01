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

    componentWillUnmount(){
        console.log("about page unmounted")
    }
    componentDidMount(){
        console.log("about page mounted")
    }
    render(){
        return <div>
            <h1>This is About page</h1>
            <h1>{this.state.flag}</h1>
            <button onClick={this.clickHandler.bind(this)}>toggle</button>
            <input onChange={this.props.changeHandler}/>
        </div>
    }

}

export default About