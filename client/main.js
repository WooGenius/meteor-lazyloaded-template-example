
Router.route('/', function () {
  this.render('hello');
}, {
  onBeforeAction: function () {
    var hello = IRLibLoader.load('/hello.js', {
      success: function() {console.log('SUCCESS CallBack')},
      error: function() {console.log('ERROR CallBack')}
    });
    if (hello.ready()) {
      this.next();
    }
  }
});

var one = IRLibLoader.load('/one.js', {
  success: function(){
    console.log('SUCCESS CALLBACK'); },
  error: function(){
    console.log('ERROR CALLBACK'); }
});
if(one.ready()){
  var two = IRLibLoader.load('/two.js');
}

