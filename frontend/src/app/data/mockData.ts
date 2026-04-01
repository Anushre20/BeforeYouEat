export const mockProductData = {
  "instant-noodles": {
    productName: "Instant Noodles",
    healthScore: 42,
    ingredients: [
      {
        name: "Sodium Benzoate (INS 211)",
        risk: "harmful" as const,
        explanation: "Used as a preservative. Linked to hyperactivity in children when consumed in excess. May trigger allergic reactions in sensitive individuals.",
      },
      {
        name: "Monosodium Glutamate (MSG)",
        risk: "moderate" as const,
        explanation: "Flavor enhancer that may cause headaches and nausea in sensitive people. Generally recognized as safe in moderate amounts.",
      },
      {
        name: "Wheat Flour",
        risk: "safe" as const,
        explanation: "Basic ingredient made from ground wheat. Good source of carbohydrates and some B vitamins. May not be suitable for those with gluten sensitivity.",
      },
      {
        name: "Palm Oil",
        risk: "moderate" as const,
        explanation: "High in saturated fats. Excessive consumption may increase cholesterol levels. Environmental concerns around production.",
      },
      {
        name: "Tertiary Butylhydroquinone (TBHQ)",
        risk: "harmful" as const,
        explanation: "Synthetic preservative that prevents oil from going rancid. Studies suggest potential health risks with long-term consumption.",
      },
    ],
    warnings: [
      "High Sodium Content",
      "Highly Processed",
      "Not ideal for children",
    ],
    insight: "This product contains additives commonly used to increase shelf life in processed foods. Regular consumption of highly processed foods has been linked to various health concerns.",
    betterChoice: "Products with fewer ingredients and less processing are generally healthier. Consider whole grain alternatives or fresh foods when possible.",
  },
  "barcode-scan": {
    productName: "Flavored Chips",
    healthScore: 38,
    ingredients: [
      {
        name: "Artificial Colors (Tartrazine)",
        risk: "harmful" as const,
        explanation: "Synthetic food dye that may cause allergic reactions. Linked to hyperactivity in children according to some studies.",
      },
      {
        name: "Potassium Sorbate",
        risk: "moderate" as const,
        explanation: "Common preservative generally considered safe. May cause skin irritation in rare cases.",
      },
      {
        name: "Potato Starch",
        risk: "safe" as const,
        explanation: "Natural ingredient extracted from potatoes. Provides texture and acts as a thickener.",
      },
      {
        name: "Trans Fats",
        risk: "harmful" as const,
        explanation: "Unhealthy fats linked to heart disease and increased bad cholesterol. Should be avoided whenever possible.",
      },
    ],
    warnings: [
      "High in Trans Fats",
      "Contains Artificial Colors",
      "Highly Processed",
    ],
    insight: "Trans fats are one of the most harmful types of fats. They raise bad cholesterol and lower good cholesterol, increasing heart disease risk.",
    betterChoice: "Look for snacks with natural ingredients, no trans fats, and baked rather than fried options.",
  },
};

export const mockNaturalFoodData: Record<string, any> = {
  watermelon: {
    name: "Watermelon",
    nutrients: ["Vitamin A", "Vitamin C", "Potassium", "High Water Content"],
    benefits: [
      "Keeps you hydrated (92% water)",
      "Supports heart health with lycopene",
      "Low calorie fruit perfect for weight management",
      "Rich in antioxidants that protect cells",
    ],
  },
  apple: {
    name: "Apple",
    nutrients: ["Fiber", "Vitamin C", "Potassium", "Antioxidants"],
    benefits: [
      "Supports digestive health with dietary fiber",
      "Helps regulate blood sugar levels",
      "May reduce risk of heart disease",
      "Low calorie and filling snack option",
    ],
  },
  banana: {
    name: "Banana",
    nutrients: ["Potassium", "Vitamin B6", "Vitamin C", "Fiber"],
    benefits: [
      "Excellent source of quick energy",
      "Supports muscle function and recovery",
      "Aids digestion with natural fiber",
      "May help regulate blood pressure",
    ],
  },
};
