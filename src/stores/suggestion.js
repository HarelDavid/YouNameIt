import { observable } from 'mobx';


class SuggestionStore {
  @observable Suggestions = [];

  constructor() {}

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}

export default new SuggestionStore();