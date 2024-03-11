import WebSocket, { WebSocketServer } from "ws";

import { Wallet } from "./src/class";
// import Blockchain from "./src/class/Blockchain";

(async () => {
  const wallet = new Wallet();
  console.log("address:", wallet.getAddress());
  console.log("extendedPublicKey:", wallet.getExtendedPublicKey());
  console.log("privatekey:", wallet.getPrivateKey());
  console.log("seedPhrase:", Wallet.generateSeedWords());
  // const balance = await wallet.getBalance();
  // console.log("balance:", balance);
  // Remplacer par l'URL du WebSocket que vous souhaitez écouter
  // const ws = new WebSocket("wss://ws.blockchain.info/inv");
  // ws.on("open", function open() {
  //   console.log("subscription triggered");
  //   // S'abonner aux nouveaux blocs, par exemple
  //   ws.send(JSON.stringify({ op: "blocks_sub" }));
  // });
  // ws.on("ping", function incoming(data) {
  //   console.log("Événement reçu:", data);
  // });
  // ws.on("message", function incoming(data) {
  //   console.log("Événement reçu:", data);
  // });
  // ws.on("error", function error(error) {
  //   console.error("Erreur WebSocket:", error);
  // });
  // ws.ping();
  // // tell nodejs no to close the process
  // process.stdin.resume();
})();
