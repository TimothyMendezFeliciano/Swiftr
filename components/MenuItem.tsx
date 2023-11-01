export default function MenuItem({imageSrc, title, description, price}) {
    return (
        <div className="flex p-4 border-b border-gray-200">
            {/* Image */}
            <div className="w-1/4 h-24 mr-4">
                <img src={imageSrc} alt={title} className="w-full h-full object-cover rounded-md"/>
            </div>

            {/* Title, Price, and Description */}
            <div className="w-3/4">
                <h2 className="text-lg font-semibold mb-1">{title}</h2>
                <p className="text-gray-800 font-medium mb-2">${price.toFixed(2)}</p> {/* Display price with 2 decimal places */}
                <p className="text-gray-600 text-sm">{description}</p>
            </div>
        </div>
    );

    // return (
    // <div className="w-full md:w-1/2 lg:w-1/3 p-4">
    //     <div className="relative h-64 overflow-hidden rounded-t-md">
    //         {/* Image */}
    //         <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
    //
    //         {/* Title on the lower left inside the image */}
    //         <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded">
    //             {title}
    //         </div>
    //     </div>
    //
    //     {/* Description card below */}
    //     <div className="p-4 bg-white shadow rounded-b-md">
    //         <p className="text-gray-600">{description}</p>
    //     </div>
    // </div>
    // )
}