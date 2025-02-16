import Database from 'better-sqlite3';

const db = new Database('quizz.db');

export function initDatabase() {
    db.exec(
        'CREATE TABLE IF NOT EXISTS users (id TEXT, username TEXT UNIQUE, password TEXT)'
    );
    db.exec(
        'CREATE TABLE IF NOT EXISTS scores (id TEXT, value INTEGER, date DATE, user_id TEXT, subject_id TEXT, subject_type_id INTEGER)'
    );
    db.exec(
        'CREATE TABLE IF NOT EXISTS subjects (id INTEGER, name TEXT)'
    );
    db.exec(
        'CREATE TABLE IF NOT EXISTS types (id INTEGER, name TEXT, subject_id INTEGER)'
    );
    console.log('Database initialized');
}
