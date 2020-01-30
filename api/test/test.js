const supertest = require('supertest');
const app = require('../app');
const request = supertest(app);


describe('/api/events', () => {
    it('responds with json containing list of all events', async done => {
        const response = await request.get('/api/events');
        expect(response.status).toBe(200);
        done();
    });

    it('returns response in json format', async done => {
        const response = await request.get('/api/events');
        expect(response.type).toBe('application/json');
        done();
    });

    it('adds event with POST request', async done => {
        await request.post('/api/events')
            .send({
                "first_name": "Tomasz",
                "last_name": "Kłopot",
                "email": "kacper.mitkowski@gmail.com",
                "date": "2020-01-08T23:00:00.000Z"
            });

        const response = await request.get('/api/events');
        expect(response.body.length > 0);
        done();
    });

    it('returns existing event', async done => {
        await request.post('/api/events')
            .send({
                "first_name": "Tomasz",
                "last_name": "Kłopot",
                "email": "kacper.mitkowski@gmail.com",
                "date": "2020-01-08T23:00:00.000Z"
            });

        const response = await request.get('/api/events/1');
        expect(response.body.length).toBeGreaterThanOrEqual(1);
        done();
    });

    it('GET request for non-existing event returns 404', async done => {
        const response = await request.get('/api/events/99999999');
        expect(response.body.length).toBeLessThanOrEqual(0);
        done();
    });
});