// dom.js -- handles DOM manipulation

// Module-level state
let currentCount = 0
let allSearchResults = []

export function renderResults(results, append, limit = 25)
    if not append:
        allSearchResults = results
        currentCount = 0
        clearResults()
    
    startIndex = currentCount
    endIndex = min(currentCount + limit, allSearchResults.length)
    
    get results container
    for i from startIndex to endIndex:
        element = createResultElement(allSearchResults[i])
        append element to container
    
    currentCount = endIndex
    
    if currentCount < allSearchResults.length:
        toggleLoadMoreButton(true)
    else:
        toggleLoadMoreButton(false)

export function clearResults()
    get results container
    set inner HTML to empty string

export function clearSearchInput()
    get search input element
    set value to empty string

createResultElement(result)
    create div element
    set className to 'result-item'
    
    create h3 element for name
        set textContent to food.Display_Name
    
    create p element for portion
        set textContent to 'Portion: ' + food.Portion_Display_Name
    
    create p element for calories
        set textContent to food.Calories + ' cal'
    
    append h3 to div
    append portion p to div
    append calories p to div
    
    return div

//UX STATES
export function enableSearchButton()
    get search button element
    set disabled to false

export function disableSearchButton()
    get search button element
    set disabled to true

export function showWarning(message)
    get warning container
    set textContent to message
    remove 'hidden' class

export function hideWarning()
  get warning container
    add 'hidden' class

export function showLoading()
  create loading div element
    set id to 'loadingSpinner'
    set className to 'loading-spinner'
    set textContent to 'Loading...'
    append to DOM

export function hideLoading()
  get loading spinner element by id 'loadingSpinner'
    if exists:
    remove from DOM

// UI State
export function toggleLoadMoreButton(show)
    // get load-more button
    // if show is true
        // remove 'hidden' class
    // else
        // add 'hidden' class

