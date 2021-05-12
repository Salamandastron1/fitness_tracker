import { render, fireEvent } from '@testing-library/react-native';
import Weeks from './Weeks'

test('final numbers only go to two decimal places', () => {
    const oneRepMax = 100
    const mockFn = jest.fn();
    const { getAllByA11yLabel, getByText,  } = render(
        <Weeks oneRepMax={oneRepMax} />
    );

    const weight = getByText(/@/g)
    console.log(weight)
});