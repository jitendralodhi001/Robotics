const initial_state = {robots:[],counter:0}

export const Reducer = (state=initial_state , action)=>{
    // debugger
        switch(action.type)
        {
            case 'showrobots':
                return({
                    ...state,
                    robots:action.payload
                })
            case 'search_material':{
                return({
                    ...state,
                    robots:action.payload
                })
            }
            case 'count':
                return ({
                    ...state,
                    counter:action.payload

                })

            default : return (initial_state)
        }

}