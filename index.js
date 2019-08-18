(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) : (global.setRem = factory())
})(this, function () {
  const BASE_FONTSIZE = 32

  function setRem(designWidth = 750) {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize'
      let meta = document.querySelector('meta[name=viewport]')
      if (!meta) {
        let metaEl = document.createElement('meta')
        metaEl.name = 'viewport'
        metaEl.setAttribute('content', 'width=device-width, initial-scale=1.0", user-scalable=1')
        document.querySelector('head').appendChild(metaEl)
      }
      const scale = document.documentElement.clientWidth / designWidth
      document.documentElement.style.fontSize = (BASE_FONTSIZE * Math.min(scale, 2)) + 'px'

      if (!document.addEventListener) return
      window.addEventListener(resizeEvent, setRem, false)
      document.addEventListener('DOMContentLoaded', setRem, false)
    }
  }

  setRem()
  return setRem
})
