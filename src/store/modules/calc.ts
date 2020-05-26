import { Mutation, State } from "vuex-simple";

export class Calc {
  @State() public buffer: string;
  @State() public result: string;
  @State() public operatorToggle: boolean;
  @State() public isFetching: boolean;

  constructor(
    buf: string = "",
    res: string = "0",
    opTgl: boolean = false,
    isF: boolean = false
  ) {
    this.buffer = buf;
    this.result = res;
    this.operatorToggle = opTgl;
    this.isFetching = isF;
  }

  @Mutation()
  public addSymbol(symbol: number | string) {
    if (!this.isFetching) {
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
  }

  @Mutation()
  public clear(): void {
    if (!this.isFetching) {
      this.buffer = "";
      this.result = "0";
    }
  }
  @Mutation()
  public async equal() {
    if (!this.isFetching) {
      this.isFetching = true;
      if (!this.operatorToggle) {
        await new Promise((res) =>
          setTimeout(() => {
            this.result = `= ${eval(this.buffer)}`;
            this.buffer = "";
            this.isFetching = false;
          }, 2000)
        );
      }
    }
  }
}
