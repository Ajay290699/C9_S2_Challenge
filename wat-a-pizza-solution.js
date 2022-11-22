let menu = [
    {
        'category': 'Beverages',
        'name': 'Coke',
        'price': 1.5
    },
    {
        'category': 'Starters',
        'name': 'Garlic Bread',
        'price': 2.8
    },
    {
        'category': 'Starters',
        'name': 'Mozzarella Sticks',
        'price': 5.5
    },
    {
        'category': 'Main Meal',
        'name': 'Medium Size Margherita Pizza',
        'price': 11
    },
    {
        'category': 'Beverages',
        'name': 'Iced Tea',
        'price': 1.25
    },
    {
        'category': 'Starters',
        'name': 'Greek Wedge Salad',
        'price': 4.5
    },
    {
        'category': 'Main Meal',
        'name': 'Veg Family Meal',
        'price': 13.25
    },
    {
        'category': 'Main Meal',
        'name': 'Large Size Vegan Pepperoni Pizza',
        'price': 14.5
    },
]
const order = {
    'items': [
        {
            'name': 'Mozzarella Sticks',
            'price': 5.5,
            'quantity': 2
        },
        {
            'name': 'Garlic Bread',
            'price': 2.8,
            'quantity': 2
        },
        {
            'name': 'Coke',
            'price': 1.5,
            'quantity': 3
        },
        {
            'name': 'Medium Size Margherita Pizza',
            'price': 11,
            'quantity': 2
        },
        {
            'name': 'Iced Tea',
            'price': 1.25,
            'quantity': 1
        },
        {
            'name': 'Veg Family Meal',
            'price': 13.25,
            'quantity': 2
        },
    ]
};

//Write function to filter menu items by Category and sort them alphabetically
function listByCategory(menu, categoryName){
    let filterResult = menu.filter(item => item.category == categoryName)
    return filterResult;
    }
 let starterCat = listByCategory(menu,"Starters");
 let mainCat = listByCategory(menu,"Main Meal");
 let bevareageCat = listByCategory(menu,"Beverages")

console.log(starterCat)
console.log(mainCat)

function sorting(cat){
return cat.sort(function(x,y){
    if(x.name > y.name){
        return 1;
    }
    else if(x.name < y.name){
        return -1;
    }
    else{
        return 0;
    }
});
}
console.log("-------------------------------")
let sortedStarterCat = sorting(starterCat);
console.log(sortedStarterCat);

let sortedMainCat = sorting(mainCat);
console.log(sortedMainCat)

let sortedBevarages = sorting(bevareageCat);
console.log(sortedBevarages);


//Write function to calculate the amount of each ordered item
function calculateAmount(menu,order){
    let calOrder = order.items.map(item => {
        return{ name : item.name,
                price : item.price,
                quantity : item.quantity,
                category: menu.filter(menuItem => item.name == menuItem.name)[0].category,
                amount: item.price * item.quantity
        }
    })
    return calOrder;
}

let price = calculateAmount(menu,order);
console.log(price)

//Write function to calculate the subtotal amount for the main meal ordered
//Write function to find the totalAmount of the order based on the calculated mainMealAmount value
function calculateMainMealAmount(mainCat){
    let sumOrder = mainCat.reduce(function(x,y){
        return x+y.price;
    },0);
    return sumOrder
}

let mainMealAmount = calculateMainMealAmount(mainCat);
console.log("Total Main Meal Amount is "+mainMealAmount);


//Write function to calculate the final amount after discount
discountApplied = 0;
finalPrice = 0;
function calculatedFinalAmount(totalAmount, discount){
    if(totalAmount > 50){
        discountApplied = (totalAmount *5)/100;
        return finalPrice = totalAmount - discountApplied;
    }else{
        return totalAmount;
    }
}

let appliedDiscountPrice = calculatedFinalAmount(mainMealAmount,5);
console.log("Final Bill Amount is "+appliedDiscountPrice);

//Write function to display the total amount 
function displayTotalAmount(){
    return calculateMainMealAmount(mainCat)
}

let d = displayTotalAmount();
console.log("Total Amount payable: $"+d);

//Write function to display the final amount
function displayFinalAmount(){
    return appliedDiscountPrice;
}

let f = displayFinalAmount();
console.log("Final Amount payable after discount: $"+f)

//Invoke  functions 


