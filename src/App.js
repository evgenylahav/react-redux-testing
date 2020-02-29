import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './component/header';
import Headline from './component/headline';
import './App.scss';
import SharedButton from "./component/button";
import ListItem from "./component/listItem";
import { fetchPosts } from './actions';


const tempArr = [{
    fName: "Jake",
    lName: "Cohen",
    email: "jakush@gmail.com",
    age: 26,
    onlineStatus: true
}];

class App extends Component {
    constructor(props) {
        super(props);
        this.fetch = this.fetch.bind(this);
    }

    fetch() {
        this.props.fetchPosts();
    }

    render(){
        const { posts } = this.props;
        console.log(posts);
        const articles = posts.data;
        console.log(articles);
        const configButton = {
            buttonText: "Get posts",
            emitEvent: this.fetch,
        }
        return (
            <div className="App">
                <Header/>
                <section className={"main"}>
                    <Headline header={"Posts"}
                                desc={"Click the button to render posts!"}
                                tempArr={tempArr}
                    />
                
                    <SharedButton {...configButton} />
                    {articles &&
                        <div>
                            {articles.map((post, index) => {
                                const { title, body } = post;
                                console.log(title);
                                const configListItem = {
                                    title: title,
                                    desc: body,
                                };
                                return (<ListItem key={index} {...configListItem}/>);
                            })}        
                        </div>
                    
                    }
                </section>
            </div>
          );
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts,
    }
};

export default connect(mapStateToProps, {fetchPosts})(App);
