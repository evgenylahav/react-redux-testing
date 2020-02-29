import moxios from 'moxios';
import { testStore } from './../../utils';
import { fetchPosts } from './../actions';

describe('fetchPosts actions', () => {
    beforeEach(() => {
        moxios.install();

    });

    afterEach(() => {
        moxios.uninstall();
    });

    it("should update the store correctly", () => {
        const expectedState = [
            {
                title: "example title 1",
                body: "some text",
            },
            {
                title: "example title 2",
                body: "some text",
            },
            {
                title: "example title 3",
                body: "some text",
            },
        ];

        const store = testStore();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState,
            })
        });

        return store.dispatch(fetchPosts())
        .then(() => {
            const newState = store.getState();
            expect(newState.posts.data).toBe(expectedState);
        });
    });
})