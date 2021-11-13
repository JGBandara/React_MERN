import React from 'react';
import axios from 'axios';
import './new.css'


const Students = ()=>{
    const [students,setStudents] = React.useState([]);
    const [isDeleted, setIsDeleted] = React.useState(false);

    React.useEffect(()=>{
        axios.get("http://localhost:4000/students").then((res)=>setStudents(res.data));
    },[isDeleted])

    const onDelete = async (rollNo)=>{
        const result = await axios.delete(`http://localhost:4000/delstd?rollNo=${rollNo}`);
        if(!result)alert("something went wrong");
        else setIsDeleted(true);
    }

    const renderTable = () =>{
        return <>
                  
            <h3 className="bcs"> BCs Computer Science(2016/2017):Final Class Sheet</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">StudentName</th>
                        <th scope="col">RegNo</th>
                        <th scope="col">FinalClass</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student=>(
                        <tr key={student.rollNo}>
                            <td>{student.name}</td>
                            <td>{student.rollNo}</td>
                            <td className="ss">{student.standard}</td>
                            <td>
                                <button type="submit" className="btn btn-danger" 
                                onClick={()=>onDelete(student.rollNo)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    }

    return(
        <div>
            {students?.length?renderTable():null}
        </div>
    )
}

export default Students;