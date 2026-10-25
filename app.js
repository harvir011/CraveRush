// CraveRush Food Delivery Application - Main JavaScript Module

// Shown in place of any restaurant/dish photo that fails to load
const FALLBACK_IMG = "data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20viewBox%3D%270%200%20400%20300%27%3E%3Crect%20width%3D%27400%27%20height%3D%27300%27%20fill%3D%27%23FFF7E4%27/%3E%3Ccircle%20cx%3D%27200%27%20cy%3D%27125%27%20r%3D%2752%27%20fill%3D%27none%27%20stroke%3D%27%23E8A93A%27%20stroke-width%3D%276%27/%3E%3Ccircle%20cx%3D%27200%27%20cy%3D%27125%27%20r%3D%2728%27%20fill%3D%27none%27%20stroke%3D%27%23E8A93A%27%20stroke-width%3D%273%27/%3E%3Cline%20x1%3D%27150%27%20y1%3D%27190%27%20x2%3D%27250%27%20y2%3D%27190%27%20stroke%3D%27%23C6432B%27%20stroke-width%3D%274%27%20stroke-linecap%3D%27round%27/%3E%3Ctext%20x%3D%27200%27%20y%3D%27230%27%20font-family%3D%27Arial%2C%20sans-serif%27%20font-size%3D%2715%27%20fill%3D%27%236b715e%27%20text-anchor%3D%27middle%27%3EImage%20unavailable%3C/text%3E%3C/svg%3E";

// Data Store - Famous Restaurant Partners
const RESTAURANTS = [
  {
    id: "mcd",
    name: "McDonald's",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80",
    rating: 4.4,
    reviews: "12k+",
    time: "20-25 mins",
    cuisines: "Burgers, Fries, Sides, Shakes",
    priceForTwo: "₹350 for two",
    isVerified: true,
    category: "Gourmet Burgers"
  },
  {
    id: "kfc",
    name: "KFC",
    image: "https://images.unsplash.com/photo-1513185158878-8d8c2a2a3da3?auto=format&fit=crop&w=600&q=80",
    rating: 4.3,
    reviews: "9.5k+",
    time: "25-30 mins",
    cuisines: "Fried Chicken, Burgers, Wings, Drinks",
    priceForTwo: "₹450 for two",
    isVerified: true,
    category: "Gourmet Burgers"
  },
  {
    id: "bk",
    name: "Burger King",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    rating: 4.2,
    reviews: "8k+",
    time: "20-30 mins",
    cuisines: "Burgers, Whoppers, Onion Rings, Shakes",
    priceForTwo: "₹400 for two",
    isVerified: true,
    category: "Gourmet Burgers"
  },
  {
    id: "dominos",
    name: "Domino's Pizza",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
    rating: 4.5,
    reviews: "18k+",
    time: "25-35 mins",
    cuisines: "Artisanal Pizza, Garlic Bread, Lava Cake",
    priceForTwo: "₹500 for two",
    isVerified: true,
    category: "Artisanal Pizza"
  },
  {
    id: "subway",
    name: "Subway",
    image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80",
    rating: 4.3,
    reviews: "6k+",
    time: "20-25 mins",
    cuisines: "Healthy Bowls, Subs, Cookies, Iced Tea",
    priceForTwo: "₹350 for two",
    isVerified: true,
    category: "Healthy Bowls"
  },
  {
    id: "haldirams",
    name: "Haldiram's",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=600&q=80",
    rating: 4.4,
    reviews: "15k+",
    time: "30-40 mins",
    cuisines: "North Indian, Chaat, Gulab Jamun, Lassi",
    priceForTwo: "₹400 for two",
    isVerified: true,
    category: "Indian & Curry"
  },
  {
    id: "starbucks",
    name: "Starbucks Coffee",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80",
    rating: 4.6,
    reviews: "7k+",
    time: "15-20 mins",
    cuisines: "Frappuccinos, Espresso, Cheesecake, Croissants",
    priceForTwo: "₹600 for two",
    isVerified: true,
    category: "Refreshers & Drinks"
  },
  {
    id: "bbk",
    name: "Biryani By Kilo",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
    rating: 4.7,
    reviews: "11k+",
    time: "35-45 mins",
    cuisines: "Hyderabadi Biryani, Kebabs, Matka Phirni",
    priceForTwo: "₹650 for two",
    isVerified: true,
    category: "Biryani"
  },
  {
    id: "tacobell",
    name: "Taco Bell",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80",
    rating: 4.3,
    reviews: "5k+",
    time: "20-25 mins",
    cuisines: "Tacos, Quesadillas, Nachos, Churros",
    priceForTwo: "₹400 for two",
    isVerified: true,
    category: "Sides & Starters"
  }
];

