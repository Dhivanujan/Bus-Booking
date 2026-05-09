"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleLogin = exports.handleRegister = void 0;
const auth_service_1 = require("../services/auth.service");
const zod_1 = require("zod");
const AuthSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    phone: zod_1.z.string().optional(),
    name: zod_1.z.string().optional(),
    password: zod_1.z.string().min(6),
});
const handleRegister = async (req, res, next) => {
    try {
        const data = AuthSchema.parse(req.body);
        const result = await (0, auth_service_1.registerUser)(data);
        res.status(201).json({ success: true, data: result });
    }
    catch (error) {
        next(error);
    }
};
exports.handleRegister = handleRegister;
const handleLogin = async (req, res, next) => {
    try {
        const data = AuthSchema.parse(req.body);
        const result = await (0, auth_service_1.loginUser)(data);
        res.json({ success: true, data: result });
    }
    catch (error) {
        next(error);
    }
};
exports.handleLogin = handleLogin;
