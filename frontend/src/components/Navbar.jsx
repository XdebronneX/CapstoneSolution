import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import imgLogo from '../assets/images/logo.png';
import { useNavigate } from "react-router-dom";

export default function NavBar() {
    const navigate = useNavigate();
    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            command: () => navigate("/")
        },
        {
            label: 'Projects',
            icon: 'pi pi-star',
        },
        {
            label: 'Contact',
            icon: 'pi pi-envelope',
            command: () => navigate("/contactUs")
        }
    ];

    const start = <img alt="logo" src={imgLogo} height="40" width="40" className="mr-2 rounded-full" />;
    const end = <Button label="Login" icon="pi pi-user" className="p-button-outlined" />;

    return (
        <div className="card">
            <Menubar model={items} start={start} end={end} />
        </div>
    );
}
