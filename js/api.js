// api.js -- fetch data from JSON

export async function loadFoodData() {
    try { // Fetch the JSON data
        const response = await fetch('food_data.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json(); //parse JSON
        // Validate and normalize data
        if (!Array.isArray(data) || data.length === 0) {
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
}
