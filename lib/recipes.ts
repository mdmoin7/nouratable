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
  Maharashtra: "Roasted coconut, goda masala and bold coastal and Deccan flavours.",
  "Andhra Pradesh": "Chilli, tamarind and curry leaves. Sharp, lively and full of heat.",
  Karnataka: "Coastal coconut masalas, Byadgi chillies and Kodava pepper.",
  "Himachal Pradesh": "Gentle hill cooking, curd gravies and whole spices.",
  Kashmir: "Fennel, dry ginger and delicate curd-based gravies.",
  Bihar: "Mustard oil, garlic and homestyle spice blends.",
  Rajasthan: "Robust spice, Mathania chilli and rich festive gravies.",
  Assam: "Light broths, seasonal vegetables and distinctive khar flavours.",
  Nagaland: "Smoked ingredients, chillies and bamboo shoot in varied home styles.",
  Manipur: "Light seasonal stews, vegetables, herbs and gentle broth.",
  Chhattisgarh: "Seasonal greens, garlic and rice-friendly home cooking.",
  "West Bengal": "Light jhols, mustard oil and slow-cooked Mughlai favourites.",
  Gujarat: "Parsi community cooking, sweet-sour gravies and crisp sali.",

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
  },,
  {
    "slug": "maharashtra-kombdi-rassa",
    "name": "Maharashtrian Chicken Rassa",
    "native": "Kombdi Rassa",
    "subtitle": "A fiery, thin village-style chicken curry with roasted coconut and goda masala.",
    "region": "Maharashtra",
    "origin": "Konkan and Western Maharashtra",
    "heat": 3,
    "prep": 20,
    "cook": 40,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Kombdi rassa is a home-style chicken curry from Maharashtra. Roasted coconut, onion and regional goda masala give the gravy its earthy body. Keep it thinner than a restaurant curry and serve it with bhakri or rice.",
    "tags": [
      "Goda masala",
      "Roasted coconut",
      "Village style"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "800 g chicken, cut into medium pieces",
          "1 tsp turmeric (haldi)",
          "1 tbsp ginger-garlic paste",
          "1 tsp red chilli powder",
          "1 tsp salt",
          "1 tbsp lemon juice"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "3 tbsp oil",
          "2 onions, sliced",
          "½ cup grated coconut",
          "2 tbsp goda masala",
          "1 tomato, chopped",
          "1 tsp coriander powder",
          "250 ml hot water",
          "Coriander leaves"
        ]
      }
    ],
    "steps": [
      {
        "title": "Roast the coconut",
        "body": "Dry roast the coconut on low heat till golden. Keep aside."
      },
      {
        "title": "Brown the onion",
        "body": "Heat oil and fry onions till deep golden. Add ginger-garlic paste and cook for a minute."
      },
      {
        "title": "Make the masala",
        "body": "Grind the roasted coconut and onions with goda masala, coriander and a little water."
      },
      {
        "title": "Cook the chicken",
        "body": "Fry chicken with turmeric, chilli and salt for 6 minutes. Add tomato and cook till soft."
      },
      {
        "title": "Simmer",
        "body": "Add the ground masala and hot water. Cover and cook for 20–25 minutes till the chicken is fully cooked."
      },
      {
        "title": "Finish",
        "body": "Adjust salt, add coriander and keep aside for 5 minutes."
      }
    ],
    "notes": [
      "Roast coconut slowly; burnt coconut makes the gravy bitter.",
      "Use a little more water for a rassa to eat with rice.",
      "Goda masala varies by brand, so adjust salt after simmering."
    ],
    "serveWith": [
      "Jowar bhakri",
      "Steamed rice",
      "Kanda bhaji"
    ]
  },
  {
    "slug": "kolhapuri-chicken",
    "name": "Kolhapuri Chicken",
    "native": "Kolhapuri Kombdi",
    "subtitle": "A bold red curry built on roasted dry chilli, coconut and sesame masala.",
    "region": "Maharashtra",
    "origin": "Kolhapur, Maharashtra",
    "heat": 3,
    "prep": 25,
    "cook": 45,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Kolhapuri chicken is known for a deep roasted masala and a strong chilli finish. This home version uses dry coconut, sesame and whole spices ground fresh. The colour should come from the masala, not only chilli powder.",
    "tags": [
      "Roasted masala",
      "Sesame",
      "Hot curry"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "800 g chicken, bone-in pieces",
          "1 tsp turmeric",
          "1 tbsp ginger-garlic paste",
          "1 tsp salt",
          "1 tbsp lemon juice"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "2 tbsp oil",
          "1 onion, sliced",
          "¼ cup dry coconut",
          "1 tbsp sesame seeds",
          "2 tbsp coriander seeds",
          "5 dried red chillies",
          "1 tsp cumin seeds",
          "4 cloves",
          "1 cinnamon stick",
          "1 tomato, chopped",
          "300 ml hot water"
        ]
      }
    ],
    "steps": [
      {
        "title": "Roast the spices",
        "body": "Dry roast coriander, cumin, cloves, cinnamon and chillies till aromatic. Remove."
      },
      {
        "title": "Roast coconut and sesame",
        "body": "Roast coconut and sesame separately till golden. Cool everything."
      },
      {
        "title": "Grind the masala",
        "body": "Grind roasted ingredients with fried onion and a little water to a thick paste."
      },
      {
        "title": "Fry chicken",
        "body": "Heat oil, add ginger-garlic paste and chicken. Fry for 7 minutes with turmeric and salt."
      },
      {
        "title": "Simmer the curry",
        "body": "Add tomato and ground masala. Fry till oil shows at the edges. Add hot water, cover and cook for 25 minutes."
      },
      {
        "title": "Serve",
        "body": "Check the chicken is cooked through. Finish with coriander and serve hot."
      }
    ],
    "notes": [
      "Use Byadgi chillies for colour and hotter chillies for heat.",
      "Roast each spice separately because they brown at different speeds.",
      "Add water gradually to keep the curry thick."
    ],
    "serveWith": [
      "Jowar bhakri",
      "Steamed rice",
      "Sliced onion"
    ]
  },
  {
    "slug": "andhra-kodi-kura",
    "name": "Andhra Chicken Curry",
    "native": "Andhra Kodi Kura",
    "subtitle": "A spicy Andhra chicken curry with curry leaves, chilli and a tamarind lift.",
    "region": "Andhra Pradesh",
    "origin": "Andhra Pradesh",
    "heat": 3,
    "prep": 20,
    "cook": 40,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Kodi kura changes across Andhra homes. This version balances chilli, curry leaves and a little tamarind for a lively gravy. Use bone-in chicken and let the masala fry properly before adding water.",
    "tags": [
      "Andhra style",
      "Curry leaves",
      "Tamarind"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "800 g chicken, bone-in",
          "1 tsp turmeric",
          "1 tbsp ginger-garlic paste",
          "1½ tsp chilli powder",
          "1 tsp salt",
          "Small lemon-sized tamarind, soaked"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "3 tbsp oil",
          "1 tsp mustard seeds",
          "1 tsp cumin seeds",
          "2 onions, finely chopped",
          "2 sprigs curry leaves",
          "1 tomato, chopped",
          "1 tbsp coriander powder",
          "½ tsp cumin powder",
          "1 green chilli",
          "250 ml hot water",
          "Coriander leaves"
        ]
      }
    ],
    "steps": [
      {
        "title": "Marinate",
        "body": "Mix chicken with turmeric, ginger-garlic paste, chilli and salt. Keep aside for 20 minutes."
      },
      {
        "title": "Temper",
        "body": "Heat oil. Add mustard, cumin and curry leaves. Add onions and fry till golden."
      },
      {
        "title": "Cook tomato",
        "body": "Add tomato, coriander and cumin powders. Cook till the tomato softens and oil separates."
      },
      {
        "title": "Fry chicken",
        "body": "Add chicken and fry on medium-high heat for 8 minutes so the pieces are coated."
      },
      {
        "title": "Simmer",
        "body": "Add strained tamarind water and hot water. Cover and cook for 20–25 minutes till tender."
      },
      {
        "title": "Finish",
        "body": "Add slit green chilli and coriander. Adjust tang and salt before serving."
      }
    ],
    "notes": [
      "Tamarind should add a gentle sourness, not dominate the chilli.",
      "Use chilli powder to taste; Andhra varieties differ in heat.",
      "Simmer gently until the chicken is cooked through."
    ],
    "serveWith": [
      "Steamed rice",
      "Ragi sangati",
      "Dosa"
    ]
  },
  {
    "slug": "gongura-chicken",
    "name": "Gongura Chicken",
    "native": "Gongura Kodi",
    "subtitle": "A tangy Andhra chicken curry with sorrel leaves and a roasted spice paste.",
    "region": "Andhra Pradesh",
    "origin": "Coastal Andhra",
    "heat": 3,
    "prep": 25,
    "cook": 40,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Gongura leaves have a sharp, lemony taste that gives this Andhra chicken its identity. The leaves are cooked down first, then blended into the masala so the sourness spreads through the gravy.",
    "tags": [
      "Gongura",
      "Sorrel leaves",
      "Tangy"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "800 g chicken, medium pieces",
          "1 tsp turmeric",
          "1 tbsp ginger-garlic paste",
          "1 tsp chilli powder",
          "1 tsp salt"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "2 bunches gongura leaves, cleaned",
          "3 tbsp oil",
          "1 onion, sliced",
          "4 dried red chillies",
          "1 tsp cumin seeds",
          "1 tbsp coriander seeds",
          "½ tsp fenugreek seeds",
          "200 ml hot water",
          "Coriander leaves"
        ]
      }
    ],
    "steps": [
      {
        "title": "Cook the gongura",
        "body": "Heat a little oil and cook gongura leaves till wilted and soft. Cool and grind to a coarse paste."
      },
      {
        "title": "Roast spices",
        "body": "Roast dried chillies, cumin, coriander and fenugreek briefly. Grind with the cooked leaves."
      },
      {
        "title": "Fry onion",
        "body": "Heat remaining oil and fry onion till golden. Add ginger-garlic paste and cook for a minute."
      },
      {
        "title": "Cook chicken",
        "body": "Add chicken, turmeric, chilli and salt. Fry for 7 minutes till coated."
      },
      {
        "title": "Add gongura paste",
        "body": "Stir in the paste and fry for 5 minutes. Add hot water and cover."
      },
      {
        "title": "Simmer",
        "body": "Cook for 20 minutes till chicken is fully cooked and gravy thickens. Finish with coriander."
      }
    ],
    "notes": [
      "Gongura is naturally sour; taste before adding lemon or tamarind.",
      "Use tender leaves and remove thick stems.",
      "A little sesame oil gives a traditional flavour."
    ],
    "serveWith": [
      "Steamed rice",
      "Jonna roti",
      "Pappu"
    ]
  },
  {
    "slug": "kerala-varutharachathu",
    "name": "Kerala Roasted Coconut Chicken Curry",
    "native": "Kozhi Varutharachathu",
    "subtitle": "Chicken simmered in a freshly roasted coconut, coriander and spice gravy.",
    "region": "Kerala",
    "origin": "Central Kerala",
    "heat": 2,
    "prep": 25,
    "cook": 45,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Varutharachathu means roasted and ground. Coconut, coriander and spices are browned carefully, ground smooth and simmered with chicken. The roasted paste makes this Kerala curry different from a simple coconut milk curry.",
    "tags": [
      "Roasted coconut",
      "Kerala curry",
      "Coconut oil"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "800 g chicken, bone-in",
          "½ tsp turmeric",
          "1 tbsp ginger-garlic paste",
          "1 tsp salt"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "1 cup grated coconut",
          "2 tbsp coriander seeds",
          "4 dried red chillies",
          "½ tsp fennel seeds",
          "3 cloves",
          "1 small cinnamon stick",
          "3 tbsp coconut oil",
          "2 onions, sliced",
          "2 sprigs curry leaves",
          "1 tomato, chopped",
          "300 ml hot water"
        ]
      }
    ],
    "steps": [
      {
        "title": "Roast coconut",
        "body": "Dry roast coconut on low heat till evenly deep golden. Do not burn."
      },
      {
        "title": "Roast spices",
        "body": "Roast coriander, chillies, fennel, cloves and cinnamon briefly. Grind with coconut and water."
      },
      {
        "title": "Start the curry",
        "body": "Heat coconut oil. Fry onions and curry leaves till golden. Add ginger-garlic paste."
      },
      {
        "title": "Fry chicken",
        "body": "Add chicken, turmeric and salt. Fry till the outside changes colour."
      },
      {
        "title": "Simmer",
        "body": "Add tomato and ground coconut paste. Add hot water, cover and cook for 25 minutes."
      },
      {
        "title": "Finish",
        "body": "Cook uncovered to thicken. Check chicken is fully cooked and serve hot."
      }
    ],
    "notes": [
      "The coconut should be golden brown, not black.",
      "Add water in stages; the curry thickens as it rests.",
      "Use fresh curry leaves for the best aroma."
    ],
    "serveWith": [
      "Appam",
      "Matta rice",
      "Malabar parotta"
    ]
  },
  {
    "slug": "malabar-chicken-roast",
    "name": "Malabar Chicken Roast",
    "native": "Malabar Kozhi Roast",
    "subtitle": "Peppery chicken roasted down with onions, curry leaves and coconut oil.",
    "region": "Kerala",
    "origin": "Malabar, Kerala",
    "heat": 3,
    "prep": 20,
    "cook": 40,
    "serves": 4,
    "variant": "dry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Malabar chicken roast is a semi-dry preparation where onions cook down around the chicken. Pepper and curry leaves give warmth, while coconut oil adds the familiar coastal aroma.",
    "tags": [
      "Malabar",
      "Pepper roast",
      "Semi-dry"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "800 g chicken, small pieces",
          "1 tsp turmeric",
          "1 tbsp ginger-garlic paste",
          "1 tsp black pepper",
          "1 tsp salt"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "3 tbsp coconut oil",
          "3 onions, thinly sliced",
          "2 sprigs curry leaves",
          "2 tomatoes, chopped",
          "1 tsp chilli powder",
          "1 tsp coriander powder",
          "½ tsp fennel powder",
          "½ tsp garam masala",
          "100 ml hot water",
          "Coriander leaves"
        ]
      }
    ],
    "steps": [
      {
        "title": "Marinate",
        "body": "Mix chicken with turmeric, pepper, ginger-garlic paste and salt. Keep aside for 20 minutes."
      },
      {
        "title": "Fry onions",
        "body": "Heat coconut oil. Add curry leaves and onions. Fry till deep golden and soft."
      },
      {
        "title": "Build masala",
        "body": "Add tomatoes, chilli and coriander powders. Cook till thick."
      },
      {
        "title": "Cook chicken",
        "body": "Add chicken and fry on medium heat for 7 minutes."
      },
      {
        "title": "Cover",
        "body": "Add hot water, cover and cook for 18–20 minutes till chicken is tender."
      },
      {
        "title": "Roast down",
        "body": "Remove lid and cook on high heat till the masala clings to chicken. Add fennel and garam masala."
      }
    ],
    "notes": [
      "Slice onions evenly so they cook at the same pace.",
      "Keep stirring during the final roast to prevent sticking.",
      "Use more pepper for a sharper finish."
    ],
    "serveWith": [
      "Pathiri",
      "Appam",
      "Ghee rice"
    ]
  },
  {
    "slug": "goan-xacuti",
    "name": "Goan Chicken Xacuti",
    "native": "Galinha Xacuti",
    "subtitle": "A fragrant Goan curry with toasted coconut, poppy seeds and a complex spice blend.",
    "region": "Goa",
    "origin": "Goa",
    "heat": 3,
    "prep": 30,
    "cook": 50,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Xacuti is a Goan curry known for its roasted coconut and layered spice paste. The spices are toasted separately, then ground with coconut to make a thick, aromatic gravy. It differs from the vinegar-forward taste of vindaloo.",
    "tags": [
      "Goan",
      "Roasted coconut",
      "Spice paste"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "800 g chicken, medium pieces",
          "1 tsp turmeric",
          "1 tbsp ginger-garlic paste",
          "1 tsp salt"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "1 cup grated coconut",
          "2 tbsp coriander seeds",
          "4 dried red chillies",
          "1 tsp cumin seeds",
          "½ tsp poppy seeds",
          "4 cloves",
          "1 cinnamon stick",
          "½ tsp black peppercorns",
          "3 tbsp oil",
          "2 onions, sliced",
          "1 tomato, chopped",
          "300 ml hot water",
          "Small ball tamarind"
        ]
      }
    ],
    "steps": [
      {
        "title": "Roast coconut",
        "body": "Roast coconut slowly till golden brown. Keep aside."
      },
      {
        "title": "Toast spices",
        "body": "Toast coriander, cumin, poppy, cloves, cinnamon, pepper and chillies until fragrant."
      },
      {
        "title": "Grind paste",
        "body": "Grind toasted spices and coconut with a little water to a smooth paste."
      },
      {
        "title": "Fry base",
        "body": "Heat oil. Fry onions till golden, add ginger-garlic paste and tomato."
      },
      {
        "title": "Cook chicken",
        "body": "Add chicken and turmeric. Fry for 6–8 minutes."
      },
      {
        "title": "Simmer",
        "body": "Add ground paste, tamarind and hot water. Cover and cook for 25–30 minutes till done. Adjust salt."
      }
    ],
    "notes": [
      "Tamarind should balance the roasted spices without making the curry too sour.",
      "Do not rush the coconut roasting; pale coconut gives a lighter gravy.",
      "Serve with plain rice to let the masala stand out."
    ],
    "serveWith": [
      "Goan rice",
      "Poi",
      "Sanna"
    ]
  },
  {
    "slug": "kashmiri-chicken-yakhni",
    "name": "Kashmiri Chicken Yakhni",
    "native": "Kokur Yakhni",
    "subtitle": "A gentle curd-based chicken curry scented with fennel, dry ginger and whole spices.",
    "region": "Kashmir",
    "origin": "Kashmir Valley",
    "heat": 1,
    "prep": 20,
    "cook": 40,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Kashmiri yakhni is a delicate yoghurt gravy scented with fennel and dry ginger. Unlike many North Indian curries, it does not depend on tomato or a heavy onion base. Keep the heat gentle so the curd stays smooth.",
    "tags": [
      "Kashmiri",
      "Fennel",
      "Curd gravy"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "800 g chicken, medium pieces",
          "200 g thick curd, whisked",
          "1 tsp salt",
          "½ tsp dry ginger powder (saunth)",
          "1 tbsp fennel powder"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "3 tbsp mustard oil",
          "1 bay leaf",
          "1 black cardamom",
          "1 small cinnamon stick",
          "4 green cardamom",
          "½ tsp cumin seeds",
          "½ tsp asafoetida (hing)",
          "1 tsp fennel powder",
          "½ tsp dry ginger powder",
          "250 ml hot water",
          "A few mint leaves"
        ]
      }
    ],
    "steps": [
      {
        "title": "Prepare curd",
        "body": "Whisk curd till smooth. Keep it at room temperature while preparing the pan."
      },
      {
        "title": "Temper spices",
        "body": "Heat mustard oil. Add bay leaf, cardamom, cinnamon, cumin and hing."
      },
      {
        "title": "Fry chicken",
        "body": "Add chicken and salt. Fry till the outside changes colour."
      },
      {
        "title": "Add curd",
        "body": "Lower the flame. Add curd a spoon at a time, stirring continuously so it does not split."
      },
      {
        "title": "Season",
        "body": "Add fennel and dry ginger powder. Stir well and add hot water."
      },
      {
        "title": "Simmer",
        "body": "Cover and cook gently for 20–25 minutes till chicken is cooked through. Finish with mint."
      }
    ],
    "notes": [
      "Keep the flame low when adding curd.",
      "Fennel is the main flavour; do not replace it with garam masala.",
      "This is a light gravy, not a thick red curry."
    ],
    "serveWith": [
      "Steamed rice",
      "Kashmiri girda",
      "Jeera rice"
    ]
  },
  {
    "slug": "bihari-chicken-mustard",
    "name": "Bihari Mustard Chicken",
    "native": "Bihari Sarson Murgh",
    "subtitle": "A mustard-oil chicken curry with pungent mustard, garlic and a bright chilli finish.",
    "region": "Bihar",
    "origin": "Bihar",
    "heat": 3,
    "prep": 20,
    "cook": 40,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "This home-style Bihari chicken uses mustard oil and a freshly ground mustard paste for a sharp, pungent gravy. Use the mustard carefully and balance it with tomato and lemon. It pairs well with rice or sattu roti.",
    "tags": [
      "Mustard oil",
      "Bihari home style",
      "Pungent"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "800 g chicken, medium pieces",
          "1 tsp turmeric",
          "1 tbsp garlic paste",
          "1 tsp chilli powder",
          "1 tsp salt"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "3 tbsp mustard oil",
          "2 tbsp yellow mustard seeds, soaked",
          "1 tsp cumin seeds",
          "2 onions, sliced",
          "2 tomatoes, chopped",
          "1 tsp coriander powder",
          "1 green chilli",
          "250 ml hot water",
          "Coriander leaves"
        ]
      }
    ],
    "steps": [
      {
        "title": "Soak mustard",
        "body": "Soak mustard seeds for 20 minutes. Grind with a little water to a smooth paste."
      },
      {
        "title": "Heat oil",
        "body": "Heat mustard oil till it smokes lightly. Lower the flame and add cumin."
      },
      {
        "title": "Fry onions",
        "body": "Add onions and fry till golden. Add garlic paste and cook for a minute."
      },
      {
        "title": "Cook chicken",
        "body": "Add chicken, turmeric, chilli and salt. Fry for 7 minutes."
      },
      {
        "title": "Add gravy",
        "body": "Add tomatoes and coriander powder. Cook till soft, then add mustard paste and hot water."
      },
      {
        "title": "Simmer",
        "body": "Cover and cook for 20–25 minutes till the chicken is done. Finish with green chilli and coriander."
      }
    ],
    "notes": [
      "Soaked mustard paste can turn bitter if boiled hard; simmer gently.",
      "Heat mustard oil till it smokes, then lower the flame.",
      "Use a mix of yellow and black mustard for sharper flavour."
    ],
    "serveWith": [
      "Steamed rice",
      "Sattu roti",
      "Litti"
    ]
  },
  {
    "slug": "rajasthani-safed-murg",
    "name": "Rajasthani Safed Chicken",
    "native": "Safed Maas Style Murgh",
    "subtitle": "A pale, mildly spiced chicken curry with curd, nuts, pepper and cardamom.",
    "region": "Rajasthan",
    "origin": "Rajasthan",
    "heat": 1,
    "prep": 25,
    "cook": 45,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Inspired by the pale, nut-rich gravies of Rajasthan, this chicken version uses curd, cashew and pepper rather than a red chilli base. It is a mild festive curry for a slower meal.",
    "tags": [
      "Mild",
      "Nut gravy",
      "Festive"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "800 g chicken",
          "150 g thick curd",
          "1 tbsp ginger-garlic paste",
          "½ tsp white pepper",
          "1 tsp salt"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "3 tbsp ghee",
          "1 onion, boiled and ground",
          "40 g cashews, soaked",
          "1 tbsp melon seeds",
          "4 green cardamom",
          "1 bay leaf",
          "½ tsp black pepper",
          "100 ml fresh cream",
          "200 ml hot water",
          "A pinch of saffron"
        ]
      }
    ],
    "steps": [
      {
        "title": "Make nut paste",
        "body": "Grind soaked cashews and melon seeds with a little water."
      },
      {
        "title": "Cook onion",
        "body": "Heat ghee with cardamom and bay leaf. Add onion paste and cook on low till pale golden."
      },
      {
        "title": "Add chicken",
        "body": "Add ginger-garlic paste and chicken. Fry gently for 6 minutes."
      },
      {
        "title": "Add curd",
        "body": "Lower heat and stir in whisked curd gradually."
      },
      {
        "title": "Simmer",
        "body": "Add nut paste, pepper, saffron and hot water. Cover and cook 22–25 minutes."
      },
      {
        "title": "Finish",
        "body": "Add cream on low heat, adjust salt and switch off before it boils."
      }
    ],
    "notes": [
      "Keep the gravy pale; do not brown the onions deeply.",
      "Whisk curd well and add slowly over low heat.",
      "Use fresh white pepper for a clean warmth."
    ],
    "serveWith": [
      "Roomali roti",
      "Pulao",
      "Sheermal"
    ]
  },
  {
    "slug": "himachali-chicken-madra",
    "name": "Himachali Chicken Madra",
    "native": "Pahari Murgh Madra",
    "subtitle": "A curd-rich hill-style chicken curry with whole spices and a slow simmer.",
    "region": "Himachal Pradesh",
    "origin": "Himachal Pradesh",
    "heat": 2,
    "prep": 20,
    "cook": 45,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Madra is associated with Himachali cooking and is often made with pulses. This chicken adaptation borrows the region's yoghurt-rich, gently spiced gravy, with chickpeas adding texture. It is a Murgh variation rather than a claim that chicken madra is the sole traditional form.",
    "tags": [
      "Pahari inspired",
      "Curd gravy",
      "Chickpeas"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "700 g chicken",
          "150 g curd, whisked",
          "150 g cooked chickpeas",
          "1 tsp ginger paste",
          "1 tsp salt"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "3 tbsp ghee",
          "1 tsp cumin seeds",
          "3 cloves",
          "1 cinnamon stick",
          "1 black cardamom",
          "½ tsp turmeric",
          "1 tsp coriander powder",
          "½ tsp fennel powder",
          "250 ml hot water",
          "Coriander leaves"
        ]
      }
    ],
    "steps": [
      {
        "title": "Temper",
        "body": "Heat ghee and add cumin, cloves, cinnamon and black cardamom."
      },
      {
        "title": "Fry chicken",
        "body": "Add ginger and chicken. Fry for 6–7 minutes."
      },
      {
        "title": "Season",
        "body": "Add turmeric, coriander and fennel. Stir for a minute."
      },
      {
        "title": "Add curd",
        "body": "Lower the flame and add whisked curd gradually while stirring."
      },
      {
        "title": "Simmer",
        "body": "Add chickpeas and hot water. Cover and cook for 22–25 minutes till chicken is cooked."
      },
      {
        "title": "Finish",
        "body": "Adjust salt and garnish with coriander."
      }
    ],
    "notes": [
      "This is a regional adaptation inspired by madra's curd-based style.",
      "Use cooked chickpeas so they do not stay hard in the curry.",
      "Keep the flame low after adding curd."
    ],
    "serveWith": [
      "Chakki ki roti",
      "Steamed rice",
      "Cucumber salad"
    ]
  },
  {
    "slug": "assamese-chicken-khar",
    "name": "Assamese Chicken Khar",
    "native": "Kharir Logot Murgi",
    "subtitle": "A light Assamese chicken preparation with raw papaya, ginger and a gentle alkaline note.",
    "region": "Assam",
    "origin": "Assam",
    "heat": 1,
    "prep": 20,
    "cook": 35,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Khar is a distinctive Assamese alkaline preparation traditionally associated with banana-ash filtrate. This accessible chicken version uses a small amount of food-grade khar water where available; never substitute household cleaning soda. It is light and best eaten with rice.",
    "tags": [
      "Assamese",
      "Khar",
      "Raw papaya"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "700 g chicken, small pieces",
          "150 g raw papaya, peeled and cubed",
          "1 tsp ginger paste",
          "½ tsp turmeric",
          "1 tsp salt"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "2 tbsp mustard oil",
          "1 potato, cubed",
          "1 onion, sliced",
          "1 tomato, chopped",
          "½ tsp black pepper",
          "100 ml water",
          "1–2 tbsp food-grade khar water, optional",
          "Coriander leaves"
        ]
      }
    ],
    "steps": [
      {
        "title": "Prepare papaya",
        "body": "Peel and cube raw papaya. Keep aside."
      },
      {
        "title": "Fry base",
        "body": "Heat mustard oil. Fry potato and onion till lightly golden."
      },
      {
        "title": "Add chicken",
        "body": "Add chicken, ginger, turmeric and salt. Fry for 6 minutes."
      },
      {
        "title": "Cook vegetables",
        "body": "Add tomato, papaya, pepper and water. Cover and cook 15–18 minutes."
      },
      {
        "title": "Finish with khar",
        "body": "Add food-grade khar water a little at a time, only if using. Simmer briefly and taste."
      },
      {
        "title": "Serve",
        "body": "Check chicken is fully cooked and serve with steamed rice."
      }
    ],
    "notes": [
      "Use only food-grade khar supplied for cooking; omit if unsure.",
      "Do not use washing soda or an unmeasured alkaline substitute.",
      "Raw papaya softens as it cooks and helps thicken the broth."
    ],
    "serveWith": [
      "Steamed rice",
      "Khar",
      "Lemon wedge"
    ]
  },
  {
    "slug": "nagaland-smoked-chicken",
    "name": "Naga Smoked Chicken Curry",
    "native": "Naga Smoked Murgh",
    "subtitle": "A smoky chilli chicken curry inspired by Naga home cooking and smoked ingredients.",
    "region": "Nagaland",
    "origin": "Nagaland",
    "heat": 3,
    "prep": 20,
    "cook": 35,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Smoking and dried chillies are used in several Naga food traditions. This home-kitchen chicken curry uses smoked chicken or smoked chilli as a flavour cue, with bamboo shoot optional. It is a practical adaptation, not a single canonical Naga recipe.",
    "tags": [
      "Northeast",
      "Smoked flavour",
      "Bamboo shoot"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "700 g chicken",
          "1 tbsp ginger-garlic paste",
          "1 tsp chilli flakes",
          "1 tsp salt",
          "½ tsp turmeric"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "2 tbsp mustard oil",
          "1 onion, sliced",
          "2 tomatoes, chopped",
          "2 dried smoked chillies",
          "100 g cooked bamboo shoot, optional",
          "½ tsp black pepper",
          "200 ml hot water",
          "Coriander leaves"
        ]
      }
    ],
    "steps": [
      {
        "title": "Temper",
        "body": "Heat mustard oil and add crushed dried chillies."
      },
      {
        "title": "Fry onion",
        "body": "Add onion and fry till soft and lightly golden."
      },
      {
        "title": "Add chicken",
        "body": "Add ginger-garlic paste and chicken. Fry for 7 minutes."
      },
      {
        "title": "Add tomato",
        "body": "Add tomatoes, turmeric, pepper and salt. Cook till tomatoes soften."
      },
      {
        "title": "Simmer",
        "body": "Add bamboo shoot if using and hot water. Cover and cook 20 minutes till chicken is done."
      },
      {
        "title": "Finish",
        "body": "Remove lid to reduce gravy. Taste for salt and serve."
      }
    ],
    "notes": [
      "Bamboo shoot has a strong aroma; rinse and cook it before adding.",
      "Use smoked chilli if smoked chicken is not easy to source.",
      "Naga food varies widely between communities and households."
    ],
    "serveWith": [
      "Steamed rice",
      "Boiled greens",
      "Chilli chutney"
    ]
  },
  {
    "slug": "manipuri-chicken-kangshoi",
    "name": "Manipuri Chicken Kangshoi",
    "native": "Yen Thongba Inspired",
    "subtitle": "A light broth with chicken, seasonal vegetables, ginger and fresh herbs.",
    "region": "Manipur",
    "origin": "Manipur",
    "heat": 1,
    "prep": 15,
    "cook": 30,
    "serves": 4,
    "variant": "soup",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Kangshoi is a light Manipuri vegetable stew. This chicken variation is inspired by its simple broth and seasonal vegetables; it is not presented as a canonical traditional meat recipe. Keep the seasoning clean and let the vegetables flavour the stock.",
    "tags": [
      "Northeast",
      "Light broth",
      "Vegetables"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "600 g chicken, bone-in small pieces",
          "1 tsp ginger, crushed",
          "1 tsp salt",
          "½ tsp turmeric"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "1 potato, cubed",
          "100 g pumpkin, cubed",
          "100 g beans, cut",
          "1 tomato, quartered",
          "2 green chillies",
          "1 litre water",
          "Spring onion greens",
          "Coriander leaves"
        ]
      }
    ],
    "steps": [
      {
        "title": "Start broth",
        "body": "Add chicken, ginger, turmeric, salt and water to a pot. Bring to a simmer and skim foam."
      },
      {
        "title": "Cook chicken",
        "body": "Cover partly and simmer for 18 minutes."
      },
      {
        "title": "Add vegetables",
        "body": "Add potato, pumpkin, beans and tomato. Simmer till vegetables soften."
      },
      {
        "title": "Season",
        "body": "Add green chillies and adjust salt. Cook until chicken is thoroughly cooked."
      },
      {
        "title": "Finish",
        "body": "Switch off heat and add spring onion greens and coriander."
      },
      {
        "title": "Serve",
        "body": "Ladle into bowls with rice."
      }
    ],
    "notes": [
      "Keep broth at a gentle simmer for clarity.",
      "Cut vegetables evenly so they cook at the same speed.",
      "This is an inspired chicken variation on a vegetable stew tradition."
    ],
    "serveWith": [
      "Steamed rice",
      "Herb chutney",
      "Seasonal greens"
    ]
  },
  {
    "slug": "bihari-chicken-korma",
    "name": "Bihari Chicken Korma",
    "native": "Bihari Murgh Korma",
    "subtitle": "A fragrant mustard-oil chicken korma with curd, fried onion and warm spices.",
    "region": "Bihar",
    "origin": "Bihar",
    "heat": 2,
    "prep": 25,
    "cook": 45,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "This Bihari home-style korma uses mustard oil, curd and a freshly ground spice mix. It is less fiery than the mustard chicken and gets its flavour from a slow onion base.",
    "tags": [
      "Bihari",
      "Korma",
      "Mustard oil"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "800 g chicken",
          "150 g curd",
          "1 tbsp ginger-garlic paste",
          "½ tsp turmeric",
          "1 tsp salt"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "3 tbsp mustard oil",
          "2 onions, sliced",
          "1 tsp cumin",
          "3 cloves",
          "1 cinnamon stick",
          "2 green cardamom",
          "1 tsp coriander powder",
          "½ tsp chilli powder",
          "1 tomato, chopped",
          "250 ml hot water"
        ]
      }
    ],
    "steps": [
      {
        "title": "Brown onion",
        "body": "Heat mustard oil and fry onions till golden brown. Remove half for garnish."
      },
      {
        "title": "Fry spices",
        "body": "Add whole spices and ginger-garlic paste. Cook for a minute."
      },
      {
        "title": "Cook chicken",
        "body": "Add chicken, turmeric and salt. Fry for 7 minutes."
      },
      {
        "title": "Add curd",
        "body": "Lower heat and add whisked curd gradually, stirring continuously."
      },
      {
        "title": "Simmer",
        "body": "Add tomato, coriander, chilli and hot water. Cover and cook for 25 minutes."
      },
      {
        "title": "Finish",
        "body": "Reduce gravy uncovered. Add reserved onions and serve."
      }
    ],
    "notes": [
      "Use mustard oil for its characteristic aroma.",
      "Keep stirring while adding curd to avoid splitting.",
      "Adjust chilli after the curry has simmered."
    ],
    "serveWith": [
      "Steamed rice",
      "Sattu roti",
      "Paratha"
    ]
  },
  {
    "slug": "karnataka-kundapura-chicken",
    "name": "Kundapura Chicken Curry",
    "native": "Kundapura Kori Gassi",
    "subtitle": "A coastal Karnataka chicken curry with Byadgi chilli, coconut and tamarind.",
    "region": "Karnataka",
    "origin": "Kundapura, coastal Karnataka",
    "heat": 3,
    "prep": 25,
    "cook": 45,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Kori gassi is a coastal Karnataka chicken curry associated with Mangalorean kitchens. This Kundapura-style variation leans on Byadgi chillies, coconut and tamarind. The red masala should be aromatic, not only hot.",
    "tags": [
      "Coastal Karnataka",
      "Coconut",
      "Byadgi chilli"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "800 g chicken, bone-in",
          "1 tsp turmeric",
          "1 tbsp ginger-garlic paste",
          "1 tsp salt"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "1 cup grated coconut",
          "6 Byadgi chillies",
          "1 tbsp coriander seeds",
          "1 tsp cumin",
          "½ tsp fenugreek seeds",
          "4 cloves",
          "1 cinnamon stick",
          "3 tbsp coconut oil",
          "2 onions, sliced",
          "Small ball tamarind",
          "300 ml hot water"
        ]
      }
    ],
    "steps": [
      {
        "title": "Roast coconut",
        "body": "Roast coconut till golden and fragrant."
      },
      {
        "title": "Toast spices",
        "body": "Toast chillies, coriander, cumin, fenugreek, cloves and cinnamon."
      },
      {
        "title": "Grind masala",
        "body": "Grind spices with coconut and soaked tamarind to a smooth paste."
      },
      {
        "title": "Fry onion",
        "body": "Heat coconut oil and fry onion till golden. Add ginger-garlic paste."
      },
      {
        "title": "Fry chicken",
        "body": "Add chicken and turmeric. Fry for 7 minutes."
      },
      {
        "title": "Simmer",
        "body": "Add masala and hot water. Cover and cook 25 minutes till chicken is tender."
      }
    ],
    "notes": [
      "Byadgi chillies give deep colour with moderate heat.",
      "Use tamarind sparingly and adjust after simmering.",
      "Serve with neer dosa or rice."
    ],
    "serveWith": [
      "Neer dosa",
      "Steamed rice",
      "Kori rotti"
    ]
  },
  {
    "slug": "mangalorean-chicken-sukka",
    "name": "Mangalorean Chicken Sukka",
    "native": "Kori Ajadina",
    "subtitle": "A semi-dry chicken dish coated in roasted coconut, curry leaves and spice masala.",
    "region": "Karnataka",
    "origin": "Mangaluru, Karnataka",
    "heat": 3,
    "prep": 25,
    "cook": 40,
    "serves": 4,
    "variant": "dry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Sukka is a dry or semi-dry coastal preparation. The chicken cooks in a roasted coconut masala with curry leaves and Byadgi chilli. Keep the masala thick and scrape the pan so it coats every piece.",
    "tags": [
      "Mangalorean",
      "Semi-dry",
      "Roasted coconut"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "800 g chicken, small pieces",
          "1 tsp turmeric",
          "1 tbsp ginger-garlic paste",
          "1 tsp salt"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "¾ cup grated coconut",
          "5 Byadgi chillies",
          "1 tbsp coriander seeds",
          "½ tsp cumin",
          "4 cloves",
          "1 cinnamon stick",
          "3 tbsp coconut oil",
          "2 onions, sliced",
          "2 sprigs curry leaves",
          "100 ml hot water"
        ]
      }
    ],
    "steps": [
      {
        "title": "Roast coconut",
        "body": "Roast coconut till golden. Keep aside."
      },
      {
        "title": "Roast spices",
        "body": "Toast chillies, coriander, cumin, cloves and cinnamon. Grind with coconut."
      },
      {
        "title": "Fry onions",
        "body": "Heat coconut oil. Fry onions and curry leaves till golden."
      },
      {
        "title": "Cook chicken",
        "body": "Add ginger-garlic paste and chicken. Fry for 8 minutes."
      },
      {
        "title": "Add masala",
        "body": "Add ground paste and hot water. Cover and cook for 20 minutes."
      },
      {
        "title": "Roast dry",
        "body": "Remove lid and cook, stirring, till masala clings to chicken."
      }
    ],
    "notes": [
      "Use fresh coconut for a softer texture.",
      "Add a splash of water if the masala catches before chicken cooks.",
      "Finish with curry leaves fried in coconut oil."
    ],
    "serveWith": [
      "Neer dosa",
      "Rice roti",
      "Rasam"
    ]
  },
  {
    "slug": "punjabi-saag-chicken",
    "name": "Punjabi Saag Chicken",
    "native": "Saagwala Murgh",
    "subtitle": "Chicken cooked in a spinach and mustard-greens gravy with garlic and garam masala.",
    "region": "Punjab",
    "origin": "Punjab",
    "heat": 2,
    "prep": 20,
    "cook": 40,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Saagwala murgh pairs tender chicken with leafy greens. The greens are cooked and ground before being simmered with the chicken, keeping their colour and earthy taste.",
    "tags": [
      "Saagwala",
      "Spinach",
      "Greens"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "700 g chicken",
          "1 tsp turmeric",
          "1 tbsp ginger-garlic paste",
          "1 tsp salt"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "300 g spinach",
          "100 g mustard greens, optional",
          "3 tbsp ghee",
          "1 onion, chopped",
          "1 tomato, chopped",
          "1 tsp cumin seeds",
          "1 tsp chilli powder",
          "1 tsp coriander powder",
          "½ tsp garam masala",
          "150 ml hot water",
          "4 garlic cloves"
        ]
      }
    ],
    "steps": [
      {
        "title": "Blanch greens",
        "body": "Wash greens well. Blanch for 2 minutes, drain and grind coarsely."
      },
      {
        "title": "Temper",
        "body": "Heat ghee and cumin. Add chopped garlic and onion; fry till golden."
      },
      {
        "title": "Cook tomato",
        "body": "Add tomato, chilli and coriander powders. Cook till thick."
      },
      {
        "title": "Fry chicken",
        "body": "Add chicken and turmeric. Fry for 7 minutes."
      },
      {
        "title": "Add greens",
        "body": "Add ground greens and hot water. Cover and cook for 20–25 minutes till chicken is done."
      },
      {
        "title": "Finish",
        "body": "Add garam masala and adjust salt. Serve hot."
      }
    ],
    "notes": [
      "Spinach alone works when mustard greens are unavailable.",
      "Do not overcook greens after grinding or the colour dulls.",
      "Use bone-in pieces for a richer gravy."
    ],
    "serveWith": [
      "Makki di roti",
      "Steamed rice",
      "Onion salad"
    ]
  },
  {
    "slug": "gujarati-sali-marghi",
    "name": "Parsi Sali Marghi",
    "native": "Sali Marghi",
    "subtitle": "A gently spiced chicken gravy topped with crisp potato straws.",
    "region": "Gujarat",
    "origin": "Parsi community cuisine, Gujarat",
    "heat": 2,
    "prep": 25,
    "cook": 40,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Sali marghi is a Parsi community dish popular in parts of Gujarat and Mumbai. It combines a gently spiced chicken gravy with crisp potato straws. This version keeps the gravy tangy and mildly sweet, with the sali added just before serving.",
    "tags": [
      "Parsi",
      "Sali marghi",
      "Crisp potato"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "800 g chicken, medium pieces",
          "1 tsp ginger-garlic paste",
          "½ tsp turmeric",
          "1 tsp salt"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "3 tbsp oil",
          "2 onions, sliced",
          "2 tomatoes, chopped",
          "1 tsp cumin",
          "1 tsp coriander powder",
          "½ tsp chilli powder",
          "1 tbsp vinegar",
          "1 tsp jaggery",
          "250 ml hot water",
          "2 potatoes, cut into thin straws",
          "Oil for frying",
          "Coriander leaves"
        ]
      }
    ],
    "steps": [
      {
        "title": "Prepare sali",
        "body": "Wash potato straws, dry fully and fry in batches till crisp. Drain."
      },
      {
        "title": "Fry onion",
        "body": "Heat oil and fry onion till golden. Add cumin and ginger-garlic paste."
      },
      {
        "title": "Cook tomato",
        "body": "Add tomato, chilli, coriander and turmeric. Cook till oil shows at the edges."
      },
      {
        "title": "Fry chicken",
        "body": "Add chicken and salt. Fry for 7 minutes till coated."
      },
      {
        "title": "Simmer",
        "body": "Add hot water and cover. Cook 22–25 minutes till chicken is cooked."
      },
      {
        "title": "Balance and serve",
        "body": "Stir in vinegar and jaggery. Top with crisp sali and coriander at the table."
      }
    ],
    "notes": [
      "Keep potato straws crisp by adding only at serving time.",
      "Balance vinegar and jaggery gradually.",
      "This is a Parsi community dish, not a generic Gujarati curry."
    ],
    "serveWith": [
      "Steamed rice",
      "Bread rolls",
      "Salad"
    ]
  },
  {
    "slug": "lucknowi-chicken-yakhni-pulao",
    "name": "Lucknowi Chicken Yakhni Pulao",
    "native": "Murgh Yakhni Pulao",
    "subtitle": "Fragrant basmati rice cooked in a clear chicken stock with whole spices.",
    "region": "Awadh",
    "origin": "Lucknow, Uttar Pradesh",
    "heat": 1,
    "prep": 30,
    "cook": 50,
    "serves": 4,
    "variant": "rice",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Yakhni pulao begins with a stock made by simmering chicken and whole spices. The rice is then cooked in the strained stock, taking on flavour without the layered masala of biryani.",
    "tags": [
      "Awadhi",
      "Yakhni stock",
      "Basmati"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "600 g chicken, bone-in",
          "300 g basmati rice, rinsed",
          "150 g curd",
          "1 tsp salt"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "1 onion, sliced",
          "1 tbsp ginger, sliced",
          "6 garlic cloves",
          "1 bay leaf",
          "4 green cardamom",
          "1 black cardamom",
          "1 cinnamon stick",
          "6 peppercorns",
          "2 tbsp ghee",
          "600 ml chicken stock",
          "Mint leaves"
        ]
      }
    ],
    "steps": [
      {
        "title": "Make yakhni",
        "body": "Simmer chicken with ginger, garlic, whole spices and water for 25 minutes. Strain and keep 600 ml stock."
      },
      {
        "title": "Marinate briefly",
        "body": "Mix chicken with whisked curd and salt while the rice soaks."
      },
      {
        "title": "Fry onion",
        "body": "Heat ghee and fry onion till golden. Add chicken and cook for 5 minutes."
      },
      {
        "title": "Add rice",
        "body": "Add drained rice and stir gently for a minute."
      },
      {
        "title": "Cook pulao",
        "body": "Add hot stock. Cover and cook on low for 15–18 minutes till rice is done."
      },
      {
        "title": "Rest",
        "body": "Switch off heat and rest covered for 10 minutes. Fluff gently and garnish with mint."
      }
    ],
    "notes": [
      "Keep stock clear and strain out whole spices.",
      "Use the stock-to-rice ratio suited to your basmati brand.",
      "Do not stir repeatedly once rice is added."
    ],
    "serveWith": [
      "Raita",
      "Sheermal",
      "Kachumber"
    ]
  },
  {
    "slug": "kolkata-chicken-chaap",
    "name": "Kolkata Chicken Chaap",
    "native": "Kolkata Murgh Chaap",
    "subtitle": "Slow-cooked chicken leg in a rich poppy-seed, cashew and aromatic spice sauce.",
    "region": "West Bengal",
    "origin": "Kolkata, West Bengal",
    "heat": 2,
    "prep": 25,
    "cook": 50,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Kolkata-style chicken chaap is inspired by the rich Mughlai restaurant preparation traditionally made with large cuts and a nutty, aromatic paste. This home version uses chicken leg quarters and a slow covered cook.",
    "tags": [
      "Kolkata",
      "Mughlai",
      "Poppy seed"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "4 chicken leg quarters, skin removed",
          "150 g curd",
          "1 tbsp ginger-garlic paste",
          "1 tsp salt"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "2 tbsp poppy seeds",
          "30 g cashews",
          "1 onion, fried and ground",
          "3 tbsp ghee",
          "1 bay leaf",
          "4 green cardamom",
          "½ tsp mace powder",
          "½ tsp chilli powder",
          "200 ml hot water",
          "1 tbsp fresh cream"
        ]
      }
    ],
    "steps": [
      {
        "title": "Marinate",
        "body": "Mix chicken with curd, ginger-garlic paste and salt. Keep chilled for 1 hour."
      },
      {
        "title": "Make paste",
        "body": "Soak poppy seeds and cashews. Grind with fried onion to a smooth paste."
      },
      {
        "title": "Fry spices",
        "body": "Heat ghee. Add bay leaf and cardamom."
      },
      {
        "title": "Brown chicken",
        "body": "Add chicken and fry on medium heat till lightly golden."
      },
      {
        "title": "Cook sauce",
        "body": "Add nut paste, mace and chilli. Stir and add hot water."
      },
      {
        "title": "Slow cook",
        "body": "Cover and cook 30–35 minutes till chicken is tender. Finish with cream on low heat."
      }
    ],
    "notes": [
      "Soak poppy seeds long enough to grind smoothly.",
      "Keep heat low after adding nut paste to prevent sticking.",
      "Check the thickest part of the leg is fully cooked."
    ],
    "serveWith": [
      "Roomali roti",
      "Basmati pulao",
      "Onion salad"
    ]
  },
  {
    "slug": "bengali-murgir-jhol",
    "name": "Bengali Murgir Jhol",
    "native": "Murgir Jhol",
    "subtitle": "A light mustard-oil chicken curry with potatoes, ginger and a thin spiced broth.",
    "region": "West Bengal",
    "origin": "Bengal",
    "heat": 2,
    "prep": 20,
    "cook": 40,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Murgir jhol is a lighter Bengali chicken curry, often made with potatoes and a thin, fragrant gravy. Unlike kosha, it is not fried down to a dark paste. Let the potatoes soften in the broth and keep the spices simple.",
    "tags": [
      "Bengali",
      "Light gravy",
      "Potato"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "800 g chicken",
          "2 potatoes, quartered",
          "1 tsp turmeric",
          "1 tbsp ginger paste",
          "1 tsp salt"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "3 tbsp mustard oil",
          "1 bay leaf",
          "2 green cardamom",
          "1 tsp cumin seeds",
          "2 onions, sliced",
          "1 tomato, chopped",
          "1 tsp cumin powder",
          "1 tsp coriander powder",
          "300 ml hot water",
          "2 green chillies"
        ]
      }
    ],
    "steps": [
      {
        "title": "Marinate",
        "body": "Mix chicken with turmeric, ginger and salt. Keep aside for 20 minutes."
      },
      {
        "title": "Fry potatoes",
        "body": "Heat mustard oil and fry potatoes till lightly golden. Remove."
      },
      {
        "title": "Fry onion",
        "body": "Add bay leaf, cardamom, cumin and onions. Fry till golden."
      },
      {
        "title": "Add tomato",
        "body": "Add tomato and powdered spices. Cook till soft."
      },
      {
        "title": "Fry chicken",
        "body": "Add chicken and fry for 6 minutes."
      },
      {
        "title": "Simmer",
        "body": "Return potatoes, add hot water and green chillies. Cover and cook 22–25 minutes. Finish with coriander."
      }
    ],
    "notes": [
      "Use waxy potatoes so they hold shape.",
      "Keep the gravy thin; it is meant to be eaten with rice.",
      "Do not confuse jhol with the darker kosha preparation."
    ],
    "serveWith": [
      "Steamed rice",
      "Masoor dal",
      "Lemon"
    ]
  },
  {
    "slug": "chhattisgarhi-chicken-saag",
    "name": "Chhattisgarhi Chicken Saag",
    "native": "Kukad Saag Inspired",
    "subtitle": "A homestyle chicken and leafy greens curry with garlic and local-style tempering.",
    "region": "Chhattisgarh",
    "origin": "Chhattisgarh",
    "heat": 2,
    "prep": 20,
    "cook": 40,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "This recipe is inspired by Chhattisgarhi greens-based home cooking, adapted with chicken. Use seasonal saag and a simple garlic masala. The result is a hearty curry that works with rice or millet roti.",
    "tags": [
      "Central India",
      "Saag",
      "Home style"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "700 g chicken",
          "250 g seasonal leafy greens",
          "1 tsp turmeric",
          "1 tbsp garlic paste",
          "1 tsp salt"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "2 tbsp oil",
          "1 onion, chopped",
          "2 tomatoes, chopped",
          "1 tsp cumin seeds",
          "1 tsp chilli powder",
          "1 tsp coriander powder",
          "200 ml hot water",
          "Coriander leaves"
        ]
      }
    ],
    "steps": [
      {
        "title": "Wash greens",
        "body": "Wash leaves thoroughly and chop. Blanch briefly if fibrous."
      },
      {
        "title": "Temper",
        "body": "Heat oil and cumin. Add onion and fry till soft."
      },
      {
        "title": "Cook tomato",
        "body": "Add garlic, tomato, chilli and coriander powder. Cook till thick."
      },
      {
        "title": "Fry chicken",
        "body": "Add chicken and turmeric. Fry for 7 minutes."
      },
      {
        "title": "Simmer with greens",
        "body": "Add greens and hot water. Cover and cook 22–25 minutes till chicken is done."
      },
      {
        "title": "Finish",
        "body": "Adjust salt and garnish with coriander."
      }
    ],
    "notes": [
      "Use seasonal greens available locally.",
      "If greens are bitter, blanch and drain before adding.",
      "This is a household-style adaptation, not a single fixed regional formula."
    ],
    "serveWith": [
      "Steamed rice",
      "Millet roti",
      "Cucumber salad"
    ]
  },
  {
    "slug": "bhojpuri-achari-chicken",
    "name": "Bhojpuri Achari Chicken",
    "native": "Achari Murgh",
    "subtitle": "A sharp mustard-seed and fennel chicken curry with a pickle-style masala.",
    "region": "Bihar",
    "origin": "Eastern Uttar Pradesh and Bihar",
    "heat": 3,
    "prep": 20,
    "cook": 40,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Achari chicken borrows the spice profile of Indian pickles: mustard, fennel, nigella and fenugreek. This home-style version is associated with North Indian cooking and can be adjusted to the pickle spices in your pantry.",
    "tags": [
      "Achari masala",
      "Mustard",
      "Tangy"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "800 g chicken",
          "1 tsp turmeric",
          "1 tbsp ginger-garlic paste",
          "1 tsp salt"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "3 tbsp mustard oil",
          "1 tsp mustard seeds",
          "1 tsp fennel seeds",
          "½ tsp nigella seeds",
          "¼ tsp fenugreek seeds",
          "2 onions, sliced",
          "2 tomatoes, chopped",
          "1 tsp chilli powder",
          "1 tsp coriander powder",
          "1 tbsp lemon juice",
          "250 ml hot water"
        ]
      }
    ],
    "steps": [
      {
        "title": "Temper pickle spices",
        "body": "Heat mustard oil and add mustard, fennel, nigella and fenugreek. Let them crackle without burning."
      },
      {
        "title": "Fry onions",
        "body": "Add onions and fry till golden. Add ginger-garlic paste."
      },
      {
        "title": "Cook masala",
        "body": "Add tomato, chilli and coriander. Cook till thick."
      },
      {
        "title": "Fry chicken",
        "body": "Add chicken and turmeric and fry for 7 minutes."
      },
      {
        "title": "Simmer",
        "body": "Add hot water, cover and cook 22–25 minutes till chicken is done."
      },
      {
        "title": "Finish",
        "body": "Add lemon juice, adjust salt and serve."
      }
    ],
    "notes": [
      "Fenugreek turns bitter quickly; keep the heat moderate.",
      "Add lemon at the end so the sourness stays fresh.",
      "Use mustard oil for the sharp pickle aroma."
    ],
    "serveWith": [
      "Paratha",
      "Steamed rice",
      "Onion salad"
    ]
  },
  {
    "slug": "pallipalayam-chicken",
    "name": "Pallipalayam Chicken",
    "native": "Pallipalayam Kozhi",
    "subtitle": "A dry Tamil Nadu chicken fry with shallots, dried red chillies and coconut pieces.",
    "region": "Tamil Nadu",
    "origin": "Erode district, Tamil Nadu",
    "heat": 3,
    "prep": 20,
    "cook": 35,
    "serves": 4,
    "variant": "dry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Pallipalayam chicken is a dry preparation known for its simple combination of shallots, dried red chillies and coconut pieces. It does not need a thick tomato gravy; the flavour comes from slow frying of small onions and spice.",
    "tags": [
      "Kongu region",
      "Dry fry",
      "Shallots"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "800 g chicken, small pieces",
          "1 tsp turmeric",
          "1 tbsp ginger-garlic paste",
          "1 tsp salt"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "3 tbsp sesame oil",
          "20 shallots, peeled",
          "10 dried red chillies",
          "½ cup fresh coconut pieces",
          "2 sprigs curry leaves",
          "½ tsp fennel seeds",
          "100 ml water",
          "Coriander leaves"
        ]
      }
    ],
    "steps": [
      {
        "title": "Crush chillies",
        "body": "Break dried chillies into pieces and remove some seeds if you want less heat."
      },
      {
        "title": "Fry shallots",
        "body": "Heat sesame oil. Fry shallots till golden at the edges."
      },
      {
        "title": "Temper",
        "body": "Add fennel and curry leaves, then the dried chillies."
      },
      {
        "title": "Add chicken",
        "body": "Add ginger-garlic paste and chicken with turmeric and salt. Fry for 8 minutes."
      },
      {
        "title": "Cook",
        "body": "Add water, cover and cook 18 minutes till chicken is cooked through."
      },
      {
        "title": "Roast",
        "body": "Remove lid. Add coconut pieces and fry till the masala is dry and coats chicken."
      }
    ],
    "notes": [
      "Use small coconut pieces rather than grated coconut for the signature bite.",
      "Keep the flame moderate after adding dried chillies.",
      "Use chicken with bone for deeper flavour."
    ],
    "serveWith": [
      "Rasam rice",
      "Parotta",
      "Curd rice"
    ]
  },
  {
    "slug": "coorgi-chicken-curry",
    "name": "Coorgi Chicken Curry",
    "native": "Koli Curry",
    "subtitle": "A Kodava-style chicken curry with roasted spices, pepper and a tart tamarind finish.",
    "region": "Karnataka",
    "origin": "Kodagu, Karnataka",
    "heat": 3,
    "prep": 25,
    "cook": 45,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Kodava chicken curry often combines roasted spices, pepper and local souring agents. This home version uses a measured tamarind finish, with the spice paste providing depth and a gentle roasted aroma.",
    "tags": [
      "Coorgi",
      "Kodava",
      "Pepper"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "800 g chicken, bone-in",
          "1 tsp turmeric",
          "1 tbsp ginger-garlic paste",
          "1 tsp salt"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "2 tbsp oil",
          "1 onion, sliced",
          "1 tbsp coriander seeds",
          "1 tsp cumin",
          "1 tsp black pepper",
          "4 dried red chillies",
          "½ tsp mustard seeds",
          "Small ball tamarind",
          "250 ml hot water",
          "Curry leaves"
        ]
      }
    ],
    "steps": [
      {
        "title": "Roast spices",
        "body": "Dry roast coriander, cumin, pepper and chillies till fragrant. Grind coarsely."
      },
      {
        "title": "Fry onion",
        "body": "Heat oil. Fry onion till golden and add mustard and curry leaves."
      },
      {
        "title": "Fry chicken",
        "body": "Add ginger-garlic paste and chicken. Fry for 7 minutes."
      },
      {
        "title": "Add spices",
        "body": "Add ground masala and turmeric. Fry till aromatic."
      },
      {
        "title": "Simmer",
        "body": "Add tamarind water and hot water. Cover and cook for 25 minutes till tender."
      },
      {
        "title": "Finish",
        "body": "Reduce gravy as desired and adjust salt."
      }
    ],
    "notes": [
      "Tamarind quantity varies; add strained water gradually.",
      "Use fresh black pepper for a warm finish.",
      "Regional styles vary between Kodava homes."
    ],
    "serveWith": [
      "Akki roti",
      "Steamed rice",
      "Kadambuttu"
    ]
  },
  {
    "slug": "rajasthani-laal-murgh",
    "name": "Rajasthani Laal Maas Style Chicken",
    "native": "Laal Murgh",
    "subtitle": "A fiery red chicken curry inspired by Rajasthan's chilli-forward laal maas tradition.",
    "region": "Rajasthan",
    "origin": "Rajasthan",
    "heat": 3,
    "prep": 25,
    "cook": 45,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Laal maas is traditionally a mutton dish. This is explicitly a chicken adaptation inspired by its Mathania chilli, yoghurt and garlic profile, rather than a claim that the classic is chicken-based.",
    "tags": [
      "Rajasthani inspired",
      "Mathania chilli",
      "Adaptation"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "800 g chicken",
          "150 g curd",
          "1 tbsp garlic paste",
          "1 tsp salt",
          "1 tsp turmeric"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "4 tbsp mustard oil",
          "8 Mathania or dried red chillies",
          "1 tsp cumin seeds",
          "4 cloves",
          "1 cinnamon stick",
          "2 onions, sliced",
          "200 ml hot water",
          "Coriander leaves"
        ]
      }
    ],
    "steps": [
      {
        "title": "Soak chillies",
        "body": "Soak chillies in hot water for 15 minutes and grind to a paste."
      },
      {
        "title": "Temper",
        "body": "Heat mustard oil and add cumin, cloves and cinnamon."
      },
      {
        "title": "Fry onions",
        "body": "Add onions and fry till deep golden. Add garlic paste."
      },
      {
        "title": "Cook chicken",
        "body": "Add chicken, turmeric and salt. Fry till coated."
      },
      {
        "title": "Add curd and chilli",
        "body": "Lower heat, add whisked curd slowly, then chilli paste."
      },
      {
        "title": "Simmer",
        "body": "Add hot water and cover for 25 minutes till chicken is fully cooked. Adjust salt."
      }
    ],
    "notes": [
      "Use Mathania chillies when available for regional character.",
      "Traditional laal maas is made with meat, commonly mutton; this is a chicken adaptation.",
      "Adjust chilli quantity to your tolerance."
    ],
    "serveWith": [
      "Bajra roti",
      "Steamed rice",
      "Lahsun chutney"
    ]
  }
];
