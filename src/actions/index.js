export const bookselected= 'BOOK_SELECTED';

export const selectBook = (book) => {
    return {
        type: bookselected,
        payload: book,
    };
}