// increment likes
export function increment(index) {
  return {
    type: "INCREMENT_LIKES",
    index
  }
}

// add Comment
export function addComment(postId,author, comment) {
  return {
    type: "ADD_COMMENT",
    postId,
    author,
    comment
  }
}

// remove Comment
export function removeComment(postId,i) {
  return {
    type: "REMOVE_COMMENT",
    i,
    postId
  }
}
