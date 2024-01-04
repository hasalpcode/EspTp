function Employes({employees}) {
    return (
        <div class="evnt-schedule-area-two bg-color pad100">
            <div class="container">
                
                <div class="row">
                    <div class="col-lg-12">
                        
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade active show" id="home" role="tabpanel">
                                <div class="table-responsive">
                                    <table class="table">
                                        <thead>
                                            
                                            <tr>
                                                <th class="text-center" scope="col">Date</th>
                                                <th scope="col">Speakers</th>
                                                <th scope="col">Session</th>
                                                <th scope="col">Venue</th>
                                                <th class="text-center" scope="col">Venue</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {employees.map(employee => (
                                            <tr  key={employee.id}>
                                                <td>{employee.id}</td>
                                                <td>{employee.employee_name}</td>
                                                <td>{employee.employee_age}</td>
                                                <td>{employee.employee_salary}</td>
                                            </tr>
                                            ))}
                                           
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            
                        </div>
                       
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Employes