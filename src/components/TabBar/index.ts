import { ref as deepRef, defineComponent, shallowRef, watchEffect } from '@vue-mini/core'
import { getData } from '~/utils/wx'

export const tabs = deepRef([
  {
    name: 'index',
    path: '/pages/index/index',
  },
  {
    name: 'one',
    path: '/pages/page-one/index',
  },
  {
    name: 'two',
    path: '/pages/page-two/index',
  },
])

defineComponent({

  setup() {
    const curTab = shallowRef(tabs.value[0])

    function tap(e: WechatMiniprogram.CustomEvent) {
      const { value } = getData<{ value: string }>(e)
      const tab = tabs.value.find(i => i.name === value)
      if (tab) {
        curTab.value = tab
        wx.redirectTo({
          url: curTab.value.path,
        })
      }
    }

    return {
      curTab,
      tabs,
      tap,
    }
  },
})
