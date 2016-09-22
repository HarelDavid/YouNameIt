import { observable } from 'mobx';


class UserStore {
    @observable User = [];

    constructor() {}

    increment() {
        this.count++;
    }

    decrement() {
        this.count--;
    }
}

export default new UserStore();