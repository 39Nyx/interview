import { EventEmitter } from 'design-pattern'

const eventBus = new EventEmitter()

// 订阅事件
const logData = (data) => console.log('打印数据:', data)

eventBus.on('data', logData)

// 发布事件
eventBus.emit('data', 'Hello World!')

// 单次订阅
eventBus.once('one-time', () => console.log('单次订阅'))
eventBus.emit('one-time') // 输出: 单次订阅
eventBus.emit('one-time') // 无输出

// 取消订阅
eventBus.off('data', logData)
eventBus.emit('data', '不会被打印的数据') // 无输出