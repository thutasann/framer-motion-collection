import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Box = ({ num }) => {

    const control = useAnimation();
    const [ ref, inView ] = useInView();

    useEffect(() => {
        if(inView){
            control.start("visible");
        }
        else{
            control.start("hidden");
        }
    }, [control, inView ]);

    const boxVariants = {
        visible: { opacity: 1, scale: 2 },
        hidden: {opacity: 0, scale: 0}
    }

    return (
        <motion.div 
            ref={ref}
            variants={boxVariants}
            initial="hidden"
            animate={control}
            className='box'
        >
            <h1>Box {num}</h1>
        </motion.div>
    )
}

export default Box