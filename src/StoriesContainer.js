import React from "react";
import Story from "./Story";
import StoryDetail from "./StoryDetail";

export default class StoriesContainer extends React.Component {
  state = {
    stories: [],
    selectedStory: null
  };

  handleSelect = id => {
    this.setState(
      {
        selectedStory: this.state.stories.find(s => s.item_id === id).item_id
      },
      () => {
        console.log(this.state.selectedStory);
      }
    );
  };

  componentDidMount() {
    console.log("componentDidMount");
    fetch("hn_data/stories.json")
      .then(res => res.json())
      .then(data => {
        this.setState({
          stories: data
        });
      });
  }

  handleIncrement = () => {
      console.log('Incrementing');
      const item_id = this.state.selectedStory;
      this.setState({
          stories: this.state.stories.map(s => {
              if (s.item_id === item_id) {
                  return {
                      ...s,
                      score: s.score + 1
                  }
              }
              return s;
          })
      })
  };
  handleDecrement = () => {
    console.log('Decrementing')
    const item_id = this.state.selectedStory;
      this.setState({
          stories: this.state.stories.map(s => {
              if (s.item_id === item_id) {
                  return {
                      ...s,
                      score: s.score - 1
                  }
              }
              return s;
          })
      })
  };

  render() {
    console.log("render");
    const selectedStory = this.state.stories.find(s => s.item_id === this.state.selectedStory)
    return (
      <div className="row">
        <div className="col-md-8">
          <h1>List of stories</h1>
          {this.state.stories.map(story => {
            return <Story
                key={story.item_id}
                onSelect={this.handleSelect}
                {...story}
            />;
          })}
        </div>
        <div className="col-md-4">
          {this.state.selectedStory && <StoryDetail
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            {...selectedStory}
        />}
        </div>
      </div>
    );
  }
}
