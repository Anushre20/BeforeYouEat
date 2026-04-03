export const ingredientData: any = {

  // 🍬 SUGAR
  "sugar": {
    risk: "harmful",
    reason: "Linked to obesity and diabetes",
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
  userImpact: {
    child: "Avoid",
    diabetic: "Safe",
    adult: "Avoid",
    gym: "Avoid"
  }
}
};