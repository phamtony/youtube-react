import React from 'react';

class SearchBar extends React.Component {
    state = {term: 'hello there'};

    onInputChange = () => {

    };

    render() {
        return (
          <div className="search-bar ui segment">
              <form action="" className="ui form">
                  <div className="field">
                      <label htmlFor="">Video Search</label>
                      <input
                          type="text"
                          value={this.state.term}
                          onChange={this.onInputChange}
                      />
                  </div>
              </form>
          </div>
        );
    }
}

export default SearchBar;