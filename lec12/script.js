const vm = new Vue({
  el: '#app',
  data() {
    return {
      message: 'Hello, World'
    }
  },
  methods: {
    clickLog(event) {
      console.log(this.message)
    },
    hoverLog() {
      console.log('hover')
    }
  }
})