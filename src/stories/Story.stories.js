
import React from 'react';
import Promotion from '../components/Promotion';

export default {
    title: 'components/Promotion',
    component: Promotion,
};
let samplePromotion = {
    "title": "Chwyć premię 350zł!",
    "bank": "BNP Paribas",
    "image": "https://www.najlepszekonto.pl/thumbs/analysis_top/2020-02/350-zl-chwyc-premie-bnp-paribas.png"
}


export const Basic = () => <Promotion {...samplePromotion}/>;
export const WithProp = () => <Promotion prop="value" />;
