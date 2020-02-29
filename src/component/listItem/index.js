import React, { Component } from 'react';

class ListItem extends Component {

    render() {
        const { title, desc } = this.props;

        if (!title) { return null }
        return (
            <div data-test="listItemComponent">
                <h2 data-test="componentTitle">
                    {title}
                </h2>
                <p data-test="componentDescription">
                    {desc}
                </p>
            </div>
        );
    }
}

export default ListItem;