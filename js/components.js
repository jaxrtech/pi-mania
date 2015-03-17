var root = new Vue({
  data: {
    inGameMode: false
  }
});

var Component = Vue.extend({
  data: function() {
    return { root: root };
  }
});
