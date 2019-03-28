import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  langUpdated = new EventEmitter();
  language = 'es';
  constructor() {}
  setLanguage(language) {
    this.language = language;
    this.langUpdated.emit(this.language);
  }
}