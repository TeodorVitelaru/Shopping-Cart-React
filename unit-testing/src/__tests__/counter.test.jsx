import { fireEvent, render } from "@testing-library/react"
import HelloWorld from "../components/helloWorld"
import "@testing-library/jest-dom"
import Counter from "../components/counter"


test('test counter logic', () => {
    const {getByText} = render(<Counter/>)
    const getCounterText = getByText('Count is: 0')
    const getButtonElement = getByText('Click')

    fireEvent.click(getButtonElement)
    expect(getCounterText.textContent).toBe('Count is: 1')

    fireEvent.click(getButtonElement)
    expect(getCounterText.textContent).toBe('Count is: 2')

})