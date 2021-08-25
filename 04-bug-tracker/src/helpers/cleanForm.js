export const cleanForm = (form = {}) => {
    const objToArray = Object.entries(form).filter((tupple) => {
        let [name, value] = tupple;

        if (name === 'name') {
            value = value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            return value.length > 15;
        }

        if (name === 'description') {
            return value.length >= 160;
        }

        return false;
    });
    const invalidInputs = {};

    for (const [k, v] of objToArray) {
        invalidInputs[k] = v;
    }
    return invalidInputs;
};
