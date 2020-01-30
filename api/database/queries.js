const pool = require('./credentials.js');
const moment = require('moment');

const getEvents = (request, response) => {
    pool.query('SELECT * FROM events ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    })
};

const getEventById = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query('SELECT * FROM events WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    })
};

const createEvent = (request, response) => {
    const { first_name, last_name, email, date } = request.body;
    // REGEX FOR EMAIL VALIDATION
    const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    // FIRST_NAME VALIDATION
    if(first_name.trim().length === 0) {
        throw new Error('You did not give first name at all or it contains space bars only!');
    }

    // LAST_NAME VALIDATION
    else if (last_name.trim().length === 0) {
        throw new Error('You did not give last name at all or it contains space bars only!');
    }

    // EMAIL VALIDATION
    else if (email.trim().length === 0) {
        throw new Error('You did not give email at all or it contains space bars only!');
    }

    else if (!emailRegexp.test(email)) {
        throw new Error('Email wrong format!');
    }

    // DATE VALIDATION
    else if (date.trim().length === 0) {
        throw new Error('You did not give date at all or it contains space bars only!');
    }

    else if (!moment(request.body.date, "YYYY/MM/DD").isValid()) {
        throw new Error('Wrong date format');
    }

    // IF NO ERROR -> ADD EVENT TO DB
    pool.query('INSERT INTO events (first_name, last_name, email, date) VALUES ($1, $2, $3, $4)', [first_name, last_name, email, date], (error, results) => {
        if (error) {
            throw error;
        }
        response.redirect('http://localhost:3000');
    })
};

module.exports = {
    getEvents,
    createEvent,
    getEventById,
};