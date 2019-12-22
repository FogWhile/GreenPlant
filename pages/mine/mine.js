// pages/mine/mine.js
Page({
  data: {
    name:'',
    tem:'',
    water:'',
    light:'',
    tips:'',
    src:'',
    song:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var gp = (wx.getStorageSync('gp')||[])
    this.setData({
      name:gp.name,
      tem:gp.tem,
      water: gp.water,
      light: gp.light,
      tips: gp.tips,
      src:gp.src,
      song:gp.song,
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})