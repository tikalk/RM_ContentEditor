import { action, observable } from "mobx";
import { onSave } from './iframePubSub';

class Store {
    @observable title = '';
    @observable description = '';
    @observable stages = [];
    @observable environment = '';
    @observable environments = ['Node', 'JavaScript', 'Docker', 'Java'];
    @observable edit = false;
    @observable tab = 'description';

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

    @action setTab = tab => {
        this.tab = tab
    };

    toJson() {
        return JSON.stringify(this, null, 2);
    }

    save() {
        onSave(this);
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