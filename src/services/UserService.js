import axios from 'axios'

let users = [
    {
        id: 1,
        name: 'Joaquim Ferraz',
        email: 'joaquim@gmail.com',
        password: '123456',
        picture: 'https://picsum.photos/80',
        new: false,
        token: 'qweyu2u948jeisdj'
    },
    {
        id: 2,
        name: 'Bino Correa',
        email: 'bino@gmail.com',
        password: '123456',
        picture: 'https://picsum.photos/80',
        new: false,
        token: 'oiqhwe921312e0jd'
    },
    {
        id: 3,
        name: 'Pedro Matias',
        email: 'pedro@gmail.com',
        password: '123456',
        picture: 'https://picsum.photos/80',
        new: false,
        token: 'iuqh941y2381y983'
    },
    {
        id: 4,
        name: 'Paula Martinez',
        email: 'paula@gmail.com',
        password: '123456',
        picture: 'https://picsum.photos/80',
        new: false,
        token: 'kfnvoerui2309487'
    }
];

export default {

    authenticateUser(user) {
        return new Promise(resolve => {
            let currentUser = users.filter(usr => usr.email === user.email && usr.password === user.password)[0];
            resolve(currentUser && currentUser.token);
        });
    },

    registUser(user) {
        return new Promise(resolve => {
            user.new = true;
            users.push(user);
            resolve(user);
        });
    },

    getUserInfo(token) {
        return new Promise(resolve => {
            let user = users.filter(user => user.token === token)[0];
            
            resolve(user);
        });
    }
};