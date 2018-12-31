import { immerObservable } from './store.js';

export const state = immerObservable({
    currentUser: 1
});

export const changeUser = i => {
    state.update(draft => {
        draft.currentUser = i;
    });
};