// search.js -- handles search functionality

//goal: implement search functionality to filter food items based on user input
//input: array of food items, search query string
//output: array of food items that match the search query
//side effects: none

function searchFoodItems(query, foodItems) {
      
if array data is empty or query is empty string
    return empty array

normalize query: 
display name to lower case and trim whitespace
display portion name
display calories as number

filter food items where:
    for every food item's display name to lower case and trim whitespace
    if display name includes query (case insensitive)
    return array of matching food items
    else return empty array


function searchFoods(query, foods) {
  // 1. If query is empty or only whitespace, return empty array
  
  // 2. Normalize query: trim whitespace and convert to lowercase
  
  // 3. Filter foods array:
  //    - For each food item, temporarily normalize its Display_Name (trim, lowercase)
  //    - Check if normalized name includes normalized query
  //    - Return the ORIGINAL food item (not normalized) if match
  
  // 4. Return filtered array (empty if no matches)
}