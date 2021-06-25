import catalogReducer, {
  CatalogState, setSearchString,
  
} from './searchSlice';

describe('counter reducer', () => {
  const initialState: CatalogState = {
    searchString: ''
  };
  it('should handle initial state', () => {
    expect(catalogReducer(undefined, { type: 'unknown' })).toEqual({
      searchString: ''
    });
  });

  it('should handle increment', () => {
    const actual = catalogReducer(initialState, setSearchString('catalog'));
    expect(actual.searchString).toEqual('catalog');
  });
  
});
