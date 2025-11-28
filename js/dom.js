// dom.js -- handles DOM manipulation

// Module-level state
let currentCount = 0
let allSearchResults = []

export function renderResults(results, append, limit = 25) {
    if (!append) {
        allSearchResults = results;
        currentCount = 0;
        clearResultsContainer();
    }
    const startIndex = currentCount;
    const endIndex = Math.min(currentCount + limit, allSearchResults.length);
    const resultsContainer = document.querySelector('#resultsPanel');
    for (let i = startIndex; i < endIndex; i++) {
        const element = createResultElement(allSearchResults[i]);
        resultsContainer.appendChild(element);
    }
    currentCount = endIndex;
    if (currentCount < allSearchResults.length) {
        toggleLoadMoreButton(true);
    } else {
        toggleLoadMoreButton(false);
    }
}

export function clearResultsContainer(){
    const resultsContainer = document.querySelector('#resultsPanel');
    resultsContainer.innerHTML = '';

    currentCount = 0;
    allSearchResults = [];
}

export function clearSearchInput(){
    const searchInput = document.querySelector('#foodInput');
    searchInput.value = '';
}

export function createResultElement(result){
    const resultDiv = document.createElement('div');
    resultDiv.className = 'result-item';

    const nameElem = document.createElement('h3');
    nameElem.textContent = result.Display_Name;

    const portionElem = document.createElement('p');
    portionElem.textContent = `Portion: ${result.Portion_Display_Name}`;

    const caloriesElem = document.createElement('p');
    caloriesElem.textContent = `${result.Calories} cal`;

    resultDiv.appendChild(nameElem);
    resultDiv.appendChild(portionElem);
    resultDiv.appendChild(caloriesElem);

    return resultDiv;
}

//UX STATES
export function enableSearchButton(){
    const searchButton = document.querySelector('#searchBtn');
    searchButton.disabled = false;
}
export function disableSearchButton(){
    const searchButton = document.querySelector('#searchBtn');
    searchButton.disabled = true;
}

export function showWarning(message){
    const warningContainer = document.querySelector('#warningBox');
    warningContainer.textContent = message;
    warningContainer.classList.remove('hidden');
}

export function hideWarning(){
    const warningContainer = document.querySelector('#warningBox');
    warningContainer.classList.add('hidden');
}

export function showLoading(){
    const spinner = document.createElement('div');
    spinner.id = 'loadingSpinner';
    spinner.className = 'loading-spinner';
    spinner.textContent = 'Loading...';
    document.body.appendChild(spinner);
}

export function hideLoading(){
    const spinner = document.querySelector('#loadingSpinner');
    if (spinner) {
        spinner.remove();
    }
}

// UI State for Load More button
export function toggleLoadMoreButton(show) {
    const loadMoreButton = document.querySelector('#loadMoreBtn');
    if (show) {
        loadMoreButton.classList.remove('hidden');
    } else {
        loadMoreButton.classList.add('hidden');
    }
}

export function getSearchQuery() {
    const input = document.querySelector('#foodInput');
    return input.value.trim();
}