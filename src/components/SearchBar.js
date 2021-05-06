import React from 'react';

class SearchBar extends React.Component {
  render() {
    
      return (
       <form>
        <input type="text" placeholder="Search..." onChange={(event)=>(this.props.filterFunction(event))}/>
       </form>
      );
    };
  }

export default SearchBar;