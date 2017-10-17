export class Quote {
  constructor(
    public quote: string ="",
    public author: string ="",
    public created_at: Date = new Date(),
   public updated_at: Date = new Date()
 ) {}
}
