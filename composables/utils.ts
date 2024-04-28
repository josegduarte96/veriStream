export function useUtils() {
  const colorMode = useColorMode()
  const isScrollDown = computed(() => useWindowScroll().y.value >= 1)
  const isDark = computed({
    get() {
      return colorMode.value === 'dark'
    },
    set() {
      colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    },
  })

  return {
    isDark,
    isScrollDown,

  }
}
