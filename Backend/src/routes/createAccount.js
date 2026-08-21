const SignUpSchema = require("../models/SignupSchema");


exports.createAccount = async (req, res) => {
    const {
        UserName,
        fullname,
        CustomerID,
        Password,
        confirmPassword,
        country,
        mobileNumber,
    } = req.body;

    try {
        const userAccountCreation = new SignUpSchema({
            UserName,
            fullname,
            CustomerID,
            Password,
            confirmPassword,
            country,
            mobileNumber,
        });



        await userAccountCreation.save();

          const user =userAccountCreation;

        res.json({
            message: "user created succesfully", data: {
                _id:userAccountCreation._id,
                userName: userAccountCreation.UserName,
                fullname: userAccountCreation.fullname,
                CustomerID: userAccountCreation.CustomerID,
                country: userAccountCreation.country,
                mobileNumber: userAccountCreation.mobileNumber
            }
        });
    } catch (error) {
        console.log(error);
    }
};