import Image from "next/image";
import {XCircleIcon} from "@heroicons/react/24/outline";

export type MenuItemType = {
    imageSrc: string
    title: string
    description: string
    price: number,
    inCart: boolean,
    onClick: () => void
}

export default function MenuItem({
                                     imageSrc = '',
                                     title = '',
                                     description = '',
                                     price = 0,
                                     inCart = false,
                                     onClick = () => {
                                     }
                                 }: MenuItemType) {
    return (
        // Animate the background as well. Probably delete this and use motion.
        <div className={`flex p-4 border-b border-gray-200 ${inCart ? 'bg-indigo-500 text-white' : ''}`}
             onClick={onClick}
        >
            {/* Image */}
            <div className="w-1/4 h-24 mr-4">
                <Image src={imageSrc} alt={title} className="w-full h-full object-cover rounded-md"
                       width={500} height={500}
                />
            </div>

            {/* Title, Price, and Description */}
            <div className="w-3/4">
                <div className={'flex justify-between items-center'}>
                    <h2 className="text-lg font-semibold mb-1">{title}</h2>
                    {inCart &&
                        <XCircleIcon className="h-6 w-6" aria-hidden="true"/>
                    }
                </div>
                <p className="text-gray-800 font-medium mb-2">${price.toFixed(2)}</p> {/* Display price with 2 decimal places */}
                <p className={`${inCart ? 'text-black' : 'text-gray-600'} text-sm`}>{description}</p>
            </div>
        </div>
    );
}