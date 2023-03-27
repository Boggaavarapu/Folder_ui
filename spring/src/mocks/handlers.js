import {rest} from "msw"
export const handlers=[
    rest.get('http://localhost:8080/api/folders') ,(req,res,ctx)=>{
        return res(ctx.status(200),
        ctx.json([
            {
                id:1,
                folderName:"file1",
            },
            {
                id:2,
                folderName:"file2",
            }
        ])
    )},
];