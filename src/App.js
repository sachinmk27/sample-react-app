import React from 'react';
import Header from './Header';
import StoriesContainer from './StoriesContainer';

function App() {
  return (
    <div className="container">
      <Header></Header>
      <div className="row">
        <div className="col-md-12">
          <StoriesContainer/>
        </div>
      </div>
    </div>
  );
}

export default App;
