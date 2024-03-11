import * as bip39 from "bip39";
import BIP32Factory from "bip32";
import ECPairFactory, { ECPairAPI, ECPairInterface } from "ecpair";
import * as ecc from "tiny-secp256k1";
import * as bitcoin from "bitcoinjs-lib";
import Blockchain from "./Blockchain";

export class Wallet {
  private _seed: Buffer;
  private _root: any;
  private _account: any;
  private _BIP32: any = BIP32Factory(ecc);
  private _ECPair: ECPairAPI = ECPairFactory(ecc);
  private _keyPair: ECPairInterface = this._ECPair.makeRandom();

  constructor(seedPhrase?: string) {
    this._seed = seedPhrase
      ? bip39.mnemonicToSeedSync(seedPhrase)
      : bip39.mnemonicToSeedSync(bip39.generateMnemonic());
    this._root = this._BIP32.fromSeed(this._seed);
    this._account = this._root.derivePath("m/44'/0'/0'/0/0");
    this._keyPair = this._ECPair.fromPrivateKey(this._account.privateKey);
  }

  public static generateSeedWords(): string {
    return bip39.generateMnemonic();
  }

  public static verifySeedPhrase(seedPhrase: string): boolean {
    return bip39.validateMnemonic(seedPhrase);
  }

  public getKeyPair(): ECPairInterface {
    return this._keyPair;
  }

  public getAddress(): string {
    const { address } = bitcoin.payments.p2pkh({
      pubkey: this._keyPair.publicKey,
    });
    return address || "";
  }

  public getExtendedPublicKey(): string {
    return this._root.neutered().toBase58();
  }

  public getSeed(): string {
    return this._seed.toString("hex");
  }

  public getPrivateKey(): string {
    return this._keyPair.privateKey?.toString("hex") || "";
  }

  public async getBalance(): Promise<any> {
    return Blockchain.getBalance(this.getAddress() as string);
  }
}

export default Wallet;
