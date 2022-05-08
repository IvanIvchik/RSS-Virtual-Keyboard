import { firstRow, secondRow, thirdRow, fourthRow, fifthRow } from './elements-keyboard.js';

const listRows = [firstRow, secondRow, thirdRow, fourthRow, fifthRow];
let language = 'en';

const createContainer = () => {
    const container = document.createElement('div');
    container.classList.add('container');
    document.body.prepend(container);
}

const createKeyboard = () => {
    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');
    document.querySelector('.container').prepend(keyboard);
}

const creatEntryField = () => {
    const entryField = document.createElement('textarea');
    entryField.classList.add('entry-field');
    entryField.rows = "10";
    entryField.cols = "50";
    document.querySelector('.container').prepend(entryField);
}

const createGroupsKeys = (n) => {
    const rowKeys = document.createElement('div');
    rowKeys.classList.add('row-keys', `row-${n}`);
    document.querySelector('.keyboard').append(rowKeys);
}

const fillingRowKeyboard = () => {
    for (let i = 1; i < 6; i++) {
        createGroupsKeys(i);
    }
}

const createKeys = (obj, i) => {
    for (let el in obj) {
        let key = document.createElement('div');
        key.classList.add('key');
        key.id = el;
        document.querySelector(`.row-${i}`).append(key);

        let basicValue = document.createElement('span');
        basicValue.classList.add('basic-value-key');
        key.prepend(basicValue);
        if (!Array.isArray(obj[el])) basicValue.textContent = obj[el];

        if (Array.isArray(obj[el])) {
            basicValue.textContent = obj[el][0];

            let additionalValue = document.createElement('span');
            additionalValue.classList.add('additional-value-key');
            key.prepend(additionalValue); 1
            additionalValue.textContent = obj[el][1];
        }
    }
}

const fillingRowsKeys = () => {
    for (let i = 0; i < listRows.length; i++){
        createKeys(listRows[i][language], i + 1)
    }
}

export const createVirtualKeyboard = () => {
    createContainer();
    createKeyboard();
    creatEntryField();
    fillingRowKeyboard();
    fillingRowsKeys();
}

