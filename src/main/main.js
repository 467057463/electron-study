const { BrowserWindow } = require('electron')

function createMainWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    }
  })

  win.loadFile('../windows/main/index.html')
}

module.exports = {
  createMainWindow
}