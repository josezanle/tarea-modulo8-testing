import React from 'react';

const { shallow } = require("enzyme")
const { GifGridItem } = require("../../components/GifGridItem")

describe('pruebas en <GifGridItem />' , () =>{

const title = 'un titulo';
const url = 'https://localhost/algo.jpg';
const wrapper = shallow(<GifGridItem title={title} url={url} />)


    test('debe mostrar el componente corrctamente',() =>{
        expect(wrapper).toMatchSnapshot();
    })
    test('debe tener un parrafo con el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });
    test('debe tener la imagen igual al url y alt de los props ', () => {
        const img = wrapper.find('img');
        expect(img.prop('alt')).toBe(title);
        
    })
    test('debe tener animate__fadeIn', () => {

        const div = wrapper.find('div');
        const className = div.prop('className');
        
        expect(className.includes('animate__fadeIn')).toBe(true);
        
    });
    
    
    
})