export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/index1/index',
    'pages/index2/index',
    'pages/index3/index',
    'pages/index4/index',
    'pages/index5/index',
  ],
  tabBar: {
    color: "#999",
    selectedColor: "#4586fc",
    backgroundColor: "#ffffff",
    list: [
      {
        pagePath: "pages/index/index",
        text: "index",
      },
      {
        pagePath: "pages/index1/index",
        text: "index1",
      }
      ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
