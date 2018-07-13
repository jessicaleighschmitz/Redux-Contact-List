import { combineReducers } from 'redux';
import ContactsReducer from './contacts-reducer'
import ActiveContactReducer from './active-contact-reducer'

const rootReducer = combineReducers({
  contacts: ContactsReducer,
  activeContact: ActiveContactReducer
});
export default rootReducer;
