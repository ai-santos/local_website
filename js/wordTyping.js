var PAUSE_DELAY = 500;
var DELETE_DELAY = { min: 50, max: 100 };
var TYPE_DELAY = { min: 50, max: 400 };

var domNode = document.querySelector( '.tagline' );
var currentValue = '';
var deleting = false;

function update() {
  var thingToType = 'ONSITE COMPUTER SUPPORT'

  if ( !deleting && currentValue.length === thingToType.length ) {
    deleting = true;
    setTimeout(update, PAUSE_DELAY);
    return;
  }

  if ( deleting && currentValue === "" ) {
    deleting = false;

    setTimeout( update, PAUSE_DELAY );
    return;
  }

  if ( deleting ) {
    currentValue = currentValue.slice(0,-1)
    setTimeout( update, delay( DELETE_DELAY ));
  } else {
    currentValue = thingToType.slice(0,currentValue.length+1)
    setTimeout( update, delay( TYPE_DELAY ));
  }

  domNode.innerText = currentValue;
}

function delay( delayType ) {
  return Math.random() * ( delayType.max - delayType.min ) + delayType.min;
}

update()

