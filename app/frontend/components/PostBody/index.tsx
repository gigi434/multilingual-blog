import parse, { Element, DOMNode } from 'html-react-parser'
import Image from 'next/image'

type PostBody = {
  body: string
}

export function PostBody({ body }: PostBody) {
  /** 投稿のボディ内に画像がある場合、next/imageコンポーネントとして置き換える */
  const options = {
    replace: (domNode: DOMNode) => {
      if (domNode instanceof Element && domNode.attribs) {
        if (domNode.name === 'img') {
          const { src, alt } = domNode.attribs
          return (
            <Image
              src={src}
              alt={alt}
              width={1280}
              height={620}
              className="my-3 h-auto max-h-[300px] w-full rounded-md object-cover object-center md:max-h-[500px]"
            />
          )
        }
      }
    },
  }

  const getParsedHTML = (body: string) => {
    return parse(body, options)
  }
  return <div className="rich-text">{getParsedHTML(body)}</div>
}