// Expanded Data Store - Food Menu Items for ALL Restaurants
const DISHES = [
  // ---------- McDONALD'S ----------
  {
    id: "mcd-1",
    restaurantId: "mcd",
    restaurantName: "McDonald's",
    name: "McAloo Tikki Burger",
    category: "Gourmet Burgers",
    price: 89,
    rating: "4.8★ (2.4k)",
    time: "15 min",
    isVeg: true,
    tag: "🔥 Bestseller",
    description: "Indian spiced potato patty with crispy lettuce, sliced tomatoes, and signature creamy sauce.",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "mcd-2",
    restaurantId: "mcd",
    restaurantName: "McDonald's",
    name: "McVeggie Burger",
    category: "Gourmet Burgers",
    price: 119,
    rating: "4.7★ (1.9k)",
    time: "15 min",
    isVeg: true,
    tag: "Veg Classic",
    description: "Crispy vegetable patty made with peas, corn & carrots, topped with shredded lettuce and mayo.",
    image: "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "mcd-3",
    restaurantId: "mcd",
    restaurantName: "McDonald's",
    name: "McChicken Burger",
    category: "Gourmet Burgers",
    price: 149,
    rating: "4.9★ (3.1k)",
    time: "15 min",
    isVeg: false,
    tag: "🔥 Crowd Favorite",
    description: "Crispy tender chicken patty served with creamy mayonnaise and fresh iceberg lettuce in a sesame bun.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "mcd-4",
    restaurantId: "mcd",
    restaurantName: "McDonald's",
    name: "Chicken Maharaja Mac",
    category: "Gourmet Burgers",
    price: 239,
    rating: "4.95★ (4.2k)",
    time: "18 min",
    isVeg: false,
    tag: "👑 Royal Feast",
    description: "Double grilled chicken patties stacked with processed cheddar cheese, jalapenos, and habanero sauce.",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "mcd-5",
    restaurantId: "mcd",
    restaurantName: "McDonald's",
    name: "Peri Peri French Fries (Large)",
    category: "Sides & Starters",
    price: 119,
    rating: "4.92★ (5.4k)",
    time: "10 min",
    isVeg: true,
    tag: "🍟 Spicy Side",
    description: "World famous crispy golden French fries tossed in spicy Peri Peri seasoning mix.",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "mcd-6",
    restaurantId: "mcd",
    restaurantName: "McDonald's",
    name: "Veg Pizza McPuff (2 Pcs)",
    category: "Sides & Starters",
    price: 99,
    rating: "4.85★ (3.1k)",
    time: "10 min",
    isVeg: true,
    tag: "🍕 Crispy Snack",
    description: "Crispy baked puff filled with tomato sauce, mozzarella cheese, peas, carrots, and sweet corn.",
    image: "https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "mcd-7",
    restaurantId: "mcd",
    restaurantName: "McDonald's",
    name: "McCafe Iced Cold Coffee",
    category: "Refreshers & Drinks",
    price: 169,
    rating: "4.88★ (2.2k)",
    time: "10 min",
    isVeg: true,
    tag: "🥤 Chilled Espresso",
    description: "Freshly brewed espresso shots blended with ice-cold milk and sweet chocolate syrup.",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "mcd-8",
    restaurantId: "mcd",
    restaurantName: "McDonald's",
    name: "McFlurry Oreo & Fudge Dessert",
    category: "Desserts",
    price: 129,
    rating: "4.93★ (3.8k)",
    time: "10 min",
    isVeg: true,
    tag: "🍦 Sweet Treat",
    description: "Creamy soft-serve vanilla ice cream blended with crunchy Oreo cookie crumbles and hot chocolate fudge.",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80"
  },

  // ---------- KFC ----------
  {
    id: "kfc-1",
    restaurantId: "kfc",
    restaurantName: "KFC",
    name: "Zinger Crunch Burger",
    category: "Gourmet Burgers",
    price: 189,
    rating: "4.86★ (2.1k)",
    time: "20 min",
    isVeg: false,
    tag: "🔥 Hot & Crispy",
    description: "Signature extra crispy chicken fillet with spicy mayo and fresh lettuce in a toasted sesame bun.",
    image: "https://images.unsplash.com/photo-1513185158878-8d8c2a2a3da3?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "kfc-2",
    restaurantId: "kfc",
    restaurantName: "KFC",
    name: "4 Pc Hot & Crispy Chicken Bucket",
    category: "Gourmet Burgers",
    price: 449,
    rating: "4.92★ (3.5k)",
    time: "25 min",
    isVeg: false,
    tag: "🍗 Bucket Special",
    description: "4 pieces of KFC's signature secret recipe spicy fried chicken.",
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "kfc-3",
    restaurantId: "kfc",
    restaurantName: "KFC",
    name: "Crispy Chicken Wings (4 Pcs)",
    category: "Sides & Starters",
    price: 189,
    rating: "4.88★ (2.4k)",
    time: "15 min",
    isVeg: false,
    tag: "🍗 Wing-It",
    description: "Juicy chicken wings coated in KFC's crispy batter and tossed in chili seasoning.",
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "kfc-4",
    restaurantId: "kfc",
    restaurantName: "KFC",
    name: "Virgin Mojito Krush",
    category: "Refreshers & Drinks",
    price: 119,
    rating: "4.8★ (1.1k)",
    time: "5 min",
    isVeg: true,
    tag: "🥤 Chilled Soda",
    description: "Refreshing lemon and mint flavored sparkling soda drink.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "kfc-5",
    restaurantId: "kfc",
    restaurantName: "KFC",
    name: "Chocolate Mud Pie",
    category: "Desserts",
    price: 109,
    rating: "4.89★ (1.4k)",
    time: "5 min",
    isVeg: true,
    tag: "🍰 Rich Fudge",
    description: "Decadent dark chocolate mud pie with cocoa crust and chocolate drizzle.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80"
  },

  // ---------- BURGER KING ----------
  {
    id: "bk-1",
    restaurantId: "bk",
    restaurantName: "Burger King",
    name: "Veg Whopper Burger",
    category: "Gourmet Burgers",
    price: 179,
    rating: "4.82★ (2.9k)",
    time: "20 min",
    isVeg: true,
    tag: "🍔 King Whopper",
    description: "Flame-grilled signature veg patty topped with tomatoes, onion rings, pickles and mayo.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "bk-2",
    restaurantId: "bk",
    restaurantName: "Burger King",
    name: "Chicken Whopper Burger",
    category: "Gourmet Burgers",
    price: 219,
    rating: "4.89★ (3.4k)",
    time: "20 min",
    isVeg: false,
    tag: "🔥 Flame Grilled",
    description: "Flame-grilled chicken patty with crunchy lettuce, onions, juicy tomatoes, and ketchup.",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "bk-3",
    restaurantId: "bk",
    restaurantName: "Burger King",
    name: "Crispy King Onion Rings (8 Pcs)",
    category: "Sides & Starters",
    price: 139,
    rating: "4.85★ (1.9k)",
    time: "10 min",
    isVeg: true,
    tag: "🧅 Crispy Crunch",
    description: "Thick cut onion rings coated in golden batter and fried to perfection.",
    image: "https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "bk-4",
    restaurantId: "bk",
    restaurantName: "Burger King",
    name: "Chocolate Thickshake",
    category: "Refreshers & Drinks",
    price: 149,
    rating: "4.91★ (2.2k)",
    time: "10 min",
    isVeg: true,
    tag: "🥤 Creamy Shake",
    description: "Rich and thick chocolate milkshake topped with whipped cream and cocoa dust.",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80"
  },

  // ---------- DOMINO'S PIZZA ----------
  {
    id: "dom-1",
    restaurantId: "dominos",
    restaurantName: "Domino's Pizza",
    name: "Wood-Fired Margherita Artisanal Pizza",
    category: "Artisanal Pizza",
    price: 349,
    rating: "4.95★ (2.4k)",
    time: "18 min",
    isVeg: true,
    tag: "🍕 Authentic Italy",
    description: "San Marzano tomato sauce, fresh mozzarella fior di latte, fresh basil leaves, and EVOO.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "dom-2",
    restaurantId: "dominos",
    restaurantName: "Domino's Pizza",
    name: "Peppy Paneer Special Pizza",
    category: "Artisanal Pizza",
    price: 389,
    rating: "4.91★ (1.8k)",
    time: "20 min",
    isVeg: true,
    tag: "🧀 Cheese Burst",
    description: "Chunky paneer cubes, crisp capsicum, and spicy red paprika with double cheese crust.",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "dom-3",
    restaurantId: "dominos",
    restaurantName: "Domino's Pizza",
    name: "Chicken Dominator Pizza",
    category: "Artisanal Pizza",
    price: 549,
    rating: "4.94★ (2.8k)",
    time: "22 min",
    isVeg: false,
    tag: "🍗 Non-Veg Feast",
    description: "Loaded with double pepper barbecue chicken, peri-peri chicken, and grilled chicken sausage.",
    image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "dom-4",
    restaurantId: "dominos",
    restaurantName: "Domino's Pizza",
    name: "Stuffed Garlic Breadsticks",
    category: "Sides & Starters",
    price: 159,
    rating: "4.89★ (4.1k)",
    time: "15 min",
    isVeg: true,
    tag: "🥖 Side Special",
    description: "Freshly baked garlic bread filled with melted mozzarella cheese and sweet corn.",
    image: "https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "dom-5",
    restaurantId: "dominos",
    restaurantName: "Domino's Pizza",
    name: "Decadent Choco Lava Cake",
    category: "Desserts",
    price: 149,
    rating: "4.96★ (3.1k)",
    time: "10 min",
    isVeg: true,
    tag: "🍰 Sweet Tooth",
    description: "Warm chocolate cake filled with molten dark chocolate fudge center.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80"
  },

  // ---------- SUBWAY ----------
  {
    id: "sub-1",
    restaurantId: "subway",
    restaurantName: "Subway",
    name: "Mediterranean Chicken Grain Bowl",
    category: "Healthy Bowls",
    price: 229,
    rating: "4.88★ (1.1k)",
    time: "12 min",
    isVeg: false,
    tag: "🥗 Healthy Choice",
    description: "Grilled herb chicken, quinoa, roasted chick peas, cherry tomatoes, and tzatziki dressing.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "sub-2",
    restaurantId: "subway",
    restaurantName: "Subway",
    name: "Paneer Tikka Sub (15cm / 6 inch)",
    category: "Healthy Bowls",
    price: 219,
    rating: "4.85★ (1.9k)",
    time: "12 min",
    isVeg: true,
    tag: "🥪 Fresh Baked",
    description: "Tender paneer cubes marinated in tikka spices served with custom fresh veggies on Parmesan oregano bread.",
    image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "sub-3",
    restaurantId: "subway",
    restaurantName: "Subway",
    name: "Lemon Iced Tea",
    category: "Refreshers & Drinks",
    price: 99,
    rating: "4.82★ (1.3k)",
    time: "5 min",
    isVeg: true,
    tag: "🍋 Chilled Tea",
    description: "Freshly brewed iced black tea infused with natural lemon juice and mint.",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "sub-4",
    restaurantId: "subway",
    restaurantName: "Subway",
    name: "Double Chocolate Chip Cookie",
    category: "Desserts",
    price: 69,
    rating: "4.94★ (3.6k)",
    time: "5 min",
    isVeg: true,
    tag: "🍪 Fresh Baked",
    description: "Freshly baked soft and chewy cookie packed with dark chocolate chips.",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=80"
  },

  // ---------- HALDIRAM'S ----------
  {
    id: "hal-1",
    restaurantId: "haldirams",
    restaurantName: "Haldiram's",
    name: "Special Chole Bhature",
    category: "Indian & Curry",
    price: 179,
    rating: "4.92★ (4.5k)",
    time: "20 min",
    isVeg: true,
    tag: "🔥 Street Favorite",
    description: "Spicy chickpea curry served with two fluffy puffed bhaturas, pickled onions, and mint chutney.",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "hal-2",
    restaurantId: "haldirams",
    restaurantName: "Haldiram's",
    name: "Royal Raj Kachori Chaat",
    category: "Sides & Starters",
    price: 149,
    rating: "4.95★ (3.2k)",
    time: "15 min",
    isVeg: true,
    tag: "👑 Chaat King",
    description: "Crispy giant kachori stuffed with sprouts, boiled potatoes, sweetened yogurt, and tangy tamarind chutney.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "hal-3",
    restaurantId: "haldirams",
    restaurantName: "Haldiram's",
    name: "Special Pav Bhaji",
    category: "Sides & Starters",
    price: 159,
    rating: "4.89★ (2.8k)",
    time: "15 min",
    isVeg: true,
    tag: "🧈 Butter Special",
    description: "Mashed vegetable curry cooked in aromatic spices, topped with generous butter, served with toasted pavs.",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "hal-4",
    restaurantId: "haldirams",
    restaurantName: "Haldiram's",
    name: "Kesar Pista Badam Lassi",
    category: "Refreshers & Drinks",
    price: 99,
    rating: "4.93★ (3.4k)",
    time: "5 min",
    isVeg: true,
    tag: "🥤 Royal Drink",
    description: "Thick churned sweet yogurt drink flavored with saffron, pistachios, and almonds.",
    image: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20600%20450%22%3E%20%3Crect%20width%3D%22600%22%20height%3D%22450%22%20fill%3D%22%23FFF3DC%22%2F%3E%20%3Ccircle%20cx%3D%2290%22%20cy%3D%2280%22%20r%3D%2280%22%20fill%3D%22%23FDE3AE%22%20opacity%3D%220.55%22%2F%3E%20%3Ccircle%20cx%3D%22520%22%20cy%3D%22360%22%20r%3D%2295%22%20fill%3D%22%23F6D9A0%22%20opacity%3D%220.5%22%2F%3E%20%3Cpath%20d%3D%22M220%2090%20L380%2090%20L360%20340%20Q300%20365%20240%20340%20Z%22%20fill%3D%22%23FFFDF7%22%20stroke%3D%22%23E4C98A%22%20stroke-width%3D%223%22%2F%3E%20%3Cpath%20d%3D%22M228%20130%20L372%20130%20L358%20335%20Q300%20356%20242%20335%20Z%22%20fill%3D%22%23F6C94D%22%2F%3E%20%3Cpath%20d%3D%22M228%20130%20L372%20130%20L369%20150%20L231%20150%20Z%22%20fill%3D%22%23FBE08A%22%2F%3E%20%3Cellipse%20cx%3D%22300%22%20cy%3D%22128%22%20rx%3D%2272%22%20ry%3D%2210%22%20fill%3D%22%23FCE9B0%22%2F%3E%20%3Cg%20stroke%3D%22%23E0421F%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%20opacity%3D%220.85%22%3E%20%3Cpath%20d%3D%22M255%20150%20Q260%20200%20250%20250%22%2F%3E%20%3Cpath%20d%3D%22M300%20150%20Q305%20210%20298%20270%22%2F%3E%20%3Cpath%20d%3D%22M345%20150%20Q340%20200%20350%20250%22%2F%3E%20%3C%2Fg%3E%20%3Ccircle%20cx%3D%22250%22%20cy%3D%22170%22%20r%3D%227%22%20fill%3D%22%237CA65B%22%2F%3E%20%3Ccircle%20cx%3D%22270%22%20cy%3D%22160%22%20r%3D%226%22%20fill%3D%22%238FBF6E%22%2F%3E%20%3Ccircle%20cx%3D%22300%22%20cy%3D%22165%22%20r%3D%227%22%20fill%3D%22%237CA65B%22%2F%3E%20%3Ccircle%20cx%3D%22330%22%20cy%3D%22158%22%20r%3D%226%22%20fill%3D%22%238FBF6E%22%2F%3E%20%3Ccircle%20cx%3D%22350%22%20cy%3D%22170%22%20r%3D%227%22%20fill%3D%22%237CA65B%22%2F%3E%20%3Ccircle%20cx%3D%22285%22%20cy%3D%22150%22%20r%3D%225.5%22%20fill%3D%22%23C88A3C%22%2F%3E%20%3Ccircle%20cx%3D%22315%22%20cy%3D%22150%22%20r%3D%225.5%22%20fill%3D%22%23C88A3C%22%2F%3E%20%3Ccircle%20cx%3D%22265%22%20cy%3D%22145%22%20r%3D%225%22%20fill%3D%22%23C88A3C%22%2F%3E%20%3Crect%20x%3D%22292%22%20y%3D%2240%22%20width%3D%2214%22%20height%3D%22110%22%20rx%3D%227%22%20fill%3D%22%23E0421F%22%20transform%3D%22rotate%288%20299%2095%29%22%2F%3E%20%3Ctext%20x%3D%22300%22%20y%3D%22410%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%2222%22%20font-weight%3D%22700%22%20fill%3D%22%238A5A1E%22%20text-anchor%3D%22middle%22%3EKesar%20Pista%20Badam%20Lassi%3C%2Ftext%3E%20%3C%2Fsvg%3E"
  },
  {
    id: "hal-5",
    restaurantId: "haldirams",
    restaurantName: "Haldiram's",
    name: "Hot Gulab Jamun (2 Pcs)",
    category: "Desserts",
    price: 89,
    rating: "4.96★ (4.1k)",
    time: "5 min",
    isVeg: true,
    tag: "🍯 Warm Sweet",
    description: "Soft fried milk dumpling soaked in warm cardamom-scented sugar syrup.",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600&q=80"
  },

  // ---------- STARBUCKS COFFEE ----------
  {
    id: "sb-1",
    restaurantId: "starbucks",
    restaurantName: "Starbucks Coffee",
    name: "Java Chip Frappuccino",
    category: "Refreshers & Drinks",
    price: 299,
    rating: "4.9★ (2.8k)",
    time: "10 min",
    isVeg: true,
    tag: "🥤 Chilled Coffee",
    description: "Coffee blended with mocha sauce, frappuccino chips, milk and ice, topped with whipped cream.",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "sb-2",
    restaurantId: "starbucks",
    restaurantName: "Starbucks Coffee",
    name: "Caffe Latte (Tall)",
    category: "Refreshers & Drinks",
    price: 249,
    rating: "4.86★ (1.9k)",
    time: "10 min",
    isVeg: true,
    tag: "☕ Hot Espresso",
    description: "Rich espresso combined with steamed milk and a light layer of foam.",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "sb-3",
    restaurantId: "starbucks",
    restaurantName: "Starbucks Coffee",
    name: "New York Style Cheesecake",
    category: "Desserts",
    price: 299,
    rating: "4.95★ (2.1k)",
    time: "10 min",
    isVeg: true,
    tag: "🍰 Bakery Icon",
    description: "Dense, smooth and creamy cheesecake on a buttery Graham cracker crust.",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "sb-4",
    restaurantId: "starbucks",
    restaurantName: "Starbucks Coffee",
    name: "Butter Croissant",
    category: "Sides & Starters",
    price: 179,
    rating: "4.88★ (1.5k)",
    time: "10 min",
    isVeg: true,
    tag: "🥐 French Pastry",
    description: "Flaky, buttery French croissant baked fresh daily.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "sush-1",
    restaurantId: "starbucks",
    restaurantName: "Starbucks Coffee",
    name: "Chef's Omakase Premium Sushi Platter",
    category: "Fresh Sushi",
    price: 599,
    rating: "4.98★ (950)",
    time: "20 min",
    isVeg: false,
    tag: "🍣 Fresh Catch",
    description: "12-piece chef selection featuring salmon nigiri, spicy tuna rolls, and avocado dragon roll.",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80"
  },

  // ---------- BIRYANI BY KILO ----------
  {
    id: "bbk-1",
    restaurantId: "bbk",
    restaurantName: "Biryani By Kilo",
    name: "Hyderabadi Dum Chicken Biryani",
    category: "Biryani",
    price: 449,
    rating: "4.96★ (3.8k)",
    time: "35 min",
    isVeg: false,
    tag: "👑 Authentic Handi",
    description: "Slow-cooked long grain basmati rice with marinated chicken pieces and aromatic spices in a clay handi.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "bbk-2",
    restaurantId: "bbk",
    restaurantName: "Biryani By Kilo",
    name: "Lucknowi Veg Dum Biryani",
    category: "Biryani",
    price: 379,
    rating: "4.89★ (1.9k)",
    time: "30 min",
    isVeg: true,
    tag: "🌱 Veg Handi",
    description: "Fresh garden vegetables cooked with saffron-infused basmati rice and mild royal spices.",
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "bbk-3",
    restaurantId: "bbk",
    restaurantName: "Biryani By Kilo",
    name: "Mutton Galouti Kebab (4 Pcs)",
    category: "Sides & Starters",
    price: 399,
    rating: "4.95★ (2.1k)",
    time: "25 min",
    isVeg: false,
    tag: "🍢 Melt in Mouth",
    description: "Finely minced mutton kebabs infused with 16 spices, cooked on a tawa.",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "bbk-4",
    restaurantId: "bbk",
    restaurantName: "Biryani By Kilo",
    name: "Matka Kesar Phirni Dessert",
    category: "Desserts",
    price: 129,
    rating: "4.92★ (1.8k)",
    time: "10 min",
    isVeg: true,
    tag: "🏺 Traditional Matka",
    description: "Creamy ground rice pudding flavored with saffron, cardamom and topped with pistachios.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
  },

  // ---------- TACO BELL ----------
  {
    id: "tb-1",
    restaurantId: "tacobell",
    restaurantName: "Taco Bell",
    name: "Crunchy Taco Supreme",
    category: "Sides & Starters",
    price: 149,
    rating: "4.75★ (1.1k)",
    time: "15 min",
    isVeg: false,
    tag: "🌮 Mexican Crunch",
    description: "Crispy corn taco shell stuffed with seasoned chicken, sour cream, cheese, and tomatoes.",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "tb-2",
    restaurantId: "tacobell",
    restaurantName: "Taco Bell",
    name: "Loaded Cheese Quesadilla",
    category: "Sides & Starters",
    price: 179,
    rating: "4.81★ (1.4k)",
    time: "15 min",
    isVeg: true,
    tag: "🧀 Cheesy Treat",
    description: "Warm grilled flour tortilla filled with double 3-cheese blend and creamy jalapeno sauce.",
    image: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "tb-3",
    restaurantId: "tacobell",
    restaurantName: "Taco Bell",
    name: "Cinnamon Chocolate Churros",
    category: "Desserts",
    price: 119,
    rating: "4.87★ (1.6k)",
    time: "10 min",
    isVeg: true,
    tag: "🍫 Sweet Cinnamon",
    description: "Crispy fried churro sticks dusted with cinnamon sugar, served with warm chocolate dip.",
    image: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20600%20450%22%3E%20%3Crect%20width%3D%22600%22%20height%3D%22450%22%20fill%3D%22%23FFF3DC%22%2F%3E%20%3Ccircle%20cx%3D%22500%22%20cy%3D%2270%22%20r%3D%2290%22%20fill%3D%22%23FFE7B8%22%20opacity%3D%220.6%22%2F%3E%20%3Ccircle%20cx%3D%2260%22%20cy%3D%22380%22%20r%3D%2270%22%20fill%3D%22%23F6D9A0%22%20opacity%3D%220.5%22%2F%3E%20%3Cg%20transform%3D%22translate%28150%2C120%29%20rotate%28-8%29%22%3E%20%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%2246%22%20height%3D%22190%22%20rx%3D%2223%22%20fill%3D%22%23C9822E%22%2F%3E%20%3Cpath%20d%3D%22M4%2010%20Q23%200%2042%2010%20M4%2040%20Q23%2030%2042%2040%20M4%2070%20Q23%2060%2042%2070%20M4%20100%20Q23%2090%2042%20100%20M4%20130%20Q23%20120%2042%20130%20M4%20160%20Q23%20150%2042%20160%22%20stroke%3D%22%23A8631C%22%20stroke-width%3D%224%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%2F%3E%20%3Cellipse%20cx%3D%2223%22%20cy%3D%228%22%20rx%3D%2221%22%20ry%3D%228%22%20fill%3D%22%23E29B49%22%2F%3E%20%3C%2Fg%3E%20%3Cg%20transform%3D%22translate%28230%2C95%29%20rotate%283%29%22%3E%20%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%2246%22%20height%3D%22215%22%20rx%3D%2223%22%20fill%3D%22%23D08E3B%22%2F%3E%20%3Cpath%20d%3D%22M4%2012%20Q23%202%2042%2012%20M4%2045%20Q23%2035%2042%2045%20M4%2078%20Q23%2068%2042%2078%20M4%20111%20Q23%20101%2042%20111%20M4%20144%20Q23%20134%2042%20144%20M4%20177%20Q23%20167%2042%20177%22%20stroke%3D%22%23A8631C%22%20stroke-width%3D%224%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%2F%3E%20%3Cellipse%20cx%3D%2223%22%20cy%3D%2210%22%20rx%3D%2221%22%20ry%3D%228%22%20fill%3D%22%23E8A55A%22%2F%3E%20%3C%2Fg%3E%20%3Cg%20transform%3D%22translate%28315%2C130%29%20rotate%28-4%29%22%3E%20%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%2246%22%20height%3D%22180%22%20rx%3D%2223%22%20fill%3D%22%23C9822E%22%2F%3E%20%3Cpath%20d%3D%22M4%2010%20Q23%200%2042%2010%20M4%2040%20Q23%2030%2042%2040%20M4%2070%20Q23%2060%2042%2070%20M4%20100%20Q23%2090%2042%20100%20M4%20130%20Q23%20120%2042%20130%20M4%20160%20Q23%20150%2042%20160%22%20stroke%3D%22%23A8631C%22%20stroke-width%3D%224%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%2F%3E%20%3Cellipse%20cx%3D%2223%22%20cy%3D%228%22%20rx%3D%2221%22%20ry%3D%228%22%20fill%3D%22%23E29B49%22%2F%3E%20%3C%2Fg%3E%20%3Ccircle%20cx%3D%22175%22%20cy%3D%22128%22%20r%3D%222.5%22%20fill%3D%22%238A5A1E%22%2F%3E%20%3Ccircle%20cx%3D%22195%22%20cy%3D%22150%22%20r%3D%222.5%22%20fill%3D%22%238A5A1E%22%2F%3E%20%3Ccircle%20cx%3D%22165%22%20cy%3D%22175%22%20r%3D%222.5%22%20fill%3D%22%238A5A1E%22%2F%3E%20%3Ccircle%20cx%3D%22250%22%20cy%3D%22105%22%20r%3D%222.5%22%20fill%3D%22%238A5A1E%22%2F%3E%20%3Ccircle%20cx%3D%22265%22%20cy%3D%22140%22%20r%3D%222.5%22%20fill%3D%22%238A5A1E%22%2F%3E%20%3Ccircle%20cx%3D%22330%22%20cy%3D%22140%22%20r%3D%222.5%22%20fill%3D%22%238A5A1E%22%2F%3E%20%3Ccircle%20cx%3D%22345%22%20cy%3D%22170%22%20r%3D%222.5%22%20fill%3D%22%238A5A1E%22%2F%3E%20%3Cpath%20d%3D%22M140%20310%20Q300%20350%20460%20310%20L455%20340%20Q300%20375%20145%20340%20Z%22%20fill%3D%22%236B3A22%22%2F%3E%20%3Cellipse%20cx%3D%22300%22%20cy%3D%22310%22%20rx%3D%22160%22%20ry%3D%2216%22%20fill%3D%22%238A4A2C%22%2F%3E%20%3Cellipse%20cx%3D%22300%22%20cy%3D%22308%22%20rx%3D%22150%22%20ry%3D%2211%22%20fill%3D%22%235C3018%22%2F%3E%20%3Cpath%20d%3D%22M210%20300%20Q220%20285%20235%20295%20Q225%20305%20210%20300Z%22%20fill%3D%22%23A9633A%22%20opacity%3D%220.7%22%2F%3E%20%3Ctext%20x%3D%22300%22%20y%3D%22410%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%2222%22%20font-weight%3D%22700%22%20fill%3D%22%238A5A1E%22%20text-anchor%3D%22middle%22%3ECinnamon%20Chocolate%20Churros%3C%2Ftext%3E%20%3C%2Fsvg%3E"
  }
];

// Seed testimonials shown on the Reviews page (blended together with
// anything real visitors submit via the on-page review form).
const REVIEWS = [
  { id: "seed-1", restaurantId: "dominos", name: "Saanvi Madaan", city: "Chandigarh", rating: 5, text: "CraveRush delivered my wood-fired Margherita pizza & Peri Peri fries in 14 minutes. Hot, crisp and cheese bubbling!", date: "2026-07-02" },
  { id: "seed-2", restaurantId: "mcd", name: "Rahul Sharma", city: "Mumbai", rating: 5, text: "The app interface is so sleek and fast. Added a Maharaja Mac, cold coffee & choco lava cake with CRAVE50 — super fast delivery!", date: "2026-06-18" },
  { id: "seed-3", restaurantId: "bbk", name: "Pankaj Kumar", city: "Delhi NCR", rating: 5, text: "Late night cravings saved! Ordered Dum Biryani & Kulfi at 1 AM and got a fresh clay handi in 18 minutes.", date: "2026-06-05" },
  { id: "seed-4", restaurantId: "kfc", name: "Ishita Bansal", city: "Bengaluru", rating: 4, text: "Bucket was packed well and still piping hot on arrival. Wish the fries were a little crispier, but overall a solid order.", date: "2026-05-27" },
  { id: "seed-5", restaurantId: "starbucks", name: "Arjun Mehta", city: "Gurugram", rating: 5, text: "Ordered a Frappuccino and a slice of cheesecake for a work-from-home afternoon — arrived cold and fresh exactly as expected.", date: "2026-05-14" },
  { id: "seed-6", restaurantId: "subway", name: "Neha Kapoor", city: "Pune", rating: 4, text: "Customised my sub exactly how I wanted through the app. Delivery partner was polite and it reached in under 25 minutes.", date: "2026-04-30" },
  { id: "seed-7", restaurantId: "haldirams", name: "Vikram Rao", city: "Jaipur", rating: 5, text: "Ordered sweets for a family function and everything was fresh, well packed, and reached earlier than the estimate.", date: "2026-04-11" },
  { id: "seed-8", restaurantId: "tacobell", name: "Meher Sethi", city: "Chandigarh", rating: 3, text: "Tacos were tasty but arrived a bit soggy this time. Support was quick to offer a partial refund though.", date: "2026-03-22" },
  { id: "seed-9", restaurantId: "bk", name: "Devansh Oberoi", city: "Hyderabad", rating: 4, text: "Whopper combo was fresh and the tracking map made it easy to know exactly when to head downstairs.", date: "2026-03-09" }
];

// Safe JSON storage reader: a malformed or manually edited localStorage value
// should not stop the entire website from starting.
function readStoredJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw === null ? fallback : JSON.parse(raw);
  } catch (error) {
    console.warn(`CraveRush could not read stored data for "${key}". Using the default value.`, error);
    return fallback;
  }
}

