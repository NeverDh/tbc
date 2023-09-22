const fluigsModels = require("../models/fluigModels");

const getAll = async (req, res) => {

	const Allfluigs = await fluigsModels.getAll();

	return Allfluigs.length > 0 ? res.status(200).json(Allfluigs) : res.status(200).json({message: "Sem dados!"});
};

const getOrder = async (req, res) => {

	const fluigs = await fluigsModels.getOrder(req.body);

	return fluigs.length > 0 ? res.status(200).json(fluigs) : res.status(200).json({message: "Sem dados!"});
};

const createXML = async (req, res) => {

	const createdfluigs = await fluigsModels.createXML(req.body);
	return res.status(200).json(createdfluigs);
};

module.exports = {
	getAll,
	getOrder,
	createXML
};