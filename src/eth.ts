import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';
import { AbiItem } from 'web3-utils';

import BudsContract from './contracts/Buds.json';
import { StackingBuds } from './types/Buds';

export const contractAddress = '0xbe44b56bf60b5ee6141345c2b1380bea2915d991'

export class Eth {
  web3: Web3;
  contract: Contract;
  wallet: string | null;

  constructor() {
    this.web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
    this.contract = new this.web3.eth.Contract(BudsContract as AbiItem[], contractAddress);

    this.wallet = this.web3.eth.defaultAccount;
    // this.web3.eth.requestAccounts()
  }

  baseUri(): Promise<string> {
    return this.contract.methods.baseURI().call();
  }

  totalSupply(): Promise<number> {
    return this.contract.methods.totalSupply().call().then((n: string) => parseInt(n));
  }

  supplyForSale(): Promise<number> {
    return this.contract.methods.supplyForSale().call().then((n: string) => parseInt(n));
  }

  walletOfOwner(): Promise<StackingBuds[]> {
    return this.web3.eth.requestAccounts()
    .then(async (wallets: string[]) => {
      const [wallet] = wallets;
      this.wallet = wallet;
      const items = await  this.contract.methods.walletOfOwner(this.wallet).call()

      const cleanItems = (items || []).map((item: any) => {
        const [id, data] = item;
        return {
          id: parseInt(id),
          currentStakeTimestamp: parseInt(data.currentStakeTimestamp),
          totalStakeTimeAccrued: parseInt(data.totalStakeTimeAccrued),
        }
      });

      return Promise.resolve(cleanItems);

    })
    .catch(console.error);
    // return this.contract.methods.walletOfOwner(address).call().then((ids: string[]) => ids.map((id) => parseInt(id)));

    return Promise.resolve([])
  }

  getStackingBud(id: number): Promise<StackingBuds> {
    return this.contract.methods.tokenStakeDetails(id).call().then((bud: any) => {
      const data = bud;
      return {
        id,
        currentStakeTimestamp: parseInt(data.currentStakeTimestamp),
        totalStakeTimeAccrued: parseInt(data.totalStakeTimeAccrued),
      };
    });
  }

  // Staking
  stackingStart(): Promise<any> {
    return this.contract.methods.stakingStartTimestamp().call();
  }

  isStaked(id: number): Promise<boolean> {
    return this.contract.methods.isStaked(id).call().then((b: string) => b === 'true');
  }

  stack(ids: number[]): Promise<any> {
    console.log("stacking", ids);
    return this.contract.methods.stake(ids).send({ from: this.wallet });
  }

  unstack(ids: number[]): Promise<void> {
    return this.contract.methods.unstack(ids).send({ from: this.wallet });
  }
}

export const eth = new Eth();

export default eth;
