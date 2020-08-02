const vm = new Vue({
  el: '#app',
  template: `
    <div v-if="message">
      {{ message }}
    </div>
    <div v-else>
      メッセージがありません
    </div>
  `,
  data() {
    return {
      message: 'こんにちは'
    }
  }
})

window.vm = vm