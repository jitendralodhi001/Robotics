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
export const clear_cart = (data)=>{
    return ({
        type:'clearcart',
        payload:data
    })
}

export const materials = (data)=>{
    return ({
        type:'material',
        payload:data
    })
}

export  const cart_item_plus =(data)=>{
    return ({
        type:'cartitemplus',
        payload:data
    })
}

export const cart_item_minus = (data)=>{
    return ({
        type:'cartitemminus',
        payload:data
    })
}
