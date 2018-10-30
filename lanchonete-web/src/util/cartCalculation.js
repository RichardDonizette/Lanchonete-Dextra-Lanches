export const calculePriceBySandwich = (sandwich, ingredientePrice, initialPrice) => {
    let price = 0.0;
    sandwich.ingredients.map((ingrediente) => {
        ingredientePrice.map((ingredienteList) => {
            if(ingrediente == ingredienteList.Name){
                price = (price + ingredienteList.Price)
            }
        })
    })
    return price;
}