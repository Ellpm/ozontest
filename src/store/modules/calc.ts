import { Getter, Mutation, State } from "vuex-simple";

export class Calc {
         @State() public buffer: string;
         @State() public result: number;

         constructor(buf: string = "", res: number = 0) {
           this.buffer = buf;
           this.result = res;
         }

         @Mutation()
         public addSymbol(symbol: number | string) {
           this.buffer = this.buffer + symbol.toString();
         }
         @Mutation()
         public clear(): void {
           this.buffer = "";
           this.result = 0;
         }
         @Mutation()
         public equal(): void {
           if (this.buffer.slice(-1) !== "+" && "-") {
             this.result = eval(this.buffer);
           }
         }

         public async asyncIncrement() {
           await new Promise((r) => setTimeout(r, 200));
           // call mutation function like you would any other function
           // this.increment();
         }
       }
