import { constants as C } from '../constants/const';

export const click = (state = false, action) => {
    switch (action.type) {
        case C.CLICK:
            return true;
        default:
            return false;
    }
};