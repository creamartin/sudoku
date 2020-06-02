const isNumeric = new RegExp('^[1-9]$');
const isControl = new RegExp('[wasdhnmk]')
let subscribed = false;
let callbacks;

const handleKeyDown = e => {

    e.preventDefault();
    const key = e.key;

    if (e.repeat) 
        return;
    
    const selected = callbacks.selected;
    let newSel;
    if (isNumeric.test(key)) 
        callbacks.handleNumericInput(key);
     else if(isControl.test(key)) 
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
            case 'h': callbacks.handleHint();
                break;

            case 'n': callbacks.handleToggleNotes();
                break;
            case 'k': callbacks.handleErase();
                break;
            case 'm': callbacks.handleUndo();
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
