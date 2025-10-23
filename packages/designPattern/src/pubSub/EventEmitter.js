export class EventEmitter {
  constructor() {
    this.events = {}
  }

  /**
   * 订阅事件
   * @param event 事件名称
   * @param listener 监听器函数
   * @returns {EventEmitter}
   */
  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = []
    }
    this.events[event].push(listener)
    return this
  }

  /**
   * 发布事件
   * @param event 事件名称
   * @param args 参数
   * @returns {EventEmitter}
   */
  emit(event, ...args) {
    if (this.events[event]) {
      this.events[event].forEach(listener => listener.apply(this, args))
    }
    return this
  }

  /**
   * 取消订阅
   * @param event 事件名称
   * @param listener 监听器函数
   * @returns {EventEmitter}
   */
  off(event, listener) {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter(item => item !== listener)
    }
    return this
  }

  /**
   * 订阅一次事件
   * 只会触发一次，然后自动取消订阅
   * @param event 事件名称
   * @param listener 监听器函数
   * @returns {EventEmitter}
   */
  once(event, listener) {
    const onceListener = (...args) => {
      this.off(event, onceListener)
      listener.apply(this, args)
    }

    this.on(event, onceListener)
    return this
  }
}