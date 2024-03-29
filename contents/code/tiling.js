// Don't use modern javascript

var height = 1440; // adjust to allow for panels
var width = 3440; // adjust to allow for panels
var centreColumnWidth = 1400; // remaining space will be divided between outer columns

var edgeWidth = Math.floor((width - centreColumnWidth) / 2);
var sparePixels = width - centreColumnWidth - (2 * edgeWidth);
var centreWidth = centreColumnWidth + sparePixels;
var centreX = edgeWidth;
var rightEdgeX = edgeWidth + centreWidth;

registerShortcut("MoveWindowToLeftTop", "Move Window to Left Top", "Meta+Num+7", function () {
  var client = workspace.activeClient;
  if (client.moveable) {
    client.geometry = {
      x: 0,
      y: 0,
      width: edgeWidth,
      height: height / 2
    };
  }
});

registerShortcut("MoveWindowToLeftFullHeight", "Move Window to Left Full Height", "Meta+Num+4", function () {
  var client = workspace.activeClient;
  if (client.moveable) {
    client.geometry = {
      x: 0,
      y: 0,
      width: edgeWidth,
      height: height
    };
  }
});

registerShortcut("MoveWindowToLeftBottom", "Move Window to Left Bottom", "Meta+Num+1", function () {
  var client = workspace.activeClient;
  if (client.moveable) {
    client.geometry = {
      x: 0,
      y: height / 2,
      width: edgeWidth,
      height: height / 2
    };
  }
});

registerShortcut("MoveWindowToCenterTop", "Move Window to Center Top", "Meta+Num+8", function () {
  var client = workspace.activeClient;
  if (client.moveable) {
    client.geometry = {
      x: centreX,
      y: 0,
      width: centreWidth,
      height: height / 2
    };
  }
});

registerShortcut("MoveWindowToCenterFullHeight", "Move Window to Center Full Height", "Meta+Num+5", function () {
  var client = workspace.activeClient;
  if (client.moveable) {
    client.geometry = {
      x: centreX,
      y: 0,
      width: centreWidth,
      height: height
    };
  }
});

registerShortcut("MoveWindowToCenterBottom", "Move Window to Center Bottom", "Meta+Num+2", function () {
  var client = workspace.activeClient;
  if (client.moveable) {
    client.geometry = {
      x: centreX,
      y: height / 2,
      width: centreWidth,
      height: height / 2
    };
  }
});

registerShortcut("MoveWindowToRightTop", "Move Window to Right Top", "Meta+Num+9", function () {
  var client = workspace.activeClient;
  if (client.moveable) {
    client.geometry = {
      x: rightEdgeX,
      y: 0,
      width: edgeWidth,
      height: height / 2
    };
  }
});

registerShortcut("MoveWindowToRightFullHeight", "Move Window to Right Full Height", "Meta+Num+6", function () {
  var client = workspace.activeClient;
  if (client.moveable) {
    client.geometry = {
      x: rightEdgeX,
      y: 0,
      width: edgeWidth,
      height: height
    };
  }
});

registerShortcut("MoveWindowToRightBottom", "Move Window to Right Bottom", "Meta+Num+3", function () {
  var client = workspace.activeClient;
  if (client.moveable) {
    client.geometry = {
      x: rightEdgeX,
      y: height / 2,
      width: edgeWidth,
      height: height / 2
    };
  }
});

