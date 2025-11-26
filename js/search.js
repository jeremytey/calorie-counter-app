// search.js -- handles search functionality
// pure function 
//goal: implement search functionality to filter food items based on user input
//input: array of food items, search query string
//output: array of food items that match the search query
//side effects: none


export function searchFoods(query, foods) {
    if (!query || query.trim() === '') {
        return [];
    }
    // temrporarily normalize query
    const normalizedQuery = query.trim().toLowerCase();
    return foods.filter(food => {
        const normalizedName = food.Display_Name.trim().toLowerCase();
        return normalizedName.includes(normalizedQuery);
    }); 
}