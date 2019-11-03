class Keyboard {
    row1 = [
        {shifted: '', shifted_ru: 'Ё', shifted_en: '~', keyCode: 192, ru: 'ё', en: '`', width: 1},
        {shifted: '!', keyCode: 49, value: '1', width: 1},
        {shifted: '', shifted_ru: '"', shifted_en: '@', keyCode: 50, value: '2', width: 1},
        {shifted: '', shifted_ru: '№', shifted_en: '#', keyCode: 51, value: '3', width: 1},
        {shifted: '', shifted_ru: ';', shifted_en: '$', keyCode: 52, value: '4', width: 1},
        {shifted: '%', keyCode: 53, value: '5', width: 1},
        {shifted: '', shifted_ru: ':', shifted_en: '^', keyCode: 54, value: '6', width: 1},
        {shifted: '', shifted_ru: '?', shifted_en: '&', keyCode: 55, value: '7', width: 1},
        {shifted: '*', keyCode: 56, value: '8', width: 1},
        {shifted: '(', keyCode: 57, value: '9', width: 1},
        {shifted: ')', keyCode: 48, value: '0', width: 1},
        {shifted: '_', keyCode: 189, value: '-', width: 1},
        {shifted: '+', keyCode: 187, value: '=', width: 1},
        {keyCode: 8, title: 'Backspace', width: 2}
    ];
    row2 = [
        {keyCode: 9, value: '\t', title: 'Tab', width: 1.2},
        {keyCode: 81, shifted_ru: 'Й', shifted_en: 'Q', en: 'q', ru: 'й', width: 1},
        {keyCode: 87, shifted_ru: 'Ц', shifted_en: 'W', en: 'w', ru: 'ц', width: 1},
        {keyCode: 69, shifted_ru: 'У', shifted_en: 'E', en: 'e', ru: 'у', width: 1},
        {keyCode: 82, shifted_ru: 'К', shifted_en: 'R', en: 'r', ru: 'к', width: 1},
        {keyCode: 84, shifted_ru: 'Е', shifted_en: 'T', en: 't', ru: 'е', width: 1},
        {keyCode: 89, shifted_ru: 'Н', shifted_en: 'Y', en: 'y', ru: 'н', width: 1},
        {keyCode: 85, shifted_ru: 'Г', shifted_en: 'U', en: 'u', ru: 'г', width: 1},
        {keyCode: 73, shifted_ru: 'Ш', shifted_en: 'I', en: 'i', ru: 'ш', width: 1},
        {keyCode: 79, shifted_ru: 'Щ', shifted_en: 'O', en: 'o', ru: 'щ', width: 1},
        {keyCode: 80, shifted_ru: 'З', shifted_en: 'P', en: 'p', ru: 'з', width: 1},
        {keyCode: 219, shifted_ru: 'Х', shifted_en: '{', en: '[', ru: 'х', width: 1},
        {keyCode: 221, shifted_ru: 'Ъ', shifted_en: '}', en: ']', ru: 'ъ', width: 1},
        {keyCode: 220, shifted_ru: '/', shifted_en: '|', value: '\\', width: 1},
        {keyCode: 46, title: 'Del', width: 1},
    ];
    row3 = [
        {keyCode: 20, title: 'Caps Lock', width: 2},
        {keyCode: 65, shifted_ru: 'ф', shifted_en: 'A', en: 'a', ru: 'ф', width: 1},
        {keyCode: 83, shifted_ru: 'Ы', shifted_en: 'S', en: 's', ru: 'ы', width: 1},
        {keyCode: 68, shifted_ru: 'В', shifted_en: 'D', en: 'd', ru: 'в', width: 1},
        {keyCode: 70, shifted_ru: 'А', shifted_en: 'F', en: 'f', ru: 'а', width: 1},
        {keyCode: 71, shifted_ru: 'П', shifted_en: 'G', en: 'g', ru: 'п', width: 1},
        {keyCode: 72, shifted_ru: 'Р', shifted_en: 'H', en: 'h', ru: 'р', width: 1},
        {keyCode: 74, shifted_ru: 'О', shifted_en: 'J', en: 'j', ru: 'о', width: 1},
        {keyCode: 75, shifted_ru: 'Л', shifted_en: 'K', en: 'k', ru: 'л', width: 1},
        {keyCode: 76, shifted_ru: 'Д', shifted_en: 'L', en: 'l', ru: 'д', width: 1},
        {keyCode: 186, shifted_ru: 'Ж', shifted_en: ':', en: ';', ru: 'ж', width: 1},
        {keyCode: 222, shifted_ru: 'Э', shifted_en: '"', en: "'", ru: 'э', width: 1},
        {keyCode: 13, value: "\n", title: 'Enter', width: 2},
    ];
    row4 = [
        {keyCode: 16, code: 'ShiftLeft', title: 'Shift', width: 2},
        {keyCode: 90, shifted_ru: 'Я', shifted_en: 'Z', en: 'z', ru: 'я', width: 1},
        {keyCode: 88, shifted_ru: 'Ч', shifted_en: 'X', en: 'x', ru: 'ч', width: 1},
        {keyCode: 67, shifted_ru: 'С', shifted_en: 'C', en: 'c', ru: 'с', width: 1},
        {keyCode: 86, shifted_ru: 'М', shifted_en: 'V', en: 'v', ru: 'м', width: 1},
        {keyCode: 66, shifted_ru: 'И', shifted_en: 'B', en: 'b', ru: 'и', width: 1},
        {keyCode: 78, shifted_ru: 'Т', shifted_en: 'N', en: 'n', ru: 'т', width: 1},
        {keyCode: 77, shifted_ru: 'Ь', shifted_en: 'M', en: 'm', ru: 'ь', width: 1},
        {keyCode: 188, shifted_ru: 'Б', shifted_en: '<', en: ',', ru: 'б', width: 1},
        {keyCode: 190, shifted_ru: 'Ю', shifted_en: '>', en: '.', ru: 'ю', width: 1},
        {keyCode: 191, shifted_ru: ',', shifted_en: '?', en: '/', ru: '.', width: 1},
        {keyCode: 38, title: 'up', width: 1},
        {keyCode: 16, code: 'ShiftRight', title: 'Shift', width: 1},
    ];
    row5 = [
        {keyCode: 17, title: 'Ctrl', code: 'ControlLeft', width: 1.7},
        {keyCode: 91, title: 'Win', width: 1},
        {keyCode: 18, code: 'AltLeft', title: 'Alt', width: 1},
        {keyCode: 32, value: ' ', width: 22},
        {keyCode: 18, code: 'AltRight', title: 'Alt', width: 1},
        {keyCode: 17, title: 'Ctrl', code: 'ControlRight', width: 1.7},
        {keyCode: 37, title: 'left', width: 1},
        {keyCode: 40, title: 'down', width: 1},
        {keyCode: 39, title: 'right', width: 1},
    ];
    caps_lock = false;
    keys_map = this.convertRowsToMap(this.row1, this.row2, this.row3, this.row4, this.row5);

    constructor(computer, container, language) {
        this.language = language || 'ru';
        this.computer = computer;
        this.draw(container);
        this.initialize();
    }


    initialize() {
        window.addEventListener('keydown', e => {
            try {
                const key = this.getKeyByEvent(e);
                key.button.classList.add('active');
                this.handleKeyDown(key, e.shiftKey);
            } catch (err) {
                console.log(err.message);
            }
        });
        window.addEventListener('keyup', e => {
            try {
                const key = this.getKeyByEvent(e);
                key.button.classList.remove('active');
                this.handleKeyUp(key, e.shiftKey)
            } catch (err) {
                console.log(err.message);
            }
        })
    }

    convertRowsToMap(...args) {
        const result = {};
        for (const row of args) {
            for (const key of row) {
                if (!result[key.keyCode]) {
                    result[key.keyCode] = key;
                } else {
                    result[key.keyCode].alterative = key;
                }
            }
        }
        return result;
    }


    draw(container) {
        const keyboard = document.createElement('div');
        keyboard.classList.add('keyboard');
        container.appendChild(keyboard);
        const keys_container = document.createElement('div');
        keys_container.classList.add('keys-container');
        keyboard.append(keys_container);
        this.fillRow(this.row1, keys_container);
        this.fillRow(this.row2, keys_container);
        this.fillRow(this.row3, keys_container);
        this.fillRow(this.row4, keys_container);
        this.fillRow(this.row5, keys_container);
    }

    fillRow(keys, container) {
        const row = document.createElement('div');
        row.classList.add('keys-row');
        container.append(row);
        this.fillKeys(row, keys);
    }

    fillKeys(row, keys) {
        for (const key of keys) {
            const button = document.createElement('button');
            button.classList.add('button');
            button.style.flexGrow = key.width;
            button.innerText = key[this.language] || key.value || key.title;
            if (button.innerText.trim() === '') {
                button.innerText = key.title || '';
            }
            row.appendChild(button);
            key.button = button;
            button.addEventListener('mousedown', e => {
                for (const i in this.keys_map) {
                    if (this.keys_map[i].button === e.target) {
                        return this.handleKeyDown(this.keys_map[i])
                    }
                    if (this.keys_map[i].alterative && this.keys_map[i].alterative.button === e.target) {
                        return this.handleKeyDown(key)
                    }
                }
            });
            button.addEventListener('mouseup', e => {
                for (let i in this.keys_map) {
                    if (this.keys_map[i].button === e.target) {
                        return this.handleKeyUp(this.keys_map[i])
                    }
                    if (this.keys_map[i].alterative && this.keys_map[i].alterative.button === e.target) {
                        return this.handleKeyUp(key)
                    }
                }
            })
        }
    }

    getKeyByEvent(e) {
        const key = this.keys_map[e.keyCode];
        if (!key.alterative) {
            return key;
        }
        const code = e.code;
        return key.alterative.code === code ? key.alterative : key;
    }


    handleKeyDown(key, shifted) {
        let value = key[this.language] || key.value;
        if (value) {
            this.computer.onAction('writeStart');
            if (this.caps_lock) {
                value = value.toUpperCase();
            }
            if (shifted) {
                if (key['shifted_' + this.language] || key['shifted']) {
                    value = key['shifted_' + this.language] || key['shifted'];
                }
                value = this.caps_lock ? value.toLowerCase() : value.toUpperCase();
            }
            return this.computer.onAction('write', value);
        }
        if (key.keyCode === 8) {
            return this.computer.onAction('backspace')
        }
        if (key.keyCode === 37) {
            return this.computer.onAction('caretLeft')
        }
        if (key.keyCode === 38) {
            return this.computer.onAction('caretUp')
        }
        if (key.keyCode === 39) {
            return this.computer.onAction('caretRight');
        }
        if (key.keyCode === 40) {
            return this.computer.onAction('caretDown');
        }
        if (key.keyCode === 46) {
            return this.computer.onAction('delete')
        }


    }

    handleKeyUp(key, shifted) {
        if (key.keyCode === 20) {
            this.caps_lock = !this.caps_lock;
            if (this.caps_lock) {
                key.button.classList.add('toggled')
            } else {
                key.button.classList.remove('toggled')

            }
            this.changeCaseView();
        }
        if (key.keyCode === 18 && shifted) {
            this.language = this.language === 'ru' ? 'en' : 'ru';
            this.changeKeyboardLanguageView();
            window.localStorage.setItem('lang', this.language);
        }
        return this.computer.onAction('writeEnd');
    }

    changeCaseView() {
        for (const keyCode in this.keys_map) {
            const key = this.keys_map[keyCode];
            if (key.ru || key.en) {
                key.button.innerText = this.caps_lock ? key.button.innerText.toUpperCase() : key.button.innerText.toLowerCase()
            }
        }
    }

    changeKeyboardLanguageView() {
        for (const keyCode in this.keys_map) {
            const key = this.keys_map[keyCode];
            if (key.ru || key.en) {
                key.button.innerText = key[this.language];
            }
        }
        this.changeCaseView();
    }
}

