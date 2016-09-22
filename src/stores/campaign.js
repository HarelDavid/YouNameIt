import { observable } from 'mobx';


class SuggestionStore {
    @observable Suggestions = 0;

    constructor() {


    }

    increment() {
        this.count++;
    }

    decrement() {
        this.count--;
    }
}

export default new SuggestionStore();