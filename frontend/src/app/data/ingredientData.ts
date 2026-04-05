export const ingredientData: any = {

  // 🍬 SUGAR
  "sugar": {
    risk: "harmful",
    reason: "Linked to obesity and diabetes",
    weight: 10,
    category: "sugar",
    userImpact: {
      child: "May cause hyperactivity",
      diabetic: "Highly dangerous – spikes sugar",
      adult: "Weight gain risk",
      gym: "Empty calories"
    }
  },

  "glucose": {
    risk: "moderate",
    reason: "Fast sugar spike",
    weight: 8,
    category: "sugar",
    userImpact: {
      child: "Energy spikes",
      diabetic: "Avoid – raises sugar quickly",
      adult: "Can lead to fat gain",
      gym: "Useful post workout only"
    }
  },

  // 🧂 SALT
  "salt": {
    risk: "moderate",
    reason: "High sodium increases BP",
    weight: 6,
    category: "sodium",
    userImpact: {
      child: "May affect kidneys",
      diabetic: "Risk of BP issues",
      adult: "Hypertension risk",
      gym: "Okay in moderation"
    }
  },

  // 🌾 FLOUR
  "maida": {
    risk: "harmful",
    reason: "Highly refined, low fiber",
    weight: 9,
    category: "carb",
    userImpact: {
      child: "Low nutrition",
      diabetic: "Spikes sugar levels",
      adult: "Leads to weight gain",
      gym: "Avoid – poor nutrition"
    }
  },

  "wheat flour": {
    risk: "moderate",
    reason: "Refined carbs",
    weight: 5,
    category: "carb",
    userImpact: {
      child: "Energy source",
      diabetic: "Moderate intake only",
      adult: "Okay in moderation",
      gym: "Good carb source"
    }
  },

  // 🛢 OILS
  "palm oil": {
    risk: "moderate",
    reason: "High saturated fat",
    weight: 7,
    category: "fat",
    userImpact: {
      child: "Affects heart health",
      diabetic: "Increases cholesterol risk",
      adult: "Heart risk",
      gym: "Avoid excessive use"
    }
  },

  "hydrogenated oil": {
    risk: "harmful",
    reason: "Contains trans fats",
    weight: 10,
    category: "fat",
    userImpact: {
      child: "Very harmful",
      diabetic: "High heart risk",
      adult: "Increases bad cholesterol",
      gym: "Strictly avoid"
    }
  },

  // 🧪 ADDITIVES
  "ins211": {
    risk: "harmful",
    reason: "Linked to hyperactivity",
    weight: 9,
    category: "preservative",
    userImpact: {
      child: "Hyperactivity risk",
      diabetic: "Moderate concern",
      adult: "Avoid long-term use",
      gym: "Unnecessary additive"
    }
  },

  "ins250": {
    risk: "harmful",
    reason: "May form carcinogens",
    weight: 10,
    category: "preservative",
    userImpact: {
      child: "Avoid",
      diabetic: "Unsafe",
      adult: "Cancer risk",
      gym: "Avoid processed food"
    }
  },

  // 🎨 COLORS
  "ins102": {
    risk: "harmful",
    reason: "Artificial color",
    weight: 8,
    category: "color",
    userImpact: {
      child: "Allergy risk",
      diabetic: "No major effect",
      adult: "Avoid artificial dyes",
      gym: "Unnecessary chemical"
    }
  },

  // 🍫 CHOCOLATE
  "cocoa solids": {
    risk: "safe",
    reason: "Rich in antioxidants",
    weight: 1,
    category: "natural",
    userImpact: {
      child: "Healthy in moderation",
      diabetic: "Good if unsweetened",
      adult: "Heart benefits",
      gym: "Good antioxidant"
    }
  },

  // 🥛 DAIRY
  "milk solids": {
    risk: "safe",
    reason: "Protein source",
    weight: 2,
    category: "natural",
    userImpact: {
      child: "Good for growth",
      diabetic: "Safe",
      adult: "Nutritious",
      gym: "Protein source"
    }
  },

  // 🧂 FLAVOUR
  "msg": {
    risk: "moderate",
    reason: "May cause headaches",
    weight: 6,
    category: "additive",
    userImpact: {
      child: "Avoid",
      diabetic: "Safe in small amount",
      adult: "May cause discomfort",
      gym: "Unnecessary"
    }
  },

  // 🥔 NATURAL
  "potato": {
    risk: "safe",
    reason: "Natural carbohydrate",
    weight: 2,
    category: "natural",
    userImpact: {
      child: "Energy source",
      diabetic: "Moderation needed",
      adult: "Safe",
      gym: "Good carb source"
    }
  },

  // 🧪 PRESERVATIVES
"sodium benzoate": {
  risk: "harmful",
  reason: "May form benzene",
  weight: 9,
  category: "preservative",
  userImpact: {
    child: "Hyperactivity risk",
    diabetic: "Safe in small amounts",
    adult: "Avoid long-term",
    gym: "Unnecessary additive"
  }
},
"potassium sorbate": {
  risk: "moderate",
  reason: "May irritate skin",
  weight: 6,
  category: "preservative",
  userImpact: {
    child: "Mild irritation",
    diabetic: "Safe",
    adult: "Moderate use",
    gym: "Avoid processed foods"
  }
},
"ins202": {
  risk: "moderate",
  reason: "Common preservative",
  weight: 6,
  category: "preservative",
  userImpact: {
    child: "Generally safe",
    diabetic: "Safe",
    adult: "Moderate intake",
    gym: "Neutral"
  }
},

// 🎨 COLORS
"ins110": {
  risk: "harmful",
  reason: "Artificial dye linked to hyperactivity",
  weight: 8,
  category: "color",
  userImpact: {
    child: "Avoid",
    diabetic: "No major impact",
    adult: "Avoid artificial colors",
    gym: "Unnecessary chemical"
  }
},
"ins122": {
  risk: "harmful",
  reason: "Synthetic color",
  weight: 8,
  category: "color",
  userImpact: {
    child: "Allergy risk",
    diabetic: "Neutral",
    adult: "Avoid",
    gym: "Avoid"
  }
},
"ins133": {
  risk: "moderate",
  reason: "Artificial blue dye",
  weight: 7,
  category: "color",
  userImpact: {
    child: "May cause allergies",
    diabetic: "Safe",
    adult: "Moderate use",
    gym: "Unnecessary"
  }
},

// 🍞 BAKERY
"yeast": {
  risk: "safe",
  reason: "Natural fermentation agent",
  weight: 2,
  category: "natural",
  userImpact: {
    child: "Safe",
    diabetic: "Safe",
    adult: "Safe",
    gym: "Good"
  }
},
"baking soda": {
  risk: "safe",
  reason: "Leavening agent",
  weight: 4,
  category: "additive",
  userImpact: {
    child: "Safe",
    diabetic: "Safe",
    adult: "Safe",
    gym: "Neutral"
  }
},
"baking powder": {
  risk: "moderate",
  reason: "Contains additives",
  weight: 4,
  category: "additive",
  userImpact: {
    child: "Safe in small amounts",
    diabetic: "Safe",
    adult: "Moderate use",
    gym: "Avoid excess"
  }
},

// 🍜 NOODLES / SNACKS
"flavouring agents": {
  risk: "moderate",
  reason: "Artificial compounds",
  weight: 6,
  category: "additive",
  userImpact: {
    child: "Avoid excess",
    diabetic: "Safe",
    adult: "Moderate use",
    gym: "Avoid"
  }
},
"spices": {
  risk: "safe",
  reason: "Natural ingredients",
  weight: 2,
  category: "natural",
  userImpact: {
    child: "Safe",
    diabetic: "Good",
    adult: "Healthy",
    gym: "Good"
  }
},
"chilli powder": {
  risk: "safe",
  reason: "Natural spice",
  weight: 2,
  category: "natural",
  userImpact: {
    child: "May irritate",
    diabetic: "Safe",
    adult: "Healthy",
    gym: "Good"
  }
},

// 🥤 BEVERAGES
"carbon dioxide": {
  risk: "safe",
  reason: "Carbonation agent",
  weight: 3,
  category: "neutral",
  userImpact: {
    child: "Safe",
    diabetic: "Safe",
    adult: "Neutral",
    gym: "Neutral"
  }
},
"phosphoric acid": {
  risk: "moderate",
  reason: "May weaken bones",
  weight: 8,
  category: "additive",
  userImpact: {
    child: "Avoid excess",
    diabetic: "Safe",
    adult: "Moderate use",
    gym: "Avoid"
  }
},
"caffeine": {
  risk: "moderate",
  reason: "Stimulant",
  weight: 5,
  category: "additive",
  userImpact: {
    child: "Avoid",
    diabetic: "Safe",
    adult: "Moderate use",
    gym: "Boosts performance"
  }
},

// 🍫 CHOCOLATE / SWEETS
"emulsifier": {
  risk: "moderate",
  reason: "Improves texture",
  weight: 6,
  category: "additive",
  userImpact: {
    child: "Safe",
    diabetic: "Safe",
    adult: "Neutral",
    gym: "Neutral"
  }
},
"soy lecithin": {
  risk: "moderate",
  reason: "May cause allergy",
  weight: 4,
  category: "additive",
  userImpact: {
    child: "Check allergy",
    diabetic: "Safe",
    adult: "Safe",
    gym: "Neutral"
  }
},
"vanillin": {
  risk: "moderate",
  reason: "Artificial flavor",
  weight: 6,
  category: "additive",
  userImpact: {
    child: "Safe",
    diabetic: "Safe",
    adult: "Moderate",
    gym: "Neutral"
  }
},

// 🧂 ADDITIVES
"stabilizer": {
  risk: "moderate",
  reason: "Improves shelf life",
  weight: 6,
  category: "additive",
  userImpact: {
    child: "Safe",
    diabetic: "Safe",
    adult: "Moderate",
    gym: "Avoid excess"
  }
},
"thickener": {
  risk: "safe",
  reason: "Food texture agent",
  weight: 6,
  category: "additive",
  userImpact: {
    child: "Safe",
    diabetic: "Safe",
    adult: "Safe",
    gym: "Neutral"
  }
},

// 🧃 SWEETENERS
"acesulfame potassium": {
  risk: "moderate",
  reason: "Artificial sweetener",
  weight: 7,
  category: "sugar",
  userImpact: {
    child: "Avoid",
    diabetic: "Used in sugar-free",
    adult: "Moderate",
    gym: "Safe"
  }
},
"saccharin": {
  risk: "moderate",
  reason: "Artificial sweetener",
  weight: 7,
  category: "sugar",
  userImpact: {
    child: "Avoid",
    diabetic: "Used in diet foods",
    adult: "Moderate",
    gym: "Safe"
  }
},

// 🍗 PROCESSED FOODS
"nitrates": {
  risk: "harmful",
  reason: "Linked to cancer risk",
  weight: 9,
  category: "preservative",
  userImpact: {
    child: "Avoid",
    diabetic: "Avoid",
    adult: "Limit intake",
    gym: "Avoid"
  }
},
"nitrites": {
  risk: "harmful",
  reason: "Forms harmful compounds",
  weight: 10,
  category: "preservative",
  userImpact: {
    child: "Avoid",
    diabetic: "Avoid",
    adult: "Avoid",
    gym: "Avoid"
  }
},

// 🧈 FATS
"trans fat": {
  risk: "harmful",
  reason: "Increases bad cholesterol",
  weight: 10,
  category: "fat",
  userImpact: {
    child: "Very harmful",
    diabetic: "Heart risk",
    adult: "Avoid",
    gym: "Strictly avoid"
  }
},
"saturated fat": {
  risk: "moderate",
  reason: "Raises cholesterol",
  weight: 7,
  category: "fat",
  userImpact: {
    child: "Moderate",
    diabetic: "Limit",
    adult: "Moderate",
    gym: "Limit"
  }
},

// 🧪 ADVANCED INS ADDITIVES
"ins300": {
  risk: "safe",
  reason: "Vitamin C antioxidant",
  weight: 2,
  category: "additive",
  userImpact: {
    child: "Safe",
    diabetic: "Safe",
    adult: "Healthy",
    gym: "Good antioxidant"
  }
},
"ins322": {
  risk: "safe",
  reason: "Natural emulsifier",
  weight: 3,
  category: "additive",
  userImpact: {
    child: "Safe",
    diabetic: "Safe",
    adult: "Safe",
    gym: "Neutral"
  }
},
"ins330": {
  risk: "safe",
  reason: "Citric acid from fruits",
  weight: 3,
  category: "additive",
  userImpact: {
    child: "Safe",
    diabetic: "Safe",
    adult: "Safe",
    gym: "Good"
  }
},
"ins331": {
  risk: "safe",
  reason: "Buffering agent",
  weight: 3,
  category: "additive",
  userImpact: {
    child: "Safe",
    diabetic: "Safe",
    adult: "Safe",
    gym: "Neutral"
  }
},
"ins407": {
  risk: "moderate",
  reason: "May cause gut inflammation",
  weight: 7,
  category: "additive",
  userImpact: {
    child: "Avoid excess",
    diabetic: "Moderate",
    adult: "Limit use",
    gym: "Avoid"
  }
},
"ins466": {
  risk: "moderate",
  reason: "Processed stabilizer",
  weight: 7,
  category: "additive",
  userImpact: {
    child: "Avoid excess",
    diabetic: "Safe",
    adult: "Moderate",
    gym: "Avoid"
  }
},

// 🍞 BREAD / BISCUITS
"invert sugar": {
  risk: "harmful",
  reason: "High sugar content",
  weight: 9,
  category: "sugar",
  userImpact: {
    child: "Hyperactivity",
    diabetic: "Avoid",
    adult: "Weight gain",
    gym: "Empty calories"
  }
},
"malt extract": {
  risk: "moderate",
  reason: "High sugar derivative",
  weight: 6,
  category: "sugar",
  userImpact: {
    child: "Energy spike",
    diabetic: "Avoid",
    adult: "Moderate",
    gym: "Limited use"
  }
},
"raising agents": {
  risk: "moderate",
  reason: "Chemical leavening",
  weight: 4,
  category: "additive",
  userImpact: {
    child: "Safe",
    diabetic: "Safe",
    adult: "Moderate",
    gym: "Neutral"
  }
},

// 🍟 SNACKS
"edible vegetable oil": {
  risk: "moderate",
  reason: "Highly processed",
  weight: 5,
  category: "fat",
  userImpact: {
    child: "Moderate",
    diabetic: "Limit",
    adult: "Moderate",
    gym: "Avoid excess"
  }
},
"seasoning": {
  risk: "moderate",
  reason: "Contains additives",
  weight: 5,
  category: "additive",
  userImpact: {
    child: "Avoid excess",
    diabetic: "Safe",
    adult: "Moderate",
    gym: "Avoid"
  }
},
"cheese powder": {
  risk: "moderate",
  reason: "Processed dairy",
  weight: 7,
  category: "additive",
  userImpact: {
    child: "Safe",
    diabetic: "Moderate",
    adult: "Moderate",
    gym: "Limited"
  }
},

// 🍬 SWEETS
"liquid glucose": {
  risk: "harmful",
  reason: "High sugar syrup",
  weight: 9,
  category: "sugar",
  userImpact: {
    child: "Hyperactivity",
    diabetic: "Avoid",
    adult: "Weight gain",
    gym: "Avoid"
  }
},
"corn syrup": {
  risk: "harmful",
  reason: "High fructose",
  weight: 10,
  category: "sugar",
  userImpact: {
    child: "Hyperactivity",
    diabetic: "Dangerous",
    adult: "Fat gain",
    gym: "Avoid"
  }
},

// 🥤 DRINKS
"added sugar": {
  risk: "harmful",
  reason: "Excess sugar intake",
  weight: 10,
  category: "sugar",
  userImpact: {
    child: "Hyperactivity",
    diabetic: "Avoid",
    adult: "Weight gain",
    gym: "Avoid"
  }
},
"fruit concentrate": {
  risk: "moderate",
  reason: "High natural sugar",
  weight: 7,
  category: "sugar",
  userImpact: {
    child: "Safe",
    diabetic: "Moderate",
    adult: "Moderate",
    gym: "Okay"
  }
},

// 🧂 COMMON LABEL WORDS (VERY IMPORTANT FOR MATCHING)
"acidity regulator": {
  risk: "moderate",
  weight: 6,
  category: "additive",
  reason: "Chemical regulator",
  userImpact: {
    child: "Safe",
    diabetic: "Safe",
    adult: "Moderate",
    gym: "Neutral"
  }
},
"antioxidant": {
  risk: "safe",
  reason: "Prevents oxidation",
  weight: 3,
  category: "additive",
  userImpact: {
    child: "Safe",
    diabetic: "Good",
    adult: "Healthy",
    gym: "Good"
  }
},
"preservative": {
  risk: "moderate",
  reason: "Extends shelf life",
  weight: 6,
  category: "preservative",
  userImpact: {
    child: "Avoid excess",
    diabetic: "Safe",
    adult: "Moderate",
    gym: "Avoid"
  }
},

// 🍛 INDIAN FOOD SPECIFIC
"besan": {
  risk: "safe",
  reason: "Protein rich flour",
  weight: 3,
  category: "natural",
  userImpact: {
    child: "Healthy",
    diabetic: "Good",
    adult: "Good",
    gym: "Good protein"
  }
},
"rava": {
  risk: "moderate",
  reason: "Refined wheat",
  weight: 4,
  category: "carb",
  userImpact: {
    child: "Energy source",
    diabetic: "Moderate",
    adult: "Moderate",
    gym: "Carb source"
  }
},
"poha": {
  risk: "safe",
  reason: "Light carb",
  weight: 3,
  category: "natural",
  userImpact: {
    child: "Healthy",
    diabetic: "Moderate",
    adult: "Safe",
    gym: "Good"
  }
},

// 🧴 RANDOM COMMON TERMS (VERY IMPORTANT)
"flavour": {
  risk: "moderate",
  reason: "Artificial flavor",
  weight: 5,
  category: "additive",
  userImpact: {
    child: "Avoid excess",
    diabetic: "Safe",
    adult: "Moderate",
    gym: "Avoid"
  }
},
"natural flavour": {
  risk: "safe",
  reason: "Derived from natural sources",
  weight: 3,
  category: "natural",
  userImpact: {
    child: "Safe",
    diabetic: "Safe",
    adult: "Safe",
    gym: "Good"
  }
},
"artificial colour": {
  risk: "harmful",
  reason: "Synthetic dye",
  weight: 8,
  category: "color",
  userImpact: {
    child: "Avoid",
    diabetic: "Safe",
    adult: "Avoid",
    gym: "Avoid"
  }
}
};