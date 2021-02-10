import { shallow } from 'enzyme';
import Card from './Card';
import {findByTestAtrr, checkProps } from '../../utils/index';

describe('Card compontent', () => {

    describe('Checking PropTypes', () => {

        it('Should NOT throw a warning', () => {
            const expectedProps = {
                title: 'example title',
                post: 'some text'
            };
            const propsError = checkProps(Card, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });

    describe('Card component renders', () => {

        let wrapper;
        beforeEach(() => {
            const props ={
                title: 'example title',
                post: 'some text'
            };
            wrapper = shallow(<Card {...props} />);
        });

        it('Should render without error', () => {
            const component = findByTestAtrr(wrapper, 'cardComponent');
            expect(component.length).toBe(1);
        });

        it('Should render a title', () => {
            const title = findByTestAtrr(wrapper, 'componentTitle');
            expect(title.length).toBe(1);
        });

        it("should render a post", () => {
            const post = findByTestAtrr(wrapper, 'componentPost');
            expect(post.length).toBe(1);
        });
    });
});