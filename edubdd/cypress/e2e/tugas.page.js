const URL = 'http://zero.webappsecurity.com/index.html';
const SearchBar = '#searchTerm'

class SearchPage {
    static visit() {
        cy.visit(URL);
    }

    static fillSearchBar(query) {
        cy.get(SearchBar).type(query);
    }
}

export default SearchPage;