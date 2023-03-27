import {findByTestId, getByRole, render, screen, waitFor} from "@testing-library/react"
import axios from "axios";
import React from "react";
//import render  from "@testing-library/react";
import AddFolder from "./AddFolder.test"
import user from "@testing-library/user-event"
import View1 from "../Components/View1";
const setup = () => render(<AddFolder />);
jest.mock('axios',()=>{
    return{
        get:jest.fn(()=>Promise.resolve({data:[] })),
        post:jest.fn(()=>Promise.resolve({data:[] }))
     };
})
describe('Add Folder',()=>{
    const onSubmit=jest.fn();
    
    beforeEach(()=>{
        onSubmit.mockClear();
    
    });
    it('onSumit calling',async()=>{
        render(<AddFolder/>)
        const FolderName=screen.getByRole('textbox');
        const name1=user.type(FolderName,'testing Folder');
        user.click(screen.getByRole('button', {
            name: /submit/i
          }))
        const mockedResponse=[{foldername:name1}]
        axios.post.mockResolvedValue({data:mockedResponse});
        await waitFor(()=>[
            expect(onSubmit).toHaveBeenCalledTimes(1)
        ])
        render(<View1/>)
        // expect(onSubmit).toHaveBeenCalledWith({lazy:true})
        const FolderNamePresent=await screen.findByTestId("xyz_count")
        expect(FolderNamePresent.length).toBeGreaterThanOrEqual(1);
    })
})