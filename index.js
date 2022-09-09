import {
    createReadStream,
    createWriteStream,
  } from '';
  
  import {
    operation
  } from '';
  
  const {
    sender,
    receiver,
    amount,
    bytesignature
  } = await import('');
  
  const algorithm = 'aes-192-cbc';
  const password = 'Password used to generate key';
  
  // First, we'll generate the key. The key length is dependent on the algorithm.
  
  scrypt(password, 'salt', 24, (err, key) => {
    if (err) throw err;
    // Then, we'll generate a random initialization vector
    randomFill(new Uint8Array(16), (err, iv) => {
      if (err) throw err;
  
      const cipher = createCipheriv(algorithm, key, iv);
  
      const input = createReadStream('test.js');
      const output = createWriteStream('test.enc');
  
      pipeline(input, cipher, output, (err) => {
        if (err) throw err;
      });
    });
  });

//function to generate keys so as transaction can proceed
  const { webcrypto, KeyObject } = await import('node:crypto');
const { subtle } = webcrypto;

const key = await subtle.generateKey({
  name: 'HMAC',
  hash: 'SHA-256',
  length: 256
}, true, ['sign', 'verify']);

const keyObject = KeyObject.from(key);
console.log(keyObject.symmetricKeySize);

//function to verify and complete transactions
const {
    generateKeyPairSync,
    createSign,
    createVerify
  } = await import('node:crypto');
  
  const { privateKey, publicKey } = generateKeyPairSync('ec', {
    namedCurve: 'sect239k1'
  });
  
  const sign = createSign('SHA256');
  sign.write('some data to sign');
  sign.end();
  const signature = sign.sign(privateKey, 'hex');
  
  const verify = createVerify('SHA256');
  verify.write('some data to sign');
  verify.end();
  console.log(verify.verify(publicKey, signature, 'hex'));
  // Prints: true