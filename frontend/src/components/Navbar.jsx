import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import imgLogo from '../assets/images/logo.png';

export default function NavBar() {
    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            command: () => window.scrollTo({ top: 0, behavior: 'smooth' })
        },
        {
            label: 'Technologies',
            icon: 'pi pi-star',
            command: () => document.getElementById('technologies').scrollIntoView({ behavior: 'smooth' })
        },
        {
            label: 'Contact Us',
            icon: 'pi pi-envelope',
            command: () => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
        }
    ];

    const start = <img alt="logo" src={imgLogo} height="40" width="40" className="mr-2 rounded-full" />;
    const end = <Button label="Login" icon="pi pi-user" className="p-button-outlined text-900 font-medium text-xl mb-2" />;

    return (
        <div className="card">
            <Menubar model={items} start={start} end={end} />
        </div>
    );
}
