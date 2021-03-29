import React from 'react';

const ImageList = (props) => {
    console.log(props.result)

    const posts = props.result.map((post) => {
        return (<div key={post.id}>
                {post.id} {post.content}
            </div>
        )
    })

    return (
        <div>
            {posts}
        </div>
    )

}

export default ImageList;