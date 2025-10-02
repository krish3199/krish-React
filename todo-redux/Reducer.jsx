const initialstate = {
    display: []
}
export const reducer = (state = initialstate, action)=>{
    switch (action.type) {
        case 'ADD':
            return {display: [...state.display, action.payload]}
        case 'DELETE' :
            return {display : state.display.filter((_,i)=>i !== action.payload)}
        case 'ClearAlla' :
            return {display : []}
        default :
             return state;
    }
}
