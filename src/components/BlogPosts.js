import { useState, useTransition } from 'react'
import CardTile from './cardTile'
import { getPosts } from '../actions'

// blog posts using server actions
function BlogPosts() {
  'use client'
  const [isPending, startTransition] = useTransition()
  const [posts, setPosts] = useState(0)

  const postHandler = () => {
    startTransition(async () => {
      const currentCount = await getPosts()
      setPosts(currentCount)
    })
  }

  return (
    <>
      <button onClick={postHandler} disabled={isPending}>Get Latest Posts</button>
      {posts?.length  && posts.map((post) => {
        return <CardTile {...post} />
      })}
    </>
  )
}

export default BlogPosts
