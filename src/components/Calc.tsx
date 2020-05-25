import { Component, Prop, Vue } from "vue-property-decorator";
import { VueComponent } from "../shims-vue";
import Display from "./Display/Display";
import NumberBtn from "./NumberBtn/NumberBtn";
import { useStore } from "vuex-simple";
import { MyStore } from "../store/store";

import styles from "./Calc.css?module";

interface Props {}

@Component
export default class Calc extends VueComponent<Props> {
  private buttons: Array<number> = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
  public store: MyStore = useStore(this.$store);

  @Prop()
  render() {
    return (
      <div class={styles.calc}>
        <Display />
        <div class={styles.btns}>
          <div class={styles.numbers}>
            {this.buttons.map((value) => (
              <NumberBtn value={value} />
            ))}
          </div>
          <div class={styles.operators}>
            <div
              onClick={() => {
                this.store.calc.clear();
              }}
              class={styles.operator}
            >
              C
            </div>
            <NumberBtn value="-" />
            <NumberBtn value="+" />
            <div
              onClick={() => {
                this.store.calc.equal();
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
