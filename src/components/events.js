const isNumeric = new RegExp('^[1-9]$');
let subscribed = false;
let callbacks;

const handleKeyDown = e => {
    if (e.repeat) {
        return;
    }
    if (e.shiftKey || e.altKey || e.metaKey) {
        const key = String.fromCharCode(e.keyCode);
        if(isNumeric.test(key)){
            callbacks.setNotes(key);
            return;
        }
        switch (key) {

            case 'H': callbacks.handleHint();
                break;
            case 'K': callbacks.handleErase();
                break;
            case 'Z': callbacks.handleUndo();
                break;
            default:
                break;
        }
        return;
    }
    const key = e.key;
    if (isNumeric.test(key)) {
        callbacks.handleNumericInput(key);
        return;
    }
    const selected = callbacks.selected;
    let newSel;
    switch (key) {

        case "w": newSel = selected - 9;
            if (newSel >= 0) {
                callbacks.setSelected(newSel);
            }
            break;
        case 'a': newSel = selected - 1;
            if (newSel % 9 < selected % 9 && newSel >= 0) {
                callbacks.setSelected(newSel);
            }
            break;
        case 's': newSel = selected + 9;
            if (newSel <= 80) {
                callbacks.setSelected(newSel);
            }
            break;
        case 'd': newSel = selected + 1;
            if (newSel % 9 > selected % 9) {
                callbacks.setSelected(newSel);
            }
            break;
        default:
            break;
    }
    

}

export default {
    subscribe: cb => {
        callbacks = cb;
        if (! subscribed) {
            subscribed = true;
            document.addEventListener('keydown', handleKeyDown);
        }


    },
    unsubscribe: () => {
        if (subscribed) {
            subscribed = false;
            document.removeEventListener('keydown', handleKeyDown)
        }
    }
}
