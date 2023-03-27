// import axios from 'axios';
// import React from 'react';
// import { render, fireEvent,screen } from '@testing-library/react';
// import UploadFile from './UploadFile';
// import { createMemoryHistory } from "@remix-run/router";
// import { Router } from "react-router-dom";
// jest.mock('axios', () => {
//   return {
//     post: jest.fn(() => Promise.resolve({ data: {} }))
//   };
// });

// test('submit form', async () => {
//     const history = createMemoryHistory();
//     history.push("/");
//   render(<Router location={history.location} navigator={history}><UploadFile/></Router>);
//   const inputPersonName = screen.getByTestId('Personname');
//   const inputFile = screen.getByLabelText('NewFolderName');
//   const submitBtn = screen.getByText('Submit');

//   fireEvent.change(inputPersonName, { target: { value: 'test name' } });
//   fireEvent.change(inputFile, { target: { files: [new File([], 'test file')] } });
//   fireEvent.click(submitBtn);

//   expect(axios.post).toHaveBeenCalledWith('http://localhost:8080/api/undefined/test%20name/fileName', expect.any(FormData), {
//     headers: { 'Content-Type': 'multipart/form-data' }
//   });
// });
import axios from "axios";
import { Router } from "react-router-dom";
//import { render } from "@testing-library/react";
import { createMemoryHistory } from "@remix-run/router";
import {  render,fireEvent,screen ,waitFor} from '@testing-library/react';
import UploadFile from "./UploadFile";
jest.mock('axios', () => {
    return {
      delete: jest.fn(() => Promise.resolve({ data: {} })),
      get: jest.fn(() => Promise.resolve({ data: {} })),
      put: jest.fn(() => Promise.resolve({ data: {} })),
      post: jest.fn(() => Promise.resolve({ data: {} }))
    };
  });
test("test UploadFile component", async () => {
    const history = createMemoryHistory();
    history.push("/");
  const { getByTestId, getByText, getByPlaceholderText } = render(<Router location={history.location} navigator={history}><UploadFile id="2" pername="hello"/></Router>)

  const fileInput = screen.getByTestId('testing')
  const personNameInput = screen.getByPlaceholderText('Enter Person Name')
  const submitButton = screen.getByText('Submit')

  fireEvent.change(personNameInput, { target: { value: '' } })
  fireEvent.change(fileInput, { target: { files: [new File(['test content'], 'test.txt', { type: 'text/plain' })] } })
  fireEvent.click(submitButton)

  const {id}="2"
  const {personperu}="testing gadu"
  await waitFor(() => {
     expect(axios.post).toHaveBeenCalledWith(
       "http://localhost:8080/api/2/hello/fileName" ,
       expect.any(FormData),
       { headers: { 'Content-Type': 'multipart/form-data' } },
      
     )
   })

})
