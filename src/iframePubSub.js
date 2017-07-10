import myStore from './store';

const initPubSub = () => {
    //respond to events
  window.addEventListener('message', function(event){
  	console.log('message received:  ' + event.data,event);
    const { setContent } = JSON.parse(event.data);
    if(setContent){
      //set store to edit
        myStore.setItem(setContent);
        event.source.postMessage('EVENT FIRED! @content editor, setContent fired: ' + event.origin,event.origin);
    }
  }, false);
};

const onSave = (payload) => {
    const o = {
        onSave: payload
    };

  window.parent.postMessage(JSON.stringify(o), '*');
};

export { initPubSub, onSave };