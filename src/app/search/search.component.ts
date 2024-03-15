import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { map, startWith } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { SearchService } from './search.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  showAnswer: boolean = false;
  searchHistory: string[] = [];
  searchQuery: string = '';
  searchControl = new FormControl();
  filteredOptions: Observable<string[]> | undefined;

  categories: {
    name: string;
    qa: {
      question: string;
      answer: string;
      showAnswer: boolean;
      editMode: boolean;
    }[];
  }[] = [];
  @Input() selectedCategory: string | null = null;
  selectedAnswer='';

  constructor(private searchService: SearchService) { }
  isCoreJava = false;
  isLogicalProgrammes = false;

  ngOnInit() {
    this.loadNotepadData();
    this.filteredOptions = this.searchControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    // Replace this with your own data source to get autocomplete options
    const autocompleteOptions = this.categories
      .map(category => category.qa.map(qa => qa.question))
      .flat();

    return autocompleteOptions.filter(option =>
      option.toLowerCase().includes(filterValue)
    );
  }


  
  loadNotepadData() {
      // Load data from your NotepadService or other sources
      this.searchService.getFinaltouchData().subscribe((data) => {
        this.processNotepadData(data);
      });
  }
 /* start to read notepad data */
 processNotepadData(data: any) {
  const lines = data.split('\n');
  let currentCategory: string = '';
  let question = '';
  let answer = '';
  let answerLines: string[] = [];
  let isAnswerSection = false;

  for (const line of lines) {
      const trimmedLine = line.trim(); // Trim leading and trailing spaces
      if (trimmedLine.startsWith('Category:')) {
          currentCategory = trimmedLine.substring(10).trim();
          this.categories.push({ name: currentCategory, qa: [] });
      } else if (trimmedLine.match(/^Q\s*\)/i)) {
          // Check for lines that start with "Q)" with optional spaces
          question = trimmedLine.replace(/^Q\s*\)/i, '').trim();
          isAnswerSection = false;
      } else if (trimmedLine.match(/^A\s*\)/i)) {
          // Check for lines that start with "A)" with optional spaces
          answer = trimmedLine.replace(/^A\s*\)/i, '').trim();
          isAnswerSection = true;
      } else if (trimmedLine.startsWith('~') && isAnswerSection) {
          // End of answer, add it to the current question
          this.categories[this.categories.length - 1].qa.push({
              question,
              answer,
              showAnswer: false, // Initially set to false
              editMode: false
          });
          question = '';
          answer = '';
          isAnswerSection = false;
      } else if (isAnswerSection) {
          // Continue adding lines to the answer
          answer += '\n' + trimmedLine;
      }
  }
}

 /* end to read notepad data */
  toggleAnswer(qa: { question: string; answer: string; showAnswer: boolean }) {
    qa.showAnswer = !qa.showAnswer;
  }

  onCategorySelected(category: string) {
    this.selectedCategory = category;
  this.searchQuery = ''; // Reset the search query
  this.filterCategories(this.selectedCategory);
}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedCategory']) {
      // Handle changes to the selected category
      this.filterCategories(this.selectedCategory);
    }
  }

  
/* 
  filterCategories(selectedCategory: string | null) {
    this.categories.forEach((category) => {
      category.qa.forEach((qa) => {
        if (selectedCategory === null|| category.name === selectedCategory) {
          // If no category is selected (selectedCategory is null), show all categories and their data
          qa.showAnswer = true;
        } else {
          // If a category is selected and there is a search query, filter based on the search query
           qa.showAnswer = (
          qa.question.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          qa.answer.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
        }
      });
    });
  } */
  search() {
    console.log(this.selectedCategory)
    if (this.searchQuery.trim() !== '') {
      this.searchHistory.unshift(this.searchQuery);
      // Optionally, you can limit the size of the search history.
      // For example, keep only the last 10 entries:
      const maxHistorySize = 10;
      this.searchHistory.splice(maxHistorySize);
    }
    this.filterCategories(this.selectedCategory);
  }
  
  filterCategories(selectedCategory: string | null) {
    this.categories.forEach((category) => {
      category.qa.forEach((qa) => {
        if (selectedCategory === null || category.name === selectedCategory) {
          // Show questions and answers if no category is selected or the selected category matches
          qa.showAnswer = true;
        } else {
          // If a category is selected, show only its related questions and answers
          qa.showAnswer = category.name === selectedCategory;
        }
  
        // Check if the search query is not empty and the question or answer contains it
        if (this.searchQuery.trim() !== '') {
          const searchTerm = this.searchQuery.toLowerCase();
          qa.showAnswer = qa.showAnswer && (qa.question.toLowerCase().includes(searchTerm) || qa.answer.toLowerCase().includes(searchTerm));
        }
      });
    });
  }
  

  
  // Add functions to enter edit mode, save changes, and cancel edit mode
enterEditMode(qa: { question: string; answer: string; editMode: boolean }) {
  qa.editMode = true;
}


cancelEdit(qa: { question: string; answer: string; editMode: boolean }) {
  qa.editMode = false; // Exit edit mode without saving changes
}
handleOptionSelected(event: unknown) {
  console.log("handleOptionSelected is called.");

  if (event instanceof MatAutocompleteSelectedEvent) {
    const selectedOption = event.option.viewValue;
    const selectedQA = this.findQAByQuestion(selectedOption);
     console.log("selectedQA-->"+selectedQA);
    if (selectedQA) {
      // Set the selected question and its answer
      this.searchControl.setValue(selectedQA.question);
      // Display the answer or perform any other desired action
      this.displayAnswer(selectedQA);
    }
  }
}
onInputChange(event: Event) {
  const inputValue = (event.target as HTMLInputElement).value;
  this.searchControl.setValue(inputValue);
  // Implement any filtering logic here if needed
  this.selectedAnswer='';
}

onOptionSelected(event: MatAutocompleteSelectedEvent) {
  const selectedOption = event.option.viewValue;
  const selectedQA = this.findQAByQuestion(selectedOption);

  if (selectedQA) {
    this.displayAnswer(selectedQA);
  }
}

clearSearchInput() {
  this.searchControl.setValue('');
  this.searchQuery = '';
  this.searchHistory = [];
}

findQAByQuestion(question: string): { question: string; 
  answer: string; showAnswer: boolean; editMode: boolean } | undefined {
  // Modify this function to find the QA object based on the question
  return this.categories
    .map(category => category.qa)
    .reduce((acc, qa) => acc.concat(qa), [])
    .find(qa => qa.question === question);
}

displayAnswer(qa: { question: string; answer: string; showAnswer: boolean; editMode: boolean }) {
  // Implement your logic to display the answer, e.g., by setting a property to the answer
  console.log('Selected Question:', qa.question);
  console.log('Selected Answer:', qa.answer);
  this.selectedAnswer = qa.answer;
}
}
