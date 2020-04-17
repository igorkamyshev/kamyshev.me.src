module.exports.linkLine = (tree) =>
  tree.match({ tag: 'p' }, (i) => {
    const clearContent = i.content.filter((child) => child !== ' ');

    const linkLine = clearContent.every((child) => child.tag === 'a');

    const linkWithComment =
      clearContent.length === 2 &&
      typeof clearContent[0] === 'string' &&
      clearContent[1] &&
      ['a', 'button'].includes(clearContent[1].tag);

    const originalClass = (i.attrs && i.attrs.class) || '';

    if (linkLine) {
      return {
        ...i,
        attrs: {
          ...i.attrs,
          class: `${originalClass} link-line`,
        },
      };
    }

    if (linkWithComment) {
      return {
        ...i,
        attrs: {
          ...i.attrs,
          class: `${originalClass} single-link`,
        },
      };
    }

    return i;
  });
