const getTheTitles = function(books) {
    const titles = books.map(book => `${book.title}`);
    return titles;
};
// const arr = [
//     {
//       title: 'Book',
//       author: 'Name'
//     },
//     {
//       title: 'Book2',
//       author: 'Name2'
//     }
//   ]
// console.log(getTheTitles(arr));

// Do not edit below this line
module.exports = getTheTitles;
