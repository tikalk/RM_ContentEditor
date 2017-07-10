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
    @observable resources = [];
    @observable mission = '';
    @observable tab = 'description';

    constructor({ resources = this.resources, mission = this.mission } = {}) {
        this.resources = resources;
        this.mission = mission;
    }

    @action setItem = ({ mission = this.mission } = {}) => {
        this.mission = mission;
    };

    @action addResource = (url = new Url()) => {
        this.resources.push(url);
    };

    @action removeResource = (url) => {
        this.resources.remove(url);
    };

    @action setTab = tab => {
        this.tab = tab
    };
}

class Url {
    @observable url = '';

    constructor({ url = this.url } = {}) {
        this.url = url;
    }

    @action setItem = ({ url = this.url } = {}) => {
        this.url = url;
    };
}

export default new Store();