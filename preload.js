

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})

// //发送asynchronous-message事件到主进程
// ipcRenderer.send('asynchronous-message', 'ping')
// //接收主进程的asynchronous-reply通知
// ipcRenderer.on('asynchronous-reply', (event, arg) => {
//   console.log('asynchronous-reply : args:',arg)
//   const message = `Asynchronous message reply: ${JSON.stringify(arg)}`
//   document.getElementById('async-reply').innerHTML = message
// })