// App State
let state = {
  cart: readStoredJSON("craverush_cart", []),
  appliedCoupon: localStorage.getItem("craverush_coupon") || null,
  discountAmount: 0,
  activeRestaurantFilter: "all",
  activeDishCategory: "All items",
  activeVegFilter: "all", // "all", "veg", "nonveg"
  searchQuery: "",
  user: readStoredJSON("craverush_user", null),
  location: localStorage.getItem("craverush_location") || "Sector 17, Chandigarh",
  activeOrder: readStoredJSON("craverush_active_order", null),
  orderHistory: readStoredJSON("craverush_order_history", []),
  userReviews: readStoredJSON("craverush_user_reviews", []),
  reviewFilter: "all",
  trackingTimer: null,
  addresses: readStoredJSON("craverush_addresses", null),
  wallet: readStoredJSON("craverush_wallet", null),
  activeAccountTab: "profile",
  editingAddressId: null
};

// One-time migration: fold the old single "saved address" (from checkout)
// into the new multi-address list used by the Profile > Addresses tab.
if (!state.addresses) {
  let legacy = null;
  try { legacy = JSON.parse(localStorage.getItem("craverush_saved_address")); } catch (e) { legacy = null; }
  state.addresses = legacy
    ? [{ id: "addr-" + Date.now(), label: "Home", isDefault: true, ...legacy }]
    : [];
  localStorage.setItem("craverush_addresses", JSON.stringify(state.addresses));
}

// Seed a starter CraveCash wallet the first time a browser visits.
if (!state.wallet) {
  state.wallet = {
    balance: 250,
    transactions: [
      { id: "tx-" + Date.now(), type: "credit", amount: 250, note: "Welcome bonus", date: new Date().toLocaleDateString([], { day: "2-digit", month: "short", year: "numeric" }) }
    ]
  };
  localStorage.setItem("craverush_wallet", JSON.stringify(state.wallet));
}

// Promise-based catalog service for the current front-end-only version.
// The short delay makes the loading state observable during a demo; when a
// backend is introduced, this function can be replaced with fetch() calls.
function loadCatalogAsync() {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      const catalogIsValid = Array.isArray(RESTAURANTS) && RESTAURANTS.length > 0 &&
        Array.isArray(DISHES) && DISHES.length > 0;
      if (!catalogIsValid) {
        reject(new Error("The restaurant and dish catalog could not be loaded."));
        return;
      }
      resolve({ restaurants: RESTAURANTS, dishes: DISHES });
    }, 180);
  });
}

// Simulates asynchronous order confirmation for this demo (no real payment is
// taken). It validates the order before the app commits it to localStorage.
function processDemoOrder(order) {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      const validOrder = order && Array.isArray(order.items) && order.items.length > 0 &&
        Number.isFinite(order.total) && order.total > 0;
      if (!validOrder) {
        reject(new Error("We could not confirm this order. Please review your bag and try again."));
        return;
      }
      resolve(order);
    }, 700);
  });
}

let orderProcessing = false;

// DOM Elements
const loader = document.getElementById("loader");
const restaurantContainer = document.getElementById("restaurant-container");
const dishContainer = document.getElementById("dish-container");
const cartBadge = document.getElementById("cart-badge");
const cartDrawer = document.getElementById("cart-drawer");
const cartOverlay = document.getElementById("cart-drawer-overlay");
const cartItemsContainer = document.getElementById("cart-items-container");
const cartEmptyState = document.getElementById("cart-empty-state");
const cartSubtotalEl = document.getElementById("cart-subtotal");
const cartDiscountRow = document.getElementById("cart-discount-row");
const cartDiscountEl = document.getElementById("cart-discount");
const cartTotalEl = document.getElementById("cart-total");
const couponInput = document.getElementById("coupon-code");
const authModal = document.getElementById("auth-modal");
const trackingModal = document.getElementById("tracking-modal");
const restaurantMenuModal = document.getElementById("restaurant-menu-modal");
const toastContainer = document.getElementById("toast-container");
const userProfileContainer = document.getElementById("user-profile-container");

// Initialization
document.addEventListener("DOMContentLoaded", () => {
  // Only show the full preloader animation the very first time someone
  // opens the site in this browser tab/session (3s). On every other page
  // visit within the same session, skip straight to the content.
  if (loader) {
    const hasVisited = sessionStorage.getItem("craverush_visited");
    const showDelay = hasVisited ? 0 : 3000;

    setTimeout(() => {
      loader.classList.add("loader-hidden");
      document.documentElement.classList.remove("is-loading");
    }, showDelay);

    sessionStorage.setItem("craverush_visited", "true");
  }

  // Dark mode: keep the toggle in sync with the saved preference and
  // persist any change so it carries over to every other page.
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    // The inline script in <head> already set .checked before paint to
    // avoid a flash of the wrong theme; this just keeps things in sync
    // in case that script didn't run for any reason.
    themeToggle.checked = localStorage.getItem("craverush_theme") === "dark";
    themeToggle.addEventListener("change", () => {
      localStorage.setItem("craverush_theme", themeToggle.checked ? "dark" : "light");
    });
  }

  // Load the catalog asynchronously before rendering UI. Promise.catch gives
  // the visitor a clear fallback instead of leaving a blank page on failure.
  loadCatalogAsync()
    .then(() => {
      // Initialize UI Renderers
      renderRestaurants();
      renderDishes();
      renderHomeHighlights();
      updateCartUI();
      updateUserUI();

      // Setup Event Listeners
      setupEventListeners();

      // If we arrived here via a search suggestion (?dish=, ?rest=, or ?q=), honor it
      handleSearchDeepLink();

      // A delivered order is no longer active.
      if (state.activeOrder && state.activeOrder.statusStep >= 4) {
        state.activeOrder = null;
        localStorage.removeItem("craverush_active_order");
      }

      if (state.activeOrder) startOrderTrackingTimer();

      // Open Live Track after returning from a successful checkout.
      if (sessionStorage.getItem("craverush_just_ordered") === "1") {
        sessionStorage.removeItem("craverush_just_ordered");
        if (state.activeOrder) openOrderTracking();
      }

      if (document.getElementById("orders-page-root")) renderOrdersPage();
      if (document.getElementById("reviews-page-root")) renderReviewsPage();
    })
    .catch(error => {
      console.error("CraveRush initialization failed:", error);
      showToast("We couldn't load the menu right now. Please refresh and try again.");
    });
});

// ---------- RENDERERS ---------- //

// Builds one restaurant card's markup. Shared by the full catalog (menu.html)
// and the curated homepage preview (index.html) so both stay visually identical.
function buildRestaurantCard(r) {
  return `
    <div class="restaurant-card">
      <div class="restaurant-media">
        <img src="${r.image}" alt="${r.name}" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK_IMG}';">
        ${r.isVerified ? `<span class="verified-tag"><i class="fa-solid fa-circle-check"></i> Verified</span>` : ''}
      </div>
      <div class="restaurant-body">
        <div class="restaurant-title">
          <h3>${r.name}</h3>
          <span class="rating-badge"><i class="fa-solid fa-star"></i> ${r.rating}</span>
        </div>
        <div class="restaurant-meta">
          <span><i class="fa-solid fa-clock"></i> ${r.time}</span>
          <span>•</span>
          <span>${r.priceForTwo}</span>
        </div>
        <p class="restaurant-cuisines">${r.cuisines}</p>
        <button class="browse-menu-btn" onclick="openRestaurantMenu('${r.id}')">
          <i class="fa-solid fa-utensils"></i> Browse Menu
        </button>
      </div>
    </div>
  `;
}

// Builds one dish's markup, including its live cart quantity stepper. Shared
// by the full catalog (menu.html) and the curated homepage preview (index.html).
function buildDishCard(d) {
  const cartItem = state.cart.find(item => item.id === d.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return `
    <div class="dish-card" data-dish-id="${d.id}">
      <div class="dish-media">
        <img src="${d.image}" alt="${d.name}" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK_IMG}';">
        <span class="dish-tag">${d.tag}</span>
      </div>
      <div class="dish-body">
        <div class="dish-header">
          <span class="diet-icon ${d.isVeg ? 'veg' : 'non-veg'}" title="${d.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}"></span>
          <span class="dish-cat">${d.restaurantName} • ${d.category}</span>
        </div>
        <h3>${d.name}</h3>
        <p class="dish-desc">${d.description}</p>
        <div class="dish-meta">
          <span class="rating"><i class="fa-solid fa-star"></i> ${d.rating}</span>
          <span><i class="fa-solid fa-clock"></i> ${d.time}</span>
        </div>
        <div class="dish-footer">
          <span class="dish-price">₹${d.price}</span>
          ${quantity === 0 ? `
            <button class="add-cart-btn" onclick="addToCart('${d.id}')">
              <i class="fa-solid fa-plus"></i> ADD
            </button>
          ` : `
            <div class="cart-stepper">
              <button onclick="updateQuantity('${d.id}', -1)">-</button>
              <span>${quantity}</span>
              <button onclick="updateQuantity('${d.id}', 1)">+</button>
            </div>
          `}
        </div>
      </div>
    </div>
  `;
}

// Full, filterable restaurant catalog — only present on menu.html (#restaurant-container).
function renderRestaurants() {
  if (!restaurantContainer) return;

  const countEl = document.getElementById("restaurant-count");
  if (countEl) countEl.textContent = RESTAURANTS.length;

  const query = state.searchQuery.toLowerCase();
  const filtered = RESTAURANTS.filter(r => {
    const matchesCategory = state.activeRestaurantFilter === "all" || r.category === state.activeRestaurantFilter;
    const matchesSearch = r.name.toLowerCase().includes(query) || r.cuisines.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });
  sortItems(filtered, state.restaurantSort || "default");

  if (filtered.length === 0) {
    restaurantContainer.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--muted-3);">
        <i class="fa-solid fa-store-slash" style="font-size: 36px; margin-bottom: 12px; display: block;"></i>
        <p>No verified restaurant partners found matching "${state.searchQuery}".</p>
      </div>
    `;
    return;
  }

  restaurantContainer.innerHTML = filtered.map(buildRestaurantCard).join("");
}

// Full, filterable dish catalog — only present on menu.html (#dish-container).
function renderDishes() {
  if (!dishContainer) return;

  const query = state.searchQuery.toLowerCase();
  const filtered = DISHES.filter(d => {
    const matchesCat = state.activeDishCategory === "All items" || d.category === state.activeDishCategory;
    const matchesVeg = state.activeVegFilter === "all" || 
                      (state.activeVegFilter === "veg" && d.isVeg) || 
                      (state.activeVegFilter === "nonveg" && !d.isVeg);
    const matchesSearch = d.name.toLowerCase().includes(query) || d.restaurantName.toLowerCase().includes(query) || d.category.toLowerCase().includes(query);
    return matchesCat && matchesVeg && matchesSearch;
  });
  sortItems(filtered, state.dishSort || "default");

  if (filtered.length === 0) {
    dishContainer.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 50px; color: var(--muted-3);">
        <i class="fa-solid fa-bowl-rice" style="font-size: 42px; margin-bottom: 14px; display: block;"></i>
        <p>No dishes found matching your selection.</p>
      </div>
    `;
    return;
  }

  dishContainer.innerHTML = filtered.map(buildDishCard).join("");
}

// Curated homepage preview — a handful of top-rated restaurants and popular
// dishes only, with "View All" links pointing to the full catalog on menu.html.
// Only runs if index.html's preview containers are present in the DOM.
const HOME_RESTAURANT_COUNT = 6;
const HOME_DISH_COUNT = 8;

function renderHomeHighlights() {
  const homeRestContainer = document.getElementById("home-restaurant-container");
  if (homeRestContainer) {
    const featured = [...RESTAURANTS]
      .sort((a, b) => b.rating - a.rating)
      .slice(0, HOME_RESTAURANT_COUNT);
    homeRestContainer.innerHTML = featured.map(buildRestaurantCard).join("");
  }

  const homeDishContainer = document.getElementById("home-dish-container");
  if (homeDishContainer) {
    const popular = [...DISHES]
      .sort((a, b) => b.rating - a.rating)
      .slice(0, HOME_DISH_COUNT);
    homeDishContainer.innerHTML = popular.map(buildDishCard).join("");
  }
}

function updateCartUI() {
  // Update badge count
  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  if (cartBadge) {
    cartBadge.textContent = totalItems;
    cartBadge.style.display = totalItems > 0 ? "flex" : "none";
  }

  // Render items in cart drawer
  if (!cartItemsContainer) return;

  if (state.cart.length === 0) {
    cartItemsContainer.innerHTML = "";
    if (cartEmptyState) cartEmptyState.style.display = "block";
  } else {
    if (cartEmptyState) cartEmptyState.style.display = "none";
    cartItemsContainer.innerHTML = state.cart.map(item => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img" onerror="this.onerror=null;this.src='${FALLBACK_IMG}';">
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <span class="cart-item-price">₹${item.price * item.quantity}</span>
        </div>
        <div class="cart-stepper">
          <button onclick="updateQuantity('${item.id}', -1)">-</button>
          <span>${item.quantity}</span>
          <button onclick="updateQuantity('${item.id}', 1)">+</button>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart('${item.id}')" aria-label="Remove ${item.name}" title="Remove"><i class="fa-regular fa-trash-can"></i></button>
      </div>
    `).join("");
  }

  // Calculate Bill
  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  let discount = 0;

  if (state.appliedCoupon === "CRAVE50") {
    discount = Math.min(Math.round(subtotal * 0.5), 150);
  } else if (state.appliedCoupon === "WELCOME100") {
    discount = Math.min(100, subtotal);
  }
  state.discountAmount = discount;

  const deliveryFee = subtotal > 0 ? ((subtotal >= 499 || isCravePassActive()) ? 0 : 49) : 0;
  const taxes = subtotal > 0 ? Math.round(subtotal * 0.05) : 0;
  const grandTotal = Math.max(0, subtotal - discount + deliveryFee + taxes);
  const cartDeliveryEl = document.getElementById("cart-delivery");
  if (cartDeliveryEl) cartDeliveryEl.textContent = deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`;
  const cartTaxesEl = document.getElementById("cart-taxes");
  if (cartTaxesEl) cartTaxesEl.textContent = `₹${taxes}`;
  const clearBtn = document.getElementById("cart-clear-btn");
  if (clearBtn) clearBtn.style.display = state.cart.length ? "inline-flex" : "none";
  const couponTag = document.getElementById("coupon-applied-tag");
  if (couponTag) {
    couponTag.style.display = state.appliedCoupon ? "flex" : "none";
    couponTag.innerHTML = state.appliedCoupon ? `<span><i class="fa-solid fa-tag"></i> ${state.appliedCoupon} applied</span><button type="button" onclick="removeCoupon()">Remove</button>` : "";
  }

  if (cartSubtotalEl) cartSubtotalEl.textContent = `₹${subtotal}`;
  if (cartDiscountRow && cartDiscountEl) {
    if (discount > 0) {
      cartDiscountRow.style.display = "flex";
      cartDiscountEl.textContent = `-₹${discount}`;
    } else {
      cartDiscountRow.style.display = "none";
    }
  }
  if (cartTotalEl) cartTotalEl.textContent = `₹${grandTotal}`;

  // Persist to local storage
  localStorage.setItem("craverush_cart", JSON.stringify(state.cart));
}

function updateUserUI() {
  if (!userProfileContainer) return;

  if (state.user) {
    const initials = state.user.name ? state.user.name.charAt(0).toUpperCase() : "U";
    userProfileContainer.innerHTML = `
      <div class="user-profile-btn" onclick="openAuthModal()">
        <span class="user-avatar">${initials}</span>
        <span>${state.user.name || 'Account'}</span>
      </div>
    `;
  } else {
    userProfileContainer.innerHTML = `
      <button class="btn btn-ghost" onclick="openAuthModal()" style="padding:10px 20px; font-size:14px;">
        <i class="fa-regular fa-user"></i> Sign in
      </button>
    `;
  }
}

// ---------- CART LOGIC ---------- //

function addToCart(dishId) {
  const dish = DISHES.find(d => d.id === dishId);
  if (!dish) return;

  const existing = state.cart.find(item => item.id === dishId);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({ ...dish, quantity: 1 });
  }

  localStorage.setItem("craverush_cart", JSON.stringify(state.cart));
  showToast(`Added "${dish.name}" to your bag!`);
  updateCartUI();
  renderDishes();
  renderHomeHighlights();

  // If restaurant menu modal is open, refresh it as well
  if (document.getElementById("restaurant-menu-modal").classList.contains("active")) {
    const activeRestId = dish.restaurantId;
    openRestaurantMenu(activeRestId);
  }
}

function updateQuantity(dishId, change) {
  const item = state.cart.find(i => i.id === dishId);
  if (!item) return;

  item.quantity += change;
  if (item.quantity <= 0) {
    state.cart = state.cart.filter(i => i.id !== dishId);
    showToast(`Removed from bag.`);
  }

  localStorage.setItem("craverush_cart", JSON.stringify(state.cart));
  updateCartUI();
  renderDishes();
  renderHomeHighlights();

  // Refresh restaurant menu modal if active
  if (document.getElementById("restaurant-menu-modal").classList.contains("active")) {
    const dish = DISHES.find(d => d.id === dishId);
    if (dish) openRestaurantMenu(dish.restaurantId);
  }
}

function applyCoupon() {
  const code = couponInput ? couponInput.value.trim().toUpperCase() : "";
  if (!code) {
    showToast("Please enter a valid coupon code.");
    return;
  }

  const cartSub = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  if ((code === "CRAVE50" || code === "WELCOME100") && cartSub === 0) {
    showToast("Add some food to your bag before applying a coupon.");
    return;
  }
  if (code === "CRAVE50" && cartSub < 199) {
    showToast("CRAVE50 needs a minimum order of ₹199.");
    return;
  }
  if (code === "CRAVE50" || code === "WELCOME100") {
    state.appliedCoupon = code;
    localStorage.setItem("craverush_coupon", code);
    showToast(`Coupon "${code}" applied successfully! 🎉`);
    if (couponInput) couponInput.value = "";
    updateCartUI();
    if (document.getElementById("checkout-form")) updateCheckoutTotalsUI();
  } else {
    showToast("Invalid coupon code. Try CRAVE50 or WELCOME100.");
  }
}

// ---------- RESTAURANT MENU MODAL ---------- //

function openRestaurantMenu(restaurantId) {
  const restaurant = RESTAURANTS.find(r => r.id === restaurantId);
  if (!restaurant) return;

  const restaurantDishes = DISHES.filter(d => d.restaurantId === restaurantId);
  const modalContent = document.getElementById("restaurant-menu-content");
  if (!modalContent) return;

  modalContent.innerHTML = `
    <div class="modal-header">
      <div class="modal-header-left">
        <button class="close-btn modal-back-btn" onclick="closeModal('restaurant-menu-modal')" aria-label="Back to restaurants"><i class="fa-solid fa-arrow-left"></i></button>
        <div>
          <h3>${restaurant.name}</h3>
          <p style="font-size:13px; color:var(--muted-3); margin-top:2px;">${restaurant.cuisines}</p>
        </div>
      </div>
    </div>
    <div class="modal-body">
      <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:20px; padding:12px; background:var(--paper); border-radius:var(--radius-sm);">
        <span class="rating-badge"><i class="fa-solid fa-star"></i> ${restaurant.rating} (${restaurant.reviews})</span>
        <span style="font-size:13.5px; color:var(--muted-1);"><i class="fa-solid fa-clock"></i> ${restaurant.time}</span>
        <span style="font-size:13.5px; color:var(--muted-1);">${restaurant.priceForTwo}</span>
      </div>
      <h4 style="font-family:var(--font-display); font-size:18px; margin-bottom:16px;">Full Menu (${restaurantDishes.length} Items)</h4>
      <div style="display:flex; flex-direction:column; gap:16px;">
        ${restaurantDishes.length > 0 ? restaurantDishes.map(d => {
          const cartItem = state.cart.find(item => item.id === d.id);
          const qty = cartItem ? cartItem.quantity : 0;
          return `
            <div style="display:flex; gap:16px; padding:12px; border:1px solid var(--line); border-radius:16px; background:var(--card); align-items:center;">
              <img src="${d.image}" alt="${d.name}" style="width:76px; height:76px; border-radius:12px; object-fit:cover;" onerror="this.onerror=null;this.src='${FALLBACK_IMG}';">
              <div style="flex:1;">
                <div style="display:flex; align-items:center; gap:6px; margin-bottom:4px;">
                  <span class="diet-icon ${d.isVeg ? 'veg' : 'non-veg'}"></span>
                  <strong style="font-size:15px; font-family:var(--font-body);">${d.name}</strong>
                </div>
                <p style="font-size:12.5px; color:var(--muted-3); margin-bottom:4px;">${d.description}</p>
                <span style="font-family:var(--font-display); font-weight:700; color:var(--chili); font-size:16px;">₹${d.price}</span>
              </div>
              <div>
                ${qty === 0 ? `
                  <button class="add-cart-btn btn-sm" onclick="addToCart('${d.id}')">+ ADD</button>
                ` : `
                  <div class="cart-stepper">
                    <button onclick="updateQuantity('${d.id}', -1)">-</button>
                    <span>${qty}</span>
                    <button onclick="updateQuantity('${d.id}', 1)">+</button>
                  </div>
                `}
              </div>
            </div>
          `;
        }).join("") : `
          <div style="text-align:center; padding:30px; color:var(--muted-3);">
            <p>Menu updating for ${restaurant.name}...</p>
          </div>
        `}
      </div>
    </div>
  `;

  openModal("restaurant-menu-modal");
}

// ---------- REVIEWS PAGE (reviews.html) ---------- //

// Combines the seed testimonials with anything a visitor has submitted on
// this browser, newest user reviews first.
function getAllReviews() {
  return [...state.userReviews, ...REVIEWS];
}

function renderReviewsPage() {
  populateReviewRestaurantOptions();
  renderReviewFilterBar();
  renderRatingSummary();
  renderReviewList();
  setupReviewFormListeners();
}

// Fills the "Restaurant" <select> in the write-a-review form.
function populateReviewRestaurantOptions() {
  const select = document.getElementById("review-restaurant");
  if (!select || select.dataset.populated) return;

  RESTAURANTS.forEach(r => {
    const opt = document.createElement("option");
    opt.value = r.id;
    opt.textContent = r.name;
    select.appendChild(opt);
  });
  select.dataset.populated = "true";
}

// Builds the "All Restaurants" + one pill per restaurant that actually has
// reviews, so the filter bar never shows an empty option.
function renderReviewFilterBar() {
  const bar = document.getElementById("review-filter-bar");
  if (!bar || bar.dataset.populated) return;

  const allReviews = getAllReviews();
  const restaurantIds = [...new Set(allReviews.map(r => r.restaurantId))];

  restaurantIds.forEach(id => {
    const restaurant = RESTAURANTS.find(r => r.id === id);
    if (!restaurant) return;
    const pill = document.createElement("span");
    pill.className = "cat-pill";
    pill.dataset.rest = id;
    pill.textContent = restaurant.name;
    bar.appendChild(pill);
  });

  bar.dataset.populated = "true";

  bar.querySelectorAll(".cat-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      bar.querySelectorAll(".cat-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      state.reviewFilter = pill.dataset.rest;
      renderReviewList();
    });
  });
}

