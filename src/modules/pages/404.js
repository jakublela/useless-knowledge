import { Link } from 'react-router-dom';
import '../Main/Main.css';

export default function Error404() {
    const handleSubmit = (event) => {
        event.preventDefault();
        document.getElementById('Rick').innerHTML = '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0" title="Get Rick Rolled" frameborder="0" allowfullscreen/>';
    }

    return(
        <div className='Error404'>
            <h1>404</h1>
            <p>
                <h2>FAQ</h2>
                <h4>What does it mean?</h4>
                The page doesn't exist<br/>
                <h4>Why did this happen</h4>
                The page wasn't found<br/>
                <h4>How can I fix it?</h4>
                You can fix this issue by submitting a <button className='fakeBugReport' onClick={handleSubmit}><u>bug report</u></button><br/>
                <div id='Rick'></div>
            </p>
        </div>
    );
}