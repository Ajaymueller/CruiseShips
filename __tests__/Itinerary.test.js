/*globals describe it expect */
const Itinerary = require('../src/Itinerary.js')


describe('itinerary', () => {
    describe('can be instantiated with ports property', () => {
        let itinerary;
    beforeEach(() => {
          dover = {
            name: 'Dover',
            ships: []
          };
        
          calais = {
            name: 'Calais',
            ships: []
          };
        itinerary = new Itinerary([dover, calais]);
    })
    it('can be instantiated', () => {
        expect(itinerary).toBeInstanceOf(Object);
        });
    it('has a ports property', () => {
        expect(itinerary.ports).not.toBeUndefined();
        });
    it('has a ports property equal to ports declared in when Itinerary is instantaited', () => {
      expect(itinerary.ports).toEqual([dover, calais]);
    });
});
});