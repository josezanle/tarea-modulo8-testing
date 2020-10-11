import React from 'react';
import '@testing-library/jest-dom';

const { shallow } = require("enzyme");
const { AddCategory } = require("../../components/AddCategory");


describe('pruebas en <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);


    beforeEach(() =>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />)
    })

    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'hola mundo';

        input.simulate('change',{target:{value}});

        expect(wrapper.find('p').text().trim()).toBe(value);
    });

    test('no debe postear la informacion con submit', () => {
        wrapper.find('form').simulate('sumit',{preventDefault(){}});

        expect ( setCategories ).not.toHaveBeenCalled();
    });

    test('debe llamar el setCategories y limpiar la caja de texto', () => {
        const value = 'hola mundo'
        
        //1-simular el inputChange
        wrapper.find('input').simulate('change',{target:{value}})

        //2-simuar el submit
        wrapper.find('form').simulate('submit',{preventDefault(){}})

        //3-setCategories se debe de haber llamado
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

        //4-el valor deb input debe estar ''
        expect(wrapper.find('input').prop('value')).toBe('');
    });
    
    
    
    
    
});
