const SkillsList = props => props.list ? <ul> {props.list.map((item, index) => <li key={index}>{item}</li>)} </ul> : <p>Good mood, positive thinking</p>

export default SkillsList;