import { render, screen, waitFor } from "@testing-library/react"
import ApiCallTest from "../components/api-testig"
import "@testing-library/jest-dom"
import React from "react"



describe('api testing file', () => {
    it('check list of users fetching', async () => {
        global.fetch = jest.fn(() => Promise.resolve({
            json: () => Promise.resolve([
                {
                    id: 1, name: 'teodor'
                },
                {
                    id: 2, name: 'teofana'
                }
            ])
        })
        )

        render(<ApiCallTest/>)

        expect(screen.getByText('Loading data...')).toBeInTheDocument()

        await waitFor(() => {
            expect(screen.getByText('teodor')).toBeInTheDocument()
            expect(screen.getByText('teofana')).toBeInTheDocument()

        })

        expect(screen.queryByText('Loading data...')).not.toBeInTheDocument()
    })
})