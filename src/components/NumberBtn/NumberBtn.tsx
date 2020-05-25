import { Component, Prop, Vue } from "vue-property-decorator";
import { VueComponent } from "../../shims-vue";

import styles from "./NumberBtn.css?module";

interface Props {
  value: Number;
}

@Component
export default class NumberBtn extends VueComponent<Props> {
  private buffer: string = "";
  private result: number = 0;

  addSymbol(symbol: number | string): void {
    this.buffer = this.buffer + symbol.toString();
  }
 

  @Prop() private value!: Number;
  render() {
    return (
    <div onClick={()=>{console.log(this.value);
    }}>{this.value}</div>
    )}}