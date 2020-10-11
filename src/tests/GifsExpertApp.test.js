import { shallow } from "enzyme";
import { GifExpertApp } from "../GifExpertApp";


describe('pruebas en <GifExpertApp />', () => {

    test('debe mostarse correctamente', () => {

        const wrapper = shallow (<GifExpertApp />)
        expect(wrapper).toMatchSnapshot();
    })
    
    test('debe mostrar una lista de categorias', () => {

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length)
        
    });
    
    
});
