// Primitive
    // String
        '', "", ``
        const longSentence = '    Limdi game gadi mali    '
        console.log(longSentence.length);
        console.log(longSentence.charAt(5));
        console.log(longSentence.charCodeAt(5));
        console.log(longSentence.codePointAt(5));
        console.log(longSentence.concat(' ', 'and', ' ', 'accident thayu'));
        console.log(longSentence.at(6));
        console.log(longSentence[6]);
        console.log(longSentence.slice(5, 16));
        console.log(longSentence.slice(-10, -5));
        console.log(longSentence.substring(5, 16));
        console.log(longSentence.substring(-10, -5));
        console.log(longSentence.toLowerCase());
        console.log(longSentence.toUpperCase());
        console.log(longSentence.trim());
        console.log(longSentence.trimStart());
        console.log(longSentence.trimEnd());
        console.log(longSentence.padStart(35, 'g'));
        console.log(longSentence.padEnd(35, 'n'));
        console.log(longSentence);
        
        
    // Number
        0-9
        // int = 242432243424274823472984723984723
        // float = 33.55
        const num1 = 9007199254740992
        // console.log(num1 + 7);
    // Boolean
        true | false
    // undefined
        let a = undefined
    // null
        let aa = null
    // BigInt
        const bigIntNum = 9007199254740992n
        // console.log(bigIntNum + 7n);
    // Symbol
        // console.log(Symbol() === Symbol())

  // typeof - used to check types

// Non-Premitive / Complex
    // Object
        // { key: value }
        const laptop = {
            modal: 'g50',
            storage: '250gb',
            isBackLit: true,
            price: 30000
        }
    // Array
        // [1 , 5, 7,7 ,8, 4, 6,3]
        // ['werwer', 'sdfs', 'fgfgdf']
        // [true, false]
        // [{}, {}, {}]
        // [3, [4, 6], 55 ]
    // Function