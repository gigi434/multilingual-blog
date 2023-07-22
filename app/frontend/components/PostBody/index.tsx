type PostBody = {
  body: string
}

export function PostBody({ body }: PostBody) {
  return <div>{body}</div>
}
