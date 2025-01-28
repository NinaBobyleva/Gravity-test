type CreatePagesProp = {
    pages: number[];
    pagesCount: number;
    currentPage: number;
};

export const createPages = ({pages, pagesCount, currentPage}: CreatePagesProp) => {
    if (pagesCount > 5) {
        if (currentPage > 1) {
            for (let i = currentPage; i <= currentPage + 4; i++) {
                pages.push(i);
                if (i === pagesCount) break;
            }
        } else {
            for (let i = 1; i <= 5; i++) {
                pages.push(i);
                if (i === pagesCount) break;
            }
        }
    } else {
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
    }
};
