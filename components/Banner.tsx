import Image from "next/image";


export default function Banner({imageUrl, restaurantName}) {

    return (
        <div className={'relative w-full h-64 overflow-hidden'}>
            <Image src={imageUrl} alt={restaurantName}
                   className={'w-full h-full object-cover'}
                   height={100}
                   width={100}
            />
            <div className={'absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded'}>
                {restaurantName}
            </div>
        </div>
    )
}