// The big average-score card + the 5→1 star breakdown bars. Always based on
// every review site-wide, regardless of which restaurant filter is active.
function renderRatingSummary() {
  const allReviews = getAllReviews();
  const total = allReviews.length;

  const avg = total > 0 ? allReviews.reduce((sum, r) => sum + r.rating, 0) / total : 0;
  const avgRounded = Math.round(avg * 10) / 10;

  const scoreEl = document.getElementById("avg-rating-score");
  const starsEl = document.getElementById("avg-rating-stars");
  const countEl = document.getElementById("avg-rating-count");
  if (scoreEl) scoreEl.textContent = total > 0 ? avgRounded.toFixed(1) : "0.0";
  if (starsEl) starsEl.textContent = renderStarString(Math.round(avg));
  if (countEl) countEl.textContent = `Based on ${total} review${total === 1 ? "" : "s"}`;

  const barsContainer = document.getElementById("rating-bars-container");
  if (!barsContainer) return;

  const counts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  allReviews.forEach(r => { if (counts[r.rating] !== undefined) counts[r.rating]++; });

  barsContainer.innerHTML = [5, 4, 3, 2, 1].map(star => {
    const count = counts[star];
    const pct = total > 0 ? Math.round((count / total) * 100) : 0;
    return `
      <div class="rating-bar-row">
        <span>${star} ★</span>
        <div class="rating-bar-track"><div class="rating-bar-fill" style="width:${pct}%;"></div></div>
        <span>${count}</span>
      </div>
    `;
  }).join("");
}

function renderStarString(rating) {
  const filled = Math.max(0, Math.min(5, rating));
  return "★".repeat(filled) + "☆".repeat(5 - filled);
}

// Renders the filterable grid of individual reviews.
function renderReviewList() {
  const container = document.getElementById("reviews-page-root");
  const countEl = document.getElementById("review-count");
  if (!container) return;

  const allReviews = getAllReviews();
  const filtered = state.reviewFilter === "all"
    ? allReviews
    : allReviews.filter(r => r.restaurantId === state.reviewFilter);

  if (countEl) countEl.textContent = filtered.length;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="reviews-empty-state">
        <i class="fa-solid fa-comment-slash" style="font-size:28px; margin-bottom:12px; display:block;"></i>
        <p>No reviews yet for this restaurant. Be the first to share one!</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(r => {
    const restaurant = RESTAURANTS.find(rest => rest.id === r.restaurantId);
    const displayDate = formatReviewDate(r.date);
    return `
      <div class="review-card user-review-card">
        <span class="review-restaurant-tag">${restaurant ? restaurant.name : "CraveRush"}</span>
        <span class="stars">${renderStarString(r.rating)}</span>
        <p>"${escapeHtml(r.text)}"</p>
        <div class="reviewer" style="display:flex; align-items:center; justify-content:space-between; gap:10px;">
          <div><strong>${escapeHtml(r.name)}</strong><span>${r.city ? escapeHtml(r.city) : "Verified Order"}</span></div>
          <span class="review-date">${displayDate}</span>
        </div>
      </div>
    `;
  }).join("");
}

function formatReviewDate(isoString) {
  try {
    const date = new Date(isoString);
    return date.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
  } catch (e) {
    return "";
  }
}

// Basic HTML-escaping so a review's free-text can't break the markup.
function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str == null ? "" : String(str);
  return div.innerHTML;
}

// Wires up the clickable 5-star input on the review form. Guarded so it only
// runs once even though renderReviewsPage() can be called more than once.
function setupReviewFormListeners() {
  const starInput = document.getElementById("star-input");
  if (!starInput || starInput.dataset.wired) return;
  starInput.dataset.wired = "true";

  const stars = Array.from(starInput.querySelectorAll("i"));
  stars.forEach(star => {
    star.addEventListener("click", () => {
      const value = parseInt(star.dataset.value, 10);
      starInput.dataset.rating = value;
      highlightStars(stars, value);
      const hint = document.getElementById("star-input-hint");
      if (hint) {
        const labels = ["", "Poor", "Fair", "Good", "Very Good", "Excellent"];
        hint.textContent = `${value} star${value > 1 ? "s" : ""} — ${labels[value]}`;
      }
    });
  });

  // Prefill the reviewer's name if they're already signed in.
  if (state.user && state.user.name) {
    const nameInput = document.getElementById("review-name");
    if (nameInput) nameInput.value = state.user.name;
  }
}

function highlightStars(stars, rating) {
  stars.forEach(star => {
    const value = parseInt(star.dataset.value, 10);
    star.classList.toggle("active", value <= rating);
  });
}

// Handles the write-a-review form submission on reviews.html.
function submitReview(event) {
  event.preventDefault();

  const restaurantSelect = document.getElementById("review-restaurant");
  const starInput = document.getElementById("star-input");
  const nameInput = document.getElementById("review-name");
  const textInput = document.getElementById("review-text");

  const restaurantId = restaurantSelect ? restaurantSelect.value : "";
  const rating = starInput ? parseInt(starInput.dataset.rating, 10) : 0;
  const name = nameInput ? nameInput.value.trim() : "";
  const text = textInput ? textInput.value.trim() : "";

  if (!restaurantId) {
    showToast("Please select a restaurant to review.");
    return;
  }
  if (!rating || rating < 1) {
    showToast("Please tap a star to give your rating.");
    return;
  }
  if (!name || !text) {
    showToast("Please fill in your name and review.");
    return;
  }

  const newReview = {
    id: `ur-${Date.now()}`,
    restaurantId,
    name,
    city: state.location ? state.location.split(",")[0] : "",
    rating,
    text,
    date: new Date().toISOString()
  };

  state.userReviews.unshift(newReview);
  localStorage.setItem("craverush_user_reviews", JSON.stringify(state.userReviews));

  // Reset the form
  event.target.reset();
  if (starInput) {
    starInput.dataset.rating = "0";
    highlightStars(Array.from(starInput.querySelectorAll("i")), 0);
  }
  const hint = document.getElementById("star-input-hint");
  if (hint) hint.textContent = "Tap a star to rate";

  // The new restaurant may not have had a filter pill yet — rebuild the bar.
  const bar = document.getElementById("review-filter-bar");
  if (bar) {
    bar.innerHTML = `<span class="cat-pill ${state.reviewFilter === "all" ? "active" : ""}" data-rest="all">All Restaurants</span>`;
    bar.dataset.populated = "";
    renderReviewFilterBar();
  }

  renderRatingSummary();
  renderReviewList();

  showToast("Thanks for your review! 🌟");
}

// ---------- CHECKOUT & ORDER TRACKING ---------- //

function proceedToCheckout() {
  if (state.cart.length === 0) {
    showToast("Your food bag is empty!");
    return;
  }

  // If user not signed in, prompt login before heading to checkout
  if (!state.user) {
    showToast("Please sign in to complete your food order.");
    openAuthModal();
    return;
  }

  window.location.href = "checkout.html";
}

// ---------- CHECKOUT PAGE (checkout.html) ---------- //

// Computes the current bill breakdown for whichever delivery speed is selected.
function computeCheckoutTotals(speed) {
  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  let discount = 0;
  if (state.appliedCoupon === "CRAVE50") {
    discount = Math.min(Math.round(subtotal * 0.5), 150);
  } else if (state.appliedCoupon === "WELCOME100") {
    discount = Math.min(100, subtotal);
  }

  const deliveryFee = speed === "express" ? 89 : ((subtotal >= 499 || isCravePassActive()) ? 0 : 49);
  const platformFee = subtotal > 0 ? 8 : 0;
  const taxes = Math.round(subtotal * 0.05);
  const total = Math.max(0, subtotal - discount + deliveryFee + platformFee + taxes);

  return { subtotal, discount, deliveryFee, platformFee, taxes, total };
}

function getSelectedRadioValue(name, fallback) {
  const el = document.querySelector(`input[name="${name}"]:checked`);
  return el ? el.value : fallback;
}

// Renders the read-only "Order Summary" card (restaurant name + line items).
function renderCheckoutSummary() {
  const container = document.getElementById("checkout-items");
  if (!container) return;

  const restaurantNameEl = document.getElementById("checkout-restaurant-name");
  if (restaurantNameEl) {
    const names = [...new Set(state.cart.map(item => item.restaurantName).filter(Boolean))];
    restaurantNameEl.textContent = names.join(" + ") || "CraveRush Kitchen";
  }

  container.innerHTML = state.cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img" onerror="this.onerror=null;this.src='${FALLBACK_IMG}';">
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <span class="cart-item-price">Qty: ${item.quantity} × ₹${item.price}</span>
      </div>
      <span style="font-weight:700; font-family:var(--font-mono); white-space:nowrap;">₹${item.price * item.quantity}</span>
    </div>
  `).join("");

  updateCheckoutTotalsUI();
}

// Recalculates and re-renders the bill rows (called on load + whenever delivery speed changes).
function updateCheckoutTotalsUI() {
  const speed = getSelectedRadioValue("delivery-speed", "standard");
  const { subtotal, discount, deliveryFee, platformFee, taxes, total } = computeCheckoutTotals(speed);

  const subtotalEl = document.getElementById("co-subtotal");
  const discountRow = document.getElementById("co-discount-row");
  const discountEl = document.getElementById("co-discount");
  const deliveryFeeEl = document.getElementById("co-delivery-fee");
  const platformFeeEl = document.getElementById("co-platform-fee");
  const taxesEl = document.getElementById("co-taxes");
  const totalEl = document.getElementById("co-total");

  if (subtotalEl) subtotalEl.textContent = `₹${subtotal}`;
  if (discountRow && discountEl) {
    if (discount > 0) {
      discountRow.style.display = "flex";
      discountEl.textContent = `-₹${discount}`;
    } else {
      discountRow.style.display = "none";
    }
  }
  if (deliveryFeeEl) deliveryFeeEl.textContent = deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`;
  if (platformFeeEl) platformFeeEl.textContent = `₹${platformFee}`;
  if (taxesEl) taxesEl.textContent = `₹${taxes}`;
  if (totalEl) totalEl.textContent = `₹${total}`;
}

// The .option-card elements are <label>s wrapping their radio input. Some
// browsers don't support the CSS :has() selector, so the highlighted state
// was previously unreliable (a card could stay visually "selected" even
// after a different option was picked). We now toggle the ".selected" class
// ourselves on every change, per radio group, so the highlight always
// matches whichever input is actually checked.
function initCheckoutOptionCards() {
  const groups = ["delivery-speed", "payment-method"];

  groups.forEach(groupName => {
    const inputs = document.querySelectorAll(`input[name="${groupName}"]`);
    inputs.forEach(input => {
      // Sync initial state (in case a value was prefilled/checked server-side).
      const card = input.closest(".option-card");
      if (card) card.classList.toggle("selected", input.checked);

      input.addEventListener("change", () => {
        inputs.forEach(i => {
          const c = i.closest(".option-card");
          if (c) c.classList.toggle("selected", i.checked);
        });
        if (groupName === "delivery-speed") updateCheckoutTotalsUI();
      });
    });
  });
}

// Prefills the delivery address form from the signed-in user / any previously saved address.
function prefillCheckoutForm() {
  const nameInput = document.getElementById("co-fullname");
  if (nameInput && state.user && state.user.name) nameInput.value = state.user.name;

  let saved = null;
  try {
    saved = JSON.parse(localStorage.getItem("craverush_saved_address"));
  } catch (e) {
    saved = null;
  }
  if (!saved) return;

  const fields = {
    "co-fullname": saved.fullName,
    "co-mobile": saved.mobile,
    "co-house": saved.house,
    "co-street": saved.street,
    "co-landmark": saved.landmark,
    "co-city": saved.city,
    "co-state": saved.state,
    "co-pincode": saved.pincode
  };
  Object.entries(fields).forEach(([id, value]) => {
    const el = document.getElementById(id);
    if (el && value) el.value = value;
  });
}

// Sets up the checkout page: guards against empty cart / logged-out access, then renders.
function initCheckoutPage() {
  if (state.cart.length === 0) {
    showToast("Your food bag is empty!");
    window.location.href = "menu.html";
    return;
  }
  if (!state.user) {
    showToast("Please sign in to complete your food order.");
    openAuthModal();
  }

  renderCheckoutSummary();
  initCheckoutOptionCards();
  prefillCheckoutForm();
}

