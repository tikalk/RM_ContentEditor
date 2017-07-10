import myStore from './store';

const initPubSub = () => {
    //respond to events
  window.addEventListener('message', function({ data }){
  	console.log(`Message received ${data}`);

    const { setContent } = JSON.parse(data);

    setContent && myStore.setItem(setContent);
  }, false);
};

const onSave = (payload) => {
    const message = JSON.stringify({
        onSave: payload
    });

  window.parent.postMessage(message, '*');
};

export { initPubSub, onSave };