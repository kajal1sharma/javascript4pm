import React from 'react';

class Home extends React.Component{
  

    render(){
        return <div>
            <h1>{this.props.text}</h1>
            Helllo world
        </div>
    }

}
class Home2 extends React.Component{
  

    render(){
        return <div>
            Helllo world
        </div>
    }

}
export {Home2 }
// export {Home2, Home}
export default Home;