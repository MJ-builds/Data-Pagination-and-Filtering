/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/
document.addEventListener('DOMContentLoaded', () => {

let itemsPerPage = 9; //scope

//This function will create and insert/append the elements needed to display a "page" of nine students
function showPage (list , page) {

   // create two variables which will represent the index for the first and last student on the page
   let startIndex = ((page * itemsPerPage) - itemsPerPage);
   let endIndex = ((page * itemsPerPage) - 1 );

   // select the element with a class of `student-list` and assign it to a variable
   let studentList = document.querySelector('.student-list');

  // set the innerHTML property of the variable you just created to an empty string
      studentList.innerHTML = '';
      let student = '';

  // loop over the length of the `list` parameter
  for (let i = 0; i < list.length; i++) {

   if(i >= startIndex && i <= endIndex) {
      let studentItem = list[i];

      //recreated the code as a simple template literal. Code far easier to read vs prior version.
      student += `
            <li class='student-item cf'>
               <div class='student-details'>
                  <img class='avatar' src='${studentItem.picture.large}' alt='Profile Picture'> 
                  <h3>${studentItem.name.first} ${studentItem.name.last}</h3>
                  <span class='email'>${studentItem.email}</span>
               </div>
               <div class='joined-details'>
                  <span class='date'>Joined ${studentItem.registered.date}</span>
               </div>   
            </li>
      `;
   }
  }
// insert the above elements
studentList.insertAdjacentHTML('beforeend',student);
}; //end of showPage function

function addPagination(list) {
   // create a variable to calculate the number of pages needed
   let numOfPages = Math.ceil(list.length / itemsPerPage);
 
   // select the element with a class of `link-list` and assign it to a variable
   let linkList = document.querySelector('.link-list');

   // set the innerHTML property of the variable you just created to an empty string
   linkList.innerHTML = '';
   let button= ''; 

   // loop over the number of pages needed
   for (let i = 1; i <= numOfPages; i++){
      // create the elements needed to display the pagination button
      button += `<li><button type='button'>${[i]}</button></li>`;
   }
// insert the above elements
linkList.insertAdjacentHTML('beforeend',button);

   // give the first pagination button a class of "active"
 
   // create an event listener on the `link-list` element
     // if the click target is a button:
       // remove the "active" class from the previous button
       // add the active class to the clicked button
       // call the showPage function passing the `list` parameter and page to display as arguments

} // end of addPagination function

addPagination(data);
showPage(data,1); //Testing showPage functionality.

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

// Call functions


}); // Closing out DOMContentLoaded