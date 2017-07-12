import { Component, OnInit } from '@angular/core';
import { myService } from '../service/service';

@Component({
    selector: 'comp-corebody',
    templateUrl: './corebody.html',
    styleUrls: ['./corebody.css'],
    providers: [myService]
})
export class CoreComponent implements OnInit {
    public products = null;
    constructor(private productService: myService) { }
    ngOnInit() {
        this.productService.getProduct()
            .subscribe(resData => this.products = resData);
    }

}
