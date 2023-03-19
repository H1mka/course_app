export const prepareDate = (date) => {
    const newDate = new Date(date);
    return {
        day: newDate.getDate(),
        month: newDate.getMonth(),
        year: newDate.getFullYear()
    }
}