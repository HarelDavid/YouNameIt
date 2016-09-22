let dalInstance = null;

class Dal{
    constructor() {
        if(!dalInstance){
            dalInstance = this;
        }

        // to test whether we have singleton or not
        this.time = new Date()



        return dalInstance;
    }
}