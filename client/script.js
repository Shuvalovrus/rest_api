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

function delStudent () {
    const deleteModal = document.querySelector('.modal_del-student');
    main.style.opacity = '0.3';
    deleteModal.style.display = 'flex';
}
/* REQUEST */
async function request(url, method = 'GET', data = null) {
    try {
        const headers = {}
        let body
        if (data) {
            headers['Content-Type'] = 'application/json'
            body = JSON.stringify(data)
        }

        const response = await fetch(url, {
            method,
            headers,
            body
        })
        return await response.json()
    } catch (e) {
        console.warn('Error', e.message)
    }
}