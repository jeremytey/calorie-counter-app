// dom.js -- handles DOM manipulation

renderResults(results, append)   
    if not append
    clearResults()
    for each result
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
    create div element with class 'result-item'
    create and append child elements for Name, Portion, Calories
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
    set textContent to message
    remove 'hidden' class

hideWarning()
    get warning container
    add 'hidden' class

showLoading()
    create loading spinner element
    append to DOM

hideLoading()
    get loading spinner element
    remove from DOM

// UI State
export function toggleLoadMoreButton(show)
    // get load-more button
    // if show: remove 'hidden' class
    // else: add 'hidden' class

getSearchQuery()
    // get search input element
    // return trimmed string value