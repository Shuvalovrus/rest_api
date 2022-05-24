const viewAddStudentButton = document.querySelector('.button_viewModalAdd');
const delStudentButton = document.querySelector('.button_del-student')
const getStudentsButton = document.querySelector('.button_get-students');
const studentCard = document.querySelector('.student-card');
const closeButton = document.querySelectorAll('.button_close');

const main = document.querySelector('.main');
const studentCardWrapper = document.querySelector('.student-card-wrapper');

const studentList = document.querySelector('.modal_add-user');


viewAddStudentButton.addEventListener('click', viewModalAddStudent);
delStudentButton.addEventListener('click', delStudent);
getStudentsButton.addEventListener('click', getStudentList);

closeButton.forEach((elem) => {
    elem.addEventListener('click',(e) => {
        main.style.opacity = '1';
        e.target.parentElement.parentElement.style.display = 'none'
    })
})

function viewModalAddStudent () {
    main.style.opacity = '0.3';
    studentList.style.display = 'flex';
}

function delStudent () {
    const deleteModal = document.querySelector('.modal_del-student');
    main.style.opacity = '0.3';
    deleteModal.style.display = 'flex';
}

async function getStudentList () {
    const data = await request('/api/students')
    if (data.length === 1) {
        studentCardWrapper.innerHTML += `
            <span class="user-card__id">ID:${data.ID}</span>
            <span class="user-card__name">Ф.И.О:${data.lastname + ' ' + data.name + ' ' + data.middlename}</span>
            <span class="user-card__birthday">Дата рождения:${data.birthday}</span>
            <span class="user-card__group">Группа:${data.class}</span>
                                                                        `
    } else if (data.length > 1) {
        studentCardWrapper.innerHTML = ''
        for (let i = 0; i < data.length; i++) {
            studentCardWrapper.innerHTML += `
            <div class="student-card">
                <span class="user-card__id">ID:${data[i].ID}</span>
                <span class="user-card__name">Ф.И.О:${data[i].lastname + ' ' + data[i].name + ' ' + data[i].middlename}</span>
                <span class="user-card__birthday">Дата рождения:${data[i].birthday}</span>
                <span class="user-card__group">Группа:${data[i].class}</span>       
            </div>`
        }
    } else {
        studentCard.innerHTML = `<span>Данные не найденны</span>`
    }
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