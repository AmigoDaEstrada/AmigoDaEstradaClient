import axios from 'axios'

let channels = [
    {
        id: 'GENERAL',
        name: 'Canal Geral',
        users: [
            { id: 1, name: 'Joaquim Ferraz', picture: 'https://picsum.photos/80' },
            { id: 3, name: 'Pedro Matias', picture: 'https://picsum.photos/80' },
            { id: 2, name: 'Bino Correa', picture: 'https://picsum.photos/80' },
            { id: 4, name: 'Paula Martinez', picture: 'https://picsum.photos/80' },
        ]
    },
    {
        id: 1,
        name: 'Caminhoneiros de SC',
        users: [
            { id: 1, name: 'Joaquim Ferraz', picture: 'https://picsum.photos/80' },
            { id: 2, name: 'Bino Correa', picture: 'https://picsum.photos/80' },
        ]
    },
    {
        id: 2,
        name: 'Caminhoneiros de SJC',
        users: [
            { id: 1, name: 'Joaquim Ferraz', picture: 'https://picsum.photos/80' },
            { id: 3, name: 'Pedro Matias', picture: 'https://picsum.photos/80' },
        ]
    },
    {
        id: 3,
        name: 'Caminhoneiros de SP',
        users: [
            { id: 1, name: 'Joaquim Ferraz', picture: 'https://picsum.photos/80' },
            { id: 2, name: 'Bino Correa', picture: 'https://picsum.photos/80' },
            { id: 4, name: 'Paula Martinez', picture: 'https://picsum.photos/80' },
        ]
    },
    {
        id: 4,
        name: 'Caminhoneiros de MG',
        users: [
            { id: 1, name: 'Joaquim Ferraz', picture: 'https://picsum.photos/80' },
            { id: 4, name: 'Paula Martinez', picture: 'https://picsum.photos/80' },
        ]
    },
    {
        id: 5,
        name: 'Caminhoneiros de PR',
        users: [
            { id: 1, name: 'Joaquim Ferraz', picture: 'https://picsum.photos/80' }
        ]
    },
];

export default {

    getGeneralChannel() {
        return new Promise(resolve => {
            resolve(channels.filter(channel => channel.id === 'GENERAL')[0]);
        });
    },

    getChannelsByUserId(userId) {
        return new Promise(resolve => {
            resolve(channels.filter(channel => channel.id != 'GENERAL' && channel.users.some(user => user.id === userId)));
        });
    }
};