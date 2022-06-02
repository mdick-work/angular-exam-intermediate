export class Quote {
  constructor(
    public currentPrice: number = 0,
    public change: number = 0,
    public percentChange: number = 0,
    public highPriceOfDay: number = 0,
    public lowPriceOfDay: number = 0,
    public openPriceOfDay: number = 0,
    public previousClosePrice: number = 0
  ) {}
}
