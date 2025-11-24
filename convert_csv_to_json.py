import csv
import json

# Read the CSV file
with open('food_data.csv', 'r', encoding='utf-8') as csv_file:
    csv_reader = csv.DictReader(csv_file)
    food_items = list(csv_reader)

# Write to JSON file
with open('food_data.json', 'w', encoding='utf-8') as json_file:
    json.dump(food_items, json_file, indent=2)

print(f"✓ Converted {len(food_items)} food items to JSON")
