const initial_state = { robots: [], counter: 0, cartItem: [], material: [], sameRobot: [] }
export const Reducer = (state = initial_state, action) => {
    switch (action.type) {
        case 'showrobots':
            return ({
                ...state,
                robots: action.payload
            })
        case 'search_material':
            return ({
                ...state,
                robots: action.payload
            })
        case 'count+':
            return ({
                ...state,
                counter: state.counter + 1
            })
        case 'count-':
            return ({
                ...state,
                counter: state.counter - 1
            })
        case 'cart_items':
            return ({
                ...state,
                cartItem: [...state.cartItem, action.payload]
            })
        case 'clearcart':
            return ({
                ...state,
                cartItem: [],
                counter: 0
            })
        case 'removeitem':
            return ({
                ...state,
                cartItem: [action.payload]
            })
        case 'material':
            return ({
                ...state,
                material: [...state.material, action.payload]
            })
        case 'cartitemplus':
            return ({
                ...state,
                cartItem: [...state.cartItem, action.payload],
                counter: state.counter + 1
            })
        case 'cartitemminus':
            return ({
                ...state,
                cartItem: action.payload,
                counter: state.counter - 1
            })
        default: return (initial_state)
    }
}