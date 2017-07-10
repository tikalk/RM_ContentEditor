import { action, computed, observable } from "mobx";

class Store {
    @observable title;
    @observable description;
    @observable stages = [];
    @observable enviorment;

    @action setItem = ({
       title = this.title,
       description = this.description,
       enviorment = this.enviorment
   }) => {
        this.title = title;
        this.description = description;
        this.enviorment = enviorment;
    };

    @action addStage = (stage = new Stage()) => {
      this.stages.push(stage);
    };
}

class Stage {
    @observable url;
    @observable mission;

    constructor({ url = '', mission = ''}) {
        this.url = url;
        this.mission = mission;
    }
}

export default new Store();