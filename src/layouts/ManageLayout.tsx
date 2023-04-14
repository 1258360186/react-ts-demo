import React,{FC} from "react";
import {Outlet} from "react-router-dom"
import styles from "./ManageLayout.module.scss";

const ManageLayout:FC = () =>{
    return (
        <div className={styles.container}>
            <div className={styles.left}>
            ManageLayout left
            <button>创建</button>
            <a href="#">我的</a><br/>
            <a href="#">星标</a><br/>
            <a href="#">回收站</a><br/>
            </div>
            <div className={styles.right}>
                <Outlet/>
            </div>

        </div>
    )
}

export default ManageLayout