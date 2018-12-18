import React, { Component } from 'react';
import { connect } from 'react-redux';

// 组件
import Nav from '../../Common/Nav';
import Index from '../../Modules/Index/Index';
import List from '../../Modules/List/List';

// 路由
// import Router from '../router/index';
import { Route, Redirect } from 'react-router-dom';


class Home extends Component {
    constructor(props) {
        super(props);
        this.props.history.push("/Index");
    }
    render() {
        // 判断用户是否登录
        if (!this.props.isLogin) {
            return <Redirect to="/Login" push={false} />
        }
        return (
            <div className="wrap">
                <div><Nav /></div>
                <div>
                    <Route exact path="/Index" component={Index} />
                    <Route exact path="/List" component={List} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLogin: state.isLogin
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    };
}
var HomeApp = connect(mapStateToProps, mapDispatchToProps)(Home)
export default HomeApp;