// Handles the "Place Order & Pay" form submission on checkout.html.
function handlePlaceOrder(event) {
  event.preventDefault();

  if (state.cart.length === 0) {
    showToast("Your food bag is empty!");
    return;
  }
  if (!state.user) {
    showToast("Please sign in to complete your food order.");
    openAuthModal();
    return;
  }

  const fullName = document.getElementById("co-fullname").value.trim();
  const mobile = document.getElementById("co-mobile").value.trim();
  const house = document.getElementById("co-house").value.trim();
  const street = document.getElementById("co-street").value.trim();
  const landmark = document.getElementById("co-landmark").value.trim();
  const city = document.getElementById("co-city").value.trim();
  const stateName = document.getElementById("co-state").value.trim();
  const pincode = document.getElementById("co-pincode").value.trim();

  if (!fullName || !mobile || !house || !street || !city || !stateName || !pincode) {
    showToast("Please fill in all required delivery address fields.");
    return;
  }
  if (!/^\d{10}$/.test(mobile)) {
    showToast("Please enter a valid 10-digit mobile number.");
    return;
  }
  if (!/^\d{6}$/.test(pincode)) {
    showToast("Please enter a valid 6-digit pincode.");
    return;
  }

  const payment = validatePaymentDetails();
  if (!payment) return;

  const address = { fullName, mobile, house, street, landmark, city, state: stateName, pincode };
  const saveAddress = document.getElementById("co-save-address");

  const speed = getSelectedRadioValue("delivery-speed", "standard");
  const paymentMethod = getSelectedRadioValue("payment-method", "cod");
  const { subtotal, discount, deliveryFee, platformFee, taxes, total } = computeCheckoutTotals(speed);

  if (paymentMethod === "wallet" && state.wallet.balance < total) {
    showToast(`Not enough CraveCash (balance ₹${state.wallet.balance}). Add money or choose another payment method.`);
    return;
  }

  // Prevent duplicate orders while the asynchronous confirmation is running.
  if (orderProcessing) return;
  orderProcessing = true;
  const submitButton = document.querySelector('#checkout-form button[type="submit"]');
  const originalButtonHTML = submitButton ? submitButton.innerHTML : "";
  if (submitButton) {
    submitButton.disabled = true;
    submitButton.innerHTML = '<span><i class="fa-solid fa-spinner fa-spin"></i> Processing order...</span>';
  }
  showToast("Confirming your demo order...");

  const order = {
    paymentDetail: payment.label,
    orderId: "CR-" + Math.floor(100000 + Math.random() * 900000),
    items: [...state.cart],
    address,
    deliverySpeed: speed,
    paymentMethod,
    subtotal,
    discount,
    deliveryFee,
    platformFee,
    taxes,
    total,
    statusStep: 1, // 1: Order Placed, 2: Preparing, 3: On the way, 4: Delivered
    placedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    placedOn: new Date().toLocaleDateString([], { day: '2-digit', month: 'short', year: 'numeric' }),
    estimatedMinutes: speed === "express" ? 18 : 30
  };

  // Promise chain: .then() commits a confirmed order, .catch() handles a
  // rejected confirmation, and .finally() always restores the submit button.
  processDemoOrder(order)
    .then(confirmedOrder => {
      if (saveAddress && saveAddress.checked) {
        localStorage.setItem("craverush_saved_address", JSON.stringify(address));
      }

      // Deduct wallet funds only after order confirmation succeeds.
      if (paymentMethod === "wallet") {
        state.wallet.balance -= total;
        state.wallet.transactions.push({
          id: "tx-" + Date.now(), type: "debit", amount: total, note: "Food order payment",
          date: new Date().toLocaleDateString([], { day: "2-digit", month: "short", year: "numeric" })
        });
        localStorage.setItem("craverush_wallet", JSON.stringify(state.wallet));
      }

      state.activeOrder = confirmedOrder;
      localStorage.setItem("craverush_active_order", JSON.stringify(confirmedOrder));
      addOrderToHistory(confirmedOrder);

      state.cart = [];
      state.appliedCoupon = null;
      localStorage.removeItem("craverush_cart");
      localStorage.removeItem("craverush_coupon");
      updateCartUI();
      showToast("Order placed successfully! 🚀");

      sessionStorage.setItem("craverush_just_ordered", "1");
      window.setTimeout(() => { window.location.href = "index.html"; }, 900);
    })
    .catch(error => {
      console.error("CraveRush order confirmation failed:", error);
      showToast(error && error.message ? error.message : "Order confirmation failed. Please try again.");
    })
    .finally(() => {
      orderProcessing = false;
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.innerHTML = originalButtonHTML;
      }
    });
}

// ---------- ORDER HISTORY (used by orders.html) ---------- //

const MAX_ORDER_HISTORY = 25;

// Adds a freshly-placed order to the history log (most recent first).
function addOrderToHistory(order) {
  state.orderHistory.unshift(order);
  if (state.orderHistory.length > MAX_ORDER_HISTORY) {
    state.orderHistory = state.orderHistory.slice(0, MAX_ORDER_HISTORY);
  }
  localStorage.setItem("craverush_order_history", JSON.stringify(state.orderHistory));
}

// Keeps the matching history entry's status in sync with the active order
// as it progresses (Order Placed -> Preparing -> On the Way -> Delivered).
function syncActiveOrderIntoHistory() {
  if (!state.activeOrder) return;
  const entry = state.orderHistory.find(o => o.orderId === state.activeOrder.orderId);
  if (entry) {
    entry.statusStep = state.activeOrder.statusStep;
    entry.estimatedMinutes = state.activeOrder.estimatedMinutes;
  }
  localStorage.setItem("craverush_order_history", JSON.stringify(state.orderHistory));
}

function openOrderTracking() {
  if (!state.activeOrder) {
    showToast("No active orders right now.");
    return;
  }

  const content = document.getElementById("tracking-modal-content");
  if (!content) return;

  const step = state.activeOrder.statusStep;
  const progressPercent = ((step - 1) / 3) * 100;

  content.innerHTML = `
    <div class="modal-header">
      <div>
        <h3>Live Order Tracker</h3>
        <p style="font-size:13px; color:var(--muted-3);">Order #${state.activeOrder.orderId}</p>
      </div>
      <button class="close-btn" onclick="closeModal('tracking-modal')"><i class="fa-solid fa-xmark"></i></button>
    </div>
    <div class="modal-body">
      <div class="tracking-container">
        <div class="tracking-status-badge">
          <i class="fa-solid fa-bolt"></i>
          <span>${getStatusTitle(step)}</span>
        </div>

        <p style="font-size:14px; color:var(--muted-1); margin-bottom:20px;">
          Estimated delivery time: <strong style="color:var(--chili); font-size:18px;">${state.activeOrder.estimatedMinutes} mins</strong>
        </p>

        <div class="timeline">
          <div class="timeline-progress" style="width: calc(${progressPercent}% - 40px);"></div>
          
          <div class="timeline-step ${step >= 1 ? (step === 1 ? 'active' : 'completed') : ''}">
            <div class="step-icon"><i class="fa-solid fa-receipt"></i></div>
            <span class="step-label">Order Placed</span>
          </div>
          <div class="timeline-step ${step >= 2 ? (step === 2 ? 'active' : 'completed') : ''}">
            <div class="step-icon"><i class="fa-solid fa-fire-burner"></i></div>
            <span class="step-label">Preparing</span>
          </div>
          <div class="timeline-step ${step >= 3 ? (step === 3 ? 'active' : 'completed') : ''}">
            <div class="step-icon"><i class="fa-solid fa-motorcycle"></i></div>
            <span class="step-label">On the Way</span>
          </div>
          <div class="timeline-step ${step >= 4 ? 'completed active' : ''}">
            <div class="step-icon"><i class="fa-solid fa-house-chimney"></i></div>
            <span class="step-label">Delivered</span>
          </div>
        </div>

        <div class="rider-card">
          <div class="rider-avatar">🛵</div>
          <div style="flex:1;">
            <strong>Rider Alex Vance</strong>
            <span style="display:block; font-size:12px; color:var(--muted-3);">EV Fast Fleet • 4.9★ Rating</span>
          </div>
          <button class="btn btn-ghost btn-sm" onclick="showToast('Calling Rider Alex...')">
            <i class="fa-solid fa-phone"></i> Call
          </button>
        </div>

        <div style="margin-top:24px; text-align:left; padding:16px; background:var(--paper); border-radius:14px; border:1px solid var(--line);">
          <strong style="font-size:14px; display:block; margin-bottom:8px;">Order Summary (${state.activeOrder.items.length} items)</strong>
          ${state.activeOrder.items.map(i => `
            <div style="display:flex; justify-content:space-between; font-size:13.5px; color:var(--muted-1); margin-bottom:4px;">
              <span>${i.quantity}x ${i.name}</span>
              <span>₹${i.price * i.quantity}</span>
            </div>
          `).join("")}
          <div style="display:flex; justify-content:space-between; font-weight:700; font-size:15px; margin-top:8px; border-top:1px solid var(--line); padding-top:8px;">
            <span>Total Paid</span>
            <span>₹${state.activeOrder.total}</span>
          </div>
        </div>
      </div>
    </div>
  `;

  openModal("tracking-modal");
}

function getStatusTitle(step) {
  switch (step) {
    case 1: return "Order Received by Kitchen";
    case 2: return "Chef is Firing Up Your Meal 🔥";
    case 3: return "Rider Picked Up & On the Way 🛵";
    case 4: return "Order Delivered! Enjoy Your Meal 😋";
    default: return "Processing Order";
  }
}

function startOrderTrackingTimer() {
  if (state.trackingTimer) clearInterval(state.trackingTimer);

  state.trackingTimer = setInterval(() => {
    if (!state.activeOrder) {
      clearInterval(state.trackingTimer);
      return;
    }

    if (state.activeOrder.statusStep < 4) {
      state.activeOrder.statusStep += 1;
      state.activeOrder.estimatedMinutes = Math.max(0, state.activeOrder.estimatedMinutes - 5);
      localStorage.setItem("craverush_active_order", JSON.stringify(state.activeOrder));
      syncActiveOrderIntoHistory();

      // Refresh tracking modal if open
      if (document.getElementById("tracking-modal").classList.contains("active")) {
        openOrderTracking();
      }

      // Refresh the Orders page if that's where we are
      if (document.getElementById("orders-page-root")) {
        renderOrdersPage();
      }

      showToast(`Order Status Update: ${getStatusTitle(state.activeOrder.statusStep)}`);

      // Once delivered, leave the "Delivered" view up for a bit, then retire
      // the order so Live Track correctly reports "no active order" again
      // instead of showing a finished order forever. It stays in order
      // history (marked Delivered) permanently.
      if (state.activeOrder.statusStep === 4) {
        clearInterval(state.trackingTimer);
        setTimeout(() => {
          state.activeOrder = null;
          localStorage.removeItem("craverush_active_order");
          if (document.getElementById("orders-page-root")) {
            renderOrdersPage();
          }
        }, 20000);
      }
    } else {
      clearInterval(state.trackingTimer);
    }
  }, 10000); // Progresses every 10 seconds for demo
}

// ---------- ORDERS PAGE (orders.html) ---------- //

// Small pill shown on each order card ("Order Placed", "Preparing", "Delivered", ...).
function getStatusBadgeClass(step) {
  if (step >= 4) return "delivered";
  if (step >= 2) return "in-progress";
  return "placed";
}

function buildOrderCard(order, isActive) {
  const step = order.statusStep || 1;
  const itemNames = order.items.map(i => `${i.quantity}x ${i.name}`).join(", ");
  const restaurantNames = [...new Set(order.items.map(i => i.restaurantName).filter(Boolean))].join(" + ") || "CraveRush Kitchen";

  return `
    <div class="order-card ${isActive ? 'order-card-active' : ''}">
      <div class="order-card-top">
        <div>
          <span class="order-card-id">#${order.orderId}</span>
          <span class="order-card-date">${order.placedOn || ''} • ${order.placedAt || ''}</span>
        </div>
        <span class="order-status-pill status-${getStatusBadgeClass(step)}">
          ${order.cancelled ? 'Cancelled' : (isActive ? getStatusTitle(step) : (step >= 4 ? 'Delivered' : getStatusTitle(step)))}
        </span>
      </div>

      <h4 class="order-card-restaurant">${restaurantNames}</h4>
      <p class="order-card-items">${itemNames}</p>

      ${isActive ? `
        <div class="timeline timeline-compact">
          <div class="timeline-progress" style="width: calc(${((step - 1) / 3) * 100}% - 30px);"></div>
          <div class="timeline-step ${step >= 1 ? (step === 1 ? 'active' : 'completed') : ''}">
            <div class="step-icon"><i class="fa-solid fa-receipt"></i></div>
            <span class="step-label">Placed</span>
          </div>
          <div class="timeline-step ${step >= 2 ? (step === 2 ? 'active' : 'completed') : ''}">
            <div class="step-icon"><i class="fa-solid fa-fire-burner"></i></div>
            <span class="step-label">Preparing</span>
          </div>
          <div class="timeline-step ${step >= 3 ? (step === 3 ? 'active' : 'completed') : ''}">
            <div class="step-icon"><i class="fa-solid fa-motorcycle"></i></div>
            <span class="step-label">On the Way</span>
          </div>
          <div class="timeline-step ${step >= 4 ? 'completed active' : ''}">
            <div class="step-icon"><i class="fa-solid fa-house-chimney"></i></div>
            <span class="step-label">Delivered</span>
          </div>
        </div>
        <p style="font-size:13px; color:var(--muted-3); margin-top:4px;">
          Estimated delivery: <strong style="color:var(--chili);">${order.estimatedMinutes} mins</strong>
        </p>
      ` : ''}

      <div class="order-card-footer">
        <span class="order-card-total">₹${order.total} <span style="font-weight:500; color:var(--muted-3); font-size:12px;">(${order.items.length} item${order.items.length > 1 ? 's' : ''})</span></span>
        <div class="order-card-actions">
          <button class="btn btn-ghost btn-sm" onclick="viewOrderBill('${order.orderId}')"><i class="fa-solid fa-file-invoice"></i> Bill</button>
          ${isActive && step <= 2 ? `<button class="btn btn-ghost btn-sm btn-danger" onclick="cancelOrder('${order.orderId}')"><i class="fa-solid fa-ban"></i> Cancel</button>` : ''}
          ${!isActive && step >= 4 ? `<a class="btn btn-ghost btn-sm" href="reviews.html"><i class="fa-regular fa-star"></i> Rate</a>` : ''}
          ${isActive ? `<button class="btn btn-ghost btn-sm" onclick="openOrderTracking()"><i class="fa-solid fa-location-crosshairs"></i> Track</button>` : ''}
          <button class="btn btn-solid btn-sm" onclick="reorderItems('${order.orderId}')"><i class="fa-solid fa-rotate-right"></i> Reorder</button>
        </div>
      </div>
    </div>
  `;
}

// Renders both the "Current Order" and "Previous Orders" lists on orders.html.
function renderOrdersPage() {
  const currentContainer = document.getElementById("current-order-container");
  const historyContainer = document.getElementById("order-history-container");
  if (!currentContainer && !historyContainer) return;

  if (currentContainer) {
    if (state.activeOrder) {
      currentContainer.innerHTML = buildOrderCard(state.activeOrder, true);
    } else {
      currentContainer.innerHTML = `
        <div class="cart-empty-state" style="padding:40px 20px;">
          <i class="fa-solid fa-bag-shopping"></i>
          <h4>No active orders right now</h4>
          <p style="font-size:13.5px; margin-top:6px;">Hungry? Your next order will show up here with live tracking.</p>
          <a href="menu.html" class="btn btn-solid btn-sm" style="margin-top:16px;">Browse Restaurants &amp; Menu</a>
        </div>
      `;
    }
  }

  if (historyContainer) {
    // "Previous Orders" = everything in history except the currently active one.
    const past = state.orderHistory.filter(o => !state.activeOrder || o.orderId !== state.activeOrder.orderId);

    if (past.length === 0) {
      historyContainer.innerHTML = `
        <div class="cart-empty-state" style="padding:40px 20px;">
          <i class="fa-solid fa-clock-rotate-left"></i>
          <h4>No previous orders yet</h4>
          <p style="font-size:13.5px; margin-top:6px;">Your completed and past orders will be listed here.</p>
        </div>
      `;
    } else {
      historyContainer.innerHTML = past.map(o => buildOrderCard(o, false)).join("");
    }
  }
}

// "Reorder" button on a past/current order — refills the cart with the same
// items (at current prices/availability) and opens the bag so the user can
// review and check out.
function reorderItems(orderId) {
  const order = state.orderHistory.find(o => o.orderId === orderId) ||
                (state.activeOrder && state.activeOrder.orderId === orderId ? state.activeOrder : null);
  if (!order) {
    showToast("Sorry, we couldn't find that order.");
    return;
  }

  order.items.forEach(orderedItem => {
    const dish = DISHES.find(d => d.id === orderedItem.id);
    if (!dish) return; // dish no longer on the menu
    const existing = state.cart.find(item => item.id === dish.id);
    if (existing) {
      existing.quantity += orderedItem.quantity;
    } else {
      state.cart.push({ ...dish, quantity: orderedItem.quantity });
    }
  });

  updateCartUI();
  showToast("Items added to your bag from that order! 🛍️");
  toggleCartDrawer(true);
}

// ---------- AUTHENTICATION LOGIC ---------- //

function openAuthModal() {
  renderAuthModal();
  openModal("auth-modal");
}

// Decide whether the auth modal shows the sign in/up forms or the
// logged-in account panel (with the logout button), and fills it in.
function renderAuthModal() {
  const accountView = document.getElementById("account-view");
  const authFormsWrap = document.getElementById("auth-forms-wrap");
  if (!accountView || !authFormsWrap) return;

  if (state.user) {
    const initials = state.user.name ? state.user.name.charAt(0).toUpperCase() : "U";

    const avatarEl = document.getElementById("account-avatar-lg");
    const nameEl = document.getElementById("account-name");
    const emailEl = document.getElementById("account-email");

    if (avatarEl) avatarEl.textContent = initials;
    if (nameEl) nameEl.textContent = state.user.name || "Account";
    if (emailEl) emailEl.textContent = state.user.email || "";

    accountView.style.display = "block";
    authFormsWrap.style.display = "none";

    switchAccountTab(state.activeAccountTab || "profile");
  } else {
    accountView.style.display = "none";
    authFormsWrap.style.display = "block";
    switchAuthTab("signin");
  }
}

// ---------- ACCOUNT PANEL: PROFILE / ADDRESSES / WALLET TABS ---------- //

