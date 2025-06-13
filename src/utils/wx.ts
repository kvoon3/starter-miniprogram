export function getData<T extends object>(e: WechatMiniprogram.CustomEvent): T {
  // @ts-expect-error type error
  return e?.currentTarget?.dataset || {}
}
