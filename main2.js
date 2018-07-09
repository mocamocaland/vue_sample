new Vue({
  el: '#app',
  computed: {
    computedMessage: function(){
      return this.message + '!'
    }
  }
})
