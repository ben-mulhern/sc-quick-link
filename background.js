chrome.omnibox.onInputEntered.addListener(
  function(incident) {
    var newURL = 'https://support.jhc.co.uk/link/JHCLive/INC/' + encodeURIComponent(incident);
    chrome.tabs.create({ url: newURL });
  });