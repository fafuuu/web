var app = require("app");
var BrowserWindow = require("browser-window");

app.on("ready", function() {
    var mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });
    mainWindow.loadURL("file:///home/fabian/web/testapp/TIWFront_End/index.html");
});
