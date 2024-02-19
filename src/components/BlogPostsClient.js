import { Suspense, useEffect, useState, useTransition } from 'react'
import CardTile from './cardTile'
import { getPosts } from '../actions'

function BlogPostsClient() {
  'use client'
  const [posts, setPosts] = useState([])

  async function fetchPosts ()  {
        const result = await getPosts()
        setPosts(result)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <>
      {posts?.length > 0 && posts.map((post) => {
        return <CardTile {...post} />
      })}
    </>
  )
}

export default BlogPostsClient