// Switches the logged-in account panel between its three tabs (Profile,
// Addresses, Wallet) and (re)renders that tab's content fresh each time, so
// edits made in one tab are always reflected when you come back to it.
function switchAccountTab(tab) {
  state.activeAccountTab = tab;
  state.editingAddressId = null;

  document.querySelectorAll(".account-tab").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.tab === tab);
  });
  document.querySelectorAll(".account-tab-panel").forEach(panel => {
    panel.style.display = panel.id === "account-tab-" + tab ? "block" : "none";
  });

  if (tab === "profile") renderProfileTab();
  else if (tab === "addresses") renderAddressesTab();
  else if (tab === "wallet") renderWalletTab();
}

// ---- Profile tab: edit name / email / phone ---- //
function renderProfileTab() {
  const panel = document.getElementById("account-tab-profile");
  if (!panel || !state.user) return;

  panel.innerHTML = `
    <form onsubmit="saveProfileEdits(event)">
      <div class="form-group">
        <label>Full Name</label>
        <input type="text" id="profile-edit-name" class="form-control" value="${escapeHtml(state.user.name || "")}" required>
      </div>
      <div class="form-group">
        <label>Email Address</label>
        <input type="email" id="profile-edit-email" class="form-control" value="${escapeHtml(state.user.email || "")}" required>
      </div>
      <div class="form-group">
        <label>Mobile Number</label>
        <input type="tel" id="profile-edit-phone" class="form-control" placeholder="+91 98765 43210" value="${escapeHtml(state.user.phone || "")}">
      </div>
      <button type="submit" class="btn btn-solid" style="width:100%;">Save Changes</button>
    </form>
  `;
}

function saveProfileEdits(event) {
  event.preventDefault();
  const name = document.getElementById("profile-edit-name").value.trim();
  const email = document.getElementById("profile-edit-email").value.trim();
  const phone = document.getElementById("profile-edit-phone").value.trim();

  if (!name || !email) {
    showToast("Name and email are required.");
    return;
  }

  state.user = { ...state.user, name, email, phone };
  localStorage.setItem("craverush_user", JSON.stringify(state.user));

  updateUserUI();
  renderAuthModal();
  showToast("Profile updated! ✅");
}

// ---- Addresses tab: multiple saved addresses, add / edit / delete / default ---- //
function renderAddressesTab() {
  const panel = document.getElementById("account-tab-addresses");
  if (!panel) return;

  if (state.editingAddressId !== null) {
    panel.innerHTML = buildAddressFormMarkup(state.editingAddressId);
    return;
  }

  const listHtml = state.addresses.length > 0
    ? state.addresses.map(addr => `
        <div class="address-card ${addr.isDefault ? "is-default" : ""}">
          <div class="address-card-top">
            <span class="address-card-label"><i class="fa-solid ${addr.label === "Work" ? "fa-briefcase" : addr.label === "Home" ? "fa-house" : "fa-location-dot"}"></i> ${escapeHtml(addr.label || "Address")}</span>
            ${addr.isDefault ? `<span class="address-default-badge">Default</span>` : ""}
          </div>
          <p class="address-card-text">${escapeHtml(addr.fullName)} · ${escapeHtml(addr.mobile)}</p>
          <p class="address-card-text">${escapeHtml(addr.house)}, ${escapeHtml(addr.street)}${addr.landmark ? ", " + escapeHtml(addr.landmark) : ""}, ${escapeHtml(addr.city)}, ${escapeHtml(addr.state)} - ${escapeHtml(addr.pincode)}</p>
          <div class="address-card-actions">
            ${!addr.isDefault ? `<button type="button" class="btn btn-ghost btn-sm" onclick="setDefaultAddress('${addr.id}')">Set Default</button>` : ""}
            <button type="button" class="btn btn-ghost btn-sm" onclick="openAddressForm('${addr.id}')"><i class="fa-solid fa-pen"></i> Edit</button>
            <button type="button" class="btn btn-ghost btn-sm address-delete-btn" onclick="deleteAddress('${addr.id}')"><i class="fa-solid fa-trash"></i> Delete</button>
          </div>
        </div>
      `).join("")
    : `
        <div class="empty-tab-state">
          <i class="fa-solid fa-location-dot"></i>
          <p>No saved addresses yet.</p>
        </div>
      `;

  panel.innerHTML = `
    <div class="address-list">${listHtml}</div>
    <button type="button" class="btn btn-solid" style="width:100%; margin-top:6px;" onclick="openAddressForm('new')">
      <i class="fa-solid fa-plus"></i> Add New Address
    </button>
  `;
}

function buildAddressFormMarkup(id) {
  const isNew = id === "new";
  const addr = isNew ? null : state.addresses.find(a => a.id === id);
  const v = (field, fallback) => escapeHtml((addr && addr[field]) || fallback || "");

  return `
    <form onsubmit="saveAddressForm(event)">
      <div class="form-group">
        <label>Label</label>
        <select id="addr-label" class="form-control">
          <option value="Home" ${!addr || addr.label === "Home" ? "selected" : ""}>Home</option>
          <option value="Work" ${addr && addr.label === "Work" ? "selected" : ""}>Work</option>
          <option value="Other" ${addr && addr.label === "Other" ? "selected" : ""}>Other</option>
        </select>
      </div>
      <div class="form-group">
        <label>Full Name</label>
        <input type="text" id="addr-fullname" class="form-control" value="${v("fullName", state.user ? state.user.name : "")}" required>
      </div>
      <div class="form-group">
        <label>Mobile Number</label>
        <input type="tel" id="addr-mobile" class="form-control" placeholder="10-digit number" value="${v("mobile")}" required>
      </div>
      <div class="form-group">
        <label>House / Flat No.</label>
        <input type="text" id="addr-house" class="form-control" value="${v("house")}" required>
      </div>
      <div class="form-group">
        <label>Street / Area</label>
        <input type="text" id="addr-street" class="form-control" value="${v("street")}" required>
      </div>
      <div class="form-group">
        <label>Landmark (optional)</label>
        <input type="text" id="addr-landmark" class="form-control" value="${v("landmark")}">
      </div>
      <div style="display:flex; gap:12px;">
        <div class="form-group" style="flex:1;">
          <label>City</label>
          <input type="text" id="addr-city" class="form-control" value="${v("city")}" required>
        </div>
        <div class="form-group" style="flex:1;">
          <label>State</label>
          <input type="text" id="addr-state" class="form-control" value="${v("state")}" required>
        </div>
      </div>
      <div class="form-group">
        <label>Pincode</label>
        <input type="text" id="addr-pincode" class="form-control" placeholder="6-digit pincode" value="${v("pincode")}" required>
      </div>
      <div style="display:flex; gap:12px;">
        <button type="button" class="btn btn-ghost" style="flex:1;" onclick="cancelAddressForm()">Cancel</button>
        <button type="submit" class="btn btn-solid" style="flex:1;">${isNew ? "Save Address" : "Update Address"}</button>
      </div>
    </form>
  `;
}

function openAddressForm(id) {
  state.editingAddressId = id;
  renderAddressesTab();
}

function cancelAddressForm() {
  state.editingAddressId = null;
  renderAddressesTab();
}

function saveAddressForm(event) {
  event.preventDefault();
  const mobile = document.getElementById("addr-mobile").value.trim();
  const pincode = document.getElementById("addr-pincode").value.trim();

  if (!/^\d{10}$/.test(mobile)) {
    showToast("Please enter a valid 10-digit mobile number.");
    return;
  }
  if (!/^\d{6}$/.test(pincode)) {
    showToast("Please enter a valid 6-digit pincode.");
    return;
  }

  const data = {
    label: document.getElementById("addr-label").value,
    fullName: document.getElementById("addr-fullname").value.trim(),
    mobile,
    house: document.getElementById("addr-house").value.trim(),
    street: document.getElementById("addr-street").value.trim(),
    landmark: document.getElementById("addr-landmark").value.trim(),
    city: document.getElementById("addr-city").value.trim(),
    state: document.getElementById("addr-state").value.trim(),
    pincode
  };

  if (state.editingAddressId === "new") {
    const isFirst = state.addresses.length === 0;
    state.addresses.push({ id: "addr-" + Date.now(), isDefault: isFirst, ...data });
    showToast("Address saved! 📍");
  } else {
    const existing = state.addresses.find(a => a.id === state.editingAddressId);
    if (existing) Object.assign(existing, data);
    showToast("Address updated! ✅");
  }

  localStorage.setItem("craverush_addresses", JSON.stringify(state.addresses));
  state.editingAddressId = null;
  renderAddressesTab();
}

function deleteAddress(id) {
  const wasDefault = state.addresses.find(a => a.id === id)?.isDefault;
  state.addresses = state.addresses.filter(a => a.id !== id);
  if (wasDefault && state.addresses.length > 0) state.addresses[0].isDefault = true;

  localStorage.setItem("craverush_addresses", JSON.stringify(state.addresses));
  showToast("Address removed.");
  renderAddressesTab();
}

function setDefaultAddress(id) {
  state.addresses.forEach(a => { a.isDefault = (a.id === id); });
  localStorage.setItem("craverush_addresses", JSON.stringify(state.addresses));
  renderAddressesTab();
}

// ---- Wallet tab: CraveCash balance, quick top-ups, transaction history ---- //
function renderWalletTab() {
  const panel = document.getElementById("account-tab-wallet");
  if (!panel) return;

  const txHtml = state.wallet.transactions.length > 0
    ? [...state.wallet.transactions].reverse().map(tx => `
        <div class="wallet-tx-row">
          <div>
            <strong>${escapeHtml(tx.note)}</strong>
            <span>${escapeHtml(tx.date)}</span>
          </div>
          <span class="wallet-tx-amount ${tx.type}">${tx.type === "credit" ? "+" : "-"}₹${tx.amount}</span>
        </div>
      `).join("")
    : `<div class="empty-tab-state"><i class="fa-solid fa-receipt"></i><p>No transactions yet.</p></div>`;

  panel.innerHTML = `
    <div class="wallet-balance-card">
      <span class="wallet-balance-label"><i class="fa-solid fa-wallet"></i> CraveCash Balance</span>
      <span class="wallet-balance-amount">₹${state.wallet.balance}</span>
    </div>
    <div class="wallet-quick-amounts">
      <button type="button" class="btn btn-ghost btn-sm" onclick="addMoneyToWallet(100)">+ ₹100</button>
      <button type="button" class="btn btn-ghost btn-sm" onclick="addMoneyToWallet(200)">+ ₹200</button>
      <button type="button" class="btn btn-ghost btn-sm" onclick="addMoneyToWallet(500)">+ ₹500</button>
    </div>
    <h4 style="font-size:14px; margin:20px 0 10px; color:var(--muted-1);">Recent Transactions</h4>
    <div class="wallet-tx-list">${txHtml}</div>
  `;
}

function addMoneyToWallet(amount) {
  state.wallet.balance += amount;
  state.wallet.transactions.push({
    id: "tx-" + Date.now(),
    type: "credit",
    amount,
    note: "Added to CraveCash",
    date: new Date().toLocaleDateString([], { day: "2-digit", month: "short", year: "numeric" })
  });
  localStorage.setItem("craverush_wallet", JSON.stringify(state.wallet));
  showToast(`₹${amount} added to your wallet! 💰`);
  renderWalletTab();
}

// Logs the current user out, clears saved session, and refreshes the UI.
function logoutUser() {
  state.user = null;
  localStorage.removeItem("craverush_user");

  updateUserUI();
  closeModal("auth-modal");
  showToast("You've been logged out. See you soon! 👋");
}

function switchAuthTab(tab) {
  const signinForm = document.getElementById("signin-form");
  const signupForm = document.getElementById("signup-form");
  const tabBtns = document.querySelectorAll(".auth-tab");

  tabBtns.forEach(btn => btn.classList.remove("active"));
  if (tab === "signin") {
    tabBtns[0].classList.add("active");
    if (signinForm) signinForm.style.display = "block";
    if (signupForm) signupForm.style.display = "none";
  } else {
    tabBtns[1].classList.add("active");
    if (signinForm) signinForm.style.display = "none";
    if (signupForm) signupForm.style.display = "block";
  }
}

function getAccounts() {
  try { return JSON.parse(localStorage.getItem("craverush_accounts")) || []; } catch (e) { return []; }
}
function saveAccounts(list) { localStorage.setItem("craverush_accounts", JSON.stringify(list)); }
// Simple (demo-only) password obfuscation - there is no backend, so this just
// avoids storing the raw password text in localStorage.
function hashPassword(pw) { return btoa(unescape(encodeURIComponent("cr::" + pw))); }

function handleSignIn(e) {
  e.preventDefault();
  const id = document.getElementById("signin-email").value.trim().toLowerCase();
  const pwInput = e.target.querySelector('input[type="password"]');
  const pw = pwInput ? pwInput.value : "";
  const account = getAccounts().find(a => a.email.toLowerCase() === id || (a.phone && a.phone === id.replace(/\D/g, "").slice(-10)));
  if (!account) {
    showToast("No account found with that email/phone. Please sign up first.");
    return;
  }
  if (account.password !== hashPassword(pw)) {
    showToast("Incorrect password. Please try again.");
    return;
  }
  state.user = { name: account.name, email: account.email, phone: account.phone || "", cravePass: account.cravePass || null };
  localStorage.setItem("craverush_user", JSON.stringify(state.user));
  if (pwInput) pwInput.value = "";
  updateUserUI();
  renderAuthModal();
  closeModal("auth-modal");
  showToast(`Welcome back, ${account.name}! 👋`);
  updateCartUI();
}

function handleSignUp(e) {
  e.preventDefault();
  const name = document.getElementById("signup-name").value.trim();
  const email = document.getElementById("signup-email").value.trim();
  const phoneEl = document.getElementById("signup-phone");
  const phone = phoneEl ? phoneEl.value.replace(/\D/g, "").slice(-10) : "";
  const pwInput = e.target.querySelector('input[type="password"]');
  const pw = pwInput ? pwInput.value : "";

  if (name.length < 2) { showToast("Please enter your full name."); return; }
  if (!/^\d{10}$/.test(phone)) { showToast("Please enter a valid 10-digit mobile number."); return; }
  if (pw.length < 6) { showToast("Password must be at least 6 characters."); return; }
  const accounts = getAccounts();
  if (accounts.some(a => a.email.toLowerCase() === email.toLowerCase())) {
    showToast("An account with this email already exists. Please sign in.");
    switchAuthTab("signin");
    return;
  }
  accounts.push({ name, email, phone, password: hashPassword(pw), cravePass: null });
  saveAccounts(accounts);

  state.user = { name, email, phone, cravePass: null };
  localStorage.setItem("craverush_user", JSON.stringify(state.user));
  if (pwInput) pwInput.value = "";
  updateUserUI();
  renderAuthModal();
  closeModal("auth-modal");
  showToast(`Account created! Welcome to CraveRush, ${name}! 🎉`);
}

// ---------- ABOUT PAGE ---------- //
// Kept for backward compatibility - "About Us" is now its own full page.
function openAboutModal() {
  window.location.href = "about.html";
}

// ---------- HELPER UTILITIES ---------- //

function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

function toggleCartDrawer(open) {
  if (cartDrawer && cartOverlay) {
    if (open) {
      cartDrawer.classList.add("active");
      cartOverlay.classList.add("active");
      document.body.style.overflow = "hidden";
    } else {
      cartDrawer.classList.remove("active");
      cartOverlay.classList.remove("active");
      document.body.style.overflow = "";
    }
  }
}

