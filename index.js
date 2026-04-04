const burgers = ['Hamburger', 'Cheeseburger']
let featuredDrink = 'Strawberry Milkshake'

function addBurger(){
    const newBurger = 'Flatburger'
    burgers.push(newBurger)
}
if(true){
    const anotherNewBurger = 'Maple Bacon Burger'
    burgers.push(anotherNewBurger)
}
addBurger()
function changeFeaturedDrink(){
    featuredDrink = 'The JavaShake'
}
changeFeaturedDrink()
console.log(burgers)
console.log(featuredDrink)