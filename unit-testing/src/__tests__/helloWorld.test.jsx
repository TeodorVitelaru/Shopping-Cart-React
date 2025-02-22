import { render } from "@testing-library/react"
import HelloWorld from "../components/helloWorld"
import "@testing-library/jest-dom"

test("render hello world text", ()=>{
    const { getByText } = render(<HelloWorld/>)

    const checkHelloWorldText = getByText("Hello world")

    expect(checkHelloWorldText).toBeInTheDocument()
 
})



test("ceck name by test id", () => {
    const { getByTestId } = render(<HelloWorld/>)
    const getElement = getByTestId('name')

    expect(getElement.textContent).toBe('Teodor Vitelaru')

}
)