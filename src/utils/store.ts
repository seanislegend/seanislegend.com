import {atom} from 'jotai';

export const pageHeaderDataAtom = atom<{height: number; path: string; title: string}>({
    height: 0,
    path: '',
    title: ''
});
