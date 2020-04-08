/*globals describe it expect */
const Port = require('../src/Port.js');

describe('port', () => {
    it('can be instantiated', () => {
        expect(new Port).toBeInstanceOf(Object);
    });
    it('has a name property', () => {
        const port = new Port('Calais')
        expect(port.name).toBe('Calais');
    });
});

describe('addShip', () => {
    it('adds ship to ship property when ship docks at port', () => {
    const port = new Port('Dover')
    //const ship = {};
    const ship = jest.fn();
    port.addShip(ship);
    expect(port.ships).toContain(ship);
    });
});

describe('removeShip', () => {
    it('can remove a ship', () => {
    const port = new Port('Dover');
    const titanic = jest.fn();
    const queenMary = jest.fn();
    port.addShip(titanic);
    port.addShip(queenMary);
    port.removeShip(queenMary);
    expect(port.ships).toEqual([titanic]);
    });
});
