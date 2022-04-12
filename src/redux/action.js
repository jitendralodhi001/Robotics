export const show_all_robots = (data)=>{
    return ({
        type:"showrobots",
        payload:data
    } 
    )
}

export const material_type = (data)=>{
    // debugger
    return({
        type:"search_material",
        payload:data,
    })
}

export const count_val = (data)=>{
    return ({
        type:'count',
        payload:data
    })
}