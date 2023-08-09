import parse from 'html-react-parser'

type PostBody = {
  body: string
}

export function PostBody({ body }: PostBody) {
  const getParsedHTML = (body: string) => {
    return parse(body)
  }
  return <div className="rich-text">{getParsedHTML(body)}</div>
}
