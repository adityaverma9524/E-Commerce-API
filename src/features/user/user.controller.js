import userModel from "./user.model";

export default  class userConstroller {
    signUp(req, res) {
        const {name, email, password, type} = req.body;
        const user = userModel.SignUp(name, email, password, type);
        res.status(201).send(user);
    }

    signIn(req, res) {
        const result = userModel.SignIn(req.body.email, req.body.password);
        if(!result) {
            return res.status(400).send('Invalid Credentials.')
        }
        else {
            res.send('Login Successfull')
        }
    }
}