class Display {
    INPUT;
    CARET = 0;
    dash;
    computer;

    constructor(computer, container) {
        this.draw(container);
        this.computer = computer;
    }

    draw(computer) {
        const brand = document.createElement('label');
        brand.innerText = 'iSonic';
        brand.classList.add('brand');
        const display = document.createElement('div');
        display.classList.add('display');
        display.appendChild(brand);
        computer.appendChild(display);
        const input_wrapper = document.createElement('div');
        input_wrapper.classList.add('input-wrapper');
        display.appendChild(input_wrapper);

        const input = document.createElement("textarea");
        input.setAttribute('disabled', 'disabled');
        input_wrapper.appendChild(input);
        this.INPUT = input;
        const dash = document.createElement('span');
        dash.classList.add('dash');
        input_wrapper.appendChild(dash);
        this.dash = dash;
        this.updateVisualCaret();
    }

    moveCaretLeft() {
        this.CARET = this.CARET - 1 < 0 ? 0 : this.CARET - 1;
        this.updateVisualCaret();

    }

    moveCaretRight() {
        this.CARET = this.CARET + 1 > this.INPUT.value.length ? this.INPUT.value.length : this.CARET + 1;
        this.updateVisualCaret();

    }

    moveCaretUp() {
        let left_offset = 0;
        let prev_str_length = 0;
        let cursor = this.CARET - 1 < 0 ? 0 : this.CARET - 1;
        let symbol = this.INPUT.value[cursor];
        while (cursor !== 0 && symbol !== '\n') {
            cursor--;
            symbol = this.INPUT.value[cursor];
            left_offset++;
        }
        if (cursor === 0) {
            this.CARET = 0;
        } else {
            this.CARET = cursor;
            symbol = this.INPUT.value[this.CARET - 1];
            while (this.CARET !== 0 && symbol !== '\n') {
                this.moveCaretLeft();
                symbol = this.INPUT.value[this.CARET - 1];
                prev_str_length++;
            }
            for (let i = 0; i < Math.min(left_offset, prev_str_length); i++) {
                this.moveCaretRight();
            }
        }
        this.updateVisualCaret();
    }