function showToast(message) {
  if (!toastContainer) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<i class="fa-solid fa-bag-shopping"></i> <span>${message}</span>`;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(-16px)";
    setTimeout(() => toast.remove(), 350);
  }, 3000);
}

// ---------- GLOBAL SEARCH SUGGESTIONS ---------- //

// Renders up to a handful of matching restaurants + dishes in the live dropdown
// under the nav search box, so a search works no matter which page it started on.
function renderSearchDropdown(rawQuery) {
  const dropdown = document.getElementById("search-results-dropdown");
  if (!dropdown) return;

  const query = rawQuery.trim().toLowerCase();
  if (!query) {
    dropdown.classList.remove("active");
    dropdown.innerHTML = "";
    return;
  }

  const matchedRestaurants = RESTAURANTS.filter(r =>
    r.name.toLowerCase().includes(query) || r.cuisines.toLowerCase().includes(query)
  ).slice(0, 3);

  const matchedDishes = DISHES.filter(d =>
    d.name.toLowerCase().includes(query) ||
    d.restaurantName.toLowerCase().includes(query) ||
    d.category.toLowerCase().includes(query)
  ).slice(0, 5);

  if (matchedRestaurants.length === 0 && matchedDishes.length === 0) {
    dropdown.innerHTML = `
      <div class="search-empty">
        <i class="fa-solid fa-magnifying-glass"></i>
        <span>No matches for "${rawQuery}"</span>
      </div>
    `;
    dropdown.classList.add("active");
    return;
  }

  let html = "";

  if (matchedRestaurants.length > 0) {
    html += `<div class="search-group-label">Restaurants</div>`;
    html += matchedRestaurants.map(r => `
      <div class="search-result-row" onclick="goToRestaurant('${r.id}')">
        <img src="${r.image}" alt="${r.name}" onerror="this.onerror=null;this.src='${FALLBACK_IMG}';">
        <div class="search-result-info">
          <strong>${r.name}</strong>
          <span>${r.cuisines}</span>
        </div>
        <i class="fa-solid fa-chevron-right"></i>
      </div>
    `).join("");
  }

  if (matchedDishes.length > 0) {
    html += `<div class="search-group-label">Dishes</div>`;
    html += matchedDishes.map(d => `
      <div class="search-result-row" onclick="goToDish('${d.id}')">
        <img src="${d.image}" alt="${d.name}" onerror="this.onerror=null;this.src='${FALLBACK_IMG}';">
        <div class="search-result-info">
          <strong>${d.name}</strong>
          <span>${d.restaurantName} • ₹${d.price}</span>
        </div>
        <i class="fa-solid fa-chevron-right"></i>
      </div>
    `).join("");
  }

  dropdown.innerHTML = html;
  dropdown.classList.add("active");
}

// Deep-links to a specific dish on the full catalog page, from anywhere on the site.
function goToDish(dishId) {
  window.location.href = "menu.html?dish=" + encodeURIComponent(dishId);
}

// Deep-links to a specific restaurant's menu modal, from anywhere on the site.
function goToRestaurant(restaurantId) {
  window.location.href = "restaurants.html?rest=" + encodeURIComponent(restaurantId);
}

// Honors ?dish=, ?rest=, or ?q= in the URL so search results and header links
// actually land the user on what they were looking for. Dish deep-links only
// act on menu.html (Food Items); restaurant deep-links only act on
// restaurants.html — each branch is guarded independently so this is safe to
// call on every page.
function handleSearchDeepLink() {
  const params = new URLSearchParams(window.location.search);
  const dishId = params.get("dish");
  const restId = params.get("rest");
  const q = params.get("q");

  if (dishId && document.getElementById("dish-container")) {
    const dish = DISHES.find(d => d.id === dishId);
    if (dish) {
      state.searchQuery = dish.name;
      state.activeDishCategory = "All items";
      const searchInput = document.getElementById("global-search");
      if (searchInput) searchInput.value = dish.name;
      document.querySelectorAll(".cat-pill").forEach(p => p.classList.remove("active"));
      const allPill = document.querySelector('.cat-pill[data-cat="All items"]');
      if (allPill) allPill.classList.add("active");
      renderDishes();

      setTimeout(() => {
        const card = document.querySelector(`[data-dish-id="${dishId}"]`);
        if (card) {
          card.scrollIntoView({ behavior: "smooth", block: "center" });
          card.classList.add("search-highlight");
          setTimeout(() => card.classList.remove("search-highlight"), 2200);
        }
      }, 100);
    }
  } else if (restId) {
    openRestaurantMenu(restId);
    setTimeout(() => {
      const card = document.getElementById("restaurant-container")?.closest("section");
      if (card) card.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  } else if (q) {
    state.searchQuery = q;
    const searchInput = document.getElementById("global-search");
    if (searchInput) searchInput.value = q;
    renderRestaurants();
    renderDishes();
  }
}

// ---------- EVENT LISTENERS SETUP ---------- //

function setupEventListeners() {
  // Cart Drawer open/close
  const openCartBtn = document.getElementById("open-cart-btn");
  const closeCartBtn = document.getElementById("close-cart-btn");

  if (openCartBtn) openCartBtn.addEventListener("click", () => toggleCartDrawer(true));
  if (closeCartBtn) closeCartBtn.addEventListener("click", () => toggleCartDrawer(false));
  if (cartOverlay) cartOverlay.addEventListener("click", () => toggleCartDrawer(false));

  // Global Search toggle (icon button reveals the search panel/input)
  const searchToggle = document.getElementById("nav-search-toggle");
  const searchPanel = document.getElementById("nav-search-panel");
  if (searchToggle && searchPanel) {
    searchToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const willOpen = !searchPanel.classList.contains("active");
      searchPanel.classList.toggle("active", willOpen);
      searchToggle.classList.toggle("active", willOpen);
      if (willOpen) {
        const input = document.getElementById("global-search");
        if (input) setTimeout(() => input.focus(), 50);
      }
    });
  }

  // Global Search input (with live suggestions dropdown)
  const searchInput = document.getElementById("global-search");
  const searchDropdown = document.getElementById("search-results-dropdown");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value;
      state.searchQuery = query;

      // A search should never be silently hidden behind a stale category
      // filter — if the user is searching, show matches across all categories.
      if (query.trim() !== "") {
        state.activeDishCategory = "All items";
        document.querySelectorAll(".cat-pill").forEach(p => p.classList.remove("active"));
        const allPill = document.querySelector('.cat-pill[data-cat="All items"]');
        if (allPill) allPill.classList.add("active");
      }

      renderRestaurants();
      renderDishes();
      renderSearchDropdown(query);
    });

    searchInput.addEventListener("focus", () => renderSearchDropdown(searchInput.value));

    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        searchInput.blur();
        if (searchDropdown) searchDropdown.classList.remove("active");
        if (searchPanel) searchPanel.classList.remove("active");
        if (searchToggle) searchToggle.classList.remove("active");
      } else if (e.key === "Enter") {
        e.preventDefault();
        const query = searchInput.value.trim();
        if (!query) return;
        // If we're not already on the full catalog page, jump there with the search applied.
        if (!document.getElementById("dish-container") && !document.getElementById("restaurant-container")) {
          window.location.href = "menu.html?q=" + encodeURIComponent(query);
        } else if (searchDropdown) {
          searchDropdown.classList.remove("active");
        }
      }
    });

    // Close the dropdown (and the search panel itself) when clicking anywhere outside.
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".nav-search")) {
        if (searchDropdown) searchDropdown.classList.remove("active");
        if (searchPanel) searchPanel.classList.remove("active");
        if (searchToggle) searchToggle.classList.remove("active");
      }
    });
  }

  // Category Pills
  const catPills = document.querySelectorAll(".cat-pill");
  catPills.forEach(pill => {
    pill.addEventListener("click", () => {
      catPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      state.activeDishCategory = pill.dataset.cat || "All items";
      renderDishes();
    });
  });

  // Veg/Non-Veg Filter (dropdown in the menu filter bar)
  const vegToggle = document.getElementById("veg-toggle");
  if (vegToggle) {
    vegToggle.value = state.activeVegFilter;
    vegToggle.addEventListener("change", (e) => {
      applyVegFilter(e.target.value);
    });
  }

  // Sync the header veg-only switch with any saved preference on load
  syncVegSwitch(state.activeVegFilter);

  // Show the delivery address that was saved from a previous visit
  updateLocationUI();
}

// ---------- VEG / NON-VEG PREFERENCE ---------- //

// Called by the header's Veg-Only switch (on = veg only, off = show all).
function toggleVegOnly(isChecked) {
  applyVegFilter(isChecked ? "veg" : "all");
}

// Single source of truth for changing the veg/non-veg preference -
// keeps the header switch and the menu-page dropdown in sync.
function applyVegFilter(filter) {
  state.activeVegFilter = filter;

  syncVegSwitch(filter);

  const vegSelect = document.getElementById("veg-toggle");
  if (vegSelect) vegSelect.value = filter;

  renderDishes();
}

// The header switch is binary (Veg Only on/off), so it reflects "veg"
// as checked and both "all" and "nonveg" as unchecked.
function syncVegSwitch(filter) {
  const vegSwitch = document.getElementById("veg-only-toggle");
  if (vegSwitch) vegSwitch.checked = filter === "veg";
}

// ---------- DELIVERY ADDRESS ---------- //

// Picking a saved/popular address from the location modal.
function setLocation(address) {
  state.location = address;
  localStorage.setItem("craverush_location", address);

  updateLocationUI();
  closeModal("location-modal");
  showToast(`Delivery location set to ${address}`);
}

// Typing a custom address into the location modal's input field.
function selectCustomLocation() {
  const input = document.getElementById("custom-location-input");
  if (!input) return;

  const value = input.value.trim();
  if (!value) {
    showToast("Please enter an address, sector, or landmark");
    return;
  }

  setLocation(value);
  input.value = "";
}

// Reflects the saved delivery address in the header on every page.
function updateLocationUI() {
  const label = document.getElementById("current-location-text");
  if (label) label.textContent = state.location;
}


/* =====================================================================
   EXTRAS — added to make every button, form and link fully functional
   (pure JavaScript, no frameworks)
   ===================================================================== */

// ---------- SMALL HELPERS ---------- //

function isCravePassActive() {
  const p = state.user && state.user.cravePass;
  return !!(p && p.expires && new Date(p.expires) > new Date());
}

function sortItems(list, mode) {
  const num = v => parseFloat(String(v).replace(/[^\d.]/g, "")) || 0;
  if (mode === "price-asc") list.sort((a, b) => num(a.price) - num(b.price));
  else if (mode === "price-desc") list.sort((a, b) => num(b.price) - num(a.price));
  else if (mode === "rating") list.sort((a, b) => num(b.rating) - num(a.rating));
  else if (mode === "time") list.sort((a, b) => num(a.time) - num(b.time));
  else if (mode === "name") list.sort((a, b) => a.name.localeCompare(b.name));
  return list;
}

// Generic popup (reuses the site's modal styling) for bills, forms, etc.
function openInfoModal(title, bodyHtml) {
  let modal = document.getElementById("cr-info-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "cr-info-modal";
    modal.className = "modal-overlay";
    modal.addEventListener("click", e => { if (e.target === modal) closeModal("cr-info-modal"); });
    document.body.appendChild(modal);
  }
  modal.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h3>${title}</h3>
        <button class="close-btn" onclick="closeModal('cr-info-modal')" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
      </div>
      <div class="modal-body">${bodyHtml}</div>
    </div>`;
  openModal("cr-info-modal");
}

function saveList(key, item) {
  let list = [];
  try { list = JSON.parse(localStorage.getItem(key)) || []; } catch (e) { list = []; }
  list.push({ ...item, at: new Date().toISOString() });
  localStorage.setItem(key, JSON.stringify(list));
}

function isEmail(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v); }

// ---------- CART EXTRAS ---------- //

function removeFromCart(dishId) {
  state.cart = state.cart.filter(i => i.id !== dishId);
  showToast("Removed from bag.");
  refreshAfterCartChange();
}

function clearCart() {
  if (!state.cart.length) return;
  state.cart = [];
  state.appliedCoupon = null;
  localStorage.removeItem("craverush_coupon");
  showToast("Your bag has been cleared.");
  refreshAfterCartChange();
}

function removeCoupon() {
  state.appliedCoupon = null;
  localStorage.removeItem("craverush_coupon");
  showToast("Coupon removed.");
  refreshAfterCartChange();
}

function refreshAfterCartChange() {
  updateCartUI();
  renderDishes();
  renderHomeHighlights();
  if (document.getElementById("checkout-form")) {
    if (state.cart.length === 0) { window.location.href = "menu.html"; return; }
    renderCheckoutSummary();
  }
  const m = document.getElementById("restaurant-menu-modal");
  if (m && m.classList.contains("active")) {
    const label = document.querySelector("#restaurant-menu-content .modal-header h3");
    const r = label && RESTAURANTS.find(x => x.name === label.textContent);
    if (r) openRestaurantMenu(r.id);
  }
}

// ---------- CHECKOUT: PAYMENT DETAILS ---------- //

function injectPaymentUI() {
  const grid = document.querySelector('input[name="payment-method"]');
  if (!grid || document.getElementById("payment-detail-panel")) return;
  const optionGrid = grid.closest(".option-grid");

  // CraveCash wallet option
  const walletCard = document.createElement("label");
  walletCard.className = "option-card";
  walletCard.innerHTML = `
    <input type="radio" name="payment-method" value="wallet">
    <span class="option-card-title"><i class="fa-solid fa-wallet"></i> CraveCash Wallet</span>
    <span class="option-card-sub" id="wallet-option-sub">Balance: ₹${state.wallet.balance}</span>`;
  optionGrid.appendChild(walletCard);
  optionGrid.classList.remove("cols-3");
  optionGrid.classList.add("cols-4");

  const panel = document.createElement("div");
  panel.id = "payment-detail-panel";
  panel.className = "payment-detail-panel";
  optionGrid.parentNode.appendChild(panel);

  document.querySelectorAll('input[name="payment-method"]').forEach(i =>
    i.addEventListener("change", renderPaymentPanel));
  renderPaymentPanel();
}

function renderPaymentPanel() {
  const panel = document.getElementById("payment-detail-panel");
  if (!panel) return;
  const method = getSelectedRadioValue("payment-method", "cod");
  const keep = id => { const el = document.getElementById(id); return el ? el.value : ""; };

  if (method === "upi") {
    panel.innerHTML = `
      <label for="pay-upi-id">UPI ID</label>
      <input type="text" id="pay-upi-id" class="form-control" placeholder="yourname@okhdfcbank" autocomplete="off" value="${escapeHtml(keep("pay-upi-id"))}">
      <small>Example: 9876543210@paytm, name@oksbi</small>`;
  } else if (method === "card") {
    panel.innerHTML = `
      <div class="pay-card-grid">
        <div class="pay-full"><label for="pay-card-number">Card number</label>
          <input type="text" id="pay-card-number" class="form-control" inputmode="numeric" placeholder="1234 5678 9012 3456" maxlength="19" autocomplete="off"></div>
        <div class="pay-full"><label for="pay-card-name">Name on card</label>
          <input type="text" id="pay-card-name" class="form-control" placeholder="As printed on card" autocomplete="off"></div>
        <div><label for="pay-card-expiry">Expiry</label>
          <input type="text" id="pay-card-expiry" class="form-control" inputmode="numeric" placeholder="MM/YY" maxlength="5" autocomplete="off"></div>
        <div><label for="pay-card-cvv">CVV</label>
          <input type="password" id="pay-card-cvv" class="form-control" inputmode="numeric" placeholder="•••" maxlength="4" autocomplete="off"></div>
      </div>
      <small>Demo site: no real payment is taken and card details are never saved.</small>`;
    const num = document.getElementById("pay-card-number");
    num.addEventListener("input", () => {
      const d = num.value.replace(/\D/g, "").slice(0, 16);
      num.value = d.replace(/(.{4})/g, "$1 ").trim();
    });
    const exp = document.getElementById("pay-card-expiry");
    exp.addEventListener("input", () => {
      let d = exp.value.replace(/\D/g, "").slice(0, 4);
      if (d.length >= 3) d = d.slice(0, 2) + "/" + d.slice(2);
      exp.value = d;
    });
    const cvv = document.getElementById("pay-card-cvv");
    cvv.addEventListener("input", () => { cvv.value = cvv.value.replace(/\D/g, ""); });
  } else if (method === "wallet") {
    const total = computeCheckoutTotals(getSelectedRadioValue("delivery-speed", "standard")).total;
    const enough = state.wallet.balance >= total;
    panel.innerHTML = `
      <p class="wallet-pay-line">CraveCash balance: <strong>₹${state.wallet.balance}</strong> &nbsp;•&nbsp; Order total: <strong>₹${total}</strong></p>
      ${enough ? `<small>₹${total} will be deducted from your wallet.</small>`
               : `<small class="pay-error">Not enough balance. Add money below or choose another method.</small>
                  <div class="wallet-quick-amounts" style="margin-top:10px;">
                    <button type="button" class="btn btn-ghost btn-sm" onclick="topUpFromCheckout(100)">+ ₹100</button>
                    <button type="button" class="btn btn-ghost btn-sm" onclick="topUpFromCheckout(200)">+ ₹200</button>
                    <button type="button" class="btn btn-ghost btn-sm" onclick="topUpFromCheckout(500)">+ ₹500</button>
                  </div>`}`;
  } else {
    panel.innerHTML = `<small>Pay in cash (or scan the rider's QR code) when your order arrives.</small>`;
  }
}

function topUpFromCheckout(amount) {
  addMoneyToWallet(amount);
  const sub = document.getElementById("wallet-option-sub");
  if (sub) sub.textContent = `Balance: ₹${state.wallet.balance}`;
  renderPaymentPanel();
}

function luhnValid(num) {
  let sum = 0, alt = false;
  for (let i = num.length - 1; i >= 0; i--) {
    let n = parseInt(num[i], 10);
    if (alt) { n *= 2; if (n > 9) n -= 9; }
    sum += n; alt = !alt;
  }
  return sum % 10 === 0;
}

// Returns {label} when the chosen payment method is valid, otherwise shows a toast and returns null.
function validatePaymentDetails() {
  const method = getSelectedRadioValue("payment-method", "cod");
  if (method === "cod") return { label: "Cash on Delivery" };

  if (method === "upi") {
    const id = (document.getElementById("pay-upi-id") || {}).value || "";
    if (!/^[\w.\-]+@[a-zA-Z]{2,}$/.test(id.trim())) {
      showToast("Please enter a valid UPI ID (e.g. name@okhdfcbank).");
      const el = document.getElementById("pay-upi-id"); if (el) el.focus();
      return null;
    }
    return { label: "UPI • " + id.trim() };
  }

  if (method === "card") {
    const num = ((document.getElementById("pay-card-number") || {}).value || "").replace(/\s/g, "");
    const name = ((document.getElementById("pay-card-name") || {}).value || "").trim();
    const exp = ((document.getElementById("pay-card-expiry") || {}).value || "").trim();
    const cvv = ((document.getElementById("pay-card-cvv") || {}).value || "").trim();
    if (!/^\d{16}$/.test(num) || !luhnValid(num)) { showToast("Please enter a valid 16-digit card number."); return null; }
    if (name.length < 2) { showToast("Please enter the name on the card."); return null; }
    const m = exp.match(/^(\d{2})\/(\d{2})$/);
    if (!m || +m[1] < 1 || +m[1] > 12) { showToast("Please enter the expiry as MM/YY."); return null; }
    const now = new Date();
    const expDate = new Date(2000 + +m[2], +m[1], 0, 23, 59);
    if (expDate < now) { showToast("This card has expired."); return null; }
    if (!/^\d{3,4}$/.test(cvv)) { showToast("Please enter a valid CVV."); return null; }
    return { label: "Card • •••• " + num.slice(-4) };
  }

  if (method === "wallet") return { label: "CraveCash Wallet" };
  return { label: method };
}

// Add the wallet option + detail panel to the checkout page before it initialises.
if (typeof initCheckoutPage === "function") {
  const _origInitCheckout = initCheckoutPage;
  initCheckoutPage = function () {
    injectPaymentUI();
    _origInitCheckout();
    // keep the wallet panel's "order total" in step with the delivery speed
    document.querySelectorAll('input[name="delivery-speed"]').forEach(i =>
      i.addEventListener("change", () => { if (getSelectedRadioValue("payment-method") === "wallet") renderPaymentPanel(); }));
  };
}

// ---------- ORDERS: CANCEL / BILL / CLEAR HISTORY ---------- //

