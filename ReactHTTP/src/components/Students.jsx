import HTTP from '../utils/HTTP';
class Students extends React.Component {
    render() {
        return (
            <div>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Student ID</th>
                            <th>Student Name</th>
                            <th>Grade No.</th>
                        </tr>
                    </thead>
                    <tbody>
                        <HTTP.Get
                            url="http://localhost:8080/getStudents"
                            loading={
                                <tr>
                                    <td colspan="3">loading</td>
                                </tr>
                            }
                            error={
                                <tr>
                                    <td colspan="3">Error</td>
                                </tr>
                            }
                        >
                            {
                                // 回调
                                (data)=>{
                                    return data.map(item=>{
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.grade}</td>
                                        </tr>
                                    })
                                }
                            }
                        </HTTP.Get>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Students;