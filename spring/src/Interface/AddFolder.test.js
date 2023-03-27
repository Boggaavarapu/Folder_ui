import axios from "axios";
import { Router } from "react-router-dom";
import { fireEvent, getAllByTestId, render,screen ,waitFor} from "@testing-library/react";
import { createMemoryHistory } from "@remix-run/router";
import AddFolder from './AddFolder';
import View1 from "../Components/View1";
import { Navigate } from "react-router-dom";
import { MemoryRouter } from 'react-router-dom';
// import View1 from "../Components/View1";
// import EditFolder from "./EditFolder";
// import { Button } from "bootstrap";
// jest.mock('axios', () => {
//     return {
//       delete: jest.fn(() => Promise.resolve({ data: {} })),
//       get: jest.fn(() => Promise.resolve({ data: {} }))
//     };
//   });
//   test('testing delete', async () => {
//     const history = createMemoryHistory();
//     history.push("/");
//     render(<Router location={history.location} navigator={history}><View1/></Router>)
//     const id = '1';
//     axios.delete.mockResolvedValue({ data: {} });
//     const res = await axios.delete(`http://localhost:8080/api/folder/${id}`);
//     expect(res.data).toEqual({});
//   });
jest.mock('axios',()=>{
    return{
        post:jest.fn(()=>Promise.resolve({data:[] })),
        get:jest.fn(()=>Promise.resolve()),
        Navigation:jest.fn(()=>Promise.resolve())
    };
})
test('testing view',async()=>{
    const history = createMemoryHistory();
    render(<MemoryRouter><AddFolder/></MemoryRouter>)
    const mockedResponse=[{id:"1",foldername:"kesava"},{
        id:"2",foldername:"karthik"
    }]
    axios.post.mockResolvedValue({data:mockedResponse});
    // history.push('/');
   // await waitFor(() => expect(history.location.pathname).toBe('/'));

    // // const res=await axios.post(`http::/localhost:8080/api/${data1}`);
    const { findAllByTestId } =render(<MemoryRouter><View1/></MemoryRouter>)
    const documentfind=screen.getAllByTestId("xyz_count")
    expect(documentfind.length).toBe(mockedResponse.length)
    
    
})
  