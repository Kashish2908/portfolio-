import React from 'react';
import CardOne from './HomeCards/CardOne';
import CardTwo from './HomeCards/CardTwo';
import CardThree from './HomeCards/CardThree';
import CardFour from './HomeCards/CardFour';
import CardFive from './HomeCards/CardFive';
import CardSix from './HomeCards/CardSix';
import CardSeven from './HomeCards/CardSeven';
import CardEight from './HomeCards/CardEight';
import CardNine from './HomeCards/CardNine';
import CardTen from './HomeCards/CardTen';
import CardEleven from './HomeCards/CardEleven';
import CardTwelve from './HomeCards/CardTwelve';

function Hero() {
    const cardSets = [
        [<CardOne key="1" />, <CardTwo key="2" />, <CardThree key="3" />], // First row
        [<CardFour key="4" />, <CardFive key="5" />, <CardSix key="6" />], // Second row
        [<CardSeven key="7" />, <CardEight key="8" />, <CardNine key="9" />],  // Third row
        [<CardTen key="10" />, <CardEleven key="11" />, <CardTwelve key="12" />] // Fourth row
    ];

    return (
        <div className='p-5 pb-3'>
            <div className="container">
                {cardSets.map((cardSet, rowIndex) => (
                    <div key={rowIndex} className="row justify-content-center gx-7 gy-3 mb-4">
                        {cardSet.map((CardComponent, cardIndex) => (
                            <div key={cardIndex} className="col-md-3">
                                {CardComponent}
                            </div>
                        ))}
                    </div>
                ))}
                <div class="text-secondary">
                    <hr />
                </div>
            </div>

        </div>

    );
}

export default Hero;
