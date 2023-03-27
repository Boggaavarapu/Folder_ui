import React from 'react'
import axios from "axios";
import { createMemoryHistory } from "@remix-run/router";
import { render, cleanup ,screen} from '@testing-library/react'
import {Router} from "react-router-dom"
import View1 from './View1';

jest.mock('axios',()=>{
        return{
            get:jest.fn(()=>Promise.resolve({data:[] }))
         };
 })
describe('ReadFolders component', () => {
  afterEach(cleanup)

  it('should display the correct number of folders based on the mocked response', async () => {
   
   
    const mockedResponse = [
      { id: 1, fname: 'file1' },
      { id: 2, fname: 'file2' },

      {id: 3, fname: 'file3' }
    ]
    axios.get.mockResolvedValue({ data: mockedResponse })
    const history = createMemoryHistory();
    
    const { findAllByTestId } =render(<Router location={history.location} navigator={history}><View1/></Router>)

    const folderElements = await screen.findAllByTestId("xyz_count")

    expect(folderElements.length).toBe(mockedResponse.length)
  })
})