const Itinerary = require('../src/Itinerary.js')
const Port = require('../src/Port.js');

describe('itinerary', () => {
    it('can be instantiated', () => {
    expect(new Itinerary).toBeInstanceOf(Object);
    });

   /* it('has a ports property', () => {
    const dover = new Port('Dover');
    const calais = new Port('Calais')
    const itinerary = new Itinerary([dover, calais]);
    expect(itinerary.ports).toEqual([dover, calais]);
    }); */

    it('has a ports property', () => {
    const dover = jest.fn('Dover');
    const calais = jest.fn('Calais')
    const itinerary = new Itinerary([dover, calais]);
    expect(itinerary.ports).toEqual([dover, calais]);
    });
    
});