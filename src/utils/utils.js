/**
 * Debounce for API calls
 * @param fn
 * @param delay
 * @returns {Function}
 */

export const debounceservice = function (fn, delay) {
    let timer;
    return function () {
        let context = this,
            args = arguments;

        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, delay)
    }
};

/**
 * Pagination for Views
 * @param pageOptions
 * @param sourceArray
 * @returns {Array}
 */
export const paginationService = (pageOptions, sourceArray) => {
    if (pageOptions) {
        let startIndex = 0;
        let endIndex = pageOptions.recordsPerPage * pageOptions.currentPage;
        let outputArray = [];

        if (pageOptions.currentPage === 1) {
            outputArray = sourceArray.slice(0, endIndex);
        } else if (pageOptions.currentPage === 2) {
            startIndex = pageOptions.recordsPerPage;
            outputArray = sourceArray.slice(startIndex, endIndex);
        } else if (pageOptions.currentPage > 2) {
            startIndex = (pageOptions.recordsPerPage * pageOptions.currentPage) - pageOptions.recordsPerPage;
            outputArray = sourceArray.slice(startIndex, endIndex)
        }

        return outputArray;
    }
};
