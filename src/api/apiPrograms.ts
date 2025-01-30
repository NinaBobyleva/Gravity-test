import {InputPost} from '../components/Header/Header';

const BASE_URL = 'https://cors-anywhere.herokuapp.com/http://85.92.111.183:18181/programs/';

export const getPrograms = async ({sort}: {sort: string}) => {
    let sortResult = '';

    if (sort === 'Title') {
        sortResult = '?skip=0&limit=30&sort_by=title';
    }

    if (sort === 'Id') {
        sortResult = '?skip=0&limit=30&sort_by=id';
    }

    if (sort === 'Duration') {
        sortResult = '&?skip=0&limit=30sort_by=duration';
    }
    const res = await fetch(`${BASE_URL}${sortResult}`);
    if (!res.ok) {
        throw new Error('Что-то пошло не так');
    }

    const response = await res.json();

    return response;
};

export const postPrograms = async (inputPost: InputPost) => {
    const res = await fetch(BASE_URL, {
        method: 'POST',
        body: JSON.stringify(inputPost),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!res.ok) {
        throw new Error('Что-то пошло не так');
    }

    const response = await res.json();

    return response;
};

export const addLike = async ({id}: {id: number}) => {
    const res = await fetch(`${BASE_URL}${id}/like`, {
        method: 'POST',
    });

    if (!res.ok) {
        throw new Error('Что-то пошло не так');
    }

    const response = await res.json();

    return response;
};
