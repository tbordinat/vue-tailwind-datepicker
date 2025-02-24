export default function useDom() {
  const useVisibleViewport = (el) => {
    console.log(el)
    if (el) {
      const { right } = el.getBoundingClientRect()
      const vWidth = window.innerWidth || document.documentElement.clientWidth
      
      return right > vWidth
    } else {
      return null
    }
  }

  return {
    useVisibleViewport
  }
}
