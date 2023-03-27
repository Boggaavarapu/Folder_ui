import React from 'react'
import axios from "axios";
import { createMemoryHistory } from "@remix-run/router";
import { render, cleanup ,screen} from '@testing-library/react'
import {Router} from "react-router-dom"
import OpenFolder from './OpenFolder';

jest.mock('axios',()=>{
        return{
            get:jest.fn(()=>Promise.resolve({data:[] }))
         };
 })
describe('ReadFolders component', () => {
  afterEach(cleanup)

  it('files', async () => {
   
   
    const mockedResponse = [
      { id: 1, fname: 'file1' },
      { id: 2, fname: 'file2' },

      {id: 3, fname: 'file3' }
    ]
    axios.get.mockResolvedValue({ data: mockedResponse })
    const history = createMemoryHistory();
    
    const { findAllByTestId } =render(<Router location={history.location} navigator={history}><OpenFolder/></Router>)

    const folderElements = await screen.findAllByTestId("file_count")

    expect(folderElements.length).toBe(mockedResponse.length)
  })
})