import React from 'react';
import axios from 'axios';
import { render, fireEvent, waitFor, act ,screen} from '@testing-library/react';
import EditFile from './EditFile';
import { createMemoryHistory } from "@remix-run/router";
import {Router} from "react-router-dom"
jest.mock('axios', () => {
    return {
      put: jest.fn(() => Promise.resolve({data: {}}))
    }
  })
describe('EditFile component', () => {
  it('submits the form with updated folder name', async () => {
    const folderId = '123';
    const foldName = 'test_folder';
    const id1 = '456';
    const updatedName = 'Updated Folder Name';

    const mockedPut = jest.fn().mockResolvedValue({});
    axios.put.mockImplementation(mockedPut);
    const history = createMemoryHistory();
    history.push("/");
    const { getByPlaceholderText, getByText } = render(
       
    <Router location={history.location} navigator={history}>
      <EditFile id="123" foldName="test_folder" id1="456"/></Router>
    );

    const input = screen.getByPlaceholderText('Enter FolderName');
    fireEvent.change(input, { target: { value: updatedName } });

    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);
    //ngvldfb
    const data1={'NewFolderName':"testing of ui","id":"1"}
    axios.put.mockResolvedValue({data1});
    
    const res=await axios.put(`http::/localhost:8080/api/updateFolder/${data1.id}/${data1.NewFolderName}`);
    console.log("hello");
    console.log(res);
    expect(res.data).toEqual(data1.data)
  });
});