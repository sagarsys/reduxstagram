import React from 'react';

class Comments extends React.Component {

    renderComment(comment, i) {
        const { postId } = this.props.params;
        const { removeComment } = this.props;
        return (
            <div className="comment" key={i}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button className="remove-comment" onClick={removeComment.bind(null, postId, i)}>&times;</button>
                </p>
            </div>
        )
    }

    render() {
        return (
            <div className="comments">
                {this.props.postComments.map(this.renderComment.bind(this))}
                <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" ref="author" placeholder="author" />
                    <input type="text" ref="comment" placeholder="comment" />
                    <input type="submit" hidden />
                </form>
            </div>
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        const { postId } = this.props.params;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;
        this.props.addComment(postId, author, comment);
        this.refs.commentForm.reset();
    }

}

export default Comments;