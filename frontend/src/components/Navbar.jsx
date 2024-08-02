import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import imgLogo from '../assets/images/logo.png';

const Navbar = () => {
  const navigate = useNavigate();

  const items = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      command: () => {
        navigate('/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    {
      label: 'Technologies',
      icon: 'pi pi-star',
      command: () => {
        navigate('/');
        setTimeout(() => {
          document.getElementById('technologies').scrollIntoView({ behavior: 'smooth' });
        }, 0);
      }
    },
    {
      label: 'Services',
      icon: 'pi pi-star',
      command: () => {
        navigate('/');
        setTimeout(() => {
          document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
        }, 0);
      }
    },
    {
      label: 'Contact Us',
      icon: 'pi pi-envelope',
      command: () => {
        navigate('/');
        setTimeout(() => {
          document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        }, 0);
      }
    }
  ];

    const start = <img alt="logo" src={imgLogo} height="40" width="40" className="mr-2 rounded-full" />;
    const end = <Button  onClick={() => navigate("/login")} label="Login" icon="pi pi-sign-in" className="p-button-outlined text-900 font-medium text-xl mb-2" />;

    return (
        <div className="card">
            <Menubar model={items} start={start} end={end} />
        </div>
    );
};

export default Navbar;

