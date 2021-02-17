import { shallow } from 'enzyme';
import {findByTestAtrr, checkProps } from '../../utils/index';
import Button from './Button';

describe('Button compontent', () => {

    describe('Checking PropTypes', () => {

        it('Should NOT throw a warning', () => {
            const expectedProps = {
                buttonText: 'example button text',
                emitEvent: () => {

                }
            };
            const propsError = checkProps(Button, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });

    describe('Button component renders', () => {
        
        let wrapper;
        let mockFunc;

        beforeEach(() => {
            mockFunc = jest.fn();
            const props = {
                buttonText: 'example button text',
                emitEvent: mockFunc
            };
            wrapper = shallow(<Button {...props} />);
        });

        it('Should render a Button', () => {
            const button = findByTestAtrr(wrapper, 'buttonComponent');
            expect(button.length).toBe(1);
        });

        it('Should emit callback on click event', () => {
            const button = findByTestAtrr(wrapper, 'buttonComponent');
            button.simulate('click');
            const callback = mockFunc.mock.calls.length;
            expect(callback).toBe(1);
        })

    });
});