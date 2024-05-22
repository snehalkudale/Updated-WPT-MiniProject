const User = require('../Models/user-model');

const home = async (req, res) => {
    try {
        res.status(200).send({ message: 'Welcome to Home Page' });
    } catch (error) {
        console.log('Error');
    }
}

const register = async (req, res) => {
    try {
        console.log(req.body);
        const { username, email, password } = req.body;

        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(400).json({ message: "Email already exist" });
        }

        const userCreated = await User.create({ username, email, password });

        res.status(201).send({
            message: "registration successful",
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString()
        });

    } catch (error) {
        res.status(400).send({ message: "page not found" });
    }
};

const login = async (req, res) => {
    try {
        console.log(req.body);
        const { email, password } = req.body;

        const userExist = await User.findOne({ email: email });
        console.log(userExist);

        if (!userExist) {
            return res.status(400).json({ message: "User does not exist" });
        }

        const isMatch = password === userExist.password;
        console.log(`Password match: ${isMatch}`);

        if (isMatch) {
            const token = await userExist.generateToken();
            res.status(200).json({
                message: "login successful",
                token: token,
                userId: userExist._id.toString(),
            });
        } else {
            res.status(401).json({ message: "Invalid username or password" });
        }
    } catch (error) {
        console.error(error); // Log the error for debugging purposes
        res.status(500).send({ message: "Internal Server Error" });
    }
}

const update = async (req, res) => {
    try {
        console.log(req.body);
        const { username, email, password } = req.body;

        const updateData = { username, email, password };

        const user = await User.findByIdAndUpdate(req.params.id, updateData, { new: true });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).send({ message: "Data updated successfully", user });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send({ message: "Internal Server Error" });
    }
}

const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).send({ message: "User deleted successfully" });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send({ message: "Internal Server Error" });
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send({ message: "Internal Server Error" });
    }
}

const forgotPassword = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }

        user.password = password;
        await user.save();

        res.status(200).send({ message: 'Password updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
};

module.exports = { home, register, login, update, deleteUser, getAllUsers, forgotPassword };
