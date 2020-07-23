const vm = new Vue({
  el: '#app',
  data() {
    return {
      message: 'Hello, World!'
    }
  }
})

window.vm = vm

vm.$watch(function () {
  return this.message
}, function (message) {
  console.log('変更後の値: ' + message)
})