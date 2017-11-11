const {app, BrowserWindow} = require('electron')

let win;

function createWindow () {
    win = new BrowserWindow ( {
        width: 600,
        height: 600,
        backgroundColor: '#ffffff',
        icon:'file://'+__dirname+'/dist/assets/favicon.ico'
    })

    console.log('file://'+__dirname+'/dist/index.html');
    win.loadURL('file://'+__dirname+'/dist/index.html')

    //uncomment below to open the DevTools
    //  win.webContents.openDevTools()
    win.on('closed', function () {
        win = null
    })
}

app.on ('ready', createWindow)

app.on('windows-all-closed', function() {
    if (process.platform!=='darwin') {
        app.quit()
    }
})

app.on('activate', function () {
    if (win===null) {
        createWindow()
    }
})