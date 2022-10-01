/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/
document.addEventListener('DOMContentLoaded', () => {

//Instantiate search elements
let search = document.querySelector('.header h2');

let searchHTML = `
      <label for="search" class="student-search">
         <span>Search by name</span>
         <input id="search" placeholder="Search by name...">
         <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
      </label>
`; 
search.insertAdjacentHTML('afterend',searchHTML);

// select the element with Id of `search`
let searchField = document.getElementById('search');

   searchField.addEventListener('keyup', (e) => {
      let input = e.target.value.toLowerCase();

      //declare array to hold all students that match search
      let searchArray = [];

      //loop through entries/objects in the data array (see data.js)
      data.forEach(obj => {
      const searchName = `${obj.name.first} ${obj.name.last}`.toLowerCase();

      /* if the search results find student, add to the searchArray (array),
      and call the showPage and addPagination functions, passing the searchArray array.
      */
      if(searchName.includes(input)) {
         searchArray.push(obj);
         showPage(searchArray, 1);
         addPagination(searchArray);
         document.querySelector('.link-list').style.display = 'block';
      
      /* if the search results do not add any students to the searchArray (array),
      display an h3 message (below) and hide the ul: essentially 'soft disabling / hiding' pagination.
      */
      } else if (searchArray.length === 0) {
         document.querySelector(".student-list").innerHTML = "<h3>No results found</h3>"; 
         document.querySelector('.link-list').style.display = 'none';
      }
      }); //end of loop
   }); //end of addEventListener

const itemsPerPage = 9; //global scope

// this function creates the elements needed to display a page of nine students
function showPage (list , page) {

   // variables that represent the index for the first and last student on the page
   let startIndex = ((page * itemsPerPage) - itemsPerPage);
   let endIndex = ((page * itemsPerPage) - 1 );

   // select the element with a class of `student-list`
   let studentList = document.querySelector('.student-list');

      studentList.innerHTML = '';
      let student = '';

  // loop over the length of the `list` parameter
  for (let i = 0; i < list.length; i++) {

   //selecting those specific students in the array that fall between startIndex and endIndex
   if(i >= startIndex && i <= endIndex) {
      let studentItem = list[i];

      // create the elements needed to display the student data
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
}; // end of showPage function

/* creates the pagination functionality, dynamically adding buttons in a list
for navigation to display up to 9 students per page */
function addPagination(list) {
   // variable that calculates the number of pages needed
   let numOfPages = Math.ceil(list.length / itemsPerPage);
 
   // select the element with a class of `link-list`
   let linkList = document.querySelector('.link-list');

   linkList.innerHTML = '';
   let button= ''; 

   // loop over the number of pages needed
   for (let i = 1; i <= numOfPages; i++){
      // create the elements needed to display the pagination button
      button += `
            <li>
               <button type='button'>${[i]}</button>
            </li>
      `;
   }
// insert the above elements
linkList.insertAdjacentHTML('beforeend',button);

/* Block of code below controls the button that is active (or selected).
Dynamically changes the selected button to active (class), and removes active class 
from the previously selected button
*/

// select the first button from the list
let firstBtnActive = document.querySelector('li button');
 // give selected button a class name of "active"
firstBtnActive.className = 'active';

// event listener (click) for buttons 'list'
linkList.addEventListener('click', (e) => {
   // conditional that checks if the tagName of event target (element clicked) is a button
   if (e.target.tagName === 'BUTTON') { 

      let active = document.querySelector('.active');
      //previously active button become 'deactivated' / active class removed
      active.className='';
      //new target button now becomes the active class
      e.target.className='active';

      // call the showPage function
      showPage(list,e.target.textContent);
   }

});
} // end of addPagination function

// Call functions
showPage(data,1);
addPagination(data);

}); // end of DOMContentLoaded