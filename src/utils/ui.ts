export function getBottomHeight() {
  const { safeArea: { bottom }, screenHeight } = wx.getSystemInfoSync()
  return screenHeight - bottom
}
