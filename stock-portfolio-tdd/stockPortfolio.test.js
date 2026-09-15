const StockPortfolio = require('./stockPortfolio');

test('creates a stock portfolio', () => {
  const portfolio = new StockPortfolio();

  expect(portfolio).toBeInstanceOf(StockPortfolio);
});

test('is empty when created', () => {
  const portfolio = new StockPortfolio();

  expect(portfolio.isEmpty()).toBe(true);
});

test('adds purchased shares to a symbol', () => {
  const portfolio = new StockPortfolio();

  portfolio.buy('GME', 5);

  expect(portfolio.sharesBySymbol.get('GME')).toBe(5);
  expect(portfolio.isEmpty()).toBe(false);
});

test('adds another purchase to shares already owned', () => {
  const portfolio = new StockPortfolio();

  portfolio.buy('GME', 5);
  portfolio.buy('GME', 3);

  expect(portfolio.sharesBySymbol.get('GME')).toBe(8);
});

test('subtracts sold shares from a symbol', () => {
  const portfolio = new StockPortfolio();

  portfolio.buy('GME', 5);
  portfolio.sell('GME', 2);

  expect(portfolio.sharesBySymbol.get('GME')).toBe(3);
});

test('counts unique ticker symbols', () => {
  const portfolio = new StockPortfolio();

  portfolio.buy('GME', 5);
  portfolio.buy('RBLX', 10);

  expect(portfolio.symbolCount()).toBe(2);
});

test('removes a symbol after all of its shares are sold', () => {
  const portfolio = new StockPortfolio();

  portfolio.buy('GME', 5);
  portfolio.sell('GME', 5);

  expect(portfolio.sharesBySymbol.has('GME')).toBe(false);
  expect(portfolio.symbolCount()).toBe(0);
  expect(portfolio.isEmpty()).toBe(true);
});

test('returns the number of shares owned for a symbol', () => {
  const portfolio = new StockPortfolio();

  portfolio.buy('GME', 5);

  expect(portfolio.sharesFor('GME')).toBe(5);
});

test('returns zero shares for a symbol that is not owned', () => {
  const portfolio = new StockPortfolio();

  expect(portfolio.sharesFor('RBLX')).toBe(0);
});

test('throws an error when selling more shares than owned', () => {
  const portfolio = new StockPortfolio();

  portfolio.buy('GME', 5);

  expect(() => {
    portfolio.sell('GME', 6);
  }).toThrow('Not possible to sell this number of shares.');
});

/*
 I was able to follow the test first apporach going over the RG refactor cycle. 
 I started every section off with a failing test, and learned to work in reverse from
 what I was used to, that is writing the test cases first then writing the functions to
 make them pass. The RG refractor cycle helped me work in small steps and verify the requiremens
 and verify they all wokred without breaking earlier behavior. I think from this excercise, I learned that 
 TDD is usefuo because it provides quick feedback and also encourages simple, focused code.
*/