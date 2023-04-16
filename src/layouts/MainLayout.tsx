import React,{FC} from "react";
import {Outlet} from "react-router-dom"
import { Layout, Space } from 'antd';
import styles from "./MainLayout.module.scss";

const { Header, Footer, Sider, Content } = Layout;

const MainLayout:FC = () =>{
    return (
        <Layout>
        <Header className={styles.header}>
            <div className={styles.left}>loge</div>
            <div className={styles.right}>login</div>
        </Header>
        <Layout className={styles.main}>
            <Content >
            <Outlet/>
        </Content>
        </Layout>
        
        <Footer className={styles.footer}>
            MainLayout footer
        </Footer>
        </Layout>
    )
}

export default MainLayout