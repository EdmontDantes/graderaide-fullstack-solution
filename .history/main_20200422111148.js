/******************
 * YOUR CODE HERE *
 ******************/

const Grade = (assignment, score) => {
    return {
      assignment,
      score,
    }
  }
  
  const Term = (hours) => {
    return {
      hours,
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
      terms: [],
  
      addTerm: function(hours) {
        const term = Term(hours);
        this.terms.push(term);
      }
    }
  }
  
  const Student = (name, course, term = 1) => {
    return {
      name,
      course,
      term,
      courses: [],
  
      addCourse: function(name) {
        this.courses.push(Course(name));
      },
  
      getAverage: function(courseToFind = this.course, termIndex = this.term - 1) {
        let foundCourse;
        for (const course of this.courses) {
          if (course.name === courseToFind) {
            foundCourse = course;
          }
        }
  
        let sum = 0;
        const grades = foundCourse.terms[termIndex].grades;
        for (const grade of grades) {
          sum += grade.score;
        }
  
        return sum / grades.length;
      },
    }
  }
  