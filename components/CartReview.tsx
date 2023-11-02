import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";

function CartOverlay({isOpen, items, onClose}) {

    const overlayVariants = {
        hidden: {y: '100%', opacity: 0},
        visible: {y: 0, opacity: 1}
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={'hidden'}
                    animate={'visible'}
                    exit={'hidden'}
                    variants={overlayVariants}
                    transition={{type: 'spring', stiffness: 300, damping: 30}}
                    className={'fixed inset-0 z-50 bg-gray-700 bg-opacity-50'}
                >
                    {/*<div className={`${isOpen ? 'fixed inset-0 z-50' : 'hidden'} flex justify-center items-end`}>*/}
                    <div className={'flex justify-center items-end'}
                    >
                        <div
                            className="w-full h-2/3 bg-white rounded-t p-4 transition-transform transform duration-300 ease-in-out"
                            style={{transform: isOpen ? 'translateY(0%)' : 'translateY(100%)'}}>
                            <button className="mb-4" onClick={onClose}>Close</button>
                            <h2 className="text-xl mb-4">Your Cart</h2>
                            {/* List out cart items */}
                            {items.map(item => (
                                <div key={item?.id}>
                                    {item?.title} - ${item?.price.toFixed(2)}
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>

    );
}

export default function CartReview({cartItems}) {

    const [cartOpen, setCartOpen] = useState(false)

    return (
        <>
            <button
                className="w-full mt-4 py-3 bg-indigo-500 text-white rounded-md shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={() => setCartOpen(true)}
            >
                Review Cart ({cartItems.length})
            </button>

            <CartOverlay
                isOpen={cartOpen}
                items={cartItems}
                onClose={() => setCartOpen(false)}
            />
        </>
    )
}