import {
    finishLoading,
    removeError,
    setError,
    startLoading,
} from '../../../actions/ui';
import { types } from '../../../types/types';

describe('ui actions Test', () => {
    test('all actions should work', () => {
        const testArg = 'test';

        const actionError = setError(testArg);

        expect(actionError).toEqual({
            type: types.uiSetError,
            payload: testArg,
        });

        const actionRemoveError = removeError();

        expect(actionRemoveError).toEqual({
            type: types.uiRemoveError,
        });

        const actionStartLoading = startLoading();

        expect(actionStartLoading).toEqual({
            type: types.uiStartLoading,
        });

        const actionFinishLoading = finishLoading();

        expect(actionFinishLoading).toEqual({
            type: types.uiFinishLoading,
        });
    });
});
