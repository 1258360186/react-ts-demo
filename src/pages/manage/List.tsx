import React,{FC,useState} from "react";
import QuestionCard from "../../components/QuestionCard";
import {useSearchParams} from 'react-router-dom'
import styles from './List.module.scss'


const List:FC = ()=>{

    const [searchparams] = useSearchParams()
    console.log(searchparams.get('key'));
    

    const [list,setlist] = useState([
        {_id:'q1',title:'问卷1',isPublished:false,isStar:true,answerCount:3,createAt:'3月10日 13:23'},
        {_id:'q2',title:'问卷2',isPublished:true,isStar:false,answerCount:2,createAt:'3月10日 13:23'},
        {_id:'q3',title:'问卷3',isPublished:false,isStar:true,answerCount:1,createAt:'3月10日 13:23'}
    ])

return <>
 <div className={styles.header}>
 <div className={styles.left}>我的问卷</div>
 <div className={styles.right}>搜索</div>
 </div>
 <div className={styles.content}>
    {list.map(q=>{
        const {_id} = q
        return <QuestionCard key={_id} {...q}/>
    })}
 </div>
 <div className={styles.footer}>footer</div>
</>
}

export default List 