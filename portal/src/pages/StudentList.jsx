import React,{useState,useEffect} from 'react'
import './styles/list.css'
import axios from 'axios'

const StudentList = () => {
    const [teacherList, setTeacherList] = useState([])
    const fetchpic = (pic) => {
        if(pic){
            return "http://localhost:8080/api/unit/notes/"+pic
        }
        else{
            return "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
        }
    }
    
    const fetchdata = async () => {
        const response = await axios.get('http://localhost:8080/api/users/usersByRole/student')
        setTeacherList(response.data)
        console.log(response.data)
    }
    useEffect(() => {
        fetchdata()
    }, [])



    return (
        <>
        <div className="list">
          {/*for demo wrap*/}
          <h1>Fixed Table header</h1>
          <div className="tbl-header">
            <table cellPadding={0} cellSpacing={0} border={0}>
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Email Id</th>
                  <th>Phone No.</th>
                  <th>Semester</th>
                  <th>Fees Status</th>
                </tr>
              </thead>
            </table>
          </div>
          <div className="tbl-content">
            <table cellPadding={0} cellSpacing={0} border={0}>
              <tbody>
                {teacherList.map((teacher,index) => (
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td><img src={fetchpic(teacher.userImage)} height="40px" width="40px" /></td>
                        <td>{teacher.name}</td>
                        <td>{teacher.emailId}</td>
                        <td>{teacher.mobileNumber}</td>
                        <td>{teacher.semester}</td>
                        <td>{teacher.feesStatus}</td>
                    </tr>
                ))}
                
                 
                
              </tbody>
            </table>
          </div>
        </div>
        
      </>

    )
}

export default StudentList
