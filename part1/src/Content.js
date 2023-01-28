import Part from "./Part"
const Content = (props) => {
    console.log(props)
    const [part1, part2, part3] = props.parts
    return(
    <>  
        <Part part = {part1} />
        <Part part = {part2} />
        <Part part = {part3} />
    </>
)

}
export default Content