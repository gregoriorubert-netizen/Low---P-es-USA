import { 
  ArrowRight, 
  CheckCircle2, 
  Apple, 
  Leaf, 
  Wheat, 
  Carrot, 
  Cherry, 
  Citrus,
  Coffee,
  Cloud,
  Star,
  Calendar,
  Lightbulb,
  Play
} from 'lucide-react';

export default function App() {
  return (
    <div className="font-sans min-h-screen bg-brand-bg text-brand-brown-dark selection:bg-brand-orange selection:text-white">
      
      {/* 1. Hero Section */}
      <header className="relative w-full overflow-hidden bg-[#F8F5F0]">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-50 mix-blend-multiply pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')" }}></div>
        
        <div className="relative max-w-5xl mx-auto px-5 pt-12 pb-0 lg:pt-20 flex flex-col items-center text-center z-10">
          
          <h1 className="font-serif text-[28px] md:text-5xl lg:text-6xl font-bold italic text-[#D48625] mb-5 leading-[1.2] mx-auto px-2">
            Eat Bread, Desserts, and Your Favorite Foods Again Without Guilt — and Stop Living in Fear of Blood Sugar Spikes
          </h1>
          
          <p className="text-[17px] md:text-2xl text-[#656565] mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            Learn to make easy, quick, and affordable recipes — flour-free and sugar-free.
          </p>
          
          <button className="w-full sm:w-[90%] md:w-auto bg-[#D48625] hover:bg-[#B97520] text-white px-6 py-4 rounded-lg text-lg md:text-xl font-bold uppercase tracking-wider transition-all shadow-xl hover:shadow-2xl mb-12 flex flex-col items-center justify-center leading-[1.3] mx-auto">
            <span>I WANT TO MAKE</span>
            <span>DELICIOUS RECIPES</span>
          </button>
          
          <div className="w-full max-w-sm md:max-w-md mx-auto relative flex justify-center items-end mt-2 md:mt-8">
             {/* Background Shape */}
             <div className="absolute bottom-0 w-[85%] md:w-[90%] h-[80%] bg-[#E89E19] rounded-t-[2.5rem] z-0"></div>
             {/* Image placeholder resembling the chef with basket */}
             <img 
               src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&q=80" 
               alt="Chef holding basket of foods" 
               className="relative z-10 w-[95%] object-contain pt-8 pb-0 drop-shadow-2xl"
             />
          </div>
        </div>
      </header>

      {/* 3. Section "Common Healthy Recipes" */}
      <section className="bg-white py-20 px-6 border-y border-brand-brown-dark/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Common Healthy Recipes</h2>
            <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {[
              { name: "Strawberry Banana Smoothie", icon: Cherry, color: "text-red-500", bg: "bg-red-50" },
              { name: "Peanut Butter Banana Chia Pudding", icon: Leaf, color: "text-green-500", bg: "bg-green-50" },
              { name: "Dark Chocolate Avocado Pudding", icon: Apple, color: "text-emerald-600", bg: "bg-emerald-50" },
              { name: "Wild Berries Overnight Oats", icon: Wheat, color: "text-amber-500", bg: "bg-amber-50" },
              { name: "Banana Oatmeal Pancakes", icon: Citrus, color: "text-yellow-500", bg: "bg-yellow-50" },
              { name: "Spiced Walnut Zucchini Bread", icon: Carrot, color: "text-orange-500", bg: "bg-orange-50" },
              { name: "Sweet Potato Cacao Brownies", icon: Coffee, color: "text-amber-700", bg: "bg-amber-100" },
              { name: "Fresh Fruit Granola Açaí Bowl", icon: Cherry, color: "text-purple-500", bg: "bg-purple-50" },
            ].map((recipe, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-brand-bg transition-colors cursor-pointer group">
                <div className={`${recipe.bg} ${recipe.color} p-3 rounded-xl group-hover:scale-110 transition-transform`}>
                  <recipe.icon className="w-6 h-6" />
                </div>
                <p className="font-medium text-lg leading-tight">{recipe.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Section "My Favorite Pancake Recipe" */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute inset-0 bg-brand-orange/10 rounded-full blur-3xl scale-150"></div>
            <img 
              src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80" 
              alt="Pancakes with chocolate and berries from above" 
              className="relative z-10 rounded-full w-full max-w-[500px] h-auto aspect-square object-cover shadow-2xl mx-auto border-8 border-brand-orange/10"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">My Favorite Pancake Recipe</h2>
            <p className="text-xl text-brand-brown-light mb-8 italic">"A simple recipe that’s delicious and easy to make!"</p>
            
            <ul className="space-y-4 mb-8">
              {[
                "1 cup of wheat flour",
                "1 egg",
                "1 teaspoon of baking powder",
                "1/2 cup of milk",
                "2 tablespoons of sugar",
                "1/4 teaspoon of salt",
                "2 tablespoons of vegetable oil"
              ].map((ing, i) => (
                <li key={i} className="flex items-center gap-3 text-brand-gray text-lg">
                  <CheckCircle2 className="w-6 h-6 text-brand-green flex-shrink-0" />
                  <span>{ing}</span>
                </li>
              ))}
            </ul>

            <div className="p-6 bg-brand-orange/10 rounded-2xl border border-brand-orange/20 relative">
               <div className="absolute -top-3 left-6 bg-brand-bg px-2 text-sm font-bold text-brand-orange uppercase tracking-wider">
                 Cooking notices just in:
               </div>
               <p className="text-xl font-medium italic">"And nobody notices that it’s so healthy!"</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Section "Easy, Quick to Make" */}
      <section className="bg-brand-brown-dark text-white py-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Easy, Quick to Make</h2>
            <p className="text-xl text-white/80 mb-6 italic">With simple and Accessible ingredients and clear instructions.</p>
            <p className="text-lg text-white/90 mb-10 leading-relaxed">
              No more complicated cooking! Prepare delicious meals in a snap. Spend less time in the kitchen and more time enjoying vibrant, nourishing food with the people you love.
            </p>
            <button className="flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-xl hover:shadow-brand-orange/20">
              Discover more
            </button>
          </div>
          <div className="w-full lg:w-1/2">
             <img 
               src="https://images.unsplash.com/photo-1511690656956-5ef8abe9441d?auto=format&fit=crop&w=800&q=80" 
               alt="A healthy granola bowl quickly prepared" 
               className="rounded-3xl shadow-2xl object-cover h-[400px] w-full"
             />
          </div>
        </div>
      </section>

      {/* 6. Section "More than you recipes" */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">More than you recipes</h2>
            <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Breakfast Recipes",
                img: "https://images.unsplash.com/photo-1533089860649-16016e165dca?auto=format&fit=crop&w=600&q=80",
                recipes: ["Chia Pudding", "Banana Muffin", "Strawberry Banana Pancake"]
              },
              {
                title: "Lunch Recipes",
                img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
                recipes: ["Quinoa Salad", "Chicken Wrap", "Smoked Salmon Sandwich"]
              },
              {
                title: "Dinner Recipes",
                img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=600&q=80",
                recipes: ["Chicken and Veggies", "Baked Salmon", "Zucchini Spaghetti"]
              },
              {
                title: "Snack Recipes",
                img: "https://images.unsplash.com/photo-1604085792782-8d92f276d7d8?auto=format&fit=crop&w=600&q=80",
                recipes: ["Homemade Cereal Bars", "Oat Cookies", "Quinoa Popcorn"]
              },
              {
                title: "Vegan & Vegetarian",
                img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
                recipes: ["Lentil Burger", "Chickpea Curry", "Mushroom Risotto"]
              },
              {
                title: "Dessert Recipes",
                img: "https://images.unsplash.com/photo-1551024506-0baa27542d31?auto=format&fit=crop&w=600&q=80",
                recipes: ["Banana Ice Cream", "Avocado Mousse", "Black Bean Brownie"]
              },
              {
                title: "Kids-Friendly Recipes",
                img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
                recipes: ["Mini Pita Pizzas", "Fun Cut Fruits", "Hidden Fruit Smoothie"]
              },
              {
                title: "Baked Goods & Treats",
                img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
                recipes: ["Wholewheat Homemade Bread", "Oatmeat Raisin Cookies", "Blueberry Muffins"]
              },
              {
                title: "Kitchen Tips & Hacks",
                img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80",
                recipes: ["How to cut a Mango", "Storing Fresh Herbs", "Homemade Almond Milk"]
              }
            ].map((cat, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-brand-brown-dark/5 group">
                <div className="h-48 overflow-hidden">
                  <img src={cat.img} alt={cat.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold mb-4">{cat.title}</h3>
                  <ul className="space-y-2">
                    {cat.recipes.map((r, i) => (
                      <li key={i} className="flex items-start gap-2 text-brand-gray">
                         <div className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-2 flex-shrink-0"></div>
                         <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 text-brand-orange font-bold flex items-center gap-1 hover:gap-2 transition-all">
                    View all in category <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Section "Testimonials" */}
      <section className="bg-[#FAF3E0] py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <Star className="w-12 h-12 text-brand-orange mx-auto mb-6 fill-current" />
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-8 italic">
            "I love how easy and delicious these recipes are!"
          </h2>
          <p className="text-xl md:text-2xl text-brand-gray mb-12 leading-relaxed">
            "As someone who's always struggled with healthy eating, I'm so grateful for these recipes. They're not only incredibly delicious but also surprisingly simple to make. I've seen a huge improvement in my energy levels and overall well-being since incorporating them into my diet. Highly recommend!"
          </p>
          <div className="flex flex-col items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80" 
              alt="Jane Smith" 
              className="w-20 h-20 rounded-full object-cover shadow-lg border-4 border-white mb-4"
            />
            <p className="font-bold text-lg">Jane Smith</p>
            <p className="text-brand-brown-light text-sm tracking-wider uppercase">Health Enthusiast</p>
          </div>
        </div>
      </section>

      {/* 8. Section "Download the App" */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-brand-brown-dark/5">
          <div className="p-12 lg:p-20 w-full lg:w-1/2 flex flex-col justify-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Download the App</h2>
            <p className="text-xl text-brand-brown-light mb-10 leading-relaxed">
              Get access to all recipes, cooking tips, and meal plans on the go!
            </p>
            
            <ul className="space-y-6 mb-12">
              {[
                { label: "Offline Access", icon: Cloud },
                { label: "Exclusive Recipes", icon: Star },
                { label: "Personalized Meal Plans", icon: Calendar },
                { label: "Smart Substitutions", icon: Lightbulb },
              ].map((feat, i) => (
                <li key={i} className="flex items-center gap-4 text-lg font-medium">
                  <div className="p-3 bg-brand-orange/10 text-brand-orange rounded-xl">
                    <feat.icon className="w-6 h-6" />
                  </div>
                  {feat.label}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
               <button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-colors">
                  App Store
               </button>
               <button className="bg-brand-brown-dark hover:bg-brand-brown-light text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-colors">
                  Google Play
               </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 bg-[#F3EFE9] flex items-end justify-center pt-12 lg:pt-20 px-12 relative h-[500px] lg:h-auto overflow-hidden">
             <div className="absolute inset-0 bg-brand-orange/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 scale-150"></div>
             <img 
               src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80" 
               alt="Smartphone showing app interface" 
               className="relative z-10 w-[300px] h-auto object-cover rounded-[2.5rem] shadow-2xl border-8 border-white transform translate-y-10"
             />
          </div>
        </div>
      </section>

      {/* Basic Footer */}
      <footer className="bg-brand-brown-dark py-12 px-6 text-center text-white/50">
        <p>© 2026 Healthy Recipes Co. Eat Right, Live Well, Feel Good.</p>
      </footer>
    </div>
  );
}

