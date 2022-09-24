/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

document.addEventListener('DOMContentLoaded', () => {


/*Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage (list,page) {

   // create two variables which will represent the index for the first and last student on the page
   let itemsPerPage = 9;
   let startIndex = ((page * itemsPerPage) - itemsPerPage);
   let endIndex = ((page * itemsPerPage) -1);

  // select the element with a class of `student-list` and assign it to a variable
  let studentList = document.querySelector('.student-list');

  // set the innerHTML property of the variable you just created to an empty string
      studentList.innerHTML = '';

  // loop over the length of the `list` parameter
  for (let i = 0; i < list.length; i++) {

   if(i >= startIndex && i <= endIndex) {
      let studentItem = list[i];

//MAJOR REFACTORING TO BE DONE ONCE FULL FUNCTIONALITY IN PLACE
//Just brute-forcing to get it up and running.

//Will adjust to the following requirement: 
/*'Once the template literal is created, we want to insert 
it into the DOM on the studentList variable using the 
insertAdjacentHTML method and beforeend position.'*/

      let li = document.createElement('li');
      li.className = 'student-item cf';

      let divDetails = document.createElement('div'); 
      divDetails.className = 'student-details';
      li.appendChild(divDetails);

      let img = document.createElement('img');
      img.className = 'avatar';
      img.src= `${studentItem.picture.large}`;
      img.alt = 'Profile Picture';
      divDetails.appendChild(img);

      let name = document.createElement('h3');
      name.textContent = `${studentItem.name.first} ${studentItem.name.last}`;
      divDetails.appendChild(name);

      studentList.appendChild(li);

      let email = document.createElement('span');
      email.className = 'email';
      email.textContent = `${studentItem.email}`;
      divDetails.appendChild(email);

      let divJoined = document.createElement('div');
      divJoined.className = 'joined-details';
      li.appendChild(divJoined);

      let date = document.createElement('span');
      date.className = 'date';
      date.textContent = `Joined ${studentItem.registered.date}`;
      divJoined.appendChild(date);
   }
  }
}; //end of showPage function

showPage(data,1); //Testing showPage functionality.

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

// Call functions


}); // Closing out DOMContentLoaded