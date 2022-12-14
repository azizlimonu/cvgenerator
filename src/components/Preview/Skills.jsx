import style from './Skills.module.css';

const Skills = ({ skills }) => {

  return (
    <div>
      <h2>Skills</h2>
      {skills?.map((skill) => (
        <div className={style.row}>
          <div className={style.column}>
            <p>{skill.title}</p>
          </div>
          <div className={style.column}>
            <p> - {skill.level}</p>
          </div>
        </div>
      ))}
    </div>
 
  );
};

export default Skills;
