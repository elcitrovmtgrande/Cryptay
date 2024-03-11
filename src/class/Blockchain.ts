export class Blockchain {
  public async getBalance(address: string): Promise<any> {
    return fetch(`https://blockchain.info/rawaddr/${address}`).then((res) =>
      res.json()
    );
  }
}

export default new Blockchain();
