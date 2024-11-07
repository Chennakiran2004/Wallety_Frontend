import React, { useState } from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';


const variants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.2,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.1,
      },
    },
  };

const SliderContainer = styled(motion.div)`
    position: relative;
    width: 100%;
    margin-top: 20px;
`;

const StyledSlider = styled(motion.input)<{ value: number }>`
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 8px;
    background: ${({ value }) => `linear-gradient(to right, #7f3dff ${value}%, #e5e5e5 ${value}%)`};
    border-radius: 24px;
    outline: none;
    transition: background 0.3s ease-in-out;
    height: 15px;

    ::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 30px;
        height: 30px;
        background: #7f3dff; !important
        border-radius: 50%;
        cursor: pointer;
        border: 4px solid #fff;
        box-shadow: 0 0 8px rgba(142, 68, 173, 0.5); /* Glow effect */
        transition: transform 0.2s;

        &:hover {
            transform: scale(1.1);
        }
    }

    ::-moz-range-thumb {
        width: 30px;
        height: 30px;
        background: #7f3dff; /* Purple color */
        border-radius: 50%;
        cursor: pointer;
        border: 4px solid #fff;
        box-shadow: 0 0 8px rgba(142, 68, 173, 0.5); /* Glow effect */
        transition: transform 0.2s;

        &:hover {
            transform: scale(1.1);
        }
    }
`;

const ThumbValue = styled(motion.div)`
    position: absolute;
    top: -40px;
    background-color: #7f3dff;
    color: white;
    padding: 5px 12px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: bold;
    white-space: nowrap;
    pointer-events: none;
`;

const RangeSlider: React.FC = () => {
    const [value, setValue] = useState(20);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(Number(e.target.value));
    };

    return (
        <AnimatePresence mode = "wait">

        
        <SliderContainer variants={variants} initial = "hidden" animate = "visible" exit = "exit">
            <StyledSlider
                type="range"
                min="0"
                max="100"
                value={value}
                onChange={handleChange}
            />
            <ThumbValue
                style={{
                    left: `${value}%`,
                    transform: `translateX(-${value}%)`,
                }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
            >
                {value}%
            </ThumbValue>
        </SliderContainer>
        </AnimatePresence>
    );
};

export default RangeSlider;
