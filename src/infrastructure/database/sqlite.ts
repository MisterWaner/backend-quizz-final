import Database from 'better-sqlite3';

const db = new Database('quizz.db');

db.exec(`
    CREATE TABLE IF NOT EXISTS users (id TEXT, username TEXT UNIQUE, password TEXT);
    CREATE TABLE IF NOT EXISTS scores (id TEXT, value INTEGER, date DATE, user_id TEXT, branch_id INTEGER);
    CREATE TABLE IF NOT EXISTS subjects (id INTEGER, name TEXT);
    CREATE TABLE IF NOT EXISTS branches (id INTEGER, name TEXT, subject_id INTEGER);
`);

console.log('Database initialized');

export { db };
