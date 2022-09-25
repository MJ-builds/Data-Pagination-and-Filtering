/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/
document.addEventListener('DOMContentLoaded', () => {

const itemsPerPage = 9;

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

// select the first button from the list
let firstBtnActive = document.querySelector('li button');
 // give selected button a class name of "active"
firstBtnActive.className = 'active';

// event listener (click) for buttons 'list'
linkList.addEventListener('click', (e) => {
   // conditional that checks if the tagName of event target (element clicked) is a button
   if (e.target.tagName === 'BUTTON') { 

      let active = document.querySelector('.active');

      active.className='';
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