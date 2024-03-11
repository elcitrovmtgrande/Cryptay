import { Wallet } from "./src/class";
import Blockchain from "./src/class/Blockchain";

(async () => {
  const wallet = new Wallet();
  console.log("address:", wallet.getAddress());
  console.log("seedPhrase:", Wallet.generateSeedWords());
  const balance = await wallet.getBalance();
  console.log("balance:", balance);
  );
})();
