window.addEventListener( 'scroll', function( event ) {
  setOverlay( window.pageYOffset );
  zoom_out( window.pageYOffset );
  zoom_in( window.pageYOffset );
});

function setOverlay( yOffset ) {
  var navBar = document.getElementsByTagName( 'nav' )[ 0 ];

  if( yOffset > 0 ) {
    navBar.classList.add( 'overlay' );
  } else {
    navBar.classList.remove( 'overlay' );
  }
}

function zoomableDivs() {
  return document.querySelectorAll( '.whyVFix div' );
}

function applyZoomOut( item ) {
  item.classList.remove( 'zoom-in' );
  item.classList.add( 'zoom-out' );
}

function zoom_out( yOffset ) {
  if( yOffset == 0 ) {
    zoomableDivs().forEach( applyZoomOut );
  }
}

function applyZoomIn( item ) {
  item.classList.remove( 'zoom-out' );
  item.classList.add( 'zoom-in' );  
}

function zoom_in( yOffset ) {
  if( yOffset > 2 ) {
    zoomableDivs().forEach( applyZoomIn );
  }
}


var thingsToType = [
  ' ONSITE COMPUTER SUPPORT'
]

var domNode = document.querySelector('.tagline');
var pauseDelay = 500;

var thingToTypeIndex = 0;
var currentValue = '';
var deleting = false;

function update(){
  var thingToType = thingsToType[thingToTypeIndex];
  if (!deleting && currentValue.length === thingToType.length){
    deleting = true;
    setTimeout(update, pauseDelay);
    return;
  }
  if (deleting && currentValue === ""){
    deleting = false;
    thingToTypeIndex++
    if (thingToTypeIndex >= thingsToType.length){
      thingToTypeIndex = 0;
    }
    setTimeout(update, pauseDelay);
    return;
  }
  if (deleting){
    currentValue = currentValue.slice(0,-1)
    setTimeout(update, getRandomDeletingDelay());
  }else{
    currentValue = thingToType.slice(0,currentValue.length+1)
    setTimeout(update, getRandomTypingDelay());
  }
  domNode.innerText = currentValue;
}

function getRandomDeletingDelay() {
  var min = 50, max = 100;
  return Math.random() * (max - min) + min;
}

function getRandomTypingDelay() {
  var min = 50, max = 400;
  return Math.random() * (max - min) + min;
}

update()

