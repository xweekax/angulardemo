import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Simple Counter';
  counter = 3;

  people: Employee[] = [
    {firstname: "fred", lastname: "Smith"},
    {firstname: "Julie", lastname: "Johnson"}
  ];

  testclick = function() {

    console.log(this.people); //this will write out the items from the people[] in the console
    this.counter++;
    this.people.push({firstname: "jeff", lastname: "horseman"})
  }
}

interface Employee{
  firstname: string,
  lastname: string
};
