import React from 'react';
import {FeatureContainer,FeatureButton} from './FeatureStyle'

const Feature = () => {
    return (
        <FeatureContainer>
            <h1>Pizza of the Day</h1>
            <p>Truffle alfredo sauco topped with 24 carat</p>
            <FeatureButton>
                Order Now
            </FeatureButton>
        </FeatureContainer>
    )
}

export default Feature
