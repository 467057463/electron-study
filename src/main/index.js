const { app, ipcMain } = require('electron');
const { createMainWindow } = require('./main');

// app 事件/生命周期
app.whenReady().then(() =>　{
  createMainWindow()
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

// ipc
ipcMain.handle('create-main-windows', (...args) => {
  createMainWindow();
})
