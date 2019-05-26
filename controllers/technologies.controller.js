'use strict';
const TechsService = require('../services/technologies');

exports.getTechs = async (req, res, next) => {
    try {
        const techs = await TechsService.getTechs();
        return res.status(200).json(techs);
    } catch (e) {
        return res.status(404).json({ message: e.message });
    }
};

exports.createTech = async (req, res, next) => {
    const technologies = req.body;
    // const recipe = { name, time, id };

    try {
        const createdTechId = await TechsService.createTech(technologies);
        return res.status(200).json(createdTechId);
    } catch (e) {
        return res.status(404).json({ message: e.message });
    }
};

/*
* {
      name: 'TypeScript',
      time: 15,
      id: this.generateId()
    }

    */
