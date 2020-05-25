import { Component, Prop, Vue } from "vue-property-decorator";
import { VueComponent } from "../../shims-vue";
import { useStore } from "vuex-simple";
import { MyStore } from "../../store/store";
import styles from "./Display.css?module";

interface Props {}

@Component
export default class Display extends VueComponent<Props> {
  public store: MyStore = useStore(this.$store);

  @Prop()
  render() {
    return (
      <div class={styles.display}>
        <div class={styles.buffer}>{this.store.calc.buffer}</div>
        <div class={styles.result}>{this.store.calc.result}</div>
      </div>
    );
  }
}