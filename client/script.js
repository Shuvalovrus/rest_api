const viewAddStudentButton = document.querySelector('.button_viewModalAdd');
const delStudentButton = document.querySelector('.button_del-student')
const getStudentsButton = document.querySelector('.button_get-students');
const studentCard = document.querySelector('.student-card');
const closeButton = document.querySelector('.button_close');

const main = document.querySelector('.main');
const studentCardWrapper = document.querySelector('.student-card-wrapper');

const studentList = document.querySelector('.modal_add-user');

function viewModalAddStudent () {
    main.style.opacity = '0.3';
    studentList.style.display = 'flex';
}
