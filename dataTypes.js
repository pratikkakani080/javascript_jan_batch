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
        console.log(longSentence.repeat(5));
        console.log(longSentence.replace(/l/ig, 'P'));
        console.log(longSentence.replaceAll(/l/ig, 'P'));
        console.log(longSentence.split(''));
        console.log(longSentence.indexOf('i'));
        console.log(longSentence.lastIndexOf('i'));
        console.log(longSentence.match('i'));
        console.log(longSentence.includes('z'));
        console.log(longSentence.startsWith(' '));
        console.log(longSentence.endsWith('g'));
        console.log(longSentence);

        const numStr = String('5')
        const num = 55
        console.log(+numStr + num);
        console.log(Number(numStr) + num);
        console.log(typeof String(undefined));
        
        
    // Number
        0-9
        // int = 242432243424274823472984723984723
        const fltNum = 33.5534435345
        const num1 = 9007199254740992  // +2^53 to -2^53
        // console.log(num1 + 7);
        console.log(String(44));
        console.log(num1.toString());
        console.log(num1.toExponential());
        console.log(fltNum.toFixed(2));
        console.log(Math.cbrt(64));
        console.log(Math.max(64, 55, 3, 100, 67, 30));
        console.log(Math.min(64, 55, 3, 100, 67, 30));
        console.log(Math.floor(50.43));
        console.log(Math.ceil(50.43));
        console.log(Math.pow(6, 7));
        

    // Boolean
        true | false
        console.log(String(true));
        console.log(Number(true));


    // undefined
        let a // undefined variable
    
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