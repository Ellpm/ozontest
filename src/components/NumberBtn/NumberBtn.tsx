import { Component, Prop, Vue } from "vue-property-decorator";
import { VueComponent } from "../../shims-vue";
import { useStore } from "vuex-simple";
import { MyStore } from "../../store/store";

import styles from "./NumberBtn.css?module";

interface Props {
  value: number | string;
}

@Component
export default class NumberBtn extends VueComponent<Props> {
  public store: MyStore = useStore(this.$store);

  @Prop() private value!: number;
  render() {
    return (
      <div
        onClick={() => {
          this.store.calc.addSymbol(this.value);
        }}
      >
        {this.value}
      </div>
    );
  }
}
