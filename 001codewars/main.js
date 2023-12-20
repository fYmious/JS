function cakes(recipe, available) {
    if (!allIngredients(recipe, available)){
        return 0
    }
    let res = 1000000000
    for (const ingredient in recipe) {
        if (available[ingredient] / recipe[ingredient] < res){
            res = Math.floor(available[ingredient] / recipe[ingredient])
        }
    }
    return res

}

function allIngredients(recipe, available) {
    for (const ingredient in recipe) {
        if(!available.hasOwnProperty(ingredient)){
            return false
        }
    }
    return true
}

let recipe = {flour: 500, sugar: 200, eggs: 1};
let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};

console.log(cakes(recipe, available))
