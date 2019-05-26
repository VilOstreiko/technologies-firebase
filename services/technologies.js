'use strict';
const db = require('../firebase-database').database();
const HelperService = require('./helper.service');

exports.getTechs = async () => {
    try {
        const techs = await db.ref(`technologies`).once('value');
        return HelperService.objectToArray(techs.val());
    } catch (e) {
        throw Error('Could not fetch tech');
    }
};

exports.createTech = async (technologies) => {
    const createdTechs = [];

    technologies.forEach(async (technology) => {
        try {

            const id = db.ref('technologies').push().key;
            const {
                name,
                time,
                id: techId
            } = technology;

            const createdTech = await db.ref(`technologies/${ id }`).set({
                id: techId, name, time
            });
            createdTechs.push(createdTech);
        } catch (e) {
            throw Error('Could not create tech');
        }
    });

    return createdTechs;

};
