import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public num1: number = 0;
  public num2: number = 0;
  public res:any ;

  public addition()
  {
    this.res=this.num1+this.num2;
  }

  public subtraction()
  {
    this.res=this.num1-this.num2;
  }

  public multiplicatin()
  {
    this.res=this.num1*this.num2;
  }

  public division()
  {
    this.res=this.num1/this.num2;
  }
  
}
