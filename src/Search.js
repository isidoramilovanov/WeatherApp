import React from "react";

const Search = props => {
  return (
    <div className="container-search">
      <h1 style={{color: props.colorX}}>Weather App</h1>
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          name="city"
          placeholder="Search city here..."
          value={props.inputValue}
          onChange={props.handleChange}
        />
      </form>
  
    </div>
  );
};

export default Search;
