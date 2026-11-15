export type Heat = 1 | 2 | 3;
export type Vessel = "curry" | "dry" | "rice" | "grill" | "soup";

export type Palette = {
  bg: string;
  curry: string;
  deep: string;
  piece: string;
  garnish: string;
  accent: string;
};

export type Recipe = {
  slug: string;
  name: string;
  native: string;
  subtitle: string;
  region: string;
  origin: string;
  heat: Heat;
  prep: number;
  cook: number;
  serves: number;
  variant: Vessel;
  palette: Palette;
  story: string;
  tags: string[];
  ingredients: { title: string; items: string[] }[];
  steps: { title: string; body: string }[];
  notes: string[];
  serveWith: string[];
};

export const heatLabel: Record<Heat, string> = {
  1: "Mild",
  2: "Medium",
  3: "Hot",
};

export const recipes: Recipe[] = [
  {
    slug: "murgh-makhani",
    name: "Butter Chicken",
    native: "Murgh Makhani",
    subtitle: "Grilled chicken simmered in a smooth tomato and butter gravy.",
    region: "Delhi",
    origin: "Moti Mahal, Delhi",
    heat: 1,
    prep: 25,
    cook: 35,
    serves: 4,
    variant: "curry",
    palette: {
      bg: "#f2e4d3",
      curry: "#c05621",
      deep: "#8f3b12",
      piece: "#e8bf93",
      garnish: "#4c6b47",
      accent: "#f2d6a2",
    },
    story:
      "Butter chicken started in Delhi as a way to use leftover tandoori chicken. The grilled chicken is added to a tomato and butter gravy. At home, the one step that matters most is straining the gravy so it becomes smooth.",
    tags: ["Weekend", "For guests", "Mild"],
    ingredients: [
      {
        title: "For the chicken",
        items: [
          "800 g boneless chicken, cut into small pieces",
          "4 tbsp thick curd (hung curd)",
          "1 tbsp ginger-garlic paste",
          "1 tsp Kashmiri chilli powder",
          "½ tsp garam masala",
          "1 tbsp lemon juice",
          "1 tsp salt",
        ],
      },
      {
        title: "For the gravy",
        items: [
          "60 g butter, plus 2 tbsp for the end",
          "1 tbsp oil",
          "4 green cardamom (choti elaichi), crushed",
          "2 cloves (laung)",
          "1 bay leaf (tej patta)",
          "1 small cinnamon stick (dalchini)",
          "1 tbsp ginger-garlic paste",
          "700 g ripe tomatoes, chopped",
          "1 tbsp tomato purée",
          "1 tsp Kashmiri chilli powder",
          "1 tsp coriander powder (dhania)",
          "1 tbsp kasuri methi, crushed in your palm",
          "1 tsp honey or sugar",
          "120 ml fresh cream",
          "Salt to taste",
        ],
      },
      {
        title: "To finish",
        items: [
          "2 tbsp cream",
          "1 tbsp butter",
          "Ginger, cut into thin strips",
          "A few coriander leaves",
        ],
      },
    ],
    steps: [
      {
        title: "Marinate the chicken",
        body: "Mix curd, ginger-garlic paste, chilli powder, garam masala, lemon juice and salt in a bowl. Add the chicken and mix well. Keep it covered in the fridge for 4 hours, or overnight. Take it out 30 minutes before cooking.",
      },
      {
        title: "Grill on high heat",
        body: "Heat a heavy pan till it is very hot. Add the chicken in batches and cook for 2–3 minutes on each side. The edges should get charred, but the chicken should stay a little raw inside. Remove it and keep the juices.",
      },
      {
        title: "Fry the whole spices",
        body: "Melt the butter with oil on medium heat. Add cardamom, cloves, bay leaf and cinnamon and fry for 45 seconds. Add ginger-garlic paste and cook for 1 minute till the raw smell goes away.",
      },
      {
        title: "Cook the tomato base",
        body: "Add the tomatoes, tomato purée, chilli powder, coriander powder and salt. Cook for 15–18 minutes till the tomatoes turn soft and the oil starts coming out at the sides.",
      },
      {
        title: "Strain the gravy",
        body: "Let the gravy cool for 5 minutes. Grind it smooth, then strain it back into the pan. This one step gives you a smooth restaurant-style gravy.",
      },
      {
        title: "Add the chicken back",
        body: "Add kasuri methi, honey and 100 ml water. Cook for 5 minutes. Add the chicken with its juices and cook on low heat for 8 minutes, till the chicken is cooked.",
      },
      {
        title: "Finish",
        body: "Switch off the heat. Add cream and the remaining butter and mix once. Taste and add salt or lemon juice if needed. Keep aside for 5 minutes, then top with ginger and coriander.",
      },
    ],
    notes: [
      "Kashmiri chilli powder gives colour, not heat. If you only have regular chilli powder, use one-third of the quantity.",
      "Chicken with bone gives a thicker gravy, but boneless thigh pieces cook faster. Avoid breast.",
      "The gravy freezes well for a month. Freeze it before adding the chicken.",
    ],
    serveWith: ["Butter naan", "Laccha paratha", "Jeera rice", "Onion rings and lemon"],
  },
  {
    slug: "chicken-tikka-masala",
    name: "Chicken Tikka Masala",
    native: "Murgh Tikka Masala",
    subtitle: "Grilled chicken tikka in a thick, smoky onion and tomato masala.",
    region: "Punjab",
    origin: "Punjabi dhabas",
    heat: 2,
    prep: 30,
    cook: 30,
    serves: 4,
    variant: "curry",
    palette: {
      bg: "#f0e0d2",
      curry: "#b0441f",
      deep: "#7c2d12",
      piece: "#e6b98e",
      garnish: "#4f6b45",
      accent: "#f0c987",
    },
    story:
      "Tikka masala is really two dishes: first the chicken is grilled like tikka, then it goes into a thick onion and tomato gravy. Do not skip the grilling. That slightly burnt taste is what makes this dish different from a normal chicken curry.",
    tags: ["Weeknight", "Grill and pan", "Smoky"],
    ingredients: [
      {
        title: "For the tikka",
        items: [
          "700 g boneless chicken, cut into pieces",
          "150 g thick curd",
          "1 tbsp ginger-garlic paste",
          "2 tsp Kashmiri chilli powder",
          "1 tsp cumin powder (jeera)",
          "1 tsp coriander powder (dhania)",
          "½ tsp garam masala",
          "1 tsp salt",
          "1 tbsp mustard oil or ghee, for grilling",
        ],
      },
      {
        title: "For the masala",
        items: [
          "3 tbsp ghee",
          "1 tsp cumin seeds (jeera)",
          "2 onions, finely chopped",
          "1 tbsp ginger-garlic paste",
          "400 g tomatoes, puréed",
          "1 tbsp tomato purée",
          "1 tsp Kashmiri chilli powder",
          "1 tsp coriander powder (dhania)",
          "1 tsp kasuri methi",
          "1 tsp smoked paprika (optional)",
          "100 ml fresh cream",
          "1 tsp honey or sugar",
          "Salt to taste",
        ],
      },
    ],
    steps: [
      {
        title: "Marinate the chicken",
        body: "Mix curd, ginger-garlic paste, chilli powder, cumin, coriander, garam masala and salt. Add the chicken and mix well. Keep it for 4 hours, or overnight in the fridge.",
      },
      {
        title: "Grill the tikka",
        body: "Put the chicken on skewers or on a tray. Grill on the highest heat for 10–12 minutes, turning once, till it gets black spots. It should not be fully cooked at this stage.",
      },
      {
        title: "Fry the onions",
        body: "Heat the ghee and add cumin seeds. When they crackle, add the onions. Fry on medium heat for 12–14 minutes, stirring often, till the onions turn golden brown. This gives the gravy its sweetness.",
      },
      {
        title: "Cook the tomato",
        body: "Add ginger-garlic paste and cook for 1 minute. Add the tomato purée, tomato paste, chilli powder, coriander powder and salt. Cook for 12 minutes till the masala becomes thick and dark.",
      },
      {
        title: "Add the chicken",
        body: "Add kasuri methi, paprika and honey and mix. Add the chicken with its juices and 80 ml water. Cook on low heat for 8 minutes.",
      },
      {
        title: "Add cream and keep aside",
        body: "Lower the heat, add the cream and mix well. Do not boil after adding cream. Keep aside for 5 minutes, taste for salt and serve.",
      },
    ],
    notes: [
      "Smoked paprika gives the smoky taste of a tandoor. Regular paprika only gives colour.",
      "A grill pan or a thick-bottomed pan works well here. The black spots on the chicken are important.",
      "You can make the same recipe with paneer or gobi. Use the same marinade and grill for less time.",
    ],
    serveWith: ["Butter naan", "Cucumber and onion salad", "Basmati rice", "Lemon wedges"],
  },
  {
    slug: "hyderabadi-chicken-biryani",
    name: "Hyderabadi Chicken Biryani",
    native: "Hyderabadi Murgh Dum Biryani",
    subtitle: "Raw marinated chicken and half-cooked rice, sealed and cooked on dum.",
    region: "Hyderabad",
    origin: "Hyderabad",
    heat: 3,
    prep: 45,
    cook: 65,
    serves: 6,
    variant: "rice",
    palette: {
      bg: "#f3e8d4",
      curry: "#d9a53a",
      deep: "#a97b1e",
      piece: "#d9a86a",
      garnish: "#4c6b47",
      accent: "#f5e3b3",
    },
    story:
      "In Hyderabadi kacchi biryani, raw marinated chicken is kept at the bottom of the handi and half-cooked rice is spread over it. The pot is sealed and cooked on low heat, so the chicken cooks in its own steam. Open the lid only at the table.",
    tags: ["Weekend", "Dum cooked", "For a crowd"],
    ingredients: [
      {
        title: "For the chicken layer",
        items: [
          "1 kg chicken, cut into large pieces",
          "400 g thick curd",
          "3 tbsp ginger-garlic paste",
          "2 tsp Kashmiri chilli powder",
          "1 tsp haldi (turmeric)",
          "2 tbsp biryani masala",
          "2 green chillies, slit",
          "Juice of 1 lemon",
          "2 tsp salt",
          "3 tbsp fried onions (birista)",
          "A handful of mint and coriander leaves",
          "1 potato, cut in half (optional)",
        ],
      },
      {
        title: "For the rice",
        items: [
          "500 g basmati rice, soaked for 30 minutes",
          "4 green cardamom (choti elaichi)",
          "2 bay leaves (tej patta)",
          "1 cinnamon stick (dalchini)",
          "1 tbsp salt",
          "2 tbsp ghee",
        ],
      },
      {
        title: "For the dum",
        items: [
          "A big pinch of saffron, soaked in 4 tbsp warm milk",
          "3 tbsp ghee, melted",
          "3 tbsp fried onions (birista)",
          "Mint leaves",
          "Dough or foil to seal the lid",
        ],
      },
    ],
    steps: [
      {
        title: "Marinate the chicken",
        body: "Mix curd, ginger-garlic paste, chilli powder, haldi, biryani masala, green chilli, lemon juice and salt. Add the chicken, fried onions and half the mint and coriander. Keep it for 4 hours, or overnight in the fridge.",
      },
      {
        title: "Half-cook the rice",
        body: "Boil a large pot of water with the whole spices, salt and ghee. Add the drained rice and cook for 5–6 minutes. The rice should be almost done but the centre should still be a little firm. Strain the water at once.",
      },
      {
        title: "Layer the handi",
        body: "Spread the marinated chicken in a heavy-bottomed handi with a tight lid. Spread the rice evenly on top. Pour saffron milk and melted ghee over the rice, then add fried onions and mint leaves.",
      },
      {
        title: "Seal and cook on dum",
        body: "Seal the lid with dough or two layers of foil and put a heavy weight on top. Cook on the lowest flame for 35 minutes. Switch off the gas and keep it sealed for another 10 minutes.",
      },
      {
        title: "Open at the table",
        body: "Open the lid at the table. Put a spoon down one side to check that the rice is cooked and the chicken is soft. Mix gently from the bottom. Do not stir.",
      },
      {
        title: "Serve",
        body: "Serve with mirchi ka salan and a bowl of thick raita. Let everyone take their own portion from the top.",
      },
    ],
    notes: [
      "Old basmati rice holds its shape. New rice becomes sticky when cooked on dum.",
      "Keep a tawa under the handi so the bottom does not burn.",
      "If you do not have a heavy handi, use a baking dish, cover it tightly with foil and bake at 180°C for 40 minutes.",
    ],
    serveWith: ["Mirchi ka salan", "Onion raita", "Boiled egg", "Cucumber and mint salad"],
  },
  {
    slug: "chettinad-pepper-chicken",
    name: "Chettinad Pepper Chicken",
    native: "Chettinad Milagu Kozhi",
    subtitle: "A dry chicken masala with black pepper, fennel and roasted coconut.",
    region: "Tamil Nadu",
    origin: "Chettinad, Tamil Nadu",
    heat: 3,
    prep: 20,
    cook: 35,
    serves: 4,
    variant: "dry",
    palette: {
      bg: "#e9dfcf",
      curry: "#5e3d22",
      deep: "#3d2716",
      piece: "#c69a6b",
      garnish: "#41603f",
      accent: "#d9a84e",
    },
    story:
      "In Chettinad cooking, the masala is made fresh every time and it shows in the taste. Here, black pepper gives the heat, fennel gives sweetness and coconut gives body. Roast and grind the masala yourself instead of using ready-made powder.",
    tags: ["Weeknight", "Dry", "Fresh masala"],
    ingredients: [
      {
        title: "For the masala",
        items: [
          "1 tbsp black peppercorns (kali mirch)",
          "1 tbsp fennel seeds (saunf)",
          "4 dried red chillies",
          "1 tbsp coriander seeds (dhania)",
          "1 tsp cumin seeds (jeera)",
          "2 cloves (laung)",
          "1 small cinnamon stick (dalchini)",
          "3 tbsp grated fresh coconut",
        ],
      },
      {
        title: "For the chicken",
        items: [
          "800 g chicken, cut into small pieces",
          "3 tbsp sesame oil (til ka tel)",
          "1 tsp fennel seeds (saunf)",
          "20 curry leaves (kadhi patta)",
          "2 onions, finely chopped",
          "1 tbsp ginger-garlic paste",
          "2 tomatoes, chopped",
          "½ tsp haldi (turmeric)",
          "1 tsp salt",
          "2 tbsp chopped coriander",
        ],
      },
    ],
    steps: [
      {
        title: "Roast the masala",
        body: "Dry roast the peppercorns, fennel, red chillies, coriander seeds, cumin, cloves and cinnamon on low heat for 2 minutes. Add the coconut and roast till it turns slightly darker and smells nice. Cool and grind to a powder.",
      },
      {
        title: "Start the masala",
        body: "Heat the sesame oil. Add fennel seeds and curry leaves, then the onions. Fry for 10 minutes till the onions turn golden at the edges.",
      },
      {
        title: "Fry the chicken",
        body: "Add ginger-garlic paste and cook for a minute. Add the chicken and fry on medium-high heat for 6–8 minutes till the pieces change colour.",
      },
      {
        title: "Add tomato and masala",
        body: "Add the tomatoes, haldi, salt and the ground masala. Cook for 8 minutes till the tomatoes turn soft and the masala coats the chicken.",
      },
      {
        title: "Cover and cook",
        body: "Add 150 ml water, cover and cook for 12 minutes till the chicken is soft. Remove the lid and cook on high heat for 3–4 minutes, stirring, till the masala becomes dry.",
      },
      {
        title: "Keep aside and serve",
        body: "Add coriander and keep aside for 5 minutes. Serve with rice or idiyappam.",
      },
    ],
    notes: [
      "Do not roast the pepper on high heat, or it turns bitter. Keep the flame low and keep stirring.",
      "For a gravy version, stop after the covered stage and add 100 ml thick coconut milk.",
      "Chicken with bone tastes better here. The bones make the masala thicker.",
    ],
    serveWith: ["Steamed rice", "Idiyappam", "Rasam", "Curd rice"],
  },
  {
    slug: "tandoori-chicken",
    name: "Tandoori Chicken",
    native: "Tandoori Murgh",
    subtitle: "Two marinades, a hot oven and a lot of char.",
    region: "Punjab",
    origin: "Peshawar, Punjab",
    heat: 2,
    prep: 20,
    cook: 35,
    serves: 4,
    variant: "grill",
    palette: {
      bg: "#f1dfd6",
      curry: "#a52e1c",
      deep: "#6d1c12",
      piece: "#d68b62",
      garnish: "#496a45",
      accent: "#e8b48a",
    },
    story:
      "Tandoori chicken gets two marinades. The first is salt and lemon, which opens up the chicken. The second is curd and spices, which gives it colour and taste. At home, a very hot oven and a few minutes under the grill give a taste very close to the tandoor.",
    tags: ["Oven", "Prepare ahead", "Charred"],
    ingredients: [
      {
        title: "First marinade",
        items: [
          "1 kg chicken legs or 8 drumsticks, skin removed, cut twice on each piece",
          "1 tbsp lemon juice",
          "1 tsp salt",
          "1 tbsp Kashmiri chilli powder",
          "1 tbsp ginger-garlic paste",
        ],
      },
      {
        title: "Second marinade",
        items: [
          "200 g thick curd (hung curd)",
          "2 tbsp fresh cream",
          "1 tbsp mustard oil",
          "½ tsp garam masala",
          "1 tsp cumin powder (jeera)",
          "1 tsp coriander powder (dhania)",
          "1 tsp kasuri methi, crushed",
          "1 tsp salt",
        ],
      },
      {
        title: "To serve",
        items: ["1 tsp chaat masala", "Lemon wedges", "Onion rings", "Mint chutney"],
      },
    ],
    steps: [
      {
        title: "Apply the first marinade",
        body: "Rub the chicken with lemon juice, salt, chilli powder and ginger-garlic paste. Keep it aside for 20 minutes so the salt and lemon work on the chicken.",
      },
      {
        title: "Apply the curd marinade",
        body: "Mix the second marinade well. Rub it on the chicken and press it into the cuts. Cover and keep it in the fridge for at least 2 hours, or 6 hours if you have time.",
      },
      {
        title: "Heat the oven",
        body: "Heat the oven to 220°C. Put a wire rack on a baking tray. Take the chicken out of the fridge while the oven heats.",
      },
      {
        title: "Roast and grill",
        body: "Roast for 22–25 minutes, turning once. Then grill for 4–5 minutes till the edges turn black in places and the fat melts.",
      },
      {
        title: "Keep aside and serve",
        body: "Sprinkle chaat masala and squeeze lemon on the hot chicken. Keep aside for 5 minutes. Serve with onion rings and mint chutney.",
      },
    ],
    notes: [
      "Hung curd has less water. If you use normal curd, the chicken will steam instead of roasting.",
      "Mustard oil is optional, but it gives the real tandoori taste.",
      "The same marinade works for gobi and paneer. Roast for less time.",
    ],
    serveWith: ["Mint chutney", "Onion rings", "Lemon rice", "Roomali roti"],
  },
  {
    slug: "chicken-65",
    name: "Chicken 65",
    native: "Kozhi 65",
    subtitle: "Crisp fried chicken tossed with curry leaves and green chilli.",
    region: "Tamil Nadu",
    origin: "Chennai",
    heat: 3,
    prep: 20,
    cook: 20,
    serves: 4,
    variant: "dry",
    palette: {
      bg: "#f4e3d0",
      curry: "#b23a15",
      deep: "#7a240d",
      piece: "#d98b56",
      garnish: "#3f6040",
      accent: "#f0c15a",
    },
    story:
      "Chicken 65 is a bar snack that became a starter everywhere. The crunch comes from rice flour and cornflour, very hot oil and frying in small batches. The curry leaf and garlic tempering at the end is not optional.",
    tags: ["Fried", "Starter", "Under 45 minutes"],
    ingredients: [
      {
        title: "For the chicken",
        items: [
          "600 g boneless chicken, cut into small pieces",
          "1 tbsp ginger-garlic paste",
          "1 tsp Kashmiri chilli powder",
          "½ tsp black pepper",
          "2 tbsp rice flour",
          "2 tbsp cornflour",
          "1 egg white",
          "2 tbsp curd",
          "1 tsp salt",
          "1 tsp lemon juice",
        ],
      },
      {
        title: "For the tempering",
        items: [
          "Oil, for deep frying",
          "15 curry leaves (kadhi patta), pat dry",
          "3 garlic cloves, thinly sliced",
          "2 green chillies, slit",
          "¼ tsp red chilli flakes",
          "A pinch of chaat masala",
        ],
      },
    ],
    steps: [
      {
        title: "Marinate for 20 minutes",
        body: "Mix all the ingredients from the first list. Keep aside for 20 minutes. Do not keep it longer, or the chicken becomes tough.",
      },
      {
        title: "Heat the oil",
        body: "Heat the oil to medium-high. A drop of batter should come up at once and sizzle.",
      },
      {
        title: "Fry in small batches",
        body: "Fry the chicken in small batches for 4–5 minutes till it turns deep red and crisp. Keep the fried pieces on a rack, not on paper, so they stay crisp.",
      },
      {
        title: "Fry the curry leaves and garlic",
        body: "Take one spoon of the hot oil in another pan. Fry the curry leaves, garlic, green chilli and chilli flakes for 30 seconds till the garlic turns light golden.",
      },
      {
        title: "Toss and serve",
        body: "Add the fried chicken and chaat masala and toss for 30 seconds. Serve at once with onion rings and lemon.",
      },
    ],
    notes: [
      "Dry the curry leaves before frying, or the oil will splutter.",
      "For extra crunch, fry twice: 3 minutes first, keep aside for 5 minutes, then fry again for 90 seconds on higher heat.",
      "Kashmiri chilli powder gives the red colour without making it too hot.",
    ],
    serveWith: ["Onion rings", "Lemon wedges", "Coconut chutney", "Lime soda"],
  },
  {
    slug: "kadai-chicken",
    name: "Kadai Chicken",
    native: "Murgh Karahi",
    subtitle: "Cooked fast in a kadai with capsicum and crushed coriander.",
    region: "Punjab",
    origin: "Punjab",
    heat: 2,
    prep: 20,
    cook: 30,
    serves: 4,
    variant: "curry",
    palette: {
      bg: "#efe2d0",
      curry: "#a8501f",
      deep: "#743512",
      piece: "#dba977",
      garnish: "#47663f",
      accent: "#e9c27a",
    },
    story:
      "Kadai chicken is named after the kadai it is cooked in. Everything happens on high heat in one pan, without a lid. The masala should be thick and the capsicum should still have a slight crunch.",
    tags: ["One pan", "Weeknight", "Quick"],
    ingredients: [
      {
        title: "For the chicken",
        items: [
          "800 g boneless chicken, cut into pieces",
          "3 tbsp ghee",
          "1 tsp cumin seeds (jeera)",
          "1 tbsp coriander seeds (dhania), crushed",
          "2 onions, cut into wedges",
          "1 tbsp ginger-garlic paste",
          "3 tomatoes, chopped",
          "1 tsp Kashmiri chilli powder",
          "½ tsp haldi (turmeric)",
          "1 tsp salt",
          "1 capsicum, cut into cubes",
          "2 green chillies, slit",
          "1 tsp kasuri methi",
          "½ tsp garam masala",
        ],
      },
    ],
    steps: [
      {
        title: "Heat the kadai",
        body: "Heat ghee in a kadai or wide pan on high heat. Add cumin seeds and crushed coriander seeds and let them crackle for 20 seconds.",
      },
      {
        title: "Fry the onions",
        body: "Add the onion wedges and fry for 4 minutes. The onions should turn light brown but stay a little crunchy.",
      },
      {
        title: "Fry the chicken",
        body: "Add ginger-garlic paste and the chicken. Fry for 6 minutes till the chicken changes colour and gets light brown in places.",
      },
      {
        title: "Add tomatoes",
        body: "Add tomatoes, chilli powder, haldi and salt. Cook without a lid for 10 minutes, stirring, till the tomatoes turn soft and the water dries up.",
      },
      {
        title: "Add capsicum",
        body: "Add capsicum and green chillies and cook for 4 minutes. Add kasuri methi and garam masala, mix and switch off the heat.",
      },
      {
        title: "Serve",
        body: "Serve hot in the same kadai with roti, so no masala is left behind.",
      },
    ],
    notes: [
      "Cook on high heat without a lid. Kadai chicken is a dry dish; a lid turns it into a curry.",
      "Crushing the coriander seeds roughly gives the masala a better texture than powder.",
      "Squeeze lemon on top at the end if the tomatoes were sweet.",
    ],
    serveWith: ["Tandoori roti", "Butter naan", "Kachumber salad", "Lassi"],
  },
  {
    slug: "awadhi-chicken-korma",
    name: "Awadhi Chicken Korma",
    native: "Murgh Korma",
    subtitle: "Cashew, curd and green cardamom — rich, but not spicy.",
    region: "Awadh",
    origin: "Lucknow",
    heat: 1,
    prep: 25,
    cook: 50,
    serves: 4,
    variant: "curry",
    palette: {
      bg: "#f3e9d7",
      curry: "#cfae72",
      deep: "#9c7a45",
      piece: "#ecd3a8",
      garnish: "#4b6647",
      accent: "#f6e8cd",
    },
    story:
      "Awadhi korma is mild and rich. Nothing is fried till brown and there is no chilli powder. The gravy gets its body from onion paste, cashew paste and curd, and stays a pale golden colour.",
    tags: ["Slow", "Mild", "For guests"],
    ingredients: [
      {
        title: "For the chicken",
        items: [
          "800 g chicken, cut into large pieces",
          "1 tsp salt",
          "½ tsp white pepper",
          "1 tbsp ginger-garlic paste",
          "150 g curd, beaten well",
        ],
      },
      {
        title: "For the gravy",
        items: [
          "4 tbsp ghee",
          "2 onions, boiled and ground to a paste",
          "40 g cashew nuts, soaked in warm water",
          "1 tbsp white poppy seeds (khus khus) or melon seeds",
          "4 green cardamom (choti elaichi)",
          "1 piece mace (javitri)",
          "1 bay leaf (tej patta)",
          "2 tbsp fresh cream",
          "½ tsp sugar",
          "2 tsp kewra water",
          "A pinch of saffron, soaked in 2 tbsp milk",
        ],
      },
    ],
    steps: [
      {
        title: "Marinate the chicken",
        body: "Rub the chicken with salt, white pepper and ginger-garlic paste. Add the curd and mix well. Keep aside for 30 minutes.",
      },
      {
        title: "Make the pastes",
        body: "Drain the cashew nuts and grind with poppy seeds and a little water till smooth. Grind the boiled onions separately.",
      },
      {
        title: "Cook the onion paste",
        body: "Heat ghee with cardamom, mace and bay leaf. Add the onion paste and cook on low heat for 15 minutes, stirring, till it turns light golden. Do not let it brown.",
      },
      {
        title: "Add the chicken",
        body: "Add the chicken with the curd and cook on low heat for 10 minutes, turning the pieces once or twice.",
      },
      {
        title: "Add cashew paste and cook",
        body: "Add the cashew paste, sugar and 200 ml water. Cover and cook for 20 minutes till the chicken is soft and the gravy becomes thick.",
      },
      {
        title: "Finish",
        body: "Switch off the heat. Add cream, kewra water and saffron milk. Keep aside for 5 minutes, taste for salt and serve with naan or sheermal.",
      },
    ],
    notes: [
      "Boil the onions before grinding. Raw onion paste turns brown and bitter.",
      "Beat the curd well and add it slowly, or it will split.",
      "Kewra water is strong. Two teaspoons are enough for the whole pot.",
    ],
    serveWith: ["Sheermal", "Warqi paratha", "Awadhi pulao", "Green chutney"],
  },
  {
    slug: "goan-chicken-vindaloo",
    name: "Goan Chicken Vindaloo",
    native: "Galinha Vindalho",
    subtitle: "Kashmiri chilli, vinegar and jaggery — sour first, then hot.",
    region: "Goa",
    origin: "Goa",
    heat: 3,
    prep: 25,
    cook: 45,
    serves: 4,
    variant: "curry",
    palette: {
      bg: "#f0dcd2",
      curry: "#9c2a14",
      deep: "#661a0c",
      piece: "#cf8a60",
      garnish: "#426141",
      accent: "#e0a15a",
    },
    story:
      "Vindalho comes from the Portuguese words for wine and garlic. In Goa, palm vinegar replaced the wine and jaggery was added to balance the sourness. The dish should taste sour and slightly sweet first, and the heat should come later.",
    tags: ["Prepare ahead", "Sour and hot", "Slow"],
    ingredients: [
      {
        title: "For the vindalho paste",
        items: [
          "10 dried Kashmiri chillies",
          "2 dried red chillies",
          "1 tbsp black peppercorns (kali mirch)",
          "4 cloves (laung)",
          "1 small cinnamon stick (dalchini)",
          "1 tsp cumin seeds (jeera)",
          "1 tsp mustard seeds (rai)",
          "½ tsp haldi (turmeric)",
          "6 garlic cloves",
          "1 inch ginger",
          "80 ml palm vinegar or any vinegar",
        ],
      },
      {
        title: "For the curry",
        items: [
          "1 kg chicken, cut into large pieces",
          "1 tbsp jaggery, grated",
          "2 tsp salt",
          "3 tbsp coconut oil",
          "1 onion, sliced",
          "1 tomato, chopped",
          "1 potato, cut into wedges (optional)",
          "2 green chillies, slit",
        ],
      },
    ],
    steps: [
      {
        title: "Soak the chillies",
        body: "Soak the dried chillies in hot water for 20 minutes. Drain them and keep the water.",
      },
      {
        title: "Grind the paste",
        body: "Grind the chillies with the whole spices, haldi, garlic, ginger and vinegar to a smooth paste. Add a little chilli water if needed.",
      },
      {
        title: "Marinate overnight",
        body: "Rub the paste on the chicken with jaggery and salt. Keep it covered in the fridge for at least 8 hours, or a full day.",
      },
      {
        title: "Fry the onion and tomato",
        body: "Heat coconut oil and add the onion. Fry for 8 minutes till soft and light golden. Add the tomato and cook for 4 minutes.",
      },
      {
        title: "Cook the chicken",
        body: "Add the chicken with all the marinade, the potato and 200 ml hot water. Cover and cook for 25–30 minutes till the chicken is soft and the gravy is thick.",
      },
      {
        title: "Adjust and keep aside",
        body: "Remove the lid and cook for 5 minutes. Taste it: it should be sour first, then sweet, then hot. Add vinegar or jaggery if needed. Keep aside for 10 minutes and serve with rice.",
      },
    ],
    notes: [
      "Kashmiri chillies give the red colour. The two dried red chillies give the heat. Do not change this proportion.",
      "Palm vinegar tastes best. Cider vinegar also works. Do not use white vinegar.",
      "Vindalho tastes even better after two days in the fridge.",
    ],
    serveWith: ["Goan red rice", "Poi bread", "Kachumber", "Lime soda"],
  },
  {
    slug: "kerala-chicken-curry",
    name: "Kerala Chicken Curry",
    native: "Nadan Kozhi Curry",
    subtitle: "Coconut milk, small onions and curry leaves, with coconut oil on top.",
    region: "Kerala",
    origin: "Kerala",
    heat: 2,
    prep: 20,
    cook: 40,
    serves: 4,
    variant: "curry",
    palette: {
      bg: "#f0e9d5",
      curry: "#c99b3f",
      deep: "#96702a",
      piece: "#e3c18c",
      garnish: "#3f5f3e",
      accent: "#f2e7c0",
    },
    story:
      "This is a Sunday curry in Kerala. Thin coconut milk is used to cook the chicken and thick coconut milk is added at the end. A final tempering of coconut oil, small onions and curry leaves goes on top. It is not very spicy, but the taste is deep.",
    tags: ["Coconut", "Family", "One pot"],
    ingredients: [
      {
        title: "For the chicken",
        items: [
          "800 g chicken, cut into medium pieces",
          "1 tsp haldi (turmeric)",
          "1 tsp salt",
          "1 tbsp ginger-garlic paste",
          "2 green chillies, slit",
        ],
      },
      {
        title: "For the curry",
        items: [
          "3 tbsp coconut oil",
          "1 tsp mustard seeds (rai)",
          "20 curry leaves (kadhi patta)",
          "8 small onions (shallots), sliced",
          "2 onions, sliced",
          "1 tomato, chopped",
          "1 tsp Kashmiri chilli powder",
          "2 tsp coriander powder (dhania)",
          "½ tsp black pepper",
          "1 tsp garam masala",
          "400 ml thin coconut milk",
          "150 ml thick coconut milk",
          "Salt to taste",
        ],
      },
    ],
    steps: [
      {
        title: "Marinate the chicken",
        body: "Rub the chicken with haldi, salt, ginger-garlic paste and green chilli. Keep it aside while you start the curry.",
      },
      {
        title: "Fry the onions",
        body: "Heat coconut oil. Add mustard seeds and curry leaves, then the small onions and regular onions. Fry for 10 minutes till they turn golden brown.",
      },
      {
        title: "Add the powders",
        body: "Lower the heat and add chilli powder, coriander powder, black pepper and garam masala. Stir for 30 seconds so the powders cook but do not burn.",
      },
      {
        title: "Add tomato and chicken",
        body: "Add the tomato and cook for 3 minutes. Add the chicken and mix well for 5 minutes so it gets coated with the masala.",
      },
      {
        title: "Cook in thin coconut milk",
        body: "Pour in the thin coconut milk and 100 ml water. Cook on low heat for 20–25 minutes without a lid, till the chicken is soft and the gravy reduces a little.",
      },
      {
        title: "Finish with thick coconut milk",
        body: "Lower the heat and add the thick coconut milk. Cook for 3 minutes. Do not boil. Taste for salt. Top with fried small onions and curry leaves and serve with appam or rice.",
      },
    ],
    notes: [
      "Do not boil after adding thick coconut milk, or it will split. Keep the heat low.",
      "The gravy should be thin enough to soak into appam, not thick like a paste.",
      "If you get kudampuli (malabar tamarind), add one piece for the sour taste of Kerala curry.",
    ],
    serveWith: ["Appam", "Idiyappam", "Red rice", "Avial"],
  },
  {
    slug: "bengali-chicken-kosha",
    name: "Bengali Chicken Kosha",
    native: "Murgir Kosha",
    subtitle: "Slow-fried chicken with a dark, thick masala and a little sweetness.",
    region: "Bengal",
    origin: "Bengal",
    heat: 2,
    prep: 15,
    cook: 45,
    serves: 4,
    variant: "dry",
    palette: {
      bg: "#eee0ce",
      curry: "#6b3a1c",
      deep: "#452412",
      piece: "#c08c5d",
      garnish: "#4a6644",
      accent: "#dcae6a",
    },
    story:
      "Kosha means to fry slowly till the water dries up. The chicken is cooked in mustard oil with the masala till the oil separates and the masala sticks to the pieces. A little sugar at the start is the Bengali touch.",
    tags: ["Slow", "Mustard oil", "Goes with rice"],
    ingredients: [
      {
        title: "For the chicken",
        items: [
          "1 kg chicken, cut into medium pieces",
          "1 tsp haldi (turmeric)",
          "1 tsp salt",
          "1 tbsp ginger-garlic paste",
          "150 g curd, beaten well",
        ],
      },
      {
        title: "For the pan",
        items: [
          "4 tbsp mustard oil",
          "1 bay leaf (tej patta)",
          "3 green cardamom (choti elaichi)",
          "2 onions, finely chopped",
          "1 tsp sugar",
          "2 tomatoes, chopped",
          "1 tsp Kashmiri chilli powder",
          "1 tsp cumin powder (jeera)",
          "1 tsp coriander powder (dhania)",
          "1 potato, cut into wedges (optional)",
          "1 tsp ghee",
          "½ tsp garam masala",
          "1 tsp kasuri methi, crushed",
        ],
      },
    ],
    steps: [
      {
        title: "Marinate the chicken",
        body: "Rub the chicken with haldi, salt and ginger-garlic paste. Add the curd and mix well. Keep aside for 30 minutes.",
      },
      {
        title: "Heat the mustard oil",
        body: "Heat the mustard oil till it smokes slightly, then lower the heat. Add bay leaf, cardamom and onions with the sugar. Fry for 12 minutes till the onions turn dark brown.",
      },
      {
        title: "Fry the chicken",
        body: "Add the chicken and potato and fry on medium-high heat for 8 minutes. The pieces should change colour and the curd should dry up.",
      },
      {
        title: "Bhuna the masala",
        body: "Add tomatoes, chilli powder, cumin and coriander. Cook without a lid for 15 minutes, stirring often and scraping the bottom, till the masala turns dark and coats the chicken.",
      },
      {
        title: "Cover and cook",
        body: "Add 100 ml hot water, cover and cook for 12 minutes till the chicken is soft. Remove the lid and cook for 3 minutes so the extra water dries up.",
      },
      {
        title: "Finish with ghee",
        body: "Add ghee, garam masala and kasuri methi. Keep aside for 5 minutes. Serve with rice, dal and a slice of lemon.",
      },
    ],
    notes: [
      "If the masala sticks to the pan, add a little water and lower the heat. Dark is good, burnt is not.",
      "The potato is optional, but it soaks up the masala very well.",
      "Leftovers taste better the next day with paratha.",
    ],
    serveWith: ["Steamed rice", "Moong dal", "Luchi", "Lemon wedge"],
  },
  {
    slug: "murgh-shorba",
    name: "Murgh Shorba",
    native: "Murgh Yakhni Shorba",
    subtitle: "A clear chicken soup with saffron and toasted almonds.",
    region: "Awadh",
    origin: "Lucknow",
    heat: 1,
    prep: 15,
    cook: 45,
    serves: 4,
    variant: "soup",
    palette: {
      bg: "#f5ead6",
      curry: "#d9a94e",
      deep: "#a87a24",
      piece: "#e9c68f",
      garnish: "#4a6743",
      accent: "#f7e6c0",
    },
    story:
      "Shorba is a clear chicken soup, the kind served before biryani. Use bones, because that is where the taste is. Keep the flame low and do not stir too much, or the soup will turn cloudy.",
    tags: ["Light", "Weeknight", "Uses bones"],
    ingredients: [
      {
        title: "For the soup",
        items: [
          "600 g chicken bones and 2 chicken thighs, with skin",
          "1 tbsp ghee",
          "1 onion, cut into four",
          "1 inch ginger, sliced",
          "4 garlic cloves",
          "1 bay leaf (tej patta)",
          "3 green cardamom (choti elaichi)",
          "1 small cinnamon stick (dalchini)",
          "½ tsp black peppercorns (kali mirch)",
          "¼ tsp haldi (turmeric)",
          "A few coriander stems",
          "1.4 litres water",
          "1 tsp salt",
        ],
      },
      {
        title: "To finish",
        items: [
          "A pinch of saffron, soaked in 2 tbsp hot milk",
          "1 tbsp fresh cream",
          "1 tbsp sliced almonds, toasted",
          "Coriander leaves",
          "Lemon juice",
          "Cracked black pepper",
        ],
      },
    ],
    steps: [
      {
        title: "Fry the chicken a little",
        body: "Heat ghee in a deep pot and fry the chicken and bones for 5 minutes. Do not let them brown. The soup should stay light in colour.",
      },
      {
        title: "Add water and spices",
        body: "Add onion, ginger, garlic, whole spices, haldi, coriander stems, salt and water. Bring to a boil, then lower the heat at once.",
      },
      {
        title: "Cook slowly",
        body: "Remove the foam that comes up in the first ten minutes. Cook on low heat for 35–40 minutes without a lid, till the soup tastes of chicken and reduces by about one-third.",
      },
      {
        title: "Strain",
        body: "Strain through a fine strainer or muslin cloth. Press the solids lightly. Throw away the spices and remove the extra fat from the top.",
      },
      {
        title: "Serve in bowls",
        body: "Shred the chicken thigh and put it in bowls. Pour the hot soup on top. Add saffron milk, cream, almonds, coriander, lemon juice and pepper at the table.",
      },
    ],
    notes: [
      "Do not boil on high heat. A strong boil makes the soup cloudy.",
      "Add less salt while cooking and adjust at the end, after the soup has reduced.",
      "Freeze the strained soup in small boxes. It is the base for many other dishes.",
    ],
    serveWith: ["Sheermal", "Khasta roti", "Green salad", "Biryani, as a first course"],
  },
];

