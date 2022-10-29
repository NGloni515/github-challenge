import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../../pages'

describe('Body', () => {
    beforeEach(()=>{
      global.fetch = jest.fn(()=>Promise.resolve({
        json: ()=>Promise.resolve({})
      })) as jest.Mock;
    });
  
    it('Match snapshot Home', async() => {
      const {asFragment} = render(<Home/>)
      expect(asFragment()).toMatchSnapshot()
    })

    it('renders a Table', async() => {
      const {getByTestId} = render(<Home/>)
      const table = getByTestId("commits-table")
      expect(table).toBeInTheDocument()
    })
  
    it('renders a Select', async() => {
      const {getByTestId} = render(<Home/>)
      const select = getByTestId("branches-select")
      expect(select).toBeInTheDocument()
    })
})