chrome.omnibox.onInputEntered.addListener(function (input) {
  // Trim the INC- prefix if it exists
  const incNum = input.toUpperCase().startsWith("INC-")
    ? input.substring(4)
    : input
  const length = incNum.length
  const baseIncident = "1000000"

  // Cater for shorter refs that need padding
  const incident =
    length >= 7 ? incNum : baseIncident.substring(0, 7 - length) + incNum
  const incUrl =
    "https://servicedesk.fnzsupport.com/link/JHCLive/INC/" +
    encodeURIComponent(incident)
  chrome.tabs.create({ url: incUrl })
})
