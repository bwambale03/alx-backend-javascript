/**
 * representation of a holberton course
 */
class HolbertonCourse{

/**
 * creates a new @see {@link HolbertonCourse}
 * 
 * @param {name} name - the height of an individual
 * @param {length} length - how long te cours is (in months)
 * @param {students} students - the length of students in the course
 */

    constructor(name, length, students){
        this._name = name
        this._length = length
        this._students= students
    }


  /**
   * Gets the name of this course.
   */
  get name(){
    return this._name;
  }

  /**
   * sets te name of this course
   */
  set name(value){
    if (typeof value != String){
        throw new TypeError('value must be a string')
    }
    return this._name
  }
  get length(){
    return this._length
  }

  /**
   * sets the length of this course in (months)
   */
  set length(value){
    if (typeof value != Number){
        throw new TypeError('value must be a number!')
    }
    this._value  
  }
  /**
   * gets the names of students
   */
  get students(){
    return this._students 
  }
  /**
   * gets the name of the student in this course
   */
  set students(value){
    if(!value instanceof Array){
        throw new TypeError('students must be an Array of Strings!')
    }
    if(!value.every((student)=> typeof student === 'string')){
        throw new TypeError('students must be an array of strings')
    }
    this._students = value
  }

}
