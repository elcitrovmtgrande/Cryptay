import { Wallet } from "../class";

describe("Wallet", () => {
  describe("seedphrase", () => {
    const validSeedPhrase = Wallet.generateSeedWords();

    it("should be a string instance", () => {
      expect(typeof validSeedPhrase).toBe("string");
    });

    it("should be valid", () => {
      expect(Wallet.verifySeedPhrase(validSeedPhrase)).toBe(true);
    });
  });
});
