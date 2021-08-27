import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';
import { addNewBug, startLoadingBugs } from '../../../actions/bugs';
import { db } from '../../../firebase/firebase-config';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const store = mockStore({
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
        const actions = store.getActions();
        const bugsDB = await db
            .collection('bugs')
            .get()
            .docs.map((bug) => bug);
        console.log({ bugsDB });
        await db.collection('bugs').doc(bugsDB.docs[0].id).delete();
    });

    test('should start loading bugs', async () => {
        await store.dispatch(startLoadingBugs());
        const actions = store.getActions();
        console.log(actions);
    });
});
