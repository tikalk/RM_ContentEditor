# RM_ContentEditor
> Client app for Author content Editor

### Install

`npm i -g yarn` and `yarn install` and `yarn start`


### Comunication thru iframe

to post message to the iframe:

```js
const message = JSON.stringify({
    setContent: {
        title: 'this is my title',
        description: '### markdown syntax',
        stages: [
            { url: 'http://url1.com', mission: 'mission description' },
            { url: 'http://url2.com', mission: 'mission description' }
        ],
        environment: 'Node',
        environments:  ['Node', 'JavaScript', 'Docker', 'Java'],
        edit: true
    }
});
```

to intercept message from iframe:

```js
window.addEventListener('message', function({ data }){
    if(data) {
        const { onSave } = JSON.parse(event.data);

        console.log(`Message to save from iFrame ${onSave}`);
    }

}, false);
```