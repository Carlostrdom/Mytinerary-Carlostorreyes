import { configureStore } from '@reduxjs/toolkit'
import reduxCities from './reduceCities/reduxCities'
import reduxItineraries from './reduceCities/reduxItineraries'


const store = configureStore({
    reducer: {
        citiesStore: reduxCities,
        itinerariesStore: reduxItineraries
    }
})

export default store