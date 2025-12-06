'use client'
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const AnimatedHeroText = () => {
    return (
        <div>
            <TypeAnimation
                    sequence={[
                        'Ashib Ullah',
                        1000,
                        'Full Stack Developer',
                        1000,
                        'Graphics Designer',
                        1000,
                        'UI UX Designer',
                        1000,
                        'Video Editor',
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '2em', display: 'inline-block' }}
                    repeat={Infinity}
                />
        </div>
    );
};

export default AnimatedHeroText;