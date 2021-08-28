import { useSelector } from 'react-redux';
import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';
import { addNewBug, deleteBug, startLoadingBugs } from '../../../actions/bugs';
import { db } from '../../../firebase/firebase-config';
import { types } from '../../../types/types';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

let store = mockStore({
    auth: {
        uid: 'testinguid',
        name: 'Test',
    },
    bugs: {
        bugs: [],
        active: null,
    },
});

describe('Test actions bugs', () => {
    beforeEach(() => {
        store = mockStore({
            auth: {
                uid: 'testinguid',
                name: 'Test',
            },
            bugs: {
                bugs: [],
                active: null,
            },
        });
    });

    test('should add bug to db', async () => {
        const testBug = {
            createdAt: 1629994529465,
            description: 'refactor index.js',
            severity: 'low',
            title: 'refactor index',
            id: '2ft6VFMSu8WwUFGm6nQQ',
            assignee: 'Max Verstappen',
            status: 'in-progress',
            reporter: 'Max Verstappen',
            name: 'testings',
        };
        await store.dispatch(addNewBug(testBug));
        const bugsDB = await db.collection('bugs').get();

        bugsDB.docs.map(async (bug, i) => {
            if (i > 4) {
                await db.collection('bugs').doc(bug.id).delete();
            } else {
                return bug;
            }
        });
    });

    test('should load the bugs from db', async () => {
        await store.dispatch(startLoadingBugs());
        const actions = store.getActions();

        expect(actions).toEqual([
            {
                type: types.bugsLoad,
                payload: expect.any(Array),
            },
        ]);

        const expected = {
            assignee: expect.any(String),
            createdAt: expect.any(Number),
            description: expect.any(String),
            id: expect.any(String),
            reporter: expect.any(String),
            severity: expect.any(String),
            status: expect.any(String),
            title: expect.any(String),
        };

        expect(actions[0].payload[0]).toMatchObject(expected);
    });

    test('should delete bug from db', async () => {
        await store.dispatch(startLoadingBugs());
        let actions1 = store.getActions();
        const { id } = actions1[0].payload[0];
        await store.dispatch(deleteBug(id));
        await store.dispatch(startLoadingBugs());
        const isBugDelete =
            store.getActions()[1].payload.find((bug) => bug.id === id) ===
            undefined;

        expect(isBugDelete).toBe(true);
    });
});
