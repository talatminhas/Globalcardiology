import React from 'react';
import Sidebar from '../SideBar/SideNav';

const MatomoDashboard = () => {
  return (
     <div className='container badcrum'>
        <div className='row'>
        
            <div className='col-lg-9'>
            <nav aria-label="breadcrumb bg-light">
                        <ol className="breadcrumb bg-light p-3">
                            <li className="breadcrumb-item">
                                <a className="text-decoration-none text-danger" href="/">Home</a>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                <a className="text-decoration-none text-muted" href="/About">Analytics</a>
                            </li>
                        </ol>
                    </nav>
                <div style={{ width: '100%', height: '100vh' }}>
                    <iframe
                        src="https://mphosting.matomo.cloud/index.php?module=Widgetize&action=iframe&moduleToWidgetize=Dashboard&actionToWidgetize=index&idSite=15&period=week&date=yesterday"
                        title="Matomo Dashboard"
                        style={{
                        width: '100%',
                        height: '100%',
                        border: 'none',
                    }}/>
                </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
                <Sidebar/>
            </div>
        </div>
    
        </div>
  );
};

export default MatomoDashboard;
