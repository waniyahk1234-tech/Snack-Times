export const businessInfo = {
  name: "Snack Times",
  tagline: "Good Food, Good Mood", // ✅ Updated tagline
  phone: "923123128488", 
  contactNumbers: ["0312-3128488"], // ✅ Only one number now
  address: "C-21 shop No. 2 Central government housing society Gulshan e Iqbal Block 10-A",
  deliveryCharges: {
    innerSociety: 30,
    outerSociety: 100
  },
  colors: {
    primary: "#FF9500",
    secondary: "#FFA500",
    accent: "#FFD700",
    dark: "#1A1A1A",
    light: "#FFFFFF"
  }
};

export const menuCategories = [
  {
    id: "regular-burger",
    name: "Regular Burger",
    items: [
      {
        id: 1,
        name: "Zinger Burger",
        price: 370,
        description: "Crispy chicken burger",
        popular: true,
        image: "/Zinger Burger.jpg"
      },
      {
        id: 2,
        name: "Chicken Burger",
        price: 300,
        description: "Classic chicken burger",
        image:"/Chicken Burger.jpg"
      },
      {
        id: 3,
        name: "Beef Burger",
        price: 300,
        description: "Juicy beef patty burger",
        image:"/Beef Burger.jpg"
      },
      {
        id: 4,
        name: "Grill Burger",
        price: 300,
        description: "Grilled chicken burger",
        image:"/Grill Burger.jpg"
      },
      {
        id: 5,
        name: "Chicken Chapli Burger",
        price: 300,
        description: "Traditional chapli style",
        image:"/Chicken Chapli Burger.jpg"
      },
      {
        id: 6,
        name: "Shami Kabab Burger",
        price: 300,
        description: "Shami kabab patty",
        image:"/Shami Kebab Burger.jpg"
      },
      {
        id: 7,
        name: "Shami Kabab Burger With Egg",
        price: 230,
        description: "With added egg",
        image:"/Shami Burger with egg.jpg"
      }
    ]
  },
  {
    id: "premium-burger",
    name: "Premium Burger",
    items: [
      {
        id: 8,
        name: "Zinger Burger",
        price: 470,
        description: "Premium crispy chicken",
        popular: true,
        image:"/Premium Zinger Burger.jpg"
      },
      {
        id: 9,
        name: "Chicken Burger",
        price: 400,
        description: "Premium chicken burger",
        image:"/Premium Chicken Burger.jpg"
      },
      {
        id: 10,
        name: "Beef Burger",
        price: 450,
        description: "Premium beef patty",
        image:"/Premium Beef Burger.jpg"
      },
      {
        id: 11,
        name: "Grill Burger",
        price: 450,
        description: "Premium grilled chicken",
        image:"/Premium Grill Burger.jpg"
      },
      {
        id: 12,
        name: "Chicken Chapli Burger",
        price: 400,
        description: "Premium chapli style",
        image:"/Premium Chicken Chapli Burger.jpg"
      }
    ]
  },
  {
    id: "special-burger",
    name: "Special Burger",
    items: [
      {
        id: 13,
        name: "Zinglester Burger",
        price: 550,
        description: "120g crispy chicken patty with Perry Perry sauce & iceberg lettuce",
        popular: true,
        special: true,
        image:"/Zinglester Burger.jpg"
      },
      {
        id: 14,
        name: "Platino / Bovino Burger",
        price: 500,
        description: "Chicken/Beef patty with Perry Perry sauce, jalapeños, iceberg & onion",
        special: true,
        image:"/Platino-Bavino Burger.jpg"
      }
    ]
  },
  {
    id: "rolls",
    name: "Rolls",
    items: [
      {
        id: 15,
        name: "Chicken Roll",
        price: 150,
        description: "Classic chicken roll",
        image:"/Chicken Roll.jpg"
      },
      {
        id: 16,
        name: "Seekh Roll",
        price: 150,
        description: "Seekh kabab roll",
        image: "/Seekh Roll.png"
      },
      {
        id: 17,
        name: "Zinger Roll",
        price: 200,
        description: "Crispy chicken roll",
        image:"/Zinger Roll.jpg"
      },
      {
        id: 18,
        name: "Shawarma",
        price: 150,
        description: "Chicken shawarma roll",
        image: "/Shawarma.jpg"
      }
    ]
  },
  {
    id: "broast",
    name: "Broast",
    items: [
      {
        id: 19,
        name: "Broast Leg",
        price: 420,
        description: "Quarter leg piece",
        image: "/Leg Broast.jpg"
      },
      {
        id: 20,
        name: "Broast Chest",
        price: 470,
        description: "Quarter chest piece",
        image: "/Chest Broast.jpg"
      },
      {
        id: 21,
        name: "Drum Stick With Fries",
        price: 200,
        description: "Drumstick with fries",
        image:"/Drumstick with fries.png"
      },
      {
        id: 22,
        name: "4 Wings With Fries",
        price: 200,
        description: "4 chicken wings with fries",
        image:"/4 wings with fries.jpg"
      }
    ]
  },
  {
    id: "fries",
    name: "Fries",
    items: [
      {
        id: 23,
        name: "Plain Fries",
        price: 150,
        description: "Classic french fries",
        image:"/Plain Fries.jpg"
      },
      {
        id: 24,
        name: "Pizza Fries Small",
        price: 400,
        description: "Small pizza fries",
        image: "/Small Pizza Fries.png"
      },
      {
        id: 25,
        name: "Pizza Fries Large",
        price: 500,
        description: "Large pizza fries",
        image: "/Large Pizza Fries.png"
      }
    ]
  },
  {
  id: "sandwich",
  name: "Sandwich",
  items: [
    {
      id: 26,
      name: "Club Sandwich",
      price: 350,
      description: "Classic club sandwich",
      image: "/Club Sandwich.png"
    },
    {
      id: 27,
      name: "Classic Sandwich",
      price: 350,
      description: "Traditional sandwich",
      image: "/Classic sandwich.jpg"
    },
    {
      id: 28,
      name: "Crispy Club Sandwich",
      price: 400,
      description: "Crispy chicken club",
      image: "/Crispy Club Sandwich.jpg"
    }
  ]
},
  {
    id: "pizza",
    name: "Pizza",
    items: [
      {
        id: 29,
        name: "Tikka Pizza",
        description: "Spicy chicken tikka chunks",
        variants: [
          { size: "Small", price: 250 },
          { size: "Medium", price: 450 },
          { size: "Large", price: 800 }
        ],
        image:"/Tikka Pizza.jpg"
      },
      {
        id: 30,
        name: "Fajita Pizza",
        description: "Classic fajita flavor",
        variants: [
          { size: "Small", price: 250 },
          { size: "Medium", price: 450 },
          { size: "Large", price: 800 }
        ],
        image:"/Fajita Pizza.jpg"
      },
      {
        id: 31,
        name: "Tandoori Pizza",
        description: "Smoky tandoori chicken",
        variants: [
          { size: "Small", price: 250 },
          { size: "Medium", price: 450 },
          { size: "Large", price: 800 }
        ],
        image:"/Tandoori Pizza.jpg"
      },
      {
        id: 32,
        name: "Afghani Pizza",
        description: "Creamy afghani chicken",
        variants: [
          { size: "Small", price: 250 },
          { size: "Medium", price: 450 },
          { size: "Large", price: 800 }
        ],
        image:"/Afghani Pizza.jpg"
      },
      {
        id: 33,
        name: "Malai Boti Pizza",
        description: "Rich and creamy malai boti",
        variants: [
          { size: "Small", price: 250 },
          { size: "Medium", price: 450 },
          { size: "Large", price: 800 }
        ],
        image: "/Malai Boti Pizza.png"
      },
      {
        id: 34,
        name: "Supreme Pizza",
        description: "Loaded with toppings",
        variants: [
          { size: "Small", price: 250 },
          { size: "Medium", price: 450 },
          { size: "Large", price: 800 }
        ],
        image:"/Supreme Pizza.jpg"
      },
      {
        id: 35,
        name: "Cheese Lover Pizza",
        description: "Extra cheesy delight",
        variants: [
          { size: "Small", price: 250 },
          { size: "Medium", price: 450 },
          { size: "Large", price: 800 }
        ],
        image:"/Cheese Lover Pizza.jpg"
      },
      {
        id: 37,
        name: "Pizza Pocket",
        price: 500,
        description: "Crispy pocket stuffed with pizza fillings",
        flavors: ["Tikka", "Fajita", "Tandoori", "Afghani", "Malai Boti", "Supreme", "Cheese Lover"],
        image: "Pizza Pocket.png"
      },
      {
        id: 36,
        name: "Crown Pizza",
        price: 650,
        description: "Crown special pizza",
        image: "Crown Pizza.png"
      }
    ]
  },
  {
    id: "beverages",
    name: "Beverages",
    items: [
      {
        id: 38,
        name: "Chai",
        price: 70,
        description: "Pakistani chai",
        image:"/Chai.jpg"
      },
      {
        id: 39,
        name: "Coffee",
        price: 120,
        description: "Hot coffee",
        image:"/Coffee.jpg"
      }
    ]
  },
  {
    id: "extras",
    name: "Extra's",
    items: [
      {
        id: 40,
        name: "Dip Sauce",
        price: 50,
        description: "Extra sauce",
        image:"/Sauce.jpg"
      },
      {
        id: 41,
        name: "Coleslaw",
        price: 50,
        description: "Fresh coleslaw",
        image:"/Coleslaw.jpg"
      },
      {
        id: 42,
        name: "Cheese Slice",
        price: 70,
        description: "Extra cheese",
        image:"/Cheese Slice.jpg"
      },
      {
        id: 43,
        name: "Extra Topping",
        price: 50,
        description: "Additional toppings",
        image:"/Extra Toppings.jpg"
      }
    ]
  }
];