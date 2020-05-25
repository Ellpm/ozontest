import { Component, Prop, Vue } from 'vue-property-decorator';
import { VueComponent } from '../shims-vue';

import styles from './Calc.css?module'

interface Props {
}

@Component
export default class Calc extends VueComponent<Props> {

  @Prop()

  render() {
    return (
      <div class={styles.calc}>
        <div class={styles.display}>
          <div class={styles.buffer}>buffer</div>
          <div class={styles.result}>result</div>
        </div>
        <div class={styles.btns}>
          <div class={styles.numbers}>
            <div class={styles.btn}>7</div>
            <div class={styles.btn}>8</div>
            <div class={styles.btn}>9</div>
            <div class={styles.btn}>4</div>
            <div class={styles.btn}>5</div>
            <div class={styles.btn}>6</div>
            <div class={styles.btn}>1</div>
            <div class={styles.btn}>2</div>
            <div class={styles.btn}>3</div>
            <div class={styles.zero}>0</div>
          </div>
          <div class={styles.operators}>
            <div class={styles.operator}>C</div>
            <div class={styles.operator}>-</div>
            <div class={styles.operator}>+</div>
            <div class={styles.operator}>=</div>
          </div>
        </div>
      </div>
    );
  }
}
