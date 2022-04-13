export const show_all_robots = (data)=>{
    return ({
        type:"showrobots",
        payload:data
    } 
    )
}

export const material_type = (data)=>{
    return({
        type:"search_material",
        payload:data,
    })
}

export const count_valPlus = (data)=>{
    return ({
        type:'count+',
        payload:data
    })
}

export const count_valMinus = (data)=>{
    return ({
        type:'count-',
        payload:data
    })
}


export const cart_items = (data)=>{
    return({ 
        type:'cart_items',
        payload:data
    })
}

export const remove_cartItems =  (data)=>{
    return ({
        type:'removeitem',
        payload:data
    })
}

export const materials = (data)=>{
    return ({
        type:'material',
        payload:data
    })
}

// export const same_type_cart = (data)=>{
//     return ({
//         type:'sameTypeRobot',
//         payload:data
//     })
// }