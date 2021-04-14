import CryptoJS from 'crypto-js'

const JsonFormatter = {
  stringify: (cipherParams) => {
    const jsonObj = { ct: cipherParams.ciphertext.toString(CryptoJS.enc.Base64) }
    if (cipherParams.iv) jsonObj.iv = cipherParams.iv.toString();
    if (cipherParams.salt) jsonObj.s = cipherParams.salt.toString();
    return JSON.stringify(jsonObj);
  },
  parse: (jsonStr) => {
    const jsonObj = JSON.parse(jsonStr);

    const cipherParams = CryptoJS.lib.CipherParams.create({
      ciphertext: CryptoJS.enc.Base64.parse(jsonObj.ct)
    });
    if (jsonObj.iv) cipherParams.iv = CryptoJS.enc.Hex.parse(jsonObj.iv);
    if (jsonObj.s) cipherParams.salt = CryptoJS.enc.Hex.parse(jsonObj.s);
    return cipherParams;
  }
};

export const parseBase64 = (content) => {
  try {
    return JSON.parse(atob(content.split('.')[1]));
  } catch (e) {
    return null;
  }
};

export const encryptMessage = (tkn, message) => JSON.parse(CryptoJS.AES.encrypt(message, tkn.iss, {
  format: JsonFormatter
}).toString());

export const decryptMessage = (tkn, encryptedObject) => CryptoJS.AES.decrypt(encryptedObject, tkn.iss, {
  format: JsonFormatter
}).toString(CryptoJS.enc.Utf8);
