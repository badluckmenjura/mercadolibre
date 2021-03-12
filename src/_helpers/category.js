const categoryMax = list => list.reduce((acum, el, i, list) => {
    const count=list.filter(e => e==el).length;
    return count > acum[1] ? [el, count] : acum;
})

export const category = (list)=>{
    let categories = list.map(category=> {
        return category.category_id
    });

    if(categories.length > 0){
        return categoryMax(categories)
    }else{
        return
    }
    
};