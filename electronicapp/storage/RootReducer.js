
var initialState={
    mycart:{},
    user:{}
};

export default function RootReducer(State=initialState,action)
{
  //  console.log('rootreducer check',State=initialState,action);
      switch(action.type)
      {
        case "ADD_PRODUCT":
        State.mycart[action.payload[0]]=action.payload[1]
        // console.log("STATE:",State.mycart);
        return{user:State.user,mycart:State.mycart}
        
        case "EDIT_PRODUCT":
        State.mycart[action.payload[0]]=action.payload[1]
        // console.log("STATE:",State.mycart);
        return{user:State.user,mycart:State.mycart}

        case "REMOVE_PRODUCT":
        delete State.mycart[action.payload[0]]
        console.log("STATE:",State.mycart);
        return{user:State.user,mycart:State.mycart}

        case "CLEAR_CART":
        State.mycart={}
        console.log("STATE:",State.mycart)
        return {mycart:State.mycart,user:State.user}  
        
        case "ADD_USER":
        State.user[action.payload[0]]=action.payload[1]
        // console.log("STATE:",State.user);
        return{user:State.user,mycart:State.mycart}
        
        case "REMOVE_USER":
        delete State.user[action.payload[0]]
        // console.log("STATE:",State.user);
        return{user:State.user,mycart:State.mycart}
        
        default:
        return{mycart:State.mycart,user:State.user}
      }
}
