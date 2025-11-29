// app.js -- entry point, orchestrates everything

import { loadFoodData } from './api.js';
import { searchFoods } from './search.js';
import * as dom from './dom.js';

let foodData = []; // to hold loaded food data

async function init() {
  document.addEventListener('DOMContentLoaded', async () => {
    try {
      dom.showLoading();
      foodData = await loadFoodData();
      dom.hideLoading();
      dom.enableSearchButton();
    } catch (error) {
      dom.hideLoading();
      alert("Failed to load food data. Please refresh.");
      return;
    }
    const searchButton = document.querySelector('#searchBtn');
    searchButton.addEventListener('click', handleSearch);

    const clearButton = document.querySelector('#clearBtn');
    clearButton.addEventListener('click', handleClear);

    const loadMoreButton = document.querySelector('#loadMoreBtn');
    loadMoreButton.addEventListener('click', handleLoadMore);
  });
}

init();



function handleSearch() {
  const query = dom.getSearchQuery();
  if (query.trim() === '') {
    dom.showWarning("Please enter a search term.");
    return;
  } else {
    dom.hideWarning();
  }
  const results = searchFoods(query, foodData);
  if (results.length === 0) {
    dom.showWarning("No matches found.");
    dom.clearResultsContainer();
    dom.toggleLoadMoreButton(false);
  } else {
    dom.renderResults(results, false);
  }
}

function handleClear() {
  dom.clearSearchInput();
  dom.clearResultsContainer();
  dom.hideWarning();
  dom.toggleLoadMoreButton(false);
}

function handleLoadMore() {
  dom.renderResults([], true);
}