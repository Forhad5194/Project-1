import { Request, Response } from 'express';
import { StudentService } from './student.services';
import studentSchema from './studentValidatesion';

const createStudent = async (req: Request, res: Response) => {
  try {
    

    const { student: studentData } = req.body;

    const { error } = studentSchema.validate(studentData);
    const result = await StudentService.createStudentIntoDB(studentData);

    if (error) {
      res.status(500).json({
        success: true,
        message: 'Student is Retrived successfully',
        error: error.details,
      });
    }
  

    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await StudentService.getStudentFromDB();
    res.status(200).json({
      success: true,
      message: 'Student are Retrived successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getOneStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentService.getOneStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Student is Retrived successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const StudentController = {
  createStudent,
  getAllStudent,
  getOneStudent,
};
