const vm = new Vue({
  el: '#app', 
  data() {
    return {
      message: 'Hello',
      interval_id: null
    }
  },
  beforeCreate() {
    console.log('Vueインスタンス作成前')
  },
  created() {
    console.log('Vueインスタンス作成後')
    this.message = 'インスタンスが作成されました'
    
    let seconds = 1
    this.interval_id = setInterval(() => {
      console.log(`${seconds++}秒経過`)
    }, 1000)
  },
  beforeMount() {
    console.log('マウント前')
  },
  mounted() {
    console.log('マウント後')
  },
  beforeUpdate() {
    console.log('再描画前')
  },
  updated() {
    console.log('再描画後')
  },
  beforeDestroy() {
    console.log('Vueインスタンス削除前')
    clearInterval(this.interval_id)
    
  },
  destroyed() {
    console.log('Vueインスタンス削除後')
  }
})

window.vm = vm