    moveCaretDown() {
        let left_offset = 0;
        let cursor = this.CARET - 1;
        let next_str_length = 0;
        let symbol = this.INPUT.value[cursor];

        while (symbol !== '\n' && cursor >= 0) {
            left_offset++;
            cursor--;
            symbol = this.INPUT.value[cursor];
        }
        while (this.INPUT.value[this.CARET] !== '\n' && this.CARET < this.INPUT.value.length) {
            this.moveCaretRight();
        }
        this.moveCaretRight();
        cursor = this.CARET;
        while (this.INPUT.value[cursor] !== '\n' && cursor < this.INPUT.value.length) {
            next_str_length++;
            cursor++;
        }

        for (let i = 0; i < Math.min(left_offset, next_str_length); i++) {
            this.moveCaretRight();
        }
        this.updateVisualCaret();
    }

    write(symbol) {
        const new_value = this.INPUT.value.split('');
        new_value.splice(this.CARET, 0, symbol);
        this.INPUT.value = new_value.join('');
        this.moveCaretRight();
        this.updateVisualCaret();
        this.computer.onAction('save', this.INPUT.value);

    }

    updateVisualCaret() {
        setTimeout(() => {
            const coords = this.getCursorXY();
            if (coords) {
                this.dash.style.left = coords.x + 'px';
                this.dash.style.top = coords.y + 'px';
            }
        }, 0)
    }

