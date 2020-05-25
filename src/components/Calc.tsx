import { Component, Prop, Vue } from "vue-property-decorator";
import { VueComponent } from "../shims-vue";
import Display from "./Display/Display";
import NumberBtn from './NumberBtn/NumberBtn'

import styles from "./Calc.css?module";

interface Props {
}

@Component
export default class Calc extends VueComponent<Props> {
  private buffer: string = "";
  private result: number = 0;
  private buttons: Array<number> = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
  private operators: Array<string> = ['C', '-', '+','=']

  addSymbol(symbol: number | string): void {
    this.buffer = this.buffer + symbol.toString();
  }
  clear(): void {
    this.buffer = "";
    this.result = 0;
  }
  equal(): void {
    if (this.buffer.slice(-1) !== "+" && "-") {
      this.result = eval(this.buffer);
    }
  }

  @Prop() 
  render() {
    return (
      <div class={styles.calc}>
        <Display />
        <div class={styles.btns}>
          <div class={styles.numbers}>
            {this.buttons.map((value) => (
              <NumberBtn value={value}/>
            ))}            
          </div>
          <div class={styles.operators}>
            <div
              onClick={() => {
                this.clear();
              }}
              class={styles.operator}
            >
              C
            </div>
            <div
              onClick={() => {
                this.addSymbol("-");
              }}
              class={styles.operator}
            >
              -
            </div>
            <div
              onClick={() => {
                this.addSymbol("+");
              }}
              class={styles.operator}
            >
              +
            </div>
            <div
              onClick={() => {
                this.equal();
              }}
              class={styles.operator}
            >
              =
            </div>
          </div>
        </div>
      </div>
    );
  }
}
