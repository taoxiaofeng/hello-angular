import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-cmp',
  templateUrl: './button-cmp.component.html',
  styleUrls: ['./button-cmp.component.css']
})
export class ButtonCmpComponent implements OnInit {

  constructor() { }
  testList = [{
    imgList: ['中国', '美国', '英国', '葡萄牙']
  }];

  ngOnInit() {
  }

  update() {
    for (let i = 0; i < this.testList.length; i++) {
      const element = this.testList[i];
      // element.imgList[0] = '美国';
      this.mess(element.imgList);
      console.log(element);

    }
  }

  mess(arr: any[]) {
    const _floor = Math.floor, _random = Math.random,  len = arr.length; let  i: number = null, j: number = null, arri: any = null,
      n = _floor(len / 2) + 1;
    while (n--) {
      i = _floor(_random() * len);
      j = _floor(_random() * len);
      if (i !== j) {
        arri = arr[i];
        arr[i] = arr[j];
        arr[j] = arri;
      }
    }
    return arr;
  }

}
