export class Hero {
  // id: number;
  // name: string;
  // state: string = 'inactive';
  constructor(public id: number,
    public name: string,
    public state = 'inactive') {
  }
  toggleState() {
    this.state = (this.state === 'active' ? 'inactive' : 'active');
  }
}
