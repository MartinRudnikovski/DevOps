import userRepository from "../repository/UserRepository";

const userService = {
    reg: (username, name, surname) => {
        return userRepository.register(username, name, surname);
    },

    getUser: (username) => {
        return userRepository.getUser(username);
    },
}

export default userService;