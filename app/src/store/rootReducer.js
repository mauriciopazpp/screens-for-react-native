import { combineReducers } from 'redux'

import auth from '@screen/auth/store/reducer'

const rootReducer = combineReducers({
    auth: auth
})

export default rootReducer