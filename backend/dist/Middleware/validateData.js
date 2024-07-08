"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateData = (schema) => (req, res, next) => {
    const dataToValidate = Object.assign({}, req.body, req.query, req.params);
    const validationResult = schema.validate(dataToValidate);
    if (validationResult.error) {
        return res.status(400).json({ error: validationResult.error.details[0].message });
    }
    next();
};
exports.default = validateData;
