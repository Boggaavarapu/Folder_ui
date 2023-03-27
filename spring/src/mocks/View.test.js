import {render,screen} from "@testing-library/react"
import View1 from "./Components/View1"
test('get test',async()=>{
    render(<View1/>)
    const users=screen.getAllByRole("Listitems");
    expect(users).toHaveLength(3);
})