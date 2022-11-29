import React from 'react';
import commentBox from 'commentbox.io';
import "./CommentBox.css"
export default class PageWithComments extends React.Component {

    componentDidMount() {

        this.removeCommentBox = commentBox('5674500230217728-proj');
    }

    componentWillUnmount() {

        this.removeCommentBox();
    }

    render() {

        return (
            <div className="commentbox" />
        );
    }
}