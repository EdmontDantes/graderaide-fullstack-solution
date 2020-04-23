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
    grade: [],

    addGrade: function (grade, assignment) {
        this.grade.push([grade, assignment]);
    },

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

// const createNewStudentTileQuery = document.querySelector('#create-new-student-tile');
const newStudentNameQuery = document.querySelector('.new-student-name');
const newStudentCourseNameQuery = document.querySelector('.new-student-course');
const newStudentTermNumOptionQuery = document.querySelector('.new-student-term');
const btnNewStudentSubmitQuery = document.querySelector('.new-student-button');

const newStudentTile = function() {
    
    name = newStudentNameQuery.value;
    course = newStudentCourseNameQuery.value;
    termNum = newStudentTermNumOptionQuery.value;

    let newStudent = Student(name, course, termNum);
    console.log(newStudent);
    const studentDisplay = document.createElement('div');
    studentDisplay.className = 'student-display';
    let numId = document.querySelectorAll('.student-display')

    studentDisplay.id = `student-${numId.length}`;
    const studentInfo = document.createElement('ul');
    const nameItem = document.createElement('li');
    const courseItem = document.createElement('li');
    const termItem  = document.createElement('li');
    const addGradesSection = document.createElement('div');
    

    addGradesSection.className = `add-grades-inputs-and-submit`;
    addGradesSection.id = `student-${numId.length}`;
    addGradesSection.innerHTML = `
    <input type="text" name="new-grade" class="new-grade" id="${numId.length}" placeholder="New Grade">
    <input type="text" name="new-grade-assignment" class="new-grade-assignment" id="${numId.length}" placeholder="Assignment Name">
    <button type="submit" class="submit-new-grade-assignment" id="${numId.length}">Submit</button>`
    
    nameItem.innerText = `Name: ${newStudent.name}`;
    courseItem.innerText = `Course: ${newStudent.course}`;
    termItem.innerText = `Term: ${newStudent.term}`;
    
    
    studentInfo.classList.add('student-info');
    studentInfo.id = `${numId.length}`
    studentInfo.appendChild(nameItem);
    studentInfo.appendChild(courseItem);
    studentInfo.appendChild(termItem);
    studentInfo.appendChild(addGradesSection);
    studentDisplay.append(studentInfo);
    document.querySelector('.app').append(studentDisplay)
    
    
}

btnNewStudentSubmitQuery.addEventListener('click', newStudentTile);


const createFromInputGrades = function(event) {
    console.log(event.target.id
    const newGradeQueryInternal = document.querySelector('.new-grade');
    const newGradeAssignmentInternal = document.querySelector('.new-grade-assignment');
    const btnSubmitNewGradePlusAssigmentToCurrentStudentInternal = document.querySelector('.submit-new-grade-assignment');
    grade = newGradeQueryInternal.value;
    assignment = newGradeAssignmentInternal.value;
    
    let newGradeAndAssignment = Grade(grade, assignment);
    
    const gradeDisplayItem = document.createElement('li');
    gradeDisplayItem.innerText = `${newGradeAndAssignment.assignment}: ${newGradeAndAssignment.score}`;
    studentInfo.appendChild(gradeDisplayItem);
    
}

btnSubmitNewGradePlusAssigmentToCurrentStudentInternal.addEventListener('click', createFromInputGrades);

