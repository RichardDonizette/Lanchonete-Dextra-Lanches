export const calculePriceBySandwich = (sandwich, ingredientePrice, initialPrice) => {
    let price = 0.0;
    sandwich.ingredients.map((ingrediente) => {
        ingredientePrice.map((ingredienteList) => {
            if (ingrediente == ingredienteList.Name) {
                price = (price + ingredienteList.Price)
            }
        })
    })
    calculePriceWithPromotion(sandwich.ingredients, ingredientePrice)
    return price;
};

const calculePriceWithPromotion = (ingredienteList, ingredientePrice) => {
    var sumBacon = ingredienteList.reduce(function (prevVal, elem) {
        if (elem === "Bacon") {
            prevVal++
        }
        return prevVal
    }, 0);

    var sumCheese = ingredienteList.reduce(function (prevVal, elem) {
        if (elem === "Queijo") {
            prevVal++
        }
        return prevVal
    }, 0);

    if (sumBacon % 3 === 0) {
        let baconPromo = (2 / 3 * (ingredientePrice[0].Price * sumBacon))
    }

    if (sumCheese % 3 === 0) {
        let chessePromo = (2 / 3 * (ingredientePrice[4].Price * sumCheese))
    }
};

const lightPromotion = (ingredienteList) => {
    var sumBacon = ingredienteList.reduce(function (prevVal, elem) {
        if (elem === "Bacon") {
            prevVal++
        }
        return prevVal
    }, 0);

    var sumLettuce = ingredienteList.reduce(function (prevVal, elem) {
        if (elem === "Alface") {
            prevVal++
        }
        return prevVal
    }, 0);

    if (sumBacon === 0 && sumLettuce > 0){
        return 0.1;
    }
    return 0
};