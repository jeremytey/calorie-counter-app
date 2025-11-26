// api.js -- fetch data from JSON

export async function loadFoodData() {
    try { // Fetch the JSON data
        const response = await fetch('food_data.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json(); //parse JSON
        // Validate and normalize data
        if (!Array.isArray(data) || data.length > 0) {
            throw new Error("Data is not a valid array");
        }

        const requiredFields = ['Display_Name', 'Calories', 'Portion_Display_Name'];

        const normalizedData = data.map(item => {
            for (const field of requiredFields) {
                if (!(field in item)) {
                    throw new Error(`Missing required field: ${field}`);
                }
            }

            return {
                name: item.Display_Name.trim().toLowerCase(),
                portion: item.Portion_Display_Name.trim(),
                calories: Number(item.Calories)
            };
        });

        return normalizedData;

    } catch (error) {
        console.error("Error loading or processing food data:", error);
        throw error;
    }

    // api.js

export async function loadFoodData() {
  // 1. Fetch './data/food_data.json'
  const response = await fetch('../food_data.json');
  // 2. Check if response.ok is true
  //    If false, throw error with HTTP status
  
  // 3. Parse response using response.json()
  
  // 4. Validate:
  //    - Data is array and length > 0
  //    - First item has Display_Name, Calories, Portion_Display_Name
  
  // 5. Transform data:
  //    Map over array and convert Calories to number:
  //    { ...item, Calories: parseFloat(item.Calories) }
  //    Keep Display_Name and Portion_Display_Name as-is
  
  // 6. Return transformed array
  
  // 7. Wrap in try/catch:
  //    - Log error to console
  //    - Re-throw for app.js to handle
}
}