function cancelOrder(orderId) {
  const order = state.activeOrder;
  if (!order || order.orderId !== orderId) { showToast("This order can no longer be cancelled."); return; }
  if (order.statusStep > 2) { showToast("Your order is already on the way and can't be cancelled."); return; }
  if (!confirm("Cancel this order?")) return;

  if (order.paymentMethod === "wallet") {
    state.wallet.balance += order.total;
    state.wallet.transactions.push({
      id: "tx-" + Date.now(), type: "credit", amount: order.total, note: "Refund for cancelled order " + order.orderId,
      date: new Date().toLocaleDateString([], { day: "2-digit", month: "short", year: "numeric" })
    });
    localStorage.setItem("craverush_wallet", JSON.stringify(state.wallet));
  }

  order.cancelled = true;
  order.statusStep = 1;
  const inHistory = state.orderHistory.find(o => o.orderId === orderId);
  if (inHistory) { inHistory.cancelled = true; inHistory.statusStep = 1; }
  localStorage.setItem("craverush_order_history", JSON.stringify(state.orderHistory));

  if (state.trackingTimer) clearInterval(state.trackingTimer);
  state.activeOrder = null;
  localStorage.removeItem("craverush_active_order");
  closeModal("tracking-modal");
  showToast(order.paymentMethod === "wallet" ? "Order cancelled. Refunded to CraveCash." : "Order cancelled.");
  renderOrdersPage();
}

function viewOrderBill(orderId) {
  const order = state.orderHistory.find(o => o.orderId === orderId) ||
                (state.activeOrder && state.activeOrder.orderId === orderId ? state.activeOrder : null);
  if (!order) { showToast("Sorry, we couldn't find that order."); return; }
  const row = (a, b, cls = "") => `<div class="bill-row ${cls}"><span>${a}</span><span>${b}</span></div>`;
  const pay = { cod: "Cash on Delivery", upi: "UPI", card: "Card", wallet: "CraveCash Wallet" }[order.paymentMethod] || order.paymentMethod;
  const a = order.address || {};
  openInfoModal("Order #" + escapeHtml(order.orderId), `
    <p style="font-size:13px; color:var(--muted-3); margin-bottom:14px;">${escapeHtml(order.placedOn || "")} • ${escapeHtml(order.placedAt || "")}${order.cancelled ? " • <strong style='color:var(--chili)'>Cancelled</strong>" : ""}</p>
    ${order.items.map(i => row(`${i.quantity} × ${escapeHtml(i.name)}`, "₹" + i.price * i.quantity)).join("")}
    <div style="margin-top:12px;">
      ${row("Subtotal", "₹" + order.subtotal)}
      ${order.discount ? row("Promo discount", "-₹" + order.discount, "discount") : ""}
      ${row("Delivery fee", order.deliveryFee ? "₹" + order.deliveryFee : "FREE")}
      ${row("Platform fee", "₹" + order.platformFee)}
      ${row("Taxes & GST", "₹" + order.taxes)}
      ${row("Total", "₹" + order.total, "total")}
    </div>
    <p style="font-size:13px; color:var(--muted-1); margin-top:14px;"><strong>Paid via:</strong> ${escapeHtml(order.paymentDetail || pay)}</p>
    ${a.house ? `<p style="font-size:13px; color:var(--muted-1); margin-top:6px;"><strong>Deliver to:</strong> ${escapeHtml(a.fullName)}, ${escapeHtml(a.house)}, ${escapeHtml(a.street)}, ${escapeHtml(a.city)} ${escapeHtml(a.pincode)}</p>` : ""}
    <button type="button" class="btn btn-ghost" style="width:100%; margin-top:16px;" onclick="window.print()"><i class="fa-solid fa-print"></i> Print bill</button>`);
}

function clearOrderHistory() {
  const past = state.orderHistory.filter(o => !state.activeOrder || o.orderId !== state.activeOrder.orderId);
  if (!past.length) { showToast("There are no previous orders to clear."); return; }
  if (!confirm("Delete all previous orders? This cannot be undone.")) return;
  state.orderHistory = state.activeOrder ? state.orderHistory.filter(o => o.orderId === state.activeOrder.orderId) : [];
  localStorage.setItem("craverush_order_history", JSON.stringify(state.orderHistory));
  renderOrdersPage();
  showToast("Order history cleared.");
}

function setupOrdersExtras() {
  const root = document.getElementById("orders-page-root");
  const hist = document.getElementById("order-history-container");
  if (!root || !hist || document.getElementById("clear-history-btn")) return;
  const btn = document.createElement("button");
  btn.id = "clear-history-btn";
  btn.type = "button";
  btn.className = "btn btn-ghost btn-sm";
  btn.style.marginTop = "14px";
  btn.innerHTML = '<i class="fa-regular fa-trash-can"></i> Clear order history';
  btn.addEventListener("click", clearOrderHistory);
  hist.parentNode.appendChild(btn);
}

// ---------- RESTAURANTS / MENU: FILTERS & SORT ---------- //

function buildToolbar(sortOptions, onSort, current) {
  const sel = document.createElement("select");
  sel.className = "form-control sort-select";
  sel.setAttribute("aria-label", "Sort");
  sel.innerHTML = sortOptions.map(([v, l]) => `<option value="${v}">${l}</option>`).join("");
  sel.value = current || "default";
  sel.addEventListener("change", () => onSort(sel.value));
  return sel;
}

function setupRestaurantExtras() {
  const grid = document.getElementById("restaurant-container");
  if (!grid || document.getElementById("restaurant-toolbar")) return;
  const bar = document.createElement("div");
  bar.id = "restaurant-toolbar";
  bar.className = "catalog-toolbar";

  const pills = document.createElement("div");
  pills.className = "category-bar";
  pills.style.marginBottom = "0";
  const cats = ["all", ...new Set(RESTAURANTS.map(r => r.category))];
  pills.innerHTML = cats.map(c => `<span class="cat-pill ${c === state.activeRestaurantFilter ? "active" : ""}" data-rcat="${c}">${c === "all" ? "All" : c}</span>`).join("");
  pills.addEventListener("click", e => {
    const p = e.target.closest(".cat-pill");
    if (!p) return;
    pills.querySelectorAll(".cat-pill").forEach(x => x.classList.remove("active"));
    p.classList.add("active");
    state.activeRestaurantFilter = p.dataset.rcat;
    renderRestaurants();
  });

  const sort = buildToolbar(
    [["default", "Sort: Recommended"], ["rating", "Rating: High to Low"], ["time", "Fastest Delivery"], ["name", "Name: A to Z"]],
    v => { state.restaurantSort = v; renderRestaurants(); }, state.restaurantSort);

  bar.appendChild(pills);
  bar.appendChild(sort);
  grid.parentNode.insertBefore(bar, grid);
}

function setupMenuExtras() {
  const veg = document.getElementById("veg-toggle");
  if (!veg || document.getElementById("dish-sort")) return;
  const sort = buildToolbar(
    [["default", "Sort: Recommended"], ["price-asc", "Price: Low to High"], ["price-desc", "Price: High to Low"], ["rating", "Rating: High to Low"], ["time", "Fastest Prep"], ["name", "Name: A to Z"]],
    v => { state.dishSort = v; renderDishes(); }, state.dishSort);
  sort.id = "dish-sort";
  veg.parentNode.appendChild(sort);
}

// ---------- HOMEPAGE: PROMOS, PARTNER FORMS, NEWSLETTER, APP LINKS ---------- //

function setupPromoPills() {
  document.querySelectorAll(".code-pill").forEach(pill => {
    pill.style.cursor = "pointer";
    pill.title = "Click to apply this code";
    pill.addEventListener("click", () => {
      const code = pill.textContent.trim().toUpperCase();
      if (navigator.clipboard) navigator.clipboard.writeText(code).catch(() => {});
      if (couponInput) couponInput.value = code;
      if (state.cart.length === 0) { showToast(`Code ${code} copied! Add food to your bag, then apply it.`); return; }
      applyCoupon();
    });
  });
}

const PARTNER_FORMS = {
  restaurant: {
    title: "Add your restaurant",
    fields: [["Restaurant name", "text", "e.g. Sharma Sweets"], ["Owner name", "text", "Your full name"], ["Phone", "tel", "10-digit mobile"], ["Email", "email", "name@domain.com"], ["City", "text", "e.g. Chandigarh"]],
    key: "craverush_partner_restaurants", ok: "Thanks! Our partnerships team will call you within 2 working days. 🍽️"
  },
  rider: {
    title: "Become a rider",
    fields: [["Full name", "text", "Your full name"], ["Phone", "tel", "10-digit mobile"], ["City", "text", "e.g. Chandigarh"], ["Vehicle", "select", ["Electric scooter", "Bicycle", "Motorbike"]]],
    key: "craverush_rider_applications", ok: "Application received! We'll contact you for onboarding. 🛵"
  },
  business: {
    title: "CraveRush for Business",
    fields: [["Company name", "text", "e.g. Acme Pvt Ltd"], ["Contact person", "text", "Your full name"], ["Work email", "email", "name@company.com"], ["Phone", "tel", "10-digit mobile"], ["Team size", "select", ["1-20", "21-100", "101-500", "500+"]]],
    key: "craverush_business_leads", ok: "Thanks! Our corporate team will reach out shortly. 💼"
  }
};

function openPartnerForm(type) {
  const cfg = PARTNER_FORMS[type];
  if (!cfg) return;
  const fields = cfg.fields.map(([label, kind, hint], i) => {
    const id = `pf-${i}`;
    const input = kind === "select"
      ? `<select id="${id}" class="form-control">${hint.map(o => `<option>${o}</option>`).join("")}</select>`
      : `<input type="${kind}" id="${id}" class="form-control" placeholder="${hint}" autocomplete="off">`;
    return `<div class="form-group"><label for="${id}">${label}</label>${input}</div>`;
  }).join("");
  openInfoModal(cfg.title, `<form id="partner-form" novalidate>${fields}<button type="submit" class="btn btn-solid" style="width:100%; margin-top:6px;">Submit</button></form>`);
  document.getElementById("partner-form").addEventListener("submit", e => {
    e.preventDefault();
    const data = {};
    for (let i = 0; i < cfg.fields.length; i++) {
      const [label, kind] = cfg.fields[i];
      const v = document.getElementById(`pf-${i}`).value.trim();
      if (!v) { showToast(`Please fill in: ${label}`); return; }
      if (kind === "email" && !isEmail(v)) { showToast("Please enter a valid email address."); return; }
      if (kind === "tel" && !/^\d{10}$/.test(v.replace(/\D/g, "").slice(-10))) { showToast("Please enter a valid 10-digit phone number."); return; }
      data[label] = v;
    }
    saveList(cfg.key, data);
    closeModal("cr-info-modal");
    showToast(cfg.ok);
  });
}

function setupHomeExtras() {
  document.querySelectorAll("[data-partner]").forEach(a =>
    a.addEventListener("click", e => { e.preventDefault(); openPartnerForm(a.dataset.partner); }));

  document.querySelectorAll("[data-app]").forEach(a =>
    a.addEventListener("click", e => {
      e.preventDefault();
      showToast(`The ${a.dataset.app} app is coming soon — you'll be first to know! 📱`);
    }));

  // Logo "#" links: scroll to top instead of jumping/reloading
  document.querySelectorAll('a.logo[href="#"]').forEach(a =>
    a.addEventListener("click", e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }));

  // Newsletter box in the footer
  const brand = document.querySelector(".footer-brand");
  if (brand && !document.getElementById("newsletter-form")) {
    const f = document.createElement("form");
    f.id = "newsletter-form";
    f.className = "newsletter-form";
    f.noValidate = true;
    f.innerHTML = `<input type="email" id="newsletter-email" placeholder="Your email for offers" aria-label="Email for offers"><button type="submit">Subscribe</button>`;
    f.addEventListener("submit", e => {
      e.preventDefault();
      const v = document.getElementById("newsletter-email").value.trim();
      if (!isEmail(v)) { showToast("Please enter a valid email address."); return; }
      const subs = JSON.parse(localStorage.getItem("craverush_newsletter") || "[]");
      if (subs.includes(v.toLowerCase())) { showToast("You're already subscribed. 😊"); return; }
      subs.push(v.toLowerCase());
      localStorage.setItem("craverush_newsletter", JSON.stringify(subs));
      f.reset();
      showToast("Subscribed! Use WELCOME100 on your first order. 🎁");
    });
    brand.appendChild(f);
  }
}

// ---------- ABOUT PAGE: FAQ, CONTACT, CRAVEPASS ---------- //

function setupAboutExtras() {
  const faq = document.getElementById("faq-list");
  if (faq) {
    faq.addEventListener("click", e => {
      const q = e.target.closest(".faq-q");
      if (!q) return;
      const item = q.parentElement;
      const open = item.classList.contains("open");
      faq.querySelectorAll(".faq-item.open").forEach(i => i.classList.remove("open"));
      if (!open) item.classList.add("open");
    });
    const search = document.getElementById("faq-search");
    if (search) search.addEventListener("input", () => {
      const q = search.value.trim().toLowerCase();
      let shown = 0;
      faq.querySelectorAll(".faq-item").forEach(i => {
        const hit = !q || i.textContent.toLowerCase().includes(q);
        i.style.display = hit ? "" : "none";
        if (hit) shown++;
      });
      document.getElementById("faq-empty").style.display = shown ? "none" : "block";
    });
  }

  const form = document.getElementById("contact-form");
  if (form) {
    if (state.user) {
      document.getElementById("contact-name").value = state.user.name || "";
      document.getElementById("contact-email").value = state.user.email || "";
    }
    form.addEventListener("submit", e => {
      e.preventDefault();
      const name = document.getElementById("contact-name").value.trim();
      const email = document.getElementById("contact-email").value.trim();
      const topic = document.getElementById("contact-topic").value;
      const message = document.getElementById("contact-message").value.trim();
      if (name.length < 2) { showToast("Please enter your name."); return; }
      if (!isEmail(email)) { showToast("Please enter a valid email address."); return; }
      if (message.length < 10) { showToast("Please write a few more words so we can help."); return; }
      saveList("craverush_contact_messages", { name, email, topic, message });
      form.reset();
      showToast("Message sent! We'll reply within 24 hours. ✉️");
    });
  }

  const passBtns = document.querySelectorAll("[data-pass]");
  if (passBtns.length) {
    renderPassStatus();
    passBtns.forEach(b => b.addEventListener("click", () => buyCravePass(b.dataset.pass)));
  }

  // Scroll to #help / #contact / #cravepass after the loader hides
  if (location.hash) {
    const t = document.querySelector(location.hash);
    if (t) setTimeout(() => t.scrollIntoView({ behavior: "smooth", block: "start" }), 400);
  }
}

function renderPassStatus() {
  const el = document.getElementById("pass-status");
  if (!el) return;
  if (isCravePassActive()) {
    el.innerHTML = `<i class="fa-solid fa-circle-check"></i> You're a CravePass member — valid until <strong>${new Date(state.user.cravePass.expires).toLocaleDateString([], { day: "2-digit", month: "short", year: "numeric" })}</strong>. Standard delivery is free on every order.`;
  } else {
    el.textContent = "";
  }
}

function buyCravePass(plan) {
  if (!state.user) { showToast("Please sign in to get CravePass."); openAuthModal(); return; }
  const price = plan === "yearly" ? 999 : 149;
  if (isCravePassActive() && !confirm("You already have an active CravePass. Extend it?")) return;
  if (state.wallet.balance < price) {
    showToast(`You need ₹${price} in CraveCash. Your balance is ₹${state.wallet.balance} — add money from your account's Wallet tab.`);
    openAuthModal();
    switchAccountTab("wallet");
    return;
  }
  if (!confirm(`Pay ₹${price} from CraveCash for the ${plan} CravePass?`)) return;

  state.wallet.balance -= price;
  state.wallet.transactions.push({
    id: "tx-" + Date.now(), type: "debit", amount: price, note: `CravePass (${plan})`,
    date: new Date().toLocaleDateString([], { day: "2-digit", month: "short", year: "numeric" })
  });
  localStorage.setItem("craverush_wallet", JSON.stringify(state.wallet));

  const base = isCravePassActive() ? new Date(state.user.cravePass.expires) : new Date();
  base.setDate(base.getDate() + (plan === "yearly" ? 365 : 30));
  state.user.cravePass = { plan, expires: base.toISOString() };
  localStorage.setItem("craverush_user", JSON.stringify(state.user));
  const accounts = getAccounts();
  const acc = accounts.find(a => a.email.toLowerCase() === state.user.email.toLowerCase());
  if (acc) { acc.cravePass = state.user.cravePass; saveAccounts(accounts); }

  renderPassStatus();
  updateCartUI();
  showToast("Welcome to CravePass! 🎉 Free delivery unlocked.");
}

// ---------- GLOBAL: ESC KEY, BACK-TO-TOP, SMOOTH SCROLL ---------- //

function setupGlobalExtras() {
  document.documentElement.style.scrollBehavior = "smooth";

  document.addEventListener("keydown", e => {
    if (e.key !== "Escape") return;
    document.querySelectorAll(".modal-overlay.active").forEach(m => closeModal(m.id));
    toggleCartDrawer(false);
    const dd = document.getElementById("search-results-dropdown");
    if (dd) dd.classList.remove("active");
  });

  // Click outside any modal to close it
  document.querySelectorAll(".modal-overlay").forEach(m =>
    m.addEventListener("click", e => { if (e.target === m) closeModal(m.id); }));

  // Enter key in coupon box applies the coupon
  if (couponInput) couponInput.addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); applyCoupon(); } });

  // Close the mobile menu after tapping a nav link
  const menuToggle = document.getElementById("menu-toggle");
  document.querySelectorAll(".nav-links a").forEach(a =>
    a.addEventListener("click", () => { if (menuToggle) menuToggle.checked = false; }));

  // Back-to-top button
  if (!document.getElementById("back-to-top")) {
    const b = document.createElement("button");
    b.id = "back-to-top";
    b.type = "button";
    b.setAttribute("aria-label", "Back to top");
    b.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
    b.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    document.body.appendChild(b);
    window.addEventListener("scroll", () => b.classList.toggle("show", window.scrollY > 500), { passive: true });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setupGlobalExtras();
  setupPromoPills();
  setupHomeExtras();
  setupAboutExtras();
  setupRestaurantExtras();
  setupMenuExtras();
  setupOrdersExtras();
});
