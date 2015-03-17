(function(){

Vue.config.debug = true;
  
var root = new Vue({
  el: "#app",
  data: {
    inGameMode: false
  },
  methods: { }
});
  
var homeButtons = root.$addChild({
  inherit: true,
  el: "#home-buttons",
  data: {
    content: "New Game",
    hidden: false
  },
  methods: {
    onClick: function(e) {
      inGameMode = true;
      question.rawContent = katex.renderToString("c = \\pm\\sqrt{a^2 + b^2}");
    }
  }
});

var question = root.$addChild({
  inherit: true,
  el: "#question",
  data: {
    rawContent: ""
  }
});

})();