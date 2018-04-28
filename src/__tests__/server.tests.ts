import { createServer } from '../server';

describe('server', () => {

    it('returns a server', () => {
        const res = createServer();
        expect(res.server).toBe(true);
    });

});
