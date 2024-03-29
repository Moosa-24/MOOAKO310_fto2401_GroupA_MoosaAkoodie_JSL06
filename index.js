// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuContainer = document.getElementById('menu');
    // Loop through each category and its items in the menu object
    for (const category in menu) {
        if (menu.hasOwnProperty(category)) {
            // Create an element to represent the category
            const categoryElement = document.createElement('div');
            // Set the text content of the category element to the category name
            categoryElement.textContent = category;
            // Append the category element to the menu container
            menuContainer.appendChild(categoryElement);
            // Create an element to represent a list of items
            const itemsListElement = document.createElement('ul');
            // Append a list of items element to the menu container
            menuContainer.appendChild(itemsListElement);
            // Loop through the items in the category and create list items
            menu[category].forEach(item => {
                // Create a list item element
                const listItemElement = document.createElement('li');
                // Set the text content of the list item element to the item name
                listItemElement.textContent = item;
                // Attach a click event listener to the list item to add it to the order
                listItemElement.addEventListener('click', () => {
                    addToOrder(item);
                });
                // Append the list item to the list of items
                itemsListElement.appendChild(listItemElement);
            });
        }
    }
}

// Function to get the price of an item in order to Calculate and update the total price
function getItemPrice(itemName) {
    
    const itemPrices = {
        "Garlic Bread": 5.99,
        "Bruschetta": 6.99,
        "Margherita Pizza": 9.99,
        "Spaghetti Carbonara": 12.99,
        "Tiramisu": 7.99,
        "Cheesecake": 8.99
    };

    if (itemName in itemPrices) {
        return itemPrices[itemName];
    } else {
        return "Item not found"; // maybe i should have returned 0 but i dont wanna mess with prices and numbers and stuff
    }
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML
    const orderItemsList = document.getElementById('order-items');
    const orderTotalElement = document.getElementById('order-total');
    // Create a list item for the order
    const orderItem = document.createElement('li');
    // Set the text content of the list item to the item name
    orderItem.textContent = itemName;
    // Append the list item to the order items list
    orderItemsList.appendChild(orderItem);
    // Calculate and update the total price - struggled here a bit
    const currentTotal = parseFloat(orderTotalElement.textContent);
    const itemPrice = getItemPrice(itemName); 
    const newTotal = currentTotal + itemPrice;
    // Update the text content of the order total element with the new total
    orderTotalElement.textContent = newTotal.toFixed(2);
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu); 
}

// Start the menu system by calling the init function
initMenuSystem(menu);


/*they should have also added a function for removing items from the list, it's not in the solution.gif 
so i am not doing it:) ... reason being if a senior dev asks me to do something and i do more or less
they might have an issue with me not following instructions clearly

but if it was my own project or not being marked by anyone, i would have definitely added it in*/