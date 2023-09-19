const validateCreateFluig = (req, res, next) => {
	const { body } = req;
    
	if(body.xml === undefined) {
		return res.status(400).json({message: "O campo xml é obrigatório!"});
	}
	if(body.xml === "") {
		return res.status(400).json({message: "O campo xml não pode ser vazio!"});
	}
	if(body.ordem === undefined) {
		return res.status(400).json({message: "O campo ordem é obrigatório!"});
	}
	if(body.ordem === "") {
		return res.status(400).json({message: "O campo ordem não pode ser vazio!"});
	}
	if(body.user === undefined) {
		return res.status(400).json({message: "O campo user é obrigatório!"});
	}
	if(body.user === "") {
		return res.status(400).json({message: "O campo user não pode ser vazio!"});
	}
	if(body.logResponse === undefined) {
		return res.status(400).json({message: "O campo logResponse é obrigatório!"});
	}
	if(body.logResponse === "") {
		return res.status(400).json({message: "O campo logResponse não pode ser vazio!"});
	}

	next();

};

const validateGetOrder = (req, res, next) => {
	const { body } = req;
    
	if(body.ordem === undefined) {
		return res.status(400).json({message: "O campo ordem é obrigatório!"});
	}
	if(body.ordem === "") {
		return res.status(400).json({message: "O campo ordem não pode ser vazio!"});
	}

	next();

};

module.exports = {
	validateCreateFluig,
	validateGetOrder
};