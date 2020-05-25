import { Module, State } from "vuex-simple";
import { Calc } from "./modules/calc";

export class MyStore {
  @Module()
  public bar = new Calc();

  @State()
  public version = "2.0.0";
}
