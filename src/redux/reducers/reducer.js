const initialState={
    obj:null
}

const userDataReducer =(state=initialState,action)=>{
console.log(action)
switch(action.type){
    case "USER_DATA":
        return(
            {obj:action.user}
        )
}
}


export {userDataReducer}