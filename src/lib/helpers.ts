import bcrypt from 'bcrypt';
import { config } from 'dotenv';
import jwt from 'jsonwebtoken';
import { IUser } from '@domain/types';

config();

// Generate a random id
export async function getNanoid(): Promise<string> {
    const { nanoid } = await import('nanoid');
    return nanoid();
}

// Hash password with bcrypt
export async function hashPassword(password: string): Promise<string> {
    const salt: number = Number(process.env.BCRYPT_SALT);
    const hashedPassword: string = await bcrypt.hash(password, salt);

    return hashedPassword;
}

// Compare the password with the hashed password
export async function comparePassword(
    password: string,
    hashed: string
): Promise<boolean> {
    return await bcrypt.compare(password, hashed);
}

// Generate a token for the user
export async function generateToken(user: IUser) {
    const maxAge: number = 3600; // 1 hour
    const secret: string = process.env.JWT_SECRET || '';
    const token: string = jwt.sign(
        {
            id: user.id,
            username: user.username,
        },
        secret,
        {
            expiresIn: maxAge,
        }
    );
}
