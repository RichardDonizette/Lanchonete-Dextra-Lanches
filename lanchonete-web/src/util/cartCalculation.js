export const calculePriceBySandwich = (sandwich, ingredientePrice) => {
    let price = 0.0;
    if (sandwich.length !== 0) {
        sandwich.ingredients.map((ingrediente) => {
            ingredientePrice.map((ingredienteList) => {
                if (ingrediente === ingredienteList.Name) {
                    price = (price + ingredienteList.Price)
                }
            })
        })
    }

    return price - calculePriceWithPromotion(price, sandwich.ingredients, ingredientePrice);
};

const calculePriceWithPromotion = (total, ingredienteList, ingredientePrice) => {
    let discount = 0;

    const sum = ingredientePrice.reduce((counts, ingredient) => {
        counts[ingredient.Name] = 0;
        return counts;
    }, {});

    const ingredientsCount = ingredienteList.reduce((sum, ingredient) => {
        sum[ingredient]++;
        return sum;
    }, sum);

    const cheeseGroups = parseInt(ingredientsCount['Queijo'] / 3);
    discount += cheeseGroups * ingredientePrice[4].Price;

    const meatGroup = parseInt(ingredientsCount['Hambúrguer de carne'] / 3);
    discount += meatGroup * ingredientePrice[2].Price;

    if (ingredientsCount['Bacon'] === 0 && ingredientsCount['Alface'] > 0) {
        discount += (total - discount) * 0.1;
    }

    return discount
};