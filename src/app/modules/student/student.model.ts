import { Schema, model} from 'mongoose';
import { Guardian, LocalGuardian,  Student,  UserName } from './student.interface';
import validator from 'validator';

const userNameSchema = new Schema<UserName>({
    
        fristName: {
            type: String,
            required: true,
            validate: {
                validator: function(value: string){
                    const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1)
                    return firstNameStr === value;
                },
                message: '{VALUE} is not a capitalized formatted '
            }
        },
        maddileName:{
            type: String,
            
        },
        lastName:{
            type: String,
            required: true,
            validate: {
                validator:(value : string) => validator.isAlpha(value),
                message: '{VALUE} is not a valid.'
            }
        },

    
});


const guardianSchema = new Schema<Guardian>(
    {
        fatherName:{
            type: String,
            required: true
        },
        fatherOccupation:{
            type: String,
            required: true
        },
        fatherContactNo:{
            type: String,
            required: true
        },
        motherName: {
            type: String,
            required: true
        },
        motherOccupation: {
            type: String,
            required: true
        },
        motherContactNo: {
            type: String,
            required: true
        },

    }
);


const localGuardianSchema = new Schema<LocalGuardian>(
    {
        name:{
            type: String,
            required: true
        },
        occupation:{
            type: String,
            required: true
        },
        contactNo: {
            type: String,
            required: true
        },
        address:{
            type: String,
            required: true
        }
    
    }
);



const studentSchema = new Schema<Student>({
    id: { type: String, required: true, unique: true},
    name: {
        type: userNameSchema,
        trim: true,
        required:[ true, 'Name is required']
    },
    grnder:{
        type: String,
        enum: {
            values:['male', 'female' ,'other'],
            message: "please selected grnder fuild."
        },
        required: true,
    },
    dateOfBirth: { type: String},
    email: {
        unique: true,
        type: String,
        required: true,
        validate: {
            validator: (value:string) => validator.isEmail(value),
            message: '{VALUE} is not a valid email',
        }
    },
    contactNo:{
        type: String,
        required: true
    },
    emergencyContact: {
        type: String,
        required: true
    },
    bloodGroup: {
        type: String,
        enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
    },
    presentAddress: {
        type: String,
        required: true
    },
    permanentAddress: {
        type: String,
        required: true
    },
    guardian: {
        type: guardianSchema,
        required: true,
    },
    localGuardian:{
        type: localGuardianSchema,
        required: [true, 'Guardian Information Required']
    },
     profileImg: {
        type: String
     },
     isActive:{
        type: String,
        enum: ['active', 'blacked'],
        default: 'active'
     }
});






export const StudentModel  = model<Student>('Student' , studentSchema)