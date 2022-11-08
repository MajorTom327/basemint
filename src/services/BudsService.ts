import eth from "../eth";
import Buds from "../types/Buds";

export class BudsService {
  baseUri: string = '';


  constructor() {
    eth.baseUri().then((uri: string) => {
      this.baseUri = uri;
    })
  }

  getBudInfo(id: number): Promise<Buds> {
    return fetch(`${this.baseUri}/${id}`)
      .then((res) => res.json())
      .then((bud: any) => new Buds(bud));
  }
}

export const budsService = new BudsService();
export default budsService;
