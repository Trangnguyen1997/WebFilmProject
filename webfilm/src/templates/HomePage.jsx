import React,{Fragment} from 'react';
import {Route} from 'react-router-dom';
import Header from '../common/components/Headers/Header';

const HomeLayout = ({children, ...rest})=>{
    return(
        <Fragment>
            <Header/>
            {children}
        </Fragment>
    )
}

const HomePage = ({Component,...rest})=>{
    return <Route {...rest} render={(props)=>{
        return(
            <HomeLayout>
                <Component {...props}/>
            </HomeLayout>
        )
    }}/>
}
export default HomePage;