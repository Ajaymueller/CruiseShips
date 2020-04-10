/*globals describe it expect */
const Itinerary = require('../src/Itinerary.js')


describe('itinerary', () => {
    describe('can be instantiated with ports property', () => {
        let itinerary;
        let port;
    beforeEach(() => {
        itinerary = new Itinerary;

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
    })
    it('can be instantiated', () => {
        expect(itinerary).toBeInstanceOf(Object);
        });
    it('has a ports property', () => {
        const dover = jest.fn('Dover');
        const calais = jest.fn('Calais')
        const itinerary = new Itinerary([dover, calais]);
        expect(itinerary.ports).toEqual([dover, calais]);
        });
})
});