import { Component, Input, SimpleChanges } from '@angular/core';
import { AngularService } from './notepadreadservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-angular',
  templateUrl: './notepadreadservice.component.html',
  styleUrls: ['./notepadreadservice.component.css']
})
export class NotepadReadServiceComponent {
  showAnswer: boolean = false;
  selectedCategorys: string = "test";
  categories: {
    name: string;
    qa: {
      question: string;
      answer: string;
      showAnswer: boolean;
      editMode: boolean;
    }[];
  }[] = [];
  @Input() selectedCategory: string | null = "default_value";
  constructor(private angularService: AngularService, private router: Router) {
   }
  isCoreJava = false;
  isLogicalProgrammes = false;

  ngOnInit() {
    const filePath = this.getFilePathBasedOnRoute(); // Implement your logic to get file path based on the route
    this.loadNotepadData(filePath);
  }

  getFilePathBasedOnRoute(): string {
    // Implement logic to determine file path based on the route
    const currentRoute = this.router.url; // Assuming you have injected the Router service
    let filePath = '';
    switch (currentRoute) {
      case '/corejava':
        filePath = 'corejava.txt';
        break;
      case '/spring':
        filePath = 'spring.txt';
        break;
      case '/hibernate':
        filePath = 'hibernate.txt';
        break;
      case '/springboot':
        filePath = 'springboot.txt';
        break;
      case '/angular':
        filePath = 'angular.txt';
        break;
      case '/react':
        filePath = 'reactjs.txt';
        break;
      case '/sql':
        filePath = 'queries.txt';
        break;
      case '/microservices':
        filePath = 'microservices.txt';
        break;
      case '/logical':
        filePath = 'logicalprogrammes.txt';
        break;
      // Add more cases for other routes as needed
      default:
        filePath = 'default.txt'; // Provide a default file path if the route doesn't match any known paths
    }
    return filePath;
  }

  loadNotepadData(filePath: string) {
    // Load data from your NotepadService or other sources
    this.angularService.getAngular(filePath).subscribe((data) => {
      this.processNotepadData(data);
    });
  }
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

  toggleAnswer(qa: { question: string; answer: string; showAnswer: boolean }) {
    qa.showAnswer = !qa.showAnswer;
  }

  onCategorySelected(category: string) {
    this.selectedCategory = category;
    this.filterCategories(this.selectedCategory);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedCategory']) {
      // Handle changes to the selected category
      this.filterCategories(this.selectedCategory);
    }
  }

  filterCategories(selectedCategory: string | null) {
    this.categories.forEach((category) => {
      category.qa.forEach((qa) => {
        if (selectedCategory === null) {
          // If no category is selected (selectedCategory is null), show all categories and their data
          qa.showAnswer = true;
        } else {
          // If a category is selected, show only its related questions and answers
          qa.showAnswer = category.name === selectedCategory;
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
}