    backspace() {
        if (this.CARET === 0) {
            return;
        }
        const current_value = this.INPUT.value.split('');
        current_value.splice(this.CARET - 1, 1);
        this.moveCaretLeft();
        this.INPUT.value = current_value.join('');
        this.updateVisualCaret();
        this.computer.onAction('save', this.INPUT.value);
    }

    delete() {
        const current_value = this.INPUT.value.split('');
        current_value.splice(this.CARET, 1);
        this.INPUT.value = current_value.join('');
        this.updateVisualCaret();
        this.computer.onAction('save', this.INPUT.value);
    }

    toggleCaret(value) {
        if (value) {
            this.dash.classList.add('active');
        } else {
            this.dash.classList.remove('active');
        }

    }

    getCursorXY() {
        const rect = this.INPUT.parentElement.getBoundingClientRect();
        const value = this.INPUT.value.substr(0, this.CARET);
        const div = document.createElement('div');
        div.classList.add('fake_textarea');
        div.style.position = 'fixed';
        div.style.top = rect.top + 'px';
        div.style.left = rect.left + 'px';
        div.style.width = rect.width + 'px';
        div.style.height = rect.height + 'px';
        div.style.background = 'transparent';
        div.style.zIndex = '42';

        let orientation = 'right';
        for (const symbol of value) {
            const span = document.createElement('span');
            span.innerText = symbol === ' ' ? '.' : symbol;
            div.appendChild(span)
        }
        if (value[value.length - 1] === '\n') {
            const span = document.createElement('span');
            span.innerText = '.';
            div.appendChild(span);
            orientation = 'left'
        }
        document.body.appendChild(div);
        const spans = div.getElementsByTagName('span');
        let span;
        if (spans.length > 0) {
            span = spans[spans.length - 1];
        } else {
            span = document.createElement('span');
            span.innerText = '.';
            div.appendChild(span);
            orientation = 'left'

        }
        const span_coords = span.getBoundingClientRect();
        this.INPUT.scrollTop = span.offsetTop - 10;
        div.parentElement.removeChild(div);
        return {x: span_coords[orientation] - rect.left, y: span_coords.top - rect.top - this.INPUT.scrollTop};
    }

}

