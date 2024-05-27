

export const CurrentDate = (type) => {

    const date = new Date();

    switch (type) {
        case 'year':
            return date.getFullYear();
        case 'day':
            return date.getDay();
        case 'month':
            return date.getMonth();
        default:
            return date
    }
}