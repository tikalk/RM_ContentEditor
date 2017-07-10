const attachPubSub() => {
    //respond to events
  window.addEventListener('message',function(event) {
  	console.log('message received:  ' + event.data,event);
    var eventData = JSON.parse(event.data);
    if(eventData['onSave']){
        event.source.postMessage('EVENT FIRED! @content editor, started from: ' + event.origin,event.origin);
    }
  },false);

}

// using post message :
//
// events are :
// - is content editable
// - on step added
// - on save
// - onCompLoad
