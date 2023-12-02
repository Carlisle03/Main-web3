/**
 * electron.js App File
 * For Desktop Apps
 * For Mobile Platforms, use the web
 */
const {app, BrowserWindow} = require("electron");

function createwin() {
    const win = new BrowserWindow({
        width: 1205,
        height: 1200,
        title: "netronApp"
    });

    win.loadFile("index.html")
}

app.whenReady().then(() => {
    createwin()
});