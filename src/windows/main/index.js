const { ipcRenderer } = require('electron')

const syncMsgBtn = document.getElementById('sync-msg')


syncMsgBtn.addEventListener('click', () => {
  console.log('sssss')
  ipcRenderer.invoke('create-main-windows', 'test', 'args2')
})

