import { configureStore } from '@reduxjs/toolkit'
import reduxCities from './reduceCities/reduxCities'
import reduxItineraries from './reduceCities/reduxItineraries'
import reducerSignin from './reducerSignin/reducerSignin'
import reducerRegister from './reducerRegister.js/reduceRegister'


const store = configureStore({
    reducer: {
        citiesStore: reduxCities,
        itinerariesStore: reduxItineraries,
        signinStore: reducerSignin,
        registerStore: reducerRegister
    }
})

export default store