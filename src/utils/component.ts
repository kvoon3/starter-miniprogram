// TODO

import { defineComponent, Config, ComponentSetup } from '@vue-mini/core'

function mapKeys(
  source: Record<string, any>,
  target: Record<string, any>,
  map: Record<string, any>,
) {
  Object.keys(map).forEach((key) => {
    if (source[key]) {
      target[map[key]] = source[key]
    }
  })
}

// type Options = Parameters<typeof defineComponent>

type Data = WechatMiniprogram.Component.DataOption
type Props = WechatMiniprogram.Component.PropertyOption
type Methods = WechatMiniprogram.Component.MethodOption
type Behavior = WechatMiniprogram.Component.BehaviorOption

type KvComponentOptions = {
  setup?: ComponentSetup<Props>
  data?: Data
  field?: boolean
  classes?: string[]
  mixins?: string[]
  props?: Props
  relation?: {
    relations: Record<string, WechatMiniprogram.Component.RelationOption>
    mixin: string
  }

  watch?: Record<string, (...args: any[]) => any>

  methods?: Methods

  // lifetimes
  beforeCreate?: () => void
  created?: () => void
  mounted?: () => void
  destroyed?: () => void
} & ThisType<
  WechatMiniprogram.Component.Instance<Data, Props, Methods, Behavior>
>

export function defineComp(kvOptions: KvComponentOptions, config?: Config) {
  const options: WechatMiniprogram.Component.Options<Data, Props, Methods, Behavior> = {}

  mapKeys(kvOptions, options, {
    data: 'data',
    props: 'properties',
    watch: 'observers',
    mixins: 'behaviors',
    methods: 'methods',
    beforeCreate: 'created',
    created: 'attached',
    mounted: 'ready',
    destroyed: 'detached',
    classes: 'externalClasses',
  })

  // add default externalClasses
  options.externalClasses = options.externalClasses || []
  options.externalClasses.push('custom-class')

  // add default options
  options.options = {
    multipleSlots: true,
    addGlobalClass: true,
  }

  defineComponent(options, config)
}
