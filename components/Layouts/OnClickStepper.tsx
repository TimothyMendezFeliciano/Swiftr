import {motion, AnimatePresence} from "framer-motion";
import React, {useState} from "react";

type Props = {
    children: React.ReactNode,
}

export function OnClickStepper({children}: Props) {

    const [currentStep, setCurrentStep] = useState(0)
    const currentChild = React.Children.toArray(children)[currentStep]

    const goToNext = ()=>{
        if((currentStep + 1 > React.Children.toArray(children).length)) {
            setCurrentStep(currentStep+1)
        }
    }

    const goToPrevious = () => {
        if(!(currentStep -1 <0)) {
            setCurrentStep(currentStep-1)
        }
    }


    if (React.isValidElement(currentChild)) {
        <AnimatePresence>
            <motion.div
                key={currentStep}
                initial={{x: '100'}}
                        animate={{x: 0}}
                        exit={{x: '100%'}}
                        transition={{type: 'tween'}}
                        className={'absolute inset-0 bg-gray-700 bg-opacity-50'}
            >
                <button onClick={goToPrevious}>Prev</button>
                <button onClick={goToNext}>Next</button>
                {React.cloneElement(currentChild)}
            </motion.div>
        </AnimatePresence>
    }

    return currentChild
}