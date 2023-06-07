
let obj = {
    value:0
}

function IncrementDecrementREducer (state=obj, action){
    if(action.type==='increment'){
       return  {value:state.value+1}

    }
    else if(action.type ==="decrement"){
        return {value:state.value-1};
    }
}


export default IncrementDecrementREducer;