export const getRecipe = (slug: string) => recipes.find((recipe) => recipe.slug === slug);

export const totalTime = (recipe: Recipe) => recipe.prep + recipe.cook;

export const formatTime = (minutes: number) => {
  if (minutes < 60) return `${minutes} min`;
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  return rest ? `${hours} hr ${rest} min` : `${hours} hr`;
};

export const regionNotes: Record<string, string> = {
  Delhi: "Tandoor, butter and tomato. Delhi's restaurant style.",
  Punjab: "Mustard oil, ghee and strong masala. Food for a crowd.",
  Hyderabad: "Dum cooking, saffron and dry fruits. Slow and royal.",
  "Tamil Nadu": "Pepper, curry leaves and coconut. Hot, but with balance.",
  Kerala: "Coconut milk and small onions. Milder than you think.",
  Goa: "Vinegar, jaggery and Kashmiri chilli. Sour before hot.",
  Awadh: "Mild and rich. Nothing browned, no chilli powder.",
  Bengal: "Mustard oil and slow frying. Dark, thick and slightly sweet.",
};

export const regions = Array.from(new Set(recipes.map((recipe) => recipe.region))).map((name) => ({
  name,
  note: regionNotes[name],
  count: recipes.filter((recipe) => recipe.region === name).length,
}));

