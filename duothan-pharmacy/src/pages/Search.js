import React from 'react';
import { useEffect } from 'react';

const Search= () => {

  return (
    <center>
    <div>
        <form class="form" role="search">
            <select name="all" id="all">
            <option value="all">All</option>
            <option value="one">one</option>
            <option value="two">two</option>
            <option value="three">three</option>
            </select>
            <input type="search" id="query" name="q" placeholder="Search your medicine here" aria-label="Search through site content"></input>
            <button>Search</button>
        </form>
    </div>
    </center>
  )
}

export default Search