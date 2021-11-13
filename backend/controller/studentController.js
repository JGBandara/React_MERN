const Student = require('../models/student');

//get all student
const getAllStudents = async (req,res) => {
    try{
        const students = await Student.find();
        if(!students) throw Error('No Item');
        res.status(200).json(students);
    }
    catch(err){
        res.status(400).json({msg:err});
    }
}

//create student
const createStudent = async (req,res) => {
    const newStudent = new Student(req.body);
    const stud = await newStudent.save();
    res.send(stud);
}


//delete student
const deletStudent = async (req,res) => {
    const {rollNo} = req.query;
    const stud = await Student.deleteOne({rollNo:+rollNo});
    res.send(stud);
}

module.exports = {getAllStudents,createStudent,deletStudent}