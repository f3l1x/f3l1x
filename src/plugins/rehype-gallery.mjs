// A paragraph that contains only 2+ images (e.g. consecutive image lines in markdown)
// becomes a gallery grid: <p class="gallery">.
const isBlank = (n) => (n.type === 'text' && !n.value.trim()) || (n.type === 'element' && n.tagName === 'br')

export default function rehypeGallery() {
  const walk = (node) => {
    if (node.type === 'element' && node.tagName === 'p') {
      const kids = node.children.filter((c) => !isBlank(c))
      if (kids.length >= 2 && kids.every((c) => c.type === 'element' && c.tagName === 'img')) {
        node.properties = { ...node.properties, className: ['gallery'] }
      }
    }
    node.children?.forEach(walk)
  }
  return (tree) => walk(tree)
}
