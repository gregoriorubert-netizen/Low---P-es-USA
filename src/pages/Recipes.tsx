import { useState } from 'react';
import { 
  Search, 
  Menu, 
  Bell, 
  UserCircle, 
  Heart,
  Clock,
  Filter,
  ChevronRight,
  X
} from 'lucide-react';
import { Link } from 'react-router-dom';

import { categories, recipesMock, Recipe } from '../data/recipes';

function RecipeCard({ recipe, onClick }: { recipe: Recipe, onClick: () => void }) {
  return (
    <div 
      className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-[#3E271D]/5 group cursor-pointer flex flex-row sm:flex-col h-32 sm:h-auto whitespace-normal"
      onClick={onClick}
    >
      {/* Image */}
      <div className="w-32 sm:w-full h-full sm:h-48 relative overflow-hidden flex-shrink-0">
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur p-2 rounded-full cursor-pointer shadow-sm hover:bg-white transition-colors hidden sm:block">
          <Heart className={`w-5 h-5 ${recipe.favorite ? 'fill-[#D48625] text-[#D48625]' : 'text-[#6A4E3D]'}`} />
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between text-left">
        <div>
          <div className="flex justify-between items-start mb-1 sm:mb-2 text-xs sm:text-sm text-[#6A4E3D] font-medium tracking-wide uppercase">
            <span>{recipe.category}</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {recipe.time}
            </span>
          </div>
          <h4 className="font-serif text-lg leading-tight font-bold text-[#3E271D] group-hover:text-[#D48625] transition-colors line-clamp-2 sm:mb-4">
            {recipe.title}
          </h4>
        </div>
        
        {/* Action row on desktop, hidden on mobile in favor of row layout */}
        <div className="hidden sm:flex justify-between items-center mt-4">
          <span className="text-[#D48625] text-sm font-bold flex items-center gap-1">
            View Recipe <ChevronRight className="w-4 h-4" />
          </span>
        </div>
        
        {/* Mobile action indicator */}
        <div className="sm:hidden self-end mt-auto">
          <div className="w-8 h-8 rounded-full bg-[#F8F5F0] flex items-center justify-center text-[#D48625]">
             <ChevronRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Recipes() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const filteredRecipes = recipesMock.filter(recipe => {
    const matchesCategory = activeCategory === "All" || recipe.category === activeCategory;
    const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="font-sans min-h-screen bg-[#FDFBF7] text-[#3E271D] pb-24 md:pb-0">
      
      {/* Top Navigation / App Header */}
      <header className="bg-white sticky top-0 z-30 px-5 py-4 border-b border-[#3E271D]/10 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <button className="md:hidden p-2 -ml-2 text-[#6A4E3D] hover:bg-[#F8F5F0] rounded-full transition-colors">
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="font-serif text-2xl font-bold italic text-[#D48625]">Members Area</h1>
        </div>
        
        <div className="flex items-center gap-2 text-[#6A4E3D]">
          <button className="p-2 hover:bg-[#F8F5F0] rounded-full transition-colors relative">
            <Bell className="w-6 h-6" />
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
          <Link to="/" className="p-2 hover:bg-[#F8F5F0] rounded-full transition-colors hidden md:block">
            <UserCircle className="w-7 h-7" />
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-5 pt-8 pb-12 w-full">
        
        {/* Welcome & Search */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold font-serif mb-2">Hello, Chef! 👨‍🍳</h2>
          <p className="text-[#6A4E3D] mb-6">What healthy dish are you craving today?</p>
          
          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#6A4E3D]">
                <Search className="h-5 w-5 opacity-60" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-11 pr-4 py-3.5 bg-white border border-[#3E271D]/10 rounded-2xl text-[#3E271D] placeholder-[#3E271D]/40 focus:outline-none focus:ring-2 focus:ring-[#D48625]/50 focus:border-[#D48625] transition-colors shadow-sm text-lg"
                placeholder="Search recipes..."
              />
            </div>
            <button className="p-3.5 bg-white border border-[#3E271D]/10 rounded-2xl text-[#6A4E3D] hover:bg-[#F8F5F0] transition-colors shadow-sm">
              <Filter className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Categories (Horizontal Scroll on Mobile) */}
        <div className="flex overflow-x-auto hide-scrollbar gap-3 mb-8 pb-2 -mx-5 px-5 md:mx-0 md:px-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full whitespace-nowrap text-sm font-bold tracking-wide transition-colors ${
                activeCategory === cat 
                  ? 'bg-[#3E271D] text-white shadow-md' 
                  : 'bg-white text-[#6A4E3D] border border-[#3E271D]/10 hover:bg-[#F8F5F0]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Recipe Display */}
        {searchQuery ? (
          <>
            <div className="flex justify-between items-end mb-4">
              <h3 className="text-xl font-bold font-serif text-[#3E271D]">
                Search Results
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRecipes.length > 0 ? (
                filteredRecipes.map(recipe => (
                  <RecipeCard key={recipe.id} recipe={recipe} onClick={() => setSelectedRecipe(recipe)} />
                ))
              ) : (
                <div className="col-span-full py-12 text-center">
                  <div className="w-16 h-16 bg-[#F8F5F0] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-[#6A4E3D] opacity-50" />
                  </div>
                  <h3 className="text-xl font-bold font-serif text-[#3E271D] mb-2">No recipes found</h3>
                  <p className="text-[#6A4E3D]">Try adjusting your search or filters.</p>
                </div>
              )}
            </div>
          </>
        ) : activeCategory !== "All" ? (
          <>
            <div className="flex justify-between items-end mb-4">
              <h3 className="text-xl font-bold font-serif text-[#3E271D]">
                {activeCategory}
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRecipes.length > 0 ? (
                filteredRecipes.map(recipe => (
                  <RecipeCard key={recipe.id} recipe={recipe} onClick={() => setSelectedRecipe(recipe)} />
                ))
              ) : (
                <div className="col-span-full py-12 text-center border-2 border-dashed border-[#3E271D]/10 rounded-3xl">
                  <h3 className="text-xl font-bold font-serif text-[#3E271D] mb-2">Coming Soon</h3>
                  <p className="text-[#6A4E3D]">We are adding recipes for this category soon!</p>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="space-y-12">
            {categories.filter(c => c !== "All").map(category => {
              const categoryRecipes = recipesMock.filter(r => r.category === category);
              if (categoryRecipes.length === 0) return null;
              
              return (
                <div key={category}>
                  <h3 className="text-2xl font-bold font-serif text-[#3E271D] mb-6 border-b border-[#3E271D]/10 pb-2">
                    {category}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryRecipes.map(recipe => (
                      <RecipeCard key={recipe.id} recipe={recipe} onClick={() => setSelectedRecipe(recipe)} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

      {/* Mobile Bottom Navigation Layout (App-feel) */}
      <nav className="md:hidden fixed bottom-0 w-full bg-white border-t border-[#3E271D]/10 pb-safe pt-2 px-6 flex justify-between items-center z-40 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <Link to="/recipes" className="flex flex-col items-center p-2 text-[#D48625]">
          <Menu className="w-6 h-6 mb-1" />
          <span className="text-[10px] font-bold tracking-wider uppercase">Recipes</span>
        </Link>
        <button className="flex flex-col items-center p-2 text-[#6A4E3D] hover:text-[#D48625] transition-colors">
          <Heart className="w-6 h-6 mb-1" />
          <span className="text-[10px] font-bold tracking-wider uppercase">Favorites</span>
        </button>
        <Link to="/" className="flex flex-col items-center p-2 text-[#6A4E3D] hover:text-[#D48625] transition-colors">
          <UserCircle className="w-6 h-6 mb-1" />
          <span className="text-[10px] font-bold tracking-wider uppercase">Profile</span>
        </Link>
      </nav>

      {/* Recipe Modal */}
      {selectedRecipe && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-[#FDFBF7] w-full max-w-3xl min-h-[50vh] max-h-[90vh] rounded-[2rem] shadow-2xl overflow-y-auto relative animate-in fade-in zoom-in duration-300 pb-10">
            {/* Close Button */}
            <button 
              onClick={() => setSelectedRecipe(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full backdrop-blur-md transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="w-full h-64 sm:h-80 relative overflow-hidden">
              <img 
                src={selectedRecipe.image} 
                alt={selectedRecipe.title} 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                <span className="w-max bg-[#D48625] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3 shadow-md">
                  {selectedRecipe.category}
                </span>
                <h2 className="text-white text-3xl sm:text-4xl font-bold font-serif leading-tight">
                  {selectedRecipe.title}
                </h2>
                <div className="flex items-center gap-4 mt-3 text-white/90 text-sm sm:text-base font-medium">
                  <span className="flex items-center gap-1.5"><Clock className="w-5 h-5 opacity-80" /> {selectedRecipe.time}</span>
                  <span className="flex items-center gap-1.5"><Heart className="w-5 h-5 opacity-80" /> {selectedRecipe.favorite ? "Favorited" : "Save"}</span>
                </div>
              </div>
            </div>
            
            <div className="p-6 sm:p-10">
              <p className="text-[#6A4E3D] text-lg sm:text-xl font-medium leading-relaxed italic border-l-4 border-[#D48625] pl-4 mb-8">
                {selectedRecipe.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Ingredients */}
                <div>
                  <h3 className="text-xl font-bold font-serif text-[#3E271D] mb-5 border-b border-[#3E271D]/10 pb-2">Ingredients</h3>
                  <ul className="space-y-3">
                    {selectedRecipe.ingredients ? (
                      selectedRecipe.ingredients.map((ing, i) => (
                        <li key={i} className="flex gap-3 text-[#3E271D]">
                          <span className="text-[#D48625] font-bold">•</span>
                          <span>{ing}</span>
                        </li>
                      ))
                    ) : (
                      <li className="text-[#6A4E3D] italic">Check the full book for ingredients.</li>
                    )}
                  </ul>
                </div>
                
                {/* Instructions */}
                <div>
                  <h3 className="text-xl font-bold font-serif text-[#3E271D] mb-5 border-b border-[#3E271D]/10 pb-2">Method</h3>
                  <ol className="space-y-4">
                    {selectedRecipe.method ? (
                      selectedRecipe.method.map((step, i) => (
                        <li key={i} className="flex gap-4">
                          <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#F5EADF] text-[#D48625] flex items-center justify-center font-bold text-sm font-serif">
                            {i+1}
                          </span>
                          <span className="text-[#3E271D] leading-relaxed pt-0.5">{step}</span>
                        </li>
                      ))
                    ) : (
                      <li className="text-[#6A4E3D] italic">Check the full book for the method.</li>
                    )}
                  </ol>
                </div>
              </div>

              {/* Tips & Science */}
              {(selectedRecipe.tip || selectedRecipe.science) && (
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-[#3E271D]/10">
                  {selectedRecipe.tip && (
                    <div className="bg-[#FFFDF9] border border-[#D48625]/20 p-5 rounded-2xl shadow-sm relative overflow-hidden">
                      <div className="w-1.5 h-full bg-[#D48625] absolute left-0 top-0"></div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#D48625] mb-2">Baker's Tip</h4>
                      <p className="text-[#6A4E3D] text-sm leading-relaxed">{selectedRecipe.tip}</p>
                    </div>
                  )}
                  {selectedRecipe.science && (
                    <div className="bg-[#F6F8F6] border border-[#6A8A5A]/20 p-5 rounded-2xl shadow-sm relative overflow-hidden">
                      <div className="w-1.5 h-full bg-[#6A8A5A] absolute left-0 top-0"></div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#6A8A5A] mb-2">The Science</h4>
                      <p className="text-[#6A4E3D] text-sm leading-relaxed">{selectedRecipe.science}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      
      {/* Include custom CSS for hiding scrollbar if not in global css */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .pb-safe {
          padding-bottom: env(safe-area-inset-bottom, 1rem); /* For iOS devices */
        }
      `}</style>
    </div>
  );
}