class Computer {
    version = '1.0.0';

    constructor() {
        const init_lang = window.localStorage.getItem('lang') || 'ru';
        const container = this.draw();
        this.display = new Display(this, container);
        this.keyboard = new Keyboard(this, container, init_lang);
        this.turnOn();
    }

    turnOn() {
        const cache = window.localStorage.getItem('input');
        if (cache) {
            this.applyCache(cache);
        } else {
            this.greet();
        }
    }

    applyCache(cache) {
        const slitted = cache.split('');
        const interval = setInterval(() => {
            this.display.write(slitted[0]);
            slitted.shift();
            if (slitted.length === 0) {
                clearInterval(interval)
            }
        }, 0)
    }


    greet() {
        const greeting = `System online...\n`.split('');
        const interval = setInterval(() => {
            this.display.write(greeting[0]);
            greeting.shift();
            if (greeting.length === 0) {
                clearInterval(interval);
            }
        }, 50);
    }

    draw() {
        const wrap = document.body.appendChild(document.createElement('div'));
        wrap.classList.add('wrap');
        const computer = document.createElement('div');
        computer.classList.add('computer');
        wrap.appendChild(computer);
        return computer;
    }

    onAction(type, data) {
        switch (type) {
            case 'write':
                return this.display.write(data);
            case 'backspace':
                return this.display.backspace();
            case 'caretLeft':
                return this.display.moveCaretLeft();
            case 'caretRight':
                return this.display.moveCaretRight();
            case 'caretUp':
                return this.display.moveCaretUp();
            case 'caretDown':
                return this.display.moveCaretDown();
            case 'delete':
                return this.display.delete();
            case 'writeStart':
                return this.display.toggleCaret(true);
            case 'writeEnd':
                return this.display.toggleCaret(false);
            case 'save':
                return window.localStorage.setItem('input', data)
        }

    }
}

const computer = new Computer();
console.log(computer.version);
