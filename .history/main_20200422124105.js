/******************
 * YOUR CODE HERE *
 ******************/

const Grade = (assignment, score) => {
    return {
        assignment,
        score,
    }
}

const Term = () => {
    return {
    grades: [],

    addGrade: function(assignment, score) {
        const grade = Grade(assignment, score);
        this.grades.push(grade);
    },
    }
}

const Course = (name) => {
    return {
    name,
    terms: [Term()],

    addTerm: function() {
        const term = Term();
        this.terms.push(term);
    }
    }
}

const Student = (name, course, term = 1) => {
    return {
    name,
    course,
    term,
    courses: [Course(course)],

    addCourse: function(course) {
        this.courses.push(Course(course));
        this.course = course;
    },

    getAverage: function(courseToFind = this.course, termIndex = this.term - 1) {
        let foundCourse;
        for (const course of this.courses) {
        if (course.name === courseToFind) {
            foundCourse = course;
        }
        }

        const grades = foundCourse.terms[termIndex].grades;
        if (grades.length === 0) {
        return 'No grades yet.'
        }

        let sum = 0;
        for (const grade of grades) {
        sum += grade.score;
        }

        return sum / grades.length;
    },
    }
}

const createNewStudentTileQuery = document.querySelector('#create-new-student-tile');
const newStudentNameQuery = document.querySelector('.new-student-name');
const newStudentCourseNameQuery = document.querySelector('.new-student-course');
const newStudentTermNumOptionQuery = document.querySelector('.new-student-term');
const btnNewStudentQuery = document.querySelector('.new-student-button');

const newStudentTile = () => {
    let name = '';
    let course = '';
    let termNum = 0;
    
    name = newStudentNameQuery.value;
    course = newStudentCourseNameQuery.value;
    termNum = newStudentTermNumOptionQuery.value;

    // for (const newStudentId of )

    const studentInfo = document.createElement('ul');
    const nameItem = document.createElement('li');
    const courseItem = document.createElement('li');
    const termItem  = document.createElement('li');
    
    nameItem.innerText = `Name: ${student.name}`;
    courseItem.innerText = `Course: ${student.course}`;
    termItem.innerText = `Term: ${student.term}`;
    
    studentInfo.classList.add('student-info');
    studentInfo.appendChild(nameItem);
    studentInfo.appendChild(courseItem);
    studentInfo.appendChild(termItem);
    someParentElement.appendChild(studentInfo);
}