export const featured = ["murgh-makhani", "hyderabadi-chicken-biryani", "chettinad-pepper-chicken"];

export const pantry = [
  { name: "Kashmiri chilli", note: "Gives red colour without too much heat. Used in most red curries." },
  { name: "Kasuri methi", note: "Dried fenugreek leaves. Crush in your palm and add at the end." },
  { name: "Green cardamom", note: "Gives a sweet smell. Crush the pods; do not grind them whole." },
  { name: "Black pepper", note: "The main heat in southern dishes. Roast lightly and grind fresh." },
  { name: "Coriander seed", note: "Crush it roughly for kadai masala instead of using powder." },
  { name: "Mustard oil", note: "Heat it till it just smokes, then lower the flame before cooking." },
  { name: "Curry leaves", note: "Fry in hot oil for 30 seconds, till they stop spluttering." },
  { name: "Ghee", note: "Add a spoon at the end, after switching off the heat." },
];

export const method = [
  {
    number: "01",
    title: "Marinate for long enough",
    body: "Curd and lemon carry the masala into the chicken. Four hours is the minimum; overnight is better. Take the chicken out of the fridge 30 minutes before cooking.",
  },
  {
    number: "02",
    title: "Fry the whole spices first",
    body: "Whole spices need ghee and heat to release their smell. Fry them for 30–45 seconds, then add the powders. Burnt spices make the dish bitter and cannot be fixed.",
  },
  {
    number: "03",
    title: "Cook the masala till the oil separates",
    body: "Every masala goes through a stage where it looks dry and the oil comes out at the sides. Only then add water, not before. Most of the taste is built here.",
  },
  {
    number: "04",
    title: "Keep aside before serving",
    body: "Five minutes off the heat lets the gravy thicken and the masala settle into the chicken. Cover the pot and wait. It is the easiest way to improve any curry.",
  },
];
