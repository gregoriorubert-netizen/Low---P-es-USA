export const categories = [
  "All",
  "Desserts and Sweets",
  "Real Bakery",
  "Arepas and Tortillas",
  "Pizzas and Empanadas",
  "Pastries and Croissants",
  "Everyday Meals",
  "Bases and Preparations"
];

export interface Recipe {
  id: number;
  title: string;
  category: string;
  time: string;
  image: string;
  favorite: boolean;
  difficulty: string;
  number: string;
  description: string;
  ingredients?: string[];
  method?: string[];
  tip?: string;
  science?: string;
}

export const recipesMock: Recipe[] = [
  {
    id: 1,
    title: 'Almond Flour Sandwich Loaf',
    category: 'Real Bakery',
    time: '1h 20min',
    image: 'https://images.unsplash.com/photo-1549931818-89f478a57eb4?auto=format&fit=crop&w=600&q=80',
    favorite: true,
    difficulty: 'Easy',
    number: '001',
    description: 'Dense, sliceable and genuinely satisfying — this loaf holds together for sandwiches, toasts well and stays moist for 4 days.',
    ingredients: ['3 cups blanched almond flour (fine)', '3 tbsp psyllium husk powder', '1 tsp baking powder', '½ tsp baking soda', '1 tsp fine sea salt', '4 large eggs', '3 tbsp olive oil', '1 tbsp apple cider vinegar', '2 tbsp warm water'],
    method: ['Preheat oven to 350°F (175°C). Line a 9×5-inch loaf pan with parchment.', 'Whisk together almond flour, psyllium, baking powder, baking soda and salt.', 'Beat eggs, oil, vinegar and water in a separate bowl.', 'Pour wet into dry; stir immediately and vigorously.', 'Transfer to pan quickly; smooth top with wet spatula.', 'Bake 55–65 min until deeply golden.', 'Cool FULLY on rack before slicing — minimum 2 hours.'],
    tip: 'Psyllium gels immediately on contact with liquids — work fast once you combine wet and dry. If the dough feels too stiff, add 1 tbsp water at a time.',
    science: 'Psyllium husk forms a mucilaginous gel network that replaces both gluten and starch in this bread.'
  },
  {
    id: 2,
    title: 'Classic Dinner Rolls',
    category: 'Real Bakery',
    time: '45 min',
    image: 'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&w=600&q=80',
    favorite: false,
    difficulty: 'Easy',
    number: '015',
    description: 'Pull-apart soft rolls that look and feel remarkably close to the wheat original — golden, fluffy and rich.',
    ingredients: ['2 cups blanched almond flour', '2 tbsp psyllium husk powder', '1 tsp baking powder', '½ tsp sea salt', '1½ cups shredded mozzarella', '2 tbsp cream cheese', '2 large eggs', '1 tbsp apple cider vinegar', 'Melted butter for brushing'],
    method: ['Preheat oven 400°F.', 'Melt mozzarella and cream cheese in microwave; stir smooth.', 'Beat eggs and vinegar; stir into warm cheese.', 'Add almond flour, psyllium, baking powder and salt; work quickly.', 'Divide into 12 portions; roll each into smooth ball.', 'Bake 18–20 min until golden.', 'Brush with melted butter immediately on removal.'],
    tip: 'Work quickly once cheese is melted — it stiffens as it cools, making shaping difficult. If the dough cools and cracks, microwave 15 seconds.',
    science: 'Mozzarella acts as both a structural binder and a fat source. Its string protein network mimics gluten.'
  },
  {
    id: 3,
    title: 'Traditional Arepa',
    category: 'Arepas and Tortillas',
    time: '30 min',
    image: 'https://images.unsplash.com/photo-1623910271015-88e99e2bc8aa?auto=format&fit=crop&w=600&q=80',
    favorite: true,
    difficulty: 'Beginner',
    number: '022',
    description: 'Completely authentic, completely clean — the traditional Venezuelan arepa has always been free of added sugar.',
    ingredients: ['2 cups pre-cooked white cornmeal (Harina P.A.N. — no additives)', '2½ cups warm water', '1 tsp fine sea salt'],
    method: ['Mix cornmeal, salt and warm water.', 'Knead 2 min until smooth and non-cracking.', 'Rest 5 min.', 'Shape 8 discs ½ inch thick.', 'Cook dry skillet 8 min per side.', 'Finish 400°F oven 10 min.', 'Split and fill.'],
    tip: 'Traditional arepas contain zero added sugar. The cornmeal itself is naturally slightly sweet. Always read labels.',
    science: 'Pre-cooked cornmeal (masa) is naturally sugar-free. The slight sweetness comes from naturally occurring simple carbohydrates.'
  },
  {
    id: 4,
    title: 'Flourless Chocolate Cake',
    category: 'Desserts and Sweets',
    time: '1h',
    image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=600&q=80',
    favorite: true,
    difficulty: 'Easy',
    number: '036',
    description: 'Rich, dense and completely convincing. A flourless chocolate cake that requires nothing beyond excellent chocolate, eggs and erythritol.',
    ingredients: ['200g dark chocolate 90%', '100g butter or coconut oil', '¾ cup powdered erythritol', '5 large eggs (separated)', '1 tsp pure vanilla extract', 'Pinch of sea salt', '1 tbsp cocoa powder'],
    method: ['Preheat oven 325°F. Butter 9-inch springform; dust with cocoa.', 'Melt chocolate and butter; cool 10 min.', 'Whisk erythritol into chocolate.', 'Beat in yolks one at a time.', 'Beat whites to soft peaks.', 'Fold whites into chocolate in 3 additions.', 'Bake 35–40 min — center should still jiggle.', 'Cool completely; refrigerate 2h.'],
    tip: 'Erythritol powders best in a blender before using. Granular erythritol can leave a slight cooling sensation.',
    science: 'Erythritol is a sugar alcohol that provides sweetness without raising blood glucose.'
  },
  {
    id: 5,
    title: 'Lemon Chia Seed Bars',
    category: 'Desserts and Sweets',
    time: '40 min',
    image: 'https://images.unsplash.com/photo-1616781296068-12c8206103fe?auto=format&fit=crop&w=600&q=80',
    favorite: false,
    difficulty: 'Easy',
    number: '048',
    description: 'Tangy, bright and with the satisfying crunch of chia seeds throughout the curd.',
    ingredients: ['Base: 1½ cups almond flour + 3 tbsp monk fruit sweetener + 3 tbsp butter + 1 egg', 'Curd: 3 eggs + ¼ cup monk fruit sweetener', '½ cup lemon juice', 'zest of 2 lemons', '2 tbsp chia seeds', '1 tbsp coconut oil'],
    method: ['Preheat oven 350°F.', 'Press base into 8×8 pan; bake 12 min.', 'Whisk curd ingredients (except chia) until smooth.', 'Stir in chia; pour over warm base.', 'Bake 325°F for 22 min until just set.', 'Refrigerate 2h; cut into bars.'],
    tip: 'Chia seeds in the curd act as a natural thickener — they swell in the lemon juice and set the curd without cornstarch or flour.',
    science: 'Chia mucilage mixed with the lemon curd creates a pectin-like thickening effect.'
  },
  {
    id: 6,
    title: 'Almond Flour Pizza Crust',
    category: 'Pizzas and Empanadas',
    time: '35 min',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80',
    favorite: false,
    difficulty: 'Easy',
    number: '050',
    description: 'A pizza crust that folds without cracking, holds toppings without softening and has a genuine crispness.',
    ingredients: ['1½ cups blanched almond flour', '1 tbsp psyllium husk powder', '½ tsp baking powder', '½ tsp sea salt', '½ tsp garlic powder', '½ tsp dried oregano', '2 large eggs', '2 tbsp olive oil'],
    method: ['Preheat oven 425°F with pizza stone or steel inside.', 'Mix dry; beat wet; combine to dough.', 'Press between parchment to 12-inch round.', 'Pre-bake on hot stone 10 min until golden and firm.', 'Add sauce and toppings; return 8–10 min.', 'Slide onto rack to crisp bottom.'],
    tip: 'The pre-bake step is non-negotiable for almond flour crusts. Without it, the moisture from toppings makes the crust soggy.',
    science: 'Almond flour\'s fat content means the crust doesn\'t absorb water like starch-based crusts.'
  },
  {
    id: 7,
    title: 'Spiced Beef Empanadas',
    category: 'Pizzas and Empanadas',
    time: '2h',
    image: 'https://images.unsplash.com/photo-1628198642232-a541603ba7ca?auto=format&fit=crop&w=600&q=80',
    favorite: true,
    difficulty: 'Intermediate',
    number: '059',
    description: 'The definitive grain-free empanada — spiced beef, olive and egg inside an almond flour shell.',
    ingredients: ['1 batch almond flour empanada dough', 'Filling: 400g ground beef + 1 onion + 1 bell pepper + 3 garlic cloves', '1½ tsp cumin + 1 tsp smoked paprika', '½ tsp oregano', 'Sea salt + pepper + sugar-free green olives', '2 boiled eggs (chopped)'],
    method: ['Make filling: sauté onion, pepper, garlic; add beef; cook through; season.', 'Cool COMPLETELY.', 'Make dough; rest.', 'Roll and cut circles.', 'Fill each generously; fold; crimp.', 'Egg-wash.', 'Bake 375°F for 22–25 min.'],
    tip: 'The filling MUST be completely cold before filling the dough. Warm filling softens the almond flour shell.',
    science: 'The spice combination (cumin-paprika-oregano) defines the flavor profile of empanadas across Latin America.'
  },
  {
    id: 8,
    title: 'Almond Flour Pancakes',
    category: 'Everyday Meals',
    time: '20 min',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80',
    favorite: false,
    difficulty: 'Beginner',
    number: '064',
    description: 'Grain-free, sugar-free and ready in 20 minutes — these pancakes have a rich, nutty flavor.',
    ingredients: ['1 cup blanched almond flour', '2 large eggs', '¼ cup unsweetened almond milk', '1 tsp vanilla', '½ tsp baking powder', 'Pinch of sea salt', 'Butter or coconut oil for cooking', 'Toppings: fresh berries'],
    method: ['Whisk all batter ingredients until smooth.', 'Rest 2 min.', 'Cook on medium buttered skillet 2–3 min per side.', 'Serve with unsweetened toppings.'],
    tip: 'Almond flour pancakes are more delicate than wheat — smaller pancakes flip more reliably.',
    science: 'Without starch, the pancake structure comes entirely from egg protein coagulation.'
  },
  {
    id: 9,
    title: 'Shakshuka',
    category: 'Everyday Meals',
    time: '30 min',
    image: 'https://images.unsplash.com/photo-1590412200988-a436970781fa?auto=format&fit=crop&w=600&q=80',
    favorite: false,
    difficulty: 'Easy',
    number: '069',
    description: 'North African and Middle Eastern comfort food that has never contained flour or sugar.',
    ingredients: ['Sauce: 1 can crushed tomatoes (no sugar added)', '1 onion + 4 garlic cloves', '2 tsp cumin + 1 tsp paprika', '½ tsp cayenne', '4–6 large eggs', 'Fresh parsley and feta to garnish'],
    method: ['Sauté onion and garlic in olive oil.', 'Add tomatoes and spices; simmer 15 min.', 'Make wells in sauce; crack eggs in.', 'Cover; cook 6–8 min until whites set.', 'Garnish; serve with flatbread.'],
    tip: 'Check the crushed tomato label — many contain added sugar. Look for single-ingredient canned tomatoes.',
    science: 'Tomato sauce\'s water base creates a gentle steaming environment for the eggs.'
  },
  {
    id: 10,
    title: 'Creamy Cauliflower Bisque',
    category: 'Everyday Meals',
    time: '40 min',
    image: 'https://images.unsplash.com/photo-1605651202774-7d573fd3f12d?auto=format&fit=crop&w=600&q=80',
    favorite: false,
    difficulty: 'Beginner',
    number: '071',
    description: 'Silky, ivory and with a roasted depth that hides the fact that this bisque contains zero flour.',
    ingredients: ['1 large cauliflower (cut into florets)', '1 onion (quartered)', '4 garlic cloves', '3 tbsp olive oil', '4 cups unsalted vegetable stock', '½ cup heavy cream', '1 tsp smoked paprika'],
    method: ['Toss cauliflower, onion and garlic with oil; roast 425°F for 35 min until caramelized.', 'Transfer to blender with stock.', 'Blend until completely smooth.', 'Return to pot; add cream and paprika.', 'Simmer 5 min; season.', 'Serve topped with chives and olive oil.'],
    tip: 'Roasting vs steaming changes everything in this soup. Roasted cauliflower has caramelized sugars and Maillard compounds.',
    science: 'Cauliflower starch cells rupture during roasting, releasing starch into the soup during blending — thickening it naturally.'
  },
  {
    id: 11,
    title: 'All-Purpose Grain-Free Baking Blend',
    category: 'Bases and Preparations',
    time: '5 min',
    image: 'https://images.unsplash.com/photo-1606859191214-25806e8e2423?auto=format&fit=crop&w=600&q=80',
    favorite: false,
    difficulty: 'Beginner',
    number: '078',
    description: 'The base blend referenced throughout this book — a combination designed to perform across sweet and savory applications.',
    ingredients: ['2 cups blanched almond flour', '¼ cup coconut flour (sifted)', '3 tbsp psyllium husk powder', '1 tsp xanthan gum (optional)'],
    method: ['Whisk together thoroughly until uniform.', 'Store in airtight jar refrigerated.', 'Use within 4 weeks at room temperature, 3 months frozen.', 'When using: reduce liquid by 20% vs standard recipe.'],
    tip: 'This blend does NOT substitute 1:1 for wheat flour in conventional recipes. It works best in recipes specifically designed for it.',
    science: 'Almond flour provides fat and protein structure; coconut flour provides high fiber absorption; psyllium provides the gel network.'
  },
  {
    id: 12,
    title: 'Sugar-Free Tomato Marinara',
    category: 'Bases and Preparations',
    time: '30 min',
    image: 'https://images.unsplash.com/photo-1606859191214-25806e8e2423?auto=format&fit=crop&w=600&q=80',
    favorite: false,
    difficulty: 'Beginner',
    number: '086',
    description: 'Restaurant-quality marinara without a single gram of added sugar — the acid is balanced by chemistry.',
    ingredients: ['2 cans (28oz) San Marzano whole tomatoes', '5 garlic cloves (sliced)', '¼ cup extra-virgin olive oil', '1 pinch baking soda (acid neutralizer)', 'Fresh basil', '1 tsp dried oregano', 'Sea salt and red pepper flakes'],
    method: ['Warm olive oil over medium; add garlic.', 'Add tomatoes; crush by hand as they go in.', 'Add baking soda — it will foam briefly.', 'Simmer 20 min until reduced.', 'Add basil; season generously.', 'Blend partially for smooth texture.'],
    tip: 'The baking soda trick is used in every professional Italian kitchen — it neutralizes tomato acid without adding sugar.',
    science: 'Baking soda reacts with citric acid in tomatoes to form CO2 and sodium citrate, reducing perceived sourness.'
  },
  {
    id: 13,
    title: 'Almond Flour Croissant',
    category: 'Pastries and Croissants',
    time: '1h 30min',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f40954b80?auto=format&fit=crop&w=600&q=80',
    favorite: false,
    difficulty: 'Intermediate',
    number: '094',
    description: 'A grain-free take on the classic French pastry, utilizing almond flour and psyllium husk to create a flaky, buttery texture without any sugar.',
    ingredients: ['2 cups blanched almond flour', '3 tbsp psyllium husk powder', '1 tsp baking powder', '1/2 tsp salt', '1/2 cup cold butter, cubed', '2 eggs', '1 tbsp apple cider vinegar', '1/4 cup warm water'],
    method: ['Whisk dry ingredients together.', 'Cut in cold butter until the mixture resembles coarse crumbs.', 'Whisk eggs, vinegar, and warm water. Combine with the dry mixture.', 'Chill the dough for 30 minutes.', 'Roll out the dough between parchment paper. Cut into triangles and roll into crescent shapes.', 'Bake at 350°F for 20-25 minutes until golden.'],
    tip: 'Keep the butter as cold as possible for the best flaky texture.',
    science: 'The cold butter trapped in the almond-psyllium matrix releases steam during baking, creating layers similar to puff pastry.'
  },
  {
    id: 14,
    title: 'Sugar-Free Cinnamon Roll',
    category: 'Pastries and Croissants',
    time: '1h 15min',
    image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=600&q=80',
    favorite: true,
    difficulty: 'Intermediate',
    number: '095',
    description: 'A comforting, warm cinnamon roll with zero refined sugar, using a mozzarella-based dough for the perfect chewy texture.',
    ingredients: ['1 1/2 cups shredded mozzarella', '2 oz cream cheese', '1 cup almond flour', '1 egg', '1/4 cup erythritol', '1 tbsp cinnamon', '2 tbsp melted butter'],
    method: ['Melt the mozzarella and cream cheese together in the microwave.', 'Mix in the egg and almond flour to form a dough.', 'Roll out the dough into a rectangle.', 'Brush with melted butter and sprinkle with erythritol and cinnamon.', 'Roll up the dough tightly and slice into rolls.', 'Bake at 350°F for 15-20 minutes.'],
    tip: 'Work quickly while the cheese dough is still warm and pliable.',
    science: 'Melted cheese acts as a binder, substituting the gluten network found in traditional wheat flour dough.'
  }
];
