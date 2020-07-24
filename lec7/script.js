const vm = new Vue({
  el: '#app',
  data() {
    return {
      numbers: [],
      total_num: 0
    }
  },
  watch: {
    numbers(value) {
      this.total_num = 0
      this.numbers.forEach(number => {
        this.total_num += number
      })
    }
  }
})

window.vm = vm