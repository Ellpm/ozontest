import { Component, Prop, Vue } from "vue-property-decorator";
import { VueComponent } from "../../shims-vue";

import styles from "./Display.css?module";

interface Props {}

@Component
export default class Display extends VueComponent<Props> {
  private buffer: string = "";
  private result: number = 0;

  addSymbol(symbol: number | string): void {
    this.buffer = this.buffer + symbol.toString();
  }
  clear(): void {
    this.buffer = "";
    this.result = 0;
  }
  equal(): void {
    if (this.buffer.slice(-1) !== '+' && '-') {
      console.log(typeof this.buffer.slice(-1));
      this.result = eval(this.buffer);
    }
  }

  @Prop()
  render() {
    return (
      <div class={styles.display}>
        <div class={styles.buffer}>{this.buffer}</div>
        <div class={styles.result}>{this.result}</div>
      </div>
    ); }}