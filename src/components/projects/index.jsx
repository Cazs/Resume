import React from 'react';

class Projects extends React.Component
{
    render()
    {
        return (
            <div style={{
                width: '90%',
                color: '#fff',
                backgroundColor: 'rgba(255,255,255,.6)',
                margin: '40px auto 0px auto',
                padding: '30px',
                borderRadius: '10px',
                border: '1px solid #fff'
                }}
            >
                <h3 style={{textAlign: 'center', paddingBottom: '30px'}}>Project History</h3>
                <div className='row'>
                    <div className='col-lg-6'>
                        <a href="http://www.pioneerdesigns.co.za/">Pioneer Designs</a>
                    </div>
                    <div className='col-lg-6'>
                        <a href="https://patrishnails.herokuapp.com/">Patrish Nails</a>
                    </div>
                    <div className='col-lg-6'>
                        <a href="http://airotek.herokuapp.com/">Airotek Engineering</a>
                    </div>
                    <div className='col-lg-6'>
                        <a href="https://casperweb.herokuapp.com/">My Resume website </a>
                    </div>
                    <div className='col-lg-6'>
                        <a href="http://icebreak.azurewebsites.net/">My group's 3rd year webapp's server and parts of the mobile app.</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;