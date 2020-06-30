const DialogInitialState = false;
const DialogStatus = (state = DialogInitialState, action) => {
    switch (action.type) {
        case "DIALOG":
            return !state
        default:
            return state
    }
}
export default DialogStatus;