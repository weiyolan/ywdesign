import Image from 'next/image';
import Check from '../public/images/icon_check_round.svg';

const skills1 = ['Biomedical Engineer', 'PRINCE2 Management', 'Project Management', 'Quick Learner', 'Communication', 
'Maintenance', 'Computer Science', 'Digital Strategy', 'Web 3.0', 'Customisation', 'On Budget', 
'Listening Skills', 'Empowerment', 'Story Teller', 'Teacher', 'Leadership', 'Professionality', 'Sales'];

const skills2 = ['Next.js', 'Designer', "Logo's", 'Website', 'Branding', 'Web Developer', 'React.js', 
'Javascript', 'CSS', 'Sanity.io', 'CMS Integration', 'Headless CMS', 'Tailwind CSS', 'VS Code', 'Postman', 'API', 
'SEO Optimisation', 'node.js', 'NoSQL', 'e-commerce', 'redux', 'Github', "MongoDB", 'Stripe', 'Payments', 'Twint'];

export default function Skills() {

  return (
    <div className='cursor-default'>
      
      <MovingRow left={false} allSkills={skills1}/>
      <MovingRow left={true} allSkills={skills2}/>
        
    </div>

  )
}

function MovingRow({type, allSkills, left}) {


  return (
      <div className={`inline-flex mx-2 my-2 ${left?' animate-[leftScroll_50s_linear_infinite] ':' justify-end animate-[rightScroll_50s_linear_infinite] '} `}>
        {/* {allSkills.sort((a, b) => 0.5 - Math.random()).map((skill)=>{
          return <Pill content={skill} round={true} key={skill}/>
        })} */}
        <ul className={`inline-block flex-none`}>
          {allSkills.map((skill)=>{
          return <li className='inline-block' key={skill}><Pill content={skill} round={true} /></li>
        })}
        </ul>
        <ul className={`inline-block flex-none`}>
          {allSkills.map((skill)=>{
          return <li className='inline-block' key={skill}><Pill content={skill} round={true} /></li>
        })}
        </ul>
        <ul className={`inline-block flex-none`}>
          {allSkills.map((skill)=>{
          return <li className='inline-block' key={skill}><Pill content={skill} round={true} /></li>
        })}
        </ul>
        
        
        {/* animate-[left2Scroll_10s_linear_infinite] */}
      </div>       
  )
}

function Pill({content,round}) {
  return (
      <div className='inline-flex mx-2 px-2 py-1 
      bg-white/10 
      rounded-full 
       text-xs text-white font-medium  '>
          <Check width='12' height={12} alt='checkmark icon'/>
          {/* <Image className='inline-block mr-1' src={`/images/icon_check_${round?'round':'simple'}.svg`} width={12} height={12} alt='checkmark icon'/>         */}
          <span className='inline-block whitespace-nowrap'>{content}</span>           
      </div>
    
)
}