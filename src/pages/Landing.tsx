import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
  Play,
  ArrowLeft,
  Heart,
  Clock,
  Menu,
  Bookmark,
  Plus,
  Minus
} from 'lucide-react';

export default function Landing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(2 * 60 + 30); // 2 minutes and 30 seconds

  useEffect(() => {
    if (timeLeft <= 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const faqs = [
    { question: "Is it a one-time payment or a subscription?", answer: "Yes, it is a one-time payment. You will receive lifetime access without any hidden monthly fees or recurring subscriptions." },
    { question: "How do I receive access?", answer: "Right after your purchase is confirmed, you will receive an email with your unique login details to access the app immediately." },
    { question: "Where can I access it from?", answer: "You can easily access the app from any device including your smartphone, tablet, or computer, anytime and anywhere." },
    { question: "How do I make the payment?", answer: "We accept all major credit cards and secure payment methods available in our checkout process." },
    { question: "How long do I have access?", answer: "You get lifetime access! Once you are in, you'll have uninterrupted access to all existing recipes and future updates." },
    { question: "What if I don't like it?", answer: "No worries! We offer a full 7-day money-back guarantee. If you are not completely satisfied, just let us know and we'll refund you." }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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
          
          <Link to="/login" className="w-full sm:w-[90%] md:w-auto bg-[#D48625] hover:bg-[#B97520] text-white px-6 py-4 rounded-lg text-lg md:text-xl font-bold uppercase tracking-wider transition-all shadow-xl hover:shadow-2xl mb-12 flex flex-col items-center justify-center leading-[1.3] mx-auto">
            <span>I WANT TO MAKE</span>
            <span>DELICIOUS RECIPES</span>
          </Link>
          
          <div className="w-full max-w-sm md:max-w-md mx-auto relative flex justify-center items-end mt-2 md:mt-8">
             {/* Background Shape */}
             <div className="absolute bottom-0 w-[85%] md:w-[90%] h-[80%] bg-[#E89E19] rounded-t-[2.5rem] z-0"></div>
             {/* Image placeholder resembling the chef with basket */}
             <img 
               src="https://i.imgur.com/HGktzqD.png" 
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

          <div className="mt-16 bg-[#5D3E2F] p-8 md:p-10 rounded-[2rem] max-w-2xl mx-auto shadow-2xl relative overflow-hidden">
            <ul className="space-y-4 text-white text-[17px] md:text-xl font-medium relative z-10">
              <li className="flex items-start gap-4 font-bold text-xl md:text-2xl mb-6">
                <span>👉</span> 
                <span>And the worst part...</span>
              </li>
              <li className="flex items-start gap-4">
                <span>👉</span> 
                <span>You follow the recipe to the letter</span>
              </li>
              <li className="flex items-start gap-4">
                <span>👉</span> 
                <span>You spend money on expensive ingredients</span>
              </li>
              <li className="flex items-start gap-4">
                <span>👉</span> 
                <span>You wait with hope</span>
              </li>
              <li className="flex items-start gap-4">
                <span>👉</span> 
                <span>And the result is a disappointment.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. My Specialized Technique */}
      <section className="bg-[#5D3E2F] py-16 px-6 border-t border-[#4A3125]">
        <div className="max-w-xl mx-auto w-full">
          <h2 className="font-serif text-3xl md:text-4xl font-bold italic text-[#E2922A] mb-8 text-center">
            My Specialized Technique
          </h2>
          
          <img 
            src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80" 
            alt="Chocolate cake with strawberries" 
            className="w-full rounded-2xl mb-10 shadow-2xl object-cover h-[300px] md:h-[400px]"
          />
          
          <ul className="space-y-5 mb-10 pl-2">
            {[
              "Pudding with that perfect silky wobble",
              "Chocolate that's rich, glossy and creamy",
              "Cookies soft on the inside",
              "Cupcakes moist and fluffy",
              "Caramel fudge with real consistency",
              "Banana pudding thick and velvety smooth",
              "Donuts golden and crispy on the outside",
              "Brownies fudgy and melt-in-your-mouth"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <div className="mt-1 bg-[#49C66F] rounded box-content w-5 h-5 flex items-center justify-center flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-white text-[17px] md:text-[19px] leading-snug font-medium tracking-wide">{item}</span>
              </li>
            ))}
          </ul>

          <div className="pl-4">
            <p className="text-white font-bold text-lg md:text-[20px] mb-4">
              And nobody notices that it's:
            </p>
            <ul className="space-y-3 mb-6 pl-2">
              <li className="flex items-center gap-3">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#49C66F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span className="text-[#D4D4D4] font-medium text-[17px] md:text-[19px]">Flour-free</span>
              </li>
              <li className="flex items-center gap-3">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#49C66F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span className="text-[#D4D4D4] font-medium text-[17px] md:text-[19px]">Sugar-free</span>
              </li>
            </ul>
            <p className="text-[#B3B3B3] italic text-[16px] md:text-[17px]">
              Because it simply tastes like a normal dessert.
            </p>
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
               src="https://i.imgur.com/pxeC7T3.png" 
               alt="A healthy granola bowl quickly prepared" 
               className="object-contain drop-shadow-2xl h-[400px] w-full"
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
                title: "Desserts and Sweets",
                img: "https://i.imgur.com/9BTHz7D.jpg",
                recipes: ["🍮 Moist pudding cakes", "🥧 Creamy pies", "🍰 Dairy-free cheesecake", "🍫 Fudgy brownies", "🍪 Soft-baked cookies", "🎂 Wholesome panettone"]
              },
              {
                title: "Real Bakery",
                img: "https://i.imgur.com/dJYq7RU.jpg",
                recipes: ["🍞 Sandwich bread", "🥖 Rustic artisan loaf", "🥖 Dinner rolls", "🍔 Burger buns", "🥐 Sweet bread", "🥖 Healthy baguette"]
              },
              {
                title: "Arepas and Tortillas",
                img: "https://i.imgur.com/ShMyS7w.jpg",
                recipes: ["🫓 Soft and flexible arepas", "🌮 Perfectly balanced tortillas", "🫓 Doughs that never crack"]
              },
              {
                title: "Pastries and Croissants",
                img: "https://i.imgur.com/AGjYga4.jpg",
                recipes: ["🥐 Perfectly laminated croissants", "🥐 Soft pastries", "🍞 Brioche-style dough"]
              },
              {
                title: "Everyday Meals",
                img: "https://i.imgur.com/PESoOc0.jpg",
                recipes: ["🌅 Quick breakfasts", "🍎 Guilt-free snacks", "🥗 Diabetic-friendly lunches", "🌙 Easy weeknight dinners", "🥣 Soups and creamy bisques"]
              },
              {
                title: "Bases and Preparations",
                img: "https://i.imgur.com/F8Srtkw.jpg",
                recipes: ["🧂 Homemade mixes", "🌾 Functional flours", "🥣 Sauces and creams", "🔄 Smart substitutions"]
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clean Sweet APP Section */}
      <section className="bg-[#F8F5F0] py-24 px-6 border-y border-[#3E271D]/5">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-[320px] bg-white rounded-[3rem] border-[12px] border-[#1A1A1A] shadow-2xl overflow-hidden relative">
              <div className="h-6 flex justify-between items-center px-5 pt-2 mb-2">
                 <span className="text-[10px] font-medium">11:34</span>
                 <div className="flex gap-1 items-center">
                   <div className="w-3 h-3 bg-black rounded-full absolute top-3 left-1/2 -translate-x-1/2"></div>
                   <span className="text-[10px]">📶 🔋</span>
                 </div>
              </div>
              
              <div className="px-4 py-2 flex justify-between items-center">
                <ArrowLeft className="w-5 h-5 text-gray-700" />
                <div className="flex gap-3">
                  <Heart className="w-5 h-5 text-gray-700" />
                  <Heart className="w-5 h-5 fill-red-500 text-red-500" />
                </div>
              </div>

              <div className="px-4">
                <img src="https://images.unsplash.com/photo-1549395156-e0c1fe6fc7a5?auto=format&fit=crop&w=400&q=80" alt="Cinnamon Roll" className="w-full h-48 object-cover rounded-2xl" />
              </div>

              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Healthy Cinnamon Roll</h3>
                <div className="flex items-center gap-2 mb-4">
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80" className="w-6 h-6 rounded-full object-cover" />
                  <span className="text-xs font-medium text-gray-700">Chef-Natagha</span>
                </div>

                <div className="flex gap-2 mb-4">
                  <div className="flex-1 bg-purple-100 p-2 rounded-xl text-center flex flex-col justify-center min-h-[50px]">
                     <p className="text-[10px] text-purple-700 font-medium leading-tight">4 Gliicase</p>
                     <p className="text-[10px] text-purple-700 font-bold leading-tight">+13 moidi</p>
                  </div>
                  <div className="flex-1 bg-orange-100 p-2 rounded-xl text-center flex flex-col justify-center min-h-[50px]">
                     <p className="text-[10px] text-orange-700 font-medium whitespace-nowrap leading-tight">Calories</p>
                     <p className="text-[10px] text-orange-700 font-bold leading-tight">150 kcal</p>
                  </div>
                  <div className="flex-1 bg-[#E8F0D6] p-2 rounded-xl text-center flex flex-col justify-center min-h-[50px]">
                     <p className="text-[9px] text-[#556B2F] font-medium whitespace-nowrap leading-tight">Carbohidratos</p>
                     <p className="text-[10px] text-[#556B2F] font-bold leading-tight">18 g</p>
                  </div>
                </div>

                <p className="text-xs text-gray-600 mb-6 leading-tight">
                  Delicious and healthy cinnamon roll recipe thats low in carbs and calories!
                </p>

                <button className="w-full bg-[#FBA94B] hover:bg-[#F59E0B] text-white py-3 rounded-full font-bold text-sm shadow-md transition-colors">
                  Start
                </button>

                <div className="flex justify-between items-center mt-5 px-4 text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-gray-800" />
                    <span className="text-xs font-bold text-gray-800">45 min</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Menu className="w-4 h-4 text-gray-800" />
                    <span className="text-xs font-bold text-gray-800">4</span>
                  </div>
                  <Bookmark className="w-4 h-4 text-gray-800" />
                </div>
                <div className="h-6 relative">
                   <div className="w-1/3 h-1 bg-gray-300 rounded-full absolute bottom-1 left-1/2 -translate-x-1/2"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="font-serif text-4xl md:text-5xl font-bold italic text-[#D48625] mb-8">
              Clean Sweet APP
            </h2>
            
            <ul className="space-y-5 mb-10 w-full max-w-md">
              {[
                "Eat desserts without guilt",
                "Have clear portion sizes",
                "Understand carbohydrates in a simple way",
                "Reduce unnecessary spikes",
                "Maintain the cultural ritual (coffee + dessert)",
                'Eat with your family without feeling like "the sick one"'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 text-left">
                  <div className="mt-1 bg-[#49C66F] rounded box-content w-5 h-5 flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-[#3E271D] text-lg font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <Link to="/login" className="w-full sm:w-[90%] md:w-auto bg-[#D48625] hover:bg-[#B97520] text-white px-8 py-5 rounded-lg text-lg md:text-xl font-bold uppercase tracking-wider transition-all shadow-xl hover:shadow-2xl flex flex-col items-center justify-center leading-tight">
              <span>I WANT TO MAKE</span>
              <span>DELICIOUS RECIPES</span>
            </Link>
          </div>
          
        </div>
      </section>

      {/* 7. Section "Testimonials" */}
      <section className="bg-[#FAF3E0] py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <Star className="w-12 h-12 text-brand-orange mx-auto mb-6 fill-current" />
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-8 italic text-[#2D3748]">
            "I love how easy and delicious these recipes are!"
          </h2>
          <p className="text-xl md:text-2xl mb-12 leading-relaxed text-[#4A5568]">
            "As someone who's always struggled with healthy eating, I'm so grateful for these recipes. They're not only incredibly delicious but also surprisingly simple to make. I've seen a huge improvement in my energy levels and overall well-being since incorporating them into my diet. Highly recommend!"
          </p>
          <div className="flex flex-col items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80" 
              alt="Jane Smith" 
              className="w-20 h-20 rounded-full object-cover shadow-lg border-4 border-white mb-4"
            />
            <p className="font-bold text-lg text-[#2D3748]">Jane Smith</p>
            <p className="text-brand-brown-light text-sm tracking-wider uppercase">Health Enthusiast</p>
          </div>
        </div>
      </section>

      {/* 8. Section "Today's Offer" */}
      <section className="bg-[#FAF8F5] py-24 px-6 text-center shadow-inner relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold italic text-[#DA8B2A] mb-8">
            Today's Offer
          </h2>

          <div className="flex gap-4 md:gap-6 mb-12">
            <div className="bg-[#DA8B2A] text-white rounded-lg p-5 w-[110px] md:w-[130px] flex flex-col items-center justify-center shadow-lg">
              <span className="text-4xl md:text-5xl font-bold mb-1 leading-none">{String(minutes).padStart(2, '0')}</span>
              <span className="text-[10px] md:text-xs tracking-widest uppercase mt-1">MINUTES</span>
            </div>
            <div className="bg-[#DA8B2A] text-white rounded-lg p-5 w-[110px] md:w-[130px] flex flex-col items-center justify-center shadow-lg">
              <span className="text-4xl md:text-5xl font-bold mb-1 leading-none">{String(seconds).padStart(2, '0')}</span>
              <span className="text-[10px] md:text-xs tracking-widest uppercase mt-1">SECONDS</span>
            </div>
          </div>

          <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#2A3F54] italic mb-3">
            Eat Without Fear Again
          </h3>
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#DA8B2A] italic mb-12">
            Clean Sweet App
          </h3>

          <div className="bg-white border-2 border-[#DA8B2A] rounded-2xl p-8 md:p-10 w-full max-w-[28rem] shadow-2xl relative mx-auto">
            <div className="text-gray-400 line-through text-2xl md:text-3xl font-medium mb-1 decoration-gray-400 decoration-1">
              $69.90
            </div>
            <div className="text-[#DA8B2A] font-bold text-6xl md:text-7xl mb-6 flex justify-center items-start">
              <span className="text-4xl md:text-5xl mt-2 md:mt-3 mr-2 font-sans">$</span>
              27
            </div>
            <p className="text-[#6A7C92] mb-10 text-lg md:text-xl">Pay only once today:</p>

            <ul className="text-left space-y-5 mb-12 text-[#4A5568] text-base md:text-[17px] leading-snug">
              {[
                "App with more than 365 recipes for diabetics",
                "Constant updates",
                "Built-in portion calculator",
                "Automatic grocery list",
                "Bonus: Metabolic Recipes",
                "Bonus: The Blacklist of Medications and Supplements",
                "Bonus: The Golden Tea Recipe"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-flex justify-center items-center w-5 h-5 bg-[#52D273] text-white rounded-[4px] mr-4 shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button className="w-full bg-[#D4892A] hover:bg-[#C27922] text-white font-bold py-[18px] px-6 rounded-lg shadow-xl text-lg md:text-xl transition-all transform hover:-translate-y-1 active:translate-y-0 uppercase tracking-widest">
              I Want My Access Now
            </button>
          </div>
        </div>
      </section>

      {/* 9. Section "7-Day Guarantee" */}
      <section className="bg-white py-24 px-6 text-center shadow-inner relative z-10">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <div className="mb-10 w-48 mx-auto">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl text-[#F39116]">
              {/* Outer jagged circle representation using path */}
              <path d="M50 0L57.5 7.5L67.5 5L72.5 14L82.5 15L85 25L95 28.5L94 38.5L100 45L95 55L100 64L91 70L92.5 80L82.5 82.5L78.5 92.5L68.5 90L60 98.5L50 94L40 98.5L31.5 90L21.5 92.5L17.5 82.5L7.5 80L9 70L0 64L5 55L0 45L6 38.5L5 28.5L15 25L17.5 15L27.5 14L32.5 5L42.5 7.5L50 0Z" fill="currentColor"/>
              <circle cx="50" cy="48" r="38" fill="white" stroke="#F39116" strokeWidth="2" strokeDasharray="3 3"/>
              <text x="50" y="42" fontFamily="sans-serif" fontSize="32" fontWeight="900" fill="#F39116" textAnchor="middle">7</text>
              <text x="50" y="58" fontFamily="sans-serif" fontSize="11" fontWeight="bold" fill="#F39116" textAnchor="middle" letterSpacing="1">DAY</text>
              <rect x="25" y="65" width="50" height="12" rx="2" fill="#4B5563"/>
              <text x="50" y="73.5" fontFamily="sans-serif" fontSize="7" fontWeight="bold" fill="white" textAnchor="middle" letterSpacing="0.5">GUARANTEE</text>
              <text x="50" y="85" fontFamily="sans-serif" fontSize="5" fontWeight="bold" fill="white" textAnchor="middle">100% MONEY-BACK</text>
              <path d="M20 70L15 85L25 80L20 70Z" fill="#F39116"/>
              <path d="M80 70L85 85L75 80L80 70Z" fill="#F39116"/>
            </svg>
          </div>

          <h2 className="font-serif text-3xl md:text-5xl font-bold italic text-[#DA8B2A] mb-8">
            7-DAY FULL<br/>GUARANTEE
          </h2>

          <p className="text-xl md:text-2xl text-[#4A5568] mb-6">
            Try the app for 7 days.
          </p>

          <p className="text-lg md:text-xl text-[#6A7C92] mb-8 max-w-2xl mx-auto leading-relaxed">
            If you don't like it... If you feel it's not for you... If you don't notice a difference...
          </p>

          <p className="text-xl md:text-2xl font-bold text-[#2A3F54] mb-8">
            We'll refund 100% of your money.
          </p>

          <p className="text-[#6A7C92] text-lg md:text-xl">
            No questions asked. No complications.
          </p>
        </div>
      </section>

      {/* 10. Section "FAQ" */}
      <section className="bg-[#FAF8F5] py-24 px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="font-serif text-3xl md:text-5xl font-bold italic text-[#DA8B2A] mb-12 text-center">
            Frequently Asked<br/>Questions
          </h2>

          <div className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white border rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                onClick={() => toggleFaq(index)}
              >
                <div className="p-5 md:p-6 flex justify-between items-center">
                  <h4 className="font-bold text-lg md:text-xl text-[#2A3F54] pr-4">
                    {faq.question}
                  </h4>
                  <div className="text-[#DA8B2A] flex-shrink-0">
                    {openFaq === index ? (
                      <Minus className="w-6 h-6" strokeWidth={3} />
                    ) : (
                      <Plus className="w-6 h-6" strokeWidth={3} />
                    )}
                  </div>
                </div>
                {openFaq === index && (
                  <div className="px-5 md:px-6 pb-6 text-[#6A7C92] text-base md:text-lg leading-relaxed border-t border-gray-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
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
