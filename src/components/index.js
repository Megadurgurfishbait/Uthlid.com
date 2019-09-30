import React from 'react';

import Container from "./LoadingSite/Container";

const SinglePageCottage = React.lazy(() => import('./SinglePageCottage/SinglePageCottage'));
const CardContainer = React.lazy(() => import('./Cottage/CardContainer'));
const HorseRentalContainer = React.lazy(() => import('./HorseRental/HorseRentalContainer'));
const Golf = React.lazy(() => import('./Golf/Golf'));
const Camping = React.lazy(() => import('./Camping/CampingContainer'));
const Restaurant = React.lazy(() => import('./Restaurant/RestaurantContainer'));
const Sidebar = React.lazy(() => import('./Sidebar/Container'))

export {
    CardContainer,
    SinglePageCottage,
    HorseRentalContainer,
    Golf,
    Container,
    Sidebar,
    Camping,
    Restaurant
}