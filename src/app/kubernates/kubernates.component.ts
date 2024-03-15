import { Component, Input, SimpleChanges } from '@angular/core';
import { KubernatesService } from './kubernates.services';

@Component({
  selector: 'app-kubernates',
  templateUrl: './kubernates.component.html',
  styleUrls: ['./kubernates.component.css']
})
export class KubernatesComponent {
  showAnswer: boolean = false;
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

  constructor(private ks:KubernatesService ) { }
  isCoreJava = false;
  isLogicalProgrammes = false;

  ngOnInit() {
    this.loadNotepadData();
  }
  loadNotepadData() {
      // Load data from your NotepadService or other sources
      this.ks.getKubernatesInfo().subscribe((data) => {
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
}
