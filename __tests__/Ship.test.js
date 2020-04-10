/*globals describe it expect */
const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');
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
        //dover = new Port('Dover');
        //calais = new Port('Calais');
        itinerary = {
            ports:[dover, calais]
        };
        //itinerary = new Itinerary([dover, calais]);

        ship = new Ship(itinerary);
    });
        it('can be instantiated', () => {
        
            //const itinerary = new Itinerary([port]);
            //const ship = new Ship(itinerary);
            expect(ship).toBeInstanceOf(Object);
            });

        it('has a starting port', () => {
            
            const itinerary = new Itinerary([port]);
            const ship = new Ship(itinerary);
            expect(ship.currentPort).toEqual(port);
            });
        
        it('gets added to port on instantiation', () => {
            
           
            
            expect(dover.ships).toContain(ship);
            expect(dover.addShip).toHaveBeenCalledWith(ship);
            });
        
        it('can set sail from a port', () => {
            //const dover = new Port('Dover');
            //const calais = new Port('Calais');
            //const itinerary = new Itinerary([dover, calais]);
            //const ship = new Ship(itinerary);
            ship.setSail();
            expect(ship.currentPort).toBeFalsy();
            expect(dover.removeShip).toHaveBeenCalledWith(ship);
            //expect(dover.ships).not.toContain(ship);
            });

        it('can dock at a different port', () => {
            //const dover = new Port('Dover');
            //const calais = new Port('Calais');
            //const itinerary = new Itinerary([dover, calais])
            //const ship = new Ship(itinerary);
            ship.setSail();
            ship.dock();
            expect(ship.currentPort).toBe(calais);
            expect(ship.currentPort.addShip).toHaveBeenCalledWith(ship);
            //expect(calais.ships).toContain(ship);
            });

        /*it('gets added to port on instantiation', () => {
            const dover = new Port('Dover');
            const itinerary = new Itinerary([dover]);
            const ship = new Ship(itinerary);
            expect(port.addShip).toHaveBeenCalledWith(ship);
            //expect(dover.ships).toContain(ship);
            }); */

    });
});

describe('setSail', () => {
it('can\'t sail further than its itinerary', () => {
    const dover = new Port('Dover');
    const calais = new Port('Calais');
    //const itinerary = new Itinerary([dover, calais]);
    const itinerary = {ports: [dover, calais]};
    const ship = new Ship(itinerary);
    ship.setSail();
    ship.dock();
    expect(() => ship.setSail()).toThrowError('End of itinerary reached');
      });
});

/*describe('dock', () => {
    it('can dock at a different port', () => {
    const dover = new Port('Dover');
    const calais = new Port('Calais');
    const itinerary = new Itinerary([dover, calais])
    const ship = new Ship(itinerary);
    ship.setSail();
    ship.dock();
    expect(ship.currentPort).toBe(calais);
    expect(ship.currentPort.addShip).toHaveBeenCalledWith(ship);
    //expect(calais.ships).toContain(ship);
    });
}); */