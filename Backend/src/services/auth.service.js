"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = void 0;
const prisma_1 = require("../lib/prisma");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_1 = require("../config/env");
const registerUser = async (data) => {
    const hashedPassword = await bcrypt_1.default.hash(data.password, env_1.env.BCRYPT_SALT_ROUNDS);
    const user = await prisma_1.prisma.user.create({
        data: {
            email: data.email,
            phone: data.phone,
            name: data.name,
            password: hashedPassword,
        }
    });
    const token = jsonwebtoken_1.default.sign({ id: user.id, role: user.role }, env_1.env.JWT_SECRET, { expiresIn: env_1.env.JWT_EXPIRES_IN });
    return { user: { id: user.id, email: user.email, name: user.name, role: user.role }, token };
};
exports.registerUser = registerUser;
const loginUser = async (data) => {
    const user = await prisma_1.prisma.user.findUnique({ where: { email: data.email } });
    if (!user)
        throw { statusCode: 401, message: 'Invalid credentials' };
    const isMatch = await bcrypt_1.default.compare(data.password, user.password);
    if (!isMatch)
        throw { statusCode: 401, message: 'Invalid credentials' };
    const token = jsonwebtoken_1.default.sign({ id: user.id, role: user.role }, env_1.env.JWT_SECRET, { expiresIn: env_1.env.JWT_EXPIRES_IN });
    return { user: { id: user.id, email: user.email, name: user.name, role: user.role }, token };
};
exports.loginUser = loginUser;
