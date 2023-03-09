import React from "react";

function SearchBar() {
  return (
    <div className="searchbar">
      <div className="row">
        <form id="contact__form">
          <div class="form__item">
            {/* <label class="form__item--label">Name</label> */}
            <input class="input" name="user_name" type="text" placeholder="search for a moive" required></input>
          </div>
          <button id="contact__submit" class="form__submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
