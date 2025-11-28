// app.js -- entry point, orchestrates everything

import { loadFoodData } from './api.js';
import { searchFoods } from './search.js';
import * as dom from './dom.js';

let foodData = []; // to hold loaded food data

async function init() {
DOM initialization
try:
    dom.showLoading()
    foodData = await loadFoodData()
    dom.hideLoading()
    dom.enableSearchButton()
  catch error:
    dom.hideLoading()
    alert "Failed to load food data. Please refresh."
    return (stop initialization)

  add event listeners to searchBtn for 'click' event to call handleSearch
  add event listeners to clearBtn for 'click' event to call handleClear
  add event listeners to loadMoreBtn for 'click' event to call handleLoadMore
  
}

function handleSearch() {
  const query = dom.getSearchQuery()
  if (query.trim() === '') {
    dom.showWarning("Please enter a search term.")
    return
  } else {
    dom.hideWarning()

  call searchFoods with query and foodData to get results
  if results.length === 0:
  dom.showWarning("No matches found")
  dom.clearResultsContainer()
  dom.toggleLoadMoreButton(false)
  else:
  dom.renderResults(results, false)

}

function handleClear() {
  call dom.clearSearchInput()
  call dom.clearResultsContainer()
  dom.hideWarning()
  dom.toggleLoadMoreButton(false)
}

function handleLoadMore() {
  call dom.renderResults with empty array, append = true

}