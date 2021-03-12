
export const mapItem = (item)=>{
    return {
        id: item.id,
        title: item.title,
        price:{
          amount: (item.price+'').split(/\./)[0],
          currency: item.prices?.presentation?.display_currency,
          decimals: (item.price+'').split(/\./)[1]
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping?.free_shipping,
        state: item.seller_address?.state.name,
        category_id: item.category_id
    }
};