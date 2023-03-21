import { Component } from '@angular/core';
import { Quote } from 'src/app/Models/quote.model';
import { QuoteService } from 'src/app/services/quote.service';

@Component({
    selector: 'generate-quote',
    templateUrl: './generate-quote.component.html',
    styleUrls: ['./generate-quote.component.css']
})
export class GenerateQuoteComponent {

    quote: any = {
        author: '',
        content: '',
    };

    constructor(public quoteService: QuoteService) { }

    ngOnInit(): void {
        this.getQuote();
    }

    public getQuote() {
        this.quoteService.getRandomQuote().subscribe((data) => {
            this.quote = data;
        });
    }
}
