import React from 'react';
import classes from './Education.module.css';

const Education = ({ education }) => {
  
  return (
    <div>
      <h2>Education</h2>
      <div className={classes.education}>
        {education?.map((edu) => (
          <div key={edu.id}>
            {edu.degree && (
              <h3>
                {edu.degree} of {edu.subject}
              </h3>
            )}
            {edu.universityName && (
              <p className={classes.university}>
                {edu.universityName}, {edu.city}
              </p>
            )}
            {edu.from && (
              <p className={classes['from-to']}>
                {edu.from} - {edu.to}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
