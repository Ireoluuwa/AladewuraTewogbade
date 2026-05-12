

const Ticker = () => {
  const stocks = [
    { symbol: 'S&P 500', value: '5,241.53', change: '+0.45%', up: true },
    { symbol: 'NASDAQ', value: '16,384.47', change: '+0.32%', up: true },
    { symbol: 'GOLD', value: '$2,341.20', change: '+1.20%', up: true },
    { symbol: 'USD/EUR', value: '0.9234', change: '-0.12%', up: false },
    { symbol: 'BTC', value: '$64,231', change: '+2.14%', up: true },
    { symbol: 'ETH', value: '$3,412', change: '-0.45%', up: false },
    { symbol: 'BRENT', value: '$84.12', change: '+0.85%', up: true },
    { symbol: 'UST 10Y', value: '4.52%', change: '+0.02%', up: true },
  ];

  return (
    <div className="bg-black/40 border-y border-white/5 backdrop-blur-md h-12 flex items-center overflow-hidden">
      <div className="flex animate-ticker whitespace-nowrap">
        {[...stocks, ...stocks].map((stock, i) => (
          <div key={i} className="flex items-center space-x-4 mx-8">
            <span className="font-bold text-xs text-white/50">{stock.symbol}</span>
            <span className="text-xs font-medium">{stock.value}</span>
            <span className={`text-[10px] font-bold ${stock.up ? 'text-emerald' : 'text-red-400'}`}>
              {stock.up ? '▲' : '▼'} {stock.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
