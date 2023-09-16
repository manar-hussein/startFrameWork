import { Component } from '@angular/core';
import * as $ from 'jquery';
import * as myjQuery from 'jquery';

@Component({
  selector: 'app-portflio',
  templateUrl: './portflio.component.html',
  styleUrls: ['./portflio.component.css']
})
export class PortflioComponent {
  imgSrc:string='';
  target:any;
  imageSrc:string|undefined='';
  isClicked:boolean=false;
  outTarget:any;
  

  getsrc(e:Event)
  {
       this.target=e.target;
       this.imageSrc=$(this.target).parent().siblings().attr('src');
      if(this.imageSrc == undefined)
      {
        this.imageSrc=$(this.target).siblings().attr('src');
      }
      this.isClicked=true;
  }

  close(e:Event)
  {
    this.outTarget=e.target;
  
     if($(this.outTarget).attr('src') == null)
     {
      this.isClicked=false
      
     }
  }

}

