import Joi from "joi";

const guardianValidateSchema = Joi.object({
    fatherName: Joi.string().required(),
    fatherOccupation: Joi.string().required(),
    fatherContactNo: Joi.string().required(),
    motherName: Joi.string().required(),
    motherOccupation: Joi.string().required(),
    motherContactNo: Joi.string().required(),
  });

  // UserName schema
  const userNameValidateSchema = Joi.object({
    fristName: Joi.string().required(),
    maddileName: Joi.string().required(),
    lastName: Joi.string().required(),
  });

  // LocalGuardian schema
  const localguardianValidateSchema = Joi.object({
    name: Joi.string().required(),
    occupation: Joi.string().required(),
    contactNo: Joi.string().required(),
    address: Joi.string().required(),
  });

  // Student schema
  const studentSchema = Joi.object({
    id: Joi.string().required(),
    name: userNameValidateSchema.required(),
    grnder: Joi.string().valid('male', 'female').required(),
    dateOfBirth: Joi.string().isoDate(),
    email: Joi.string().email().required(),
    contactNo: Joi.string().required(),
    emergencyContact: Joi.string().required(),
    bloodGroup: Joi.string().valid(
      'A+',
      'A-',
      'B+',
      'B-',
      'O+',
      'O-',
      'AB+',
      'AB-',
    ),
    presentAddress: Joi.string().required(),
    permanentAddress: Joi.string().required(),
    guardian: guardianValidateSchema.required(),
    localGuardian: localguardianValidateSchema.required(),
    profileImg: Joi.string().required(),
    isActive: Joi.string().valid('active', 'blacked').required(),
  });



  export default studentSchema;