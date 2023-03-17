

const SkillsList = props => props.list ? <ul> {props.list.map((item, index) => <li key={index}>{item}</li>)} </ul> : <p>No skills for this course, sorry :(</p>

export default SkillsList;