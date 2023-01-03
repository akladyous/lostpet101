import { Route } from 'react-router-dom';
import Listings from '../app/freatures/listings/Listings.jsx';

import React from 'react';

export default function listingsRoute() {
    return [
        <Route path="listings" element={<Listings />}>
            <Route index path="report" />
            <Route index path="pet" />
        </Route>,
    ];
}
