import ECPairFactory from "ecpair";
import * as ecc from "tiny-secp256k1";
import bitcoin from "bitcoinjs-lib";

(async () => {
  const ECPair = ECPairFactory(ecc);
  const keyPair = ECPair.makeRandom();
  const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey });
})();
