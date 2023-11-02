export default function MenuCategories({categories, activeCategory, onCategoryClick}) {
    return (
        <nav className="flex flex-nowrap space-x-4 py-2 px-4 bg-white shadow overflow-x-auto">
            {categories.map(category => (
                <button
                    key={category}
                    className={`py-2 px-4 rounded ${activeCategory === category ? 'bg-blue-500 text-white' : 'text-gray-600'}`}
                    onClick={() => onCategoryClick(category)}>
                    {category}
                </button>
            ))}
        </nav>
    );
}