import React, { useRef, useLayoutEffect } from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  const divRef = useRef(null);

  //Effect for GitHub hosted images
  useLayoutEffect(
    () => {
      divRef.current.querySelectorAll("img").forEach(imgElement => {
        const ImageSrc = imgElement.src
        if(ImageSrc.includes("github.com"))
        imgElement.src = ImageSrc.replace("github.com", "raw.githubusercontent.com").replace("blob/", "");
      })
    }, [divRef.current]
  )

  return (
    <div style={{ maxWidth: '1000px', margin: 'auto' }}>
      <h1>{post.frontmatter.title}</h1>
      <Link to='/'>
        <button style={{ marginBottom: '10px' }}>
          Go Back
          </button>
      </Link>
      <div ref={divRef} className={'readmeDiv'} dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`