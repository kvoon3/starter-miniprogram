import { definePage, shallowRef } from '@vue-mini/core'
import { getBottomHeight } from '~/utils/ui'

definePage({
  setup() {
    const height = shallowRef(getBottomHeight())

    return {
      height,
    }
  },
})
