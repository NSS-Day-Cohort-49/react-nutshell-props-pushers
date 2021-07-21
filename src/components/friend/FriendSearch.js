return (
    // JSX: select (dropdown): the value of the dropdown and each option is
    // searchLetters.name. onChange, a searchLetter.name is selected. onClick, 
    // handleClickGetWords is invoked, passing the searchLettersName argument (as event.target.value)
    // to getWords, which sends a fetch GET with that argument interpolated in the URL.
    <>
      <form className="findWordForm">
      <h2 className="findWordForm__title">Find tricky words that use Q, X or Z</h2>
      <fieldset>
          <div className="form-group">
              <label htmlFor="searchLetter">First choose a letter</label>
              <select
                  name="searchLetterId"
                  id="searchLetterId"
                  className="form-control"
                  value={searchLetters.name}
                  onChange={handleControlledInputChange}>
                  <option value="0"></option>
                  {searchLetters.map((s) => (
                  <option key={s.id} value={s.name}>
                    {s.name}
                  </option>
                ))}
              </select>
          </div>
      </fieldset>  
          <button
              className="btn"
              onClick={(event) => {
              //Prevents the browser from submitting the form
              event.preventDefault();
              handleSaveGetWords(event.target.value)}}>
      Search</button>
  </form>
  </>
  );