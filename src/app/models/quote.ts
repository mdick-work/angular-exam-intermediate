export class Quote {
  constructor(
    public currentPrice: number,
    public change: number,
    public percentChange: number,
    public highPriceOfDay: number,
    public lowPriceOfDay: number,
    public openPriceOfDay: number,
    public previousClosePrice: number
  ) {}
}
