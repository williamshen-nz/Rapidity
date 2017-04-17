chrome.contextMenus.create({
    id: "Rapidity",
    title: "Speed read with Rapidity",
    contexts: ["selection"]
});

chrome.contextMenus.onClicked.addListener(function (data) {
    if (data.menuItemId == 'Rapidity') {
        alert(data.selectionText);
        console.log(data.selectionText);
    }
});