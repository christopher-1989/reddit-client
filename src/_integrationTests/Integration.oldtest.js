import moxios from 'moxios';
import { testStore } from '../utils/index';
import { fetchPosts } from '../store/actions/index';
import { menuClick } from '../store/actions/actions';

describe('fetchPosts action', () => {
    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    test('Store is updated correctly for posts', () => {
        const expectedState = [{
            title: 'Example title 1',
            body: 'example body'
        },
        {
            title: 'Example title 2',
            body: 'example body'
        },
        {
            title: 'Example title 3',
            body: 'example body'
        }];

        const store = testStore();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            })
        });

        return store.dispatch(fetchPosts())
        .then(() => {
            const newState = store.getState();
            expect(newState.getPosts).toBe(expectedState);
        }); 
    });


    test('Store is updated correctly for menuClicked', () => {
        const expectedState = true;

        const store = testStore();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            })
        });

        store.dispatch(menuClick());
        
        const newState = store.getState();
        expect(newState.menuClicked).toBe(expectedState); 
    });
});