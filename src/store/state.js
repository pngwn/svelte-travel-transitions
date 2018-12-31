import { immerObservable } from './store.js';

export const state = immerObservable({
    page: 'index',
    currentUser: 1
});

export const changePage = pageName => {
    state.update(draft => {
        draft.page = pageName;
    });
};

export const changeUser = i => {
    state.update(draft => {
        draft.currentUser = i;
    });
};