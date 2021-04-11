const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const { Notification } = require('electron')

// 在主进程中
global.sharedObject = {
  someProperty: 'default value'
}

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

ipcMain.handle('perform-action', (event, ...args) => {
  // ... do actions on behalf of the Renderer
  // console.log(event, args)
  createWindow()
})