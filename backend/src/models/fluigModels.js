const connection = require("./connection");

const getAll = async () => {
	const Allfluigs = await connection.execute("SELECT * FROM fluigs");
	return Allfluigs[0];

};

const getOrder = async (order) => {
	const ordem = order.ordem;
	const fluigs = await connection.execute(`SELECT * FROM fluigs WHERE ordem = '${ordem}'`);
	return fluigs[0];

};

const createXML = async (post) => {
	const {xml, ordem, user, logResponse} = post;
	const createdfluigs = await connection.execute(`INSERT INTO fluigs(xml, ordem, user, logResponse) VALUES ('${xml}', '${ordem}', '${user}', '${logResponse}')`);
	return {insertId: createdfluigs[0].insertId};

};

module.exports = {
	getAll,
	getOrder,
	createXML
};