import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/service/translate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  messageText = ['optimizar', 'crear', 'posicionar', 'maximizar'];
  currentIndex = 0;
  timeoutId:any = '';
  stopTimeout = false;
  constructor(languageService: LanguageService) { 
    if(languageService.language == 'en') {
      this.messageText = ['optimize', 'create', 'position', 'maximize'];
    }
  }

  ngOnInit() {
    setTimeout(()=> {
      this.addHeaderMessage();
    }, 1000)
  }

  eraseHeaderMessage(){
    this.timeoutId = setTimeout(() => {
    let what = document.getElementById("typed");
    let y = what.innerHTML;
    what.innerHTML = y.slice(0, -1);
    clearTimeout(this.timeoutId);
    if(what.innerHTML.length > 0){
      this.eraseHeaderMessage();
    } else {
      this.timeoutId = setTimeout(()=>{
        this.currentIndex++;
        if(this.currentIndex == this.messageText.length){
          this.currentIndex = 0;
          this.stopTimeout = false;
        }
        this.addHeaderMessage();
      }, 100);
    }
  }, 100);
}
  
  addHeaderMessage(){
    let current = document.getElementById("typed").innerHTML;
    let following = current.length;
    let newLetter = this.messageText[this.currentIndex][following] || "";
    document.getElementById("typed").innerHTML += newLetter;
    let x = document.getElementById("typed").innerHTML;
    clearTimeout(this.timeoutId);
    if(following < this.messageText[this.currentIndex].length - 1){
        this.addHeaderMessage();
        } else {
          if(!this.stopTimeout){
            this.timeoutId = setTimeout(() => {
              this.eraseHeaderMessage();
            }, 2500);
          }
      }
    }

    
}
