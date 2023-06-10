import { Link } from 'react-router-dom';
import '../Main/Main.css';

export default function Error404() {
    return(
        <div className='Error404'>
            <h1>404</h1>
            <p>
                <h2>What does it mean?</h2><br/>                
                The page doesn't exist<br/>
                <h2>Why did this happen</h2>
                The page wasn't found<br/>
                <h2>How can I fix it?</h2>
                You can fix this issue by submitting a <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>bug report</a>
            </p>
        </div>
    );
}