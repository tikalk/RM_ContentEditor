const myStore = import "store";

export const initPubSub() => {
    //respond to events
  window.addEventListener('message',function(event){
  	console.log('message received:  ' + event.data,event);
    var eventData = JSON.parse(event.data);
    if(eventData['setContent']){
      //set store to edit
        myStore.setItem(eventData);
        event.source.postMessage('EVENT FIRED! @content editor, setContent fired: ' + event.origin,event.origin);
    }
  },false);
}


export const onSave(payload) => {
  window.parent.postMessage('contentEditor:onSave',payload);
}
