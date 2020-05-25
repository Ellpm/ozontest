import { Mutation, State } from "vuex-simple";

export class Calc {
  @State() public buffer: string;
  @State() public result: string;
  @State() public operatorToggle: boolean;

  constructor(buf: string = "", res: string = "0", opTgl: boolean = false) {
    this.buffer = buf;
    this.result = res;
    this.operatorToggle = opTgl;
  }

  @Mutation()
  public addSymbol(symbol: number | string) {    
    if (
      (this.operatorToggle && symbol === "+") ||
      (this.operatorToggle && symbol === "-")
    ) {
      this.buffer =
        this.buffer.slice(0, this.buffer.length - 1) + symbol.toString();
      this.operatorToggle = true;
    } else {
      this.buffer = this.buffer + symbol.toString();
      if (symbol === "+" || symbol === "-") {
        this.operatorToggle = true;
      } else {
        this.operatorToggle = false;
      }
    }
  }
  @Mutation()
  public clear(): void {
    this.buffer = "";
    this.result = "0";
  }
  @Mutation()
  public async equal() {
    if (!this.operatorToggle) {
      await new Promise((res) =>
        setTimeout(() => {
          this.result = `= ${eval(this.buffer)}`;
          this.buffer = '';
        }, 2000)
      );
    }
  }
}
