import { ref as deepRef, defineComponent, shallowRef } from '@vue-mini/core'
import { getData } from '~/utils/wx'

defineComponent({
  setup() {
    const tabs = deepRef([
      {
        name: 'one',
        path: '/pages/page-one/index',
      },
      {
        name: 'two',
        path: '/pages/page-two/index',
      },
      {
        name: 'three',
        path: '/pages/page-three/index',
      },
    ])

    const curTab = shallowRef(tabs.value[0].name)

    function tap(e: WechatMiniprogram.CustomEvent) {
      const { value } = getData<{ value: string }>(e)
      curTab.value = value
    }

    return {
      curTab,
      tabs,
      tap,
    }
  },
})
