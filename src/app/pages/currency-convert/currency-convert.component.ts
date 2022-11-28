import { Component, OnInit } from '@angular/core';
import { FormBuilder, RequiredValidator } from '@angular/forms';
import { map, tap } from 'rxjs';
import { CurrencyConvert } from 'src/app/interfaces/currency-convert';
import { CurrencyService } from 'src/app/services/currency.service';


@Component({
  selector: 'app-currency-convert',
  templateUrl: './currency-convert.component.html',
  styleUrls: ['./currency-convert.component.scss'],
})
export class CurrencyConvertComponent implements OnInit {
  constructor(private fb: FormBuilder, private currencyService: CurrencyService) {}
  valueConvert1: number = 0;
  valueConvert2: number = 0;
  validate: boolean = true
  listCurrency: CurrencyConvert[] = []
  codeCurrency = '';
  codeinCurrency = '';
  bidCurrency = ''

  convert = this.fb.group({
    coinPrimary: [''],
    valuePrimary: [''],
    coinSecondary: [''],
    valueSecondary: [''],
  });

  ngOnInit(): void {
    this.getCurrency()
  }
  onSubmit() {
    if(this.convert.value.coinPrimary == this.codeCurrency){
      this.valueConvert2 = Number(this.convert.value.valuePrimary) * Number(this.bidCurrency);
    }
    if(this.convert.value.coinPrimary == this.codeinCurrency){
      this.valueConvert2 = Number(this.convert.value.valuePrimary) / Number(this.bidCurrency);
    }
    if(this.convert.value.coinSecondary == this.codeCurrency){
      this.valueConvert1 = Number(this.convert.value.valueSecondary) * Number(this.bidCurrency);
    }
    if(this.convert.value.coinSecondary == this.codeinCurrency){
      this.valueConvert1 = Number(this.convert.value.valueSecondary) / Number(this.bidCurrency);
    }
    this.getCurrency()
  }


  getCurrency(){
    this.currencyService.get().subscribe((res: any) => {
      this.codeCurrency =  res.USDBRL.code
      this.codeinCurrency = res.USDBRL.codein
      this.bidCurrency = res.USDBRL.bid
    })
  }
}
