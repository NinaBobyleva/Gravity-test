const BASE_URL = 'http://85.92.111.183:18181/programs/';

export const getPrograms = async () => {
    const res = await fetch(BASE_URL);

    const response = await res.json();
    console.log(response);

    return response;
};
