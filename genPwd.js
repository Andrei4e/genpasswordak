let arrEn = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let arrEN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let arrSymb = ['!', '@', '#', '$', '%', '&', '?', '-', '+', '=', '~'];

/**
 * Метод генерации паролья по умолчанию (Длинна от 8 до 16 символов, строчные и заглавные буквы, цыфры, спецю символы)
 * @returns {string} Сгенерированный пароль
 */
function genPwdDefault() {
    const pwdLength = parseInt(Math.random() * (16 - 8) + 8);
    let pwd = "";

    for (let i = 0; i < pwdLength; i++) {
        const typeSymb = parseInt(Math.random() * 4);
        switch (typeSymb) {
            case 0:
                pwd += arrEn[parseInt(Math.random() * arrEn.length)];
                break;
            case 1:
                pwd += arrEN[parseInt(Math.random() * arrEN.length)];
                break;
            case 2:
                pwd += arrNum[parseInt(Math.random() * arrNum.length)];
                break;
            case 3:
                pwd += arrSymb[parseInt(Math.random() * arrSymb.length)];
                break;
            default:
                break;
        }
    }
    return pwd;
}

/**
 * Метод генерации пароля
 * @param {number} pwdLength Длинна пароля
 * @param {boolean} isNumber Флаг наличия цыфр
 * @param {boolean} isSymbol Флаг наличия спец. символов
 * @returns {string} Сгенерированный пароль
 */
function genPwd(pwdLength, isNumber, isSymbol) {
    let pwd = "";

    for (let i = 0; i < pwdLength; i++) {
        
        if (isNumber && isSymbol) {
            for (let i = 0; i < pwdLength; i++) {
                const typeSymb = parseInt(Math.random() * 4);
                switch (typeSymb) {
                    case 0:
                        pwd += arrEn[parseInt(Math.random() * arrEn.length)];
                        break;
                    case 1:
                        pwd += arrEN[parseInt(Math.random() * arrEN.length)];
                        break;
                    case 2:
                        pwd += arrNum[parseInt(Math.random() * arrNum.length)];
                        break;
                    case 3:
                        pwd += arrSymb[parseInt(Math.random() * arrSymb.length)];
                        break;
                    default:
                        break;
                }
            }
            return pwd;
        } else if (isNumber) {
            for (let i = 0; i < pwdLength; i++) {
                const typeSymb = parseInt(Math.random() * 3);
                switch (typeSymb) {
                    case 0:
                        pwd += arrEn[parseInt(Math.random() * arrEn.length)];
                        break;
                    case 1:
                        pwd += arrEN[parseInt(Math.random() * arrEN.length)];
                        break;
                    case 2:
                        pwd += arrNum[parseInt(Math.random() * arrNum.length)];
                        break;
                    default:
                        break;
                }
            }
            return pwd;
        } else if (isSymbol) {
            for (let i = 0; i < pwdLength; i++) {
                const typeSymb = parseInt(Math.random() * 3);
                switch (typeSymb) {
                    case 0:
                        pwd += arrEn[parseInt(Math.random() * arrEn.length)];
                        break;
                    case 1:
                        pwd += arrEN[parseInt(Math.random() * arrEN.length)];
                        break;
                    case 2:
                        pwd += arrSymb[parseInt(Math.random() * arrSymb.length)];
                        break;
                    default:
                        break;
                }
            }
            return pwd;
        } else {
            for (let i = 0; i < pwdLength; i++) {
                const typeSymb = parseInt(Math.random() * 2);
                switch (typeSymb) {
                    case 0:
                        pwd += arrEn[parseInt(Math.random() * arrEn.length)];
                        break;
                    case 1:
                        pwd += arrEN[parseInt(Math.random() * arrEN.length)];
                        break;
                    default:
                        break;
                }
            }
            return pwd;
        }
    }
    return pwd;
}

module.exports = {genPwdDefault, genPwd};