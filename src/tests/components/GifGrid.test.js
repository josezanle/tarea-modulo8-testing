import React from 'react';
import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');


describe('pruebas en el componente <GifGrid />', () => {

    const category = 'one punch';

    test('debe mostrarse corretamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading:true
        });
        
        const wrapper = shallow (<GifGrid category={category} /> );
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {

        const gifs = [
        
        {
            id:'ABC',
            url:'https://localhost/cualquier/cosa.jpg',
            title:'lo que sea'
        },

        {
            id: '123',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'lo que sea'
        }
    ];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category} />);

        // expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
        
    })
    
    
    
});
