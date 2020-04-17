/*globals describe it expect */
const Port = require('../src/Port.js');

describe('port', () => {
    describe('can be instantiated and has a name property', () => {
        let port;
        let titanic;
        let queenMary;
        let ship;
    beforeEach(() => {
        port = new Port;
        titanic = jest.fn();
        queenMary = jest.fn();
        ship = jest.fn();
    })
    it('can be instantiated', () => {
        expect(port).toBeInstanceOf(Object);
    });
    it('has a name property', () => {
        const port = new Port('Calais')
        expect(port.name).toBe('Calais');
    });
    it('can remove a ship', () => {
        const port = new Port('Dover');
        port.addShip(titanic);
        port.addShip(queenMary);
        port.removeShip(queenMary);
        expect(port.ships).toEqual([titanic]);
        });
    it('adds ship to ship property when ship docks at port', () => {
        const port = new Port('Dover')
        port.addShip(ship);
        expect(port.ships).toContain(ship);
        });
    })
});
