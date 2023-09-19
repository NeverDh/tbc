const fluigsModels = require("../models/fluigModels");

const getAll = async (req, res) => {

	const Allfluigs = await fluigsModels.getAll();

	return res.status(200).json(Allfluigs);
};

const getOrder = async (req, res) => {

	const fluigs = await fluigsModels.getOrder(req.body);

	return res.status(200).json(fluigs);
};

const createXML = async (req, res) => {

	const createdfluigs = await fluigsModels.createXML(req.body);

	return res.status(201).json(createdfluigs);
};

module.exports = {
	getAll,
	getOrder,
	createXML
};