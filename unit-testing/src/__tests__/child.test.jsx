import { fireEvent, render } from "@testing-library/react"
import HelloWorld from "../components/helloWorld"
import "@testing-library/jest-dom"
import Counter from "../components/counter"
import Child from "../components/child"


test('check props value', () => {
    const {getByTestId} = render(<Child count={500}/>)
    const getElement = getByTestId('child-count-value')


    expect(getElement.textContent).toBe('500')


}
)