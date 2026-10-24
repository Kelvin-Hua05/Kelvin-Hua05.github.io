// Rehype plugin (no dependencies):
//  1. Prefixes root-relative image URLs ("/images/x.webp") with the site base.
//  2. Turns a paragraph containing only an image WITH a title into <figure><img><figcaption>title</figcaption></figure>.
//     Markdown:  ![Alt text](/images/projects/foo.webp "Figure 1. Caption text")
export default function rehypeFigure(options = {}) {
  const base = (options.base ?? '/').replace(/\/+$/, '');
  const walk = (node) => {
    if (!node.children) return;
    node.children = node.children.map((child) => {
      if (child.type === 'element' && child.tagName === 'img') {
        const src = child.properties?.src;
        if (typeof src === 'string' && src.startsWith('/') && !src.startsWith('//') && base && !src.startsWith(base + '/')) child.properties.src = base + src;
        child.properties.loading = 'lazy';
      }
      walk(child);
      if (child.type === 'element' && child.tagName === 'p') {
        const kids = child.children.filter((c) => !(c.type === 'text' && !c.value.trim()));
        const img = kids.length === 1 && kids[0].type === 'element' && kids[0].tagName === 'img' ? kids[0] : null;
        const title = img?.properties?.title;
        if (img && typeof title === 'string' && title) {
          delete img.properties.title;
          return { type: 'element', tagName: 'figure', properties: {}, children: [img, { type: 'element', tagName: 'figcaption', properties: {}, children: [{ type: 'text', value: title }] }] };
        }
      }
      return child;
    });
  };
  return (tree) => walk(tree);
}
