import { Component, Prop, Vue } from "vue-property-decorator";
import { VueComponent } from "../shims-vue";

import styles from "./Calc.css?module";

interface Props {}

@Component
export default class Calc extends VueComponent<Props> {
  private buffer: string = "";
  private result: number = 0;

  addSymbol(symbol: number | string): void {
    this.buffer = this.buffer + symbol.toString();
    console.log(this.buffer);
  }
  clear(): void {
    this.buffer = "";
    this.result = 0;
  }
  equal(): void {
    this.result = eval(this.buffer)
  }

  @Prop()
  render() {
    return (
      <div class={styles.calc}>
        <div class={styles.display}>
          <div class={styles.buffer}>{this.buffer}</div>
          <div class={styles.result}>{this.result}</div>
        </div>
        <div class={styles.btns}>
          <div class={styles.numbers}>
            <div
              onClick={() => {
                this.addSymbol(7);
              }}
              class={styles.btn}
            >
              7
            </div>
            <div
              onClick={() => {
                this.addSymbol(8);
              }}
              class={styles.btn}
            >
              8
            </div>
            <div
              onClick={() => {
                this.addSymbol(9);
              }}
              class={styles.btn}
            >
              9
            </div>
            <div
              onClick={() => {
                this.addSymbol(4);
              }}
              class={styles.btn}
            >
              4
            </div>
            <div
              onClick={() => {
                this.addSymbol(5);
              }}
              class={styles.btn}
            >
              5
            </div>
            <div
              onClick={() => {
                this.addSymbol(6);
              }}
              class={styles.btn}
            >
              6
            </div>
            <div
              onClick={() => {
                this.addSymbol(1);
              }}
              class={styles.btn}
            >
              1
            </div>
            <div
              onClick={() => {
                this.addSymbol(2);
              }}
              class={styles.btn}
            >
              2
            </div>
            <div
              onClick={() => {
                this.addSymbol(3);
              }}
              class={styles.btn}
            >
              3
            </div>
            <div
              onClick={() => {
                this.addSymbol(0);
              }}
              class={styles.zero}
            >
              0
            </div>
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
