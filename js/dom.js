// dom.js -- handles DOM manipulation

renderResults(results)   
    clearResults()
    get results container
    create element for each result // createResultElement(result)?
    set element content to result data
        append element to results container

clearResults()
    get results container
    set inner HTML to empty string

clearSearchInput()
    get search input element
    set value to empty string

createResultElement(result)
    create div element
    set class to 'result-item'
    set inner HTML to formatted result data
    return element

//UX STATES
enableSearchButton()
    get search button element
    set disabled to false

disableSearchButton()
    get search button element
    set disabled to true

showWarning(message)
    get warning container
    set inner HTML to message
    set display to 'block'

hideWarning()
    get warning container
    set display to 'none'

showLoading()
    create loading spinner element
    append to DOM

hideLoading()
    get loading spinner element
    remove from DOM



