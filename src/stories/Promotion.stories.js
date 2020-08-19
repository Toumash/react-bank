
import React from 'react';
import Promotion from '../components/Promotion';
import 'semantic-ui-css/semantic.min.css'

export default {
    title: 'components/Promotion',
    component: Promotion,
};
let samplePromotion = {
    "title": "Chwyć premię 350zł!",
    "bank": "BNP Paribas",
    "image": "https://www.najlepszekonto.pl/thumbs/analysis_top/2020-02/350-zl-chwyc-premie-bnp-paribas.png",
    "expires_at":"",
    "description":""
}
let samplePromotionWithDetails = {
    "title": "Chwyć premię 350zł!",
    "bank": "BNP Paribas",
    "image": "https://www.najlepszekonto.pl/thumbs/analysis_top/2020-02/350-zl-chwyc-premie-bnp-paribas.png",
    "expires_at":"",
    "description":"Najważniejsze informacje znajdują się poniżej"
}

export const SimplePromotion = () => <Promotion {...samplePromotion}/>;
export const PromotionWithDetails = () => <Promotion {...samplePromotionWithDetails} />;
