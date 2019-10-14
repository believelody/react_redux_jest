import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import PostItem from './PostItem'
import SharedButton from '../buttons/SharedButton'
import { fetchPosts } from '../../actions/postAction'

const PostList = ({ fetchPosts, post }) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
      if (post && post.posts.length > 0) {
        setPosts(post.posts)
      }
    }, [post])

    return (
        <div>
          <SharedButton buttonText='Get Posts' emitEvent={fetchPosts} />
          <ul>
            {
              posts.length > 0 && posts.map((post, i) => <PostItem key={i} title={post.title} desc={post.body} />)
            }
          </ul>
        </div>
    )
}

const mapStateToProps = state => ({
  post: state.post
})

export default connect(mapStateToProps, { fetchPosts })(PostList)
