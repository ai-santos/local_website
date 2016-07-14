window.addEventListener( 'scroll', function( event ) {
  var navBar = document.getElementsByTagName( 'nav' )[ 0 ];
  // var right1 = document.getElementsByTagName( 'money' )[ 0 ];
  // var right2 = document.getElementsByTagName( 'support' )[ 0 ];
  // var left1 = document.getElementsByTagName( 'satisfaction' )[ 0 ];
  // var left2 = document.getElementsByTagName( 'scheduling' )[ 0 ];

  if( window.pageYOffset > 0 ) {
    navBar.classList.add( 'overlay' );
    // .style.right = 50 + 'px';
  } else {
    navBar.classList.remove( 'overlay' );
  }
  // console.log(window.pageYOffset);
  // if( window.pageYOffset > 700) {
  //   right2.style.right = 300px;
  // }
});

// function myMove() {
//   var elem = document.getElementById("animate");
//   var pos = 0;
//   var id = setInterval(frame, 5);
//   function frame() {
//     if (pos == 350) {
//       clearInterval(id);
//     } else {
//       pos++;
//       elem.style.top = pos + 'px';
//       elem.style.left = pos + 'px';
//     }
//   }
// }