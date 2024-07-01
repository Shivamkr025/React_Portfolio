import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Skill.css'

function Skill() {
    return (
        <div className='skill-mainContainer pt-4'>
            <h1 className='text-center'>Skill</h1>
            <div className="container " >
                <h3 className='pd-4'> 🌟 Skills in web development, design, and problem-solving.</h3>
                <div className="row pt-4">
                    <div className="col-md-6 img-skill-div ">
                        
                    </div>
                    <div className="col-md-4 ">
                        <div className="container mt-4">
                            <table className='table' >
                                <tr>
                                    <td > 
                                        <div className='d-flex' style={{backgroundColor: 'transparent'}}>
                                            <i class="bi bi-filetype-html "></i>
                                            <p style={{ margin: '6px' }}>HTML</p>
                                        </div>
                                    </td>
                                    
                                    <td >
                                        <div className='d-flex' style={{backgroundColor: 'transparent'}}>
                                            <i class="bi bi-filetype-css"></i>
                                            <p style={{ margin: '6px' }}>CSS</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='d-flex' style={{backgroundColor: 'transparent'}}>
                                            <i class="bi bi-filetype-js"></i>
                                            <p style={{ margin: '6px' }}>JavaScript</p>
                                        </div>
                                    </td>
                                    <td >
                                        <div className='d-flex' style={{backgroundColor: 'transparent'}}>
                                            <i class="bi bi-filetype-py"></i>
                                            <p style={{ margin: '6px' }}>Python</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='d-flex' style={{backgroundColor: 'transparent'}}>
                                            <i class="bi bi-filetype-js"></i>
                                            <p style={{ margin: '6px' }}>Node-JS</p>
                                        </div>
                                    </td>
                                    <td >
                                        <div className='d-flex' style={{backgroundColor: 'transparent'}}>
                                            <i class="bi bi-filetype-js"></i>
                                            <p style={{ margin: '6px'}}>Express-JS</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='d-flex' style={{backgroundColor: 'transparent'}}>
                                            <i class="bi bi-database-check"></i>
                                            <p style={{ margin: '6px' }}>MongoDB</p>
                                        </div>
                                    </td>
                                    <td >
                                        <div className='d-flex' style={{backgroundColor: 'transparent'}}>
                                            <i class="bi bi-filetype-jsx"></i>
                                            <p style={{ margin: '6px' }}>React-js</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='d-flex' style={{backgroundColor: 'transparent'}}>
                                            <i class="bi bi-pc-display-horizontal"></i>
                                            <p style={{ margin: '6px' }}>UI Design</p>
                                        </div>
                                    </td>
                                    <td >
                                        <div className='d-flex' style={{backgroundColor: 'transparent'}}>
                                            <i class="bi bi-filetype-sql"></i>
                                            <p style={{margin: '6px' }}>My-SQL</p>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill
