let color = "#3AA757";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({color});
  console.log(`Defaul color back set to ${color}`)
});