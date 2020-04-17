module.exports.moveBlockquoteToHeader = (tree) =>
  tree.match({ tag: 'article' }, (i) => {
    const tags = i.content.filter((child) => child.tag);

    const newChildren = [];
    for (let index = 0; index < tags.length; index += 1) {
      const currentH = /h(\d$)/gi.test(tags[index].tag);
      const nextBlockquote =
        tags[index + 1] && tags[index + 1].tag === 'blockquote';

      if (currentH && nextBlockquote) {
        const h = tags[index];
        const blockquote = tags[index + 1];
        const newTag = {
          ...h,
          content: [...h.content, blockquote],
        };

        newChildren.push(newTag);
        index += 1; // because next item (blockquote) already in `newChildren`
      } else {
        newChildren.push(tags[index]);
      }
    }

    return {
      ...i,
      content: newChildren,
    };
  });
