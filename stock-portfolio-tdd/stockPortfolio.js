class StockPortfolio 
{
    constructor() 
    {
        this.sharesBySymbol = new Map();
    }

    isEmpty() 
    {
        return this.sharesBySymbol.size === 0;
    }

    buy(symbol, shares) 
    {
        const currentShares = this.sharesBySymbol.get(symbol) || 0;

        this.sharesBySymbol.set(symbol, currentShares + shares);
    }

    sell(symbol, shares) 
    {
        const currentShares = this.sharesBySymbol.get(symbol) || 0;

        if (shares > currentShares) 
        {
            throw new Error('Not possible to sell this number of shares.');
        }

    const remainingShares = currentShares - shares;

    if (remainingShares === 0) 
        {
            this.sharesBySymbol.delete(symbol);
        } else 
        {
            this.sharesBySymbol.set(symbol, remainingShares);
        }
    }

    symbolCount() 
    {
        return this.sharesBySymbol.size;
    }

    sharesFor(symbol) 
    {
        return this.sharesBySymbol.get(symbol) || 0;
    }
}


module.exports = StockPortfolio