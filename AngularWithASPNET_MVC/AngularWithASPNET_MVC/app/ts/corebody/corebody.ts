import { Component, OnInit } from '@angular/core';
import { myService } from '../service/service';

export class MyData{
    Pid: number;
    Pimg: string;
    Ptitle: string;
    Pdesc: string;
    Pprice: number;
}

@Component({
    selector: 'comp-corebody',
    templateUrl: './corebody.html',
    styleUrls: ['./corebody.css'],
    providers: [myService]
})
export class CoreComponent implements OnInit {
    //public products = null;
    public products: MyData;
    counter: number = 0;
    product: MyData[]=[];
    constructor(private productService: myService) { }
    ngOnInit() {
        this.productService.getProduct()
            .subscribe(resData => this.products = resData);
    }
    incCounter() {
        this.counter++;
    }
    getProduct(pro: MyData) {
        this.product.push(pro);
        console.log(pro);
    }
}
