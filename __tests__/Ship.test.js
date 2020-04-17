/*globals describe it expect */
const Ship = require('../src/Ship.js');
const Itinerary = require('../src/Itinerary.js');


describe('ship', () => {
    describe('with ports and an itinerary', () => {
        let dover;
        let calais;
        let itinerary;
        let ship;
        let port;
    beforeEach(() => {
        port = {
            removeShip: jest.fn(),
            addShip: jest.fn(),
            };
        
          dover = {
            ...port,
            name: 'Dover',
            ships: []
          };
        
          calais = {
            ...port,
            name: 'Calais',
            ships: []
          };
        itinerary = {
            ports:[dover, calais]
        };

        ship = new Ship(itinerary);
    });
        it('can be instantiated', () => {
            expect(ship).toBeInstanceOf(Object);
            });

        it('has a starting port', () => {
            const itinerary = new Itinerary([port]);
            const ship = new Ship(itinerary);
            expect(ship.currentPort).toEqual(port);
            });
        /*it('gets added to port on instantiation', () => {
            expect(dover.ships).toContain(ship);
            expect(dover.addShip).toHaveBeenCalledWith(ship);
            });*/
        
        it('can set sail from a port', () => {
            ship.setSail();
            expect(ship.currentPort).toBeFalsy();
            expect(dover.removeShip).toHaveBeenCalledWith(ship);
            });

        it('can dock at a different port', () => {
            ship.setSail();
            ship.dock();
            expect(ship.currentPort).toBe(calais);
            expect(ship.currentPort.addShip).toHaveBeenCalledWith(ship);
            });

        it('can\'t sail further than its itinerary', () => {
            ship.setSail();
            ship.dock();
            expect(() => ship.setSail()).toThrowError('End of itinerary reached');
            });   
    });
});