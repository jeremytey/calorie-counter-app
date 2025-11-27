// dom.js -- handles DOM manipulation

renderResults(results, append, limit=25)   
    if not append:
        clearResults()
        reset currentCount to 0
    
    calculate how many items to render:
        startIndex = currentCount
        endIndex = min(currentCount + limit, results.length)
    
    for i from startIndex to endIndex:
        create element for results[i]
        append to container
    
    update currentCount
    
    if currentCount < results.length:
        show load-more button
    else:
        hide load-more button
clearResults()
    get results container
    set inner HTML to empty string

clearSearchInput()
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
    create loading div element
    set className to 'loading-spinner'
    set textContent to 'Loading...'
    append to DOM

hideLoading()
    get loading spinner element
    if exists:
    remove from DOM

// UI State
export function toggleLoadMoreButton(show)
    // get load-more button
    // if show is true
        // append to DOM
    // else
        // remove from DOM

