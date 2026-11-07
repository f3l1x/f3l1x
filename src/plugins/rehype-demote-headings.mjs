// The page title is the only <h1>: body headings h1..h5 become h2..h6.
export default function rehypeDemoteHeadings() {
  const walk = (node) => {
    if (node.type === 'element' && /^h[1-5]$/.test(node.tagName)) node.tagName = `h${Number(node.tagName[1]) + 1}`
    node.children?.forEach(walk)
  }
  return (tree) => walk(tree)
}
