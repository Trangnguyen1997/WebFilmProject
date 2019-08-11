import React , {Fragment} from 'react';
import {Route} from 'react-router-dom';
import { Redirect } from 'react-router';
import AdminHeader from '../common/components/Headers/AdminHeader';
import AdminSidebar from '../common/components/Sidebar/AdminSidebar';


const AdminLayout = ({children, ...rest})=> {
    return (
        <Fragment >
            <div className="wrapper">
                <AdminSidebar />
                <div>
                    <AdminHeader />
                    {children}
                </div>
                
            </div>
             
        </Fragment>
    )
}
const AdminPage = ({Component, ...rest})=>{
    return<Route {...rest} render={(props)=>{
        let userLogin = JSON.parse(localStorage.getItem('userLogin'));
        if(userLogin != null)
        {
            if(userLogin.maLoaiNguoiDung ==='QuanTri'){
                return (
                    <AdminLayout>
                        <Component {...props} />
                    </AdminLayout>
                )
            }
            return <Redirect to='/' />
        }
        return <Redirect to='/' />
    }}/>
}
export default AdminPage;