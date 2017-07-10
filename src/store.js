import { action, observable } from "mobx";

class Store {
    @observable title = '';
    @observable description = '';
    @observable stages = [];
    @observable environment = '';
    @observable environments = ['Node', 'JavaScript', 'Docker', 'Java'];
    @observable edit = true;

    @action setItem = ({
       title = this.title,
       description = this.description,
       environment = this.environment,
       environments = this.environments,
       stages = this.stages
   } = {}) => {
        this.title = title;
        this.description = description;
        this.environment = environment;
        this.environments = environments;
        this.stages = stages;
    };

    @action addStage = (stage = new Stage()) => {
        this.stages.push(stage);
    };

    @action removeStage = (stage) => {
        this.stages.remove(stage);
    };

    @action setEdit = (edit = this.edit) => this.edit = edit;

    toJson() {
        return JSON.stringify(this, null, 2);
    }

    save() {
        // dispach(this);
    }
}

class Stage {
    @observable url;
    @observable mission;

    constructor({ url = '', mission = '' } = {}) {
        this.url = url;
        this.mission = mission;
    }

    @action setItem = ({ url = this.url, mission = this.mission } = {}) => {
        this.url = url;
        this.mission = mission;
    }
}

export default new Store();