chrome.omnibox.onInputEntered.addListener(
  function(input) {
    let length = input.length
    let baseIncident = '1000000'
    let incident = ((length >= 7) ? input : baseIncident.substring(0, 7 - length) + input)
    let newUrl = 'https://support.jhc.co.uk/link/JHCLive/INC/' + encodeURIComponent(incident)
    chrome.tabs.create({ url: newUrl })
  });