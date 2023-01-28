import Part from "./Part"
const Content = (props) => {
    console.log(props)
    return(
    <>  
        <Part part = {props.part1} />
        <Part part = {props.part2} />
        <Part part = {props.part3} />
    </>
)

}
export default Content