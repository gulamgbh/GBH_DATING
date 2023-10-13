const User = require('../models/user.Schema')
User.sync({ force: true })
exports.register = (req, res) => {
    const { number } = req.body;
    // const user = new User({ number });
    // user.save().then(() => {
    //     res.status(200).send({ message: "User registerd successfully." });
    // }).catch((errors) => res.status(400).send({ errors: "Failed to registerd." }));
    // const user = new User({ number });
    // user.save().then(() => {
    //     res.status(200).send({ message: "User registerd successfully." });
    // }).catch((errors) => res.status(400).send({ errors: "Failed to registerd." }));
    User.findOne({ number: number }).then((userExist) => {
        if (userExist) {
            return res.status(400).send({ errors: "Number already registerd." });
        } else {
            const user = new User({ number });
            user.save().then(() => {
                res.status(200).send({ message: "User registerd successfully." });
            }).catch((errors) => res.status(400).send({ errors: "Failed to registerd." }));
        }
    }).catch((error) => { res.status(400).send(error.message) });
}