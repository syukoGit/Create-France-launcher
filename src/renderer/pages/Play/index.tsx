import { isGmllUser } from 'types/GmllUser';
import MinecraftCreateFrance from '../../../../assets/create-france/minecraft-create-france.png';
import './style.scss';

const Play = () => {
    const account = window.electron.store.get('account');

    let headUrl = 'https://mc-heads.net/avatar/MHF_Steve/64';
    let username = 'undefined';

    if (isGmllUser(account)) {
        username = account.profile.name;
        headUrl = `https://mc-heads.net/avatar/${username}/64`;
    }

    const handleDownload = () => {
        window.electron.ipcRenderer.sendMessage('download-modpack');
    };

    const handlePlay = () => {
        window.electron.ipcRenderer.sendMessage('play-minecraft');
    };

    return (
        <div className='play-page'>
            <header>
                <img id='minecraft-create-france-title' src={MinecraftCreateFrance} alt='Minecraft Create France' />
            </header>
            <div className='play-page__content'>
                <button onClick={handlePlay}>Jouer</button>
            </div>
        </div>
    );
};

export default Play;