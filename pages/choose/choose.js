var flagOne;
Page({
  data: {
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
  storageOne:function(){
    var gp = {
      name:'多肉',
      tem:'15-28',
      water:'建议喷雾浇水，而且在光照最充足的时候浇水。气候干燥时可适当提高浇水频率。',
      light: '尽量选择光照时间最长的地方来摆放多肉植物！ 如果光照不足，不要轻易的把多肉植物搬到户外。',
      tips: '冬天应该将栽培环境的温度保持在8°以上。而夏天的最高温度不要超过35°，晚间尽量控制在30°以下。浇水过多、空气太湿润、没有驱虫，都会导致肉肉腐烂.腐烂的多肉植物呈褪色、变软状态，腐烂的叶肉需要尽快切掉！使用过的刀具最好消毒，避免感染其他植株！',
      src:'../../images/001.png',
      song:'《Replay》《Flower Dance》《千与千寻》'
    }
    wx.setStorageSync('gp', gp);
    wx.reLaunch({
      url: '../mine/mine',
    })
  },
    storageTwo: function () {
    var gp = {
      name: '芦荟',
      tem: '20-30',
      water: '春季气温上升后，芦荟恢复生长，可略增加水分供给，盆土以湿润偏干为宜。夏季保持盆土湿润，浇水应间干间湿。秋季气温渐凉后应减少水分供应，直至保持干而不燥的状态。冬季、春初气温较低时（5℃以上），芦荟处于半休眠状态浇水不宜多，以盆土干而不燥为宜，干透后才略浇水。',
      light: '芦荟喜欢光照，春秋季节多接受阳光直射则生长健壮；夏季置于通风良好的半阴处，更有利其生长。在北方，秋后应将其移入室内养护，置窗台的向阳处；冬季置于室内光线良好、室温不低于10℃的地方。',
      tips: '芦荟生长较快，应在每年春季出室时换一次盆。若每年换一次培养土，养分充足时，生长期间可不施追肥或少施追肥。芦荟要求全年接受充分的阳光。若要促进植株向四周伸展，可以把中心部生长过密的叶子均匀地切去一些，这样做也不使植株在强光照射下，由于叶子的密度过大而出现霉烂。',
      src: '../../images/002.png',
      song: '《Replay》《Flower Dance》《千与千寻》'
    }
    wx.setStorageSync('gp', gp);
    wx.reLaunch({
      url: '../mine/mine',
    })
  },
  storageThr: function () {
    var gp = {
      name: '仙人掌',
      tem: '20-30',
      water: '夏季需要的水量最多，最好在早上和晚上浇，中午浇水容易导致叶子灼伤。阴雨天水量不能太大。随着温度的降低，仙人掌对水分的需求量会慢慢下降。',
      light: '仙人掌类植物属于强阳性，都需非常强的光线。不过，一些体积小的球形品种可放在半阴的地方。',
      tips: '不耐寒，过冬温度不要低于五度。昼夜温差不宜太大。',
      src: '../../images/003.png',
      song: '《Replay》《Flower Dance》《千与千寻》'
    }
    wx.setStorageSync('gp', gp);
    wx.reLaunch({
      url: '../mine/mine',
    })
  }
})