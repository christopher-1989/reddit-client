import { types } from '../actions/types';
import { menuClickedReducer } from './reducers';

describe('Click reducer', () => {

    it('Should return default state', () => {
        const newState = menuClickedReducer(undefined, {});
        expect(newState).toEqual(false);
    })

    it('Should return new state if receiving type', () => {
        const newState = menuClickedReducer(undefined, {
            type: types.CLICK,
            payload: true
        });
        expect(newState).toEqual(true);


    })
})