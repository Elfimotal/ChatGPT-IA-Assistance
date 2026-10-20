function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('ChatGPT')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1, maximum-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
