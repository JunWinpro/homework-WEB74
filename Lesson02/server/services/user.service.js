const userData = require('./../utils/mock/user.mock')

const findUsersBy = (params={}) => {
    const {filters} = params;
    let findUsers = userData ? userData : [];
    console.log(findUsers)
    if (filters) {
        const {uname, fname, gender} = filters;
        if (uname) {
            findUsers = findUsers.filter((user) => user.uname === uname)
        }
        if (fname) {
            findUsers = findUsers.filter((user) => user.fname === fname)
        }
        if (gender) {
            findUsers = findUsers.filter((user) => user.gender === gender)
        }
    }
    return findUsers;
} 

const insertUser = (params={}) => {
    const {uname, fname, gender} = params;
    const findUser = findUsersBy({
        filters: {uname}
    })
    if (findUser && findUser.length > 0) {
        return 0;
    }
    userData.push({uname, fname, gender});
    return 1;
}

const updateUserBy = (params, id) => {
    const { uname, fname, gender } = params;
    const userIndex = userData.findIndex((user) => user.id === id);
    userData[userIndex].uname = uname;
    userData[userIndex].fname = fname;
    userData[userIndex].gender = gender;
    return 1;
};

const deleteUserBy = (params, id) => {
    const { uname, fname, gender } = params;
    const userIndex = userData.findIndex((user) => user.id === id);
    userData.splice(userIndex, 1);
    return 1;
}


module.exports = {
    insertUser,
    findUsersBy,
    updateUserBy,
    deleteUserBy
}