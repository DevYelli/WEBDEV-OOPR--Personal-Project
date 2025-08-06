import './SecondNav.css'
export default function SecondNav ({activeNav}) {
    const nav1 = () => {
        return (
        <div className='secondnav_container1'>
            <div> <a href="http://localhost:3000/chars">HONKAI IMPACT 3RD</a></div> 
            <div><a href="http://localhost:3000/gichars">GENSHIN IMPACT</a></div> 
            <div><a href="http://localhost:3000/starchars">HONKAI STAR RAIL</a></div>
            <div><a href="http://localhost:3000/zenchars">ZENLESS ZERO ZONE</a></div>
            <div></div>
        </div>
        );
    };

    const nav2 = () => {
        return (
        <div className='secondnav_container'>
            <div><a href="">MONDSTADT</a></div>
            <div><a href="">LIYUE</a></div>
            <div><a href="">INAZUMA</a></div>
            <div><a href="">SUMERU</a></div>
        </div>
        );
    };

    const navState = (navIndex) => {
        switch(navIndex){
            case 1:
                return nav1();
            case 2:
                return nav2();
        }
    };
    return (
        <div className='secondnav'>
            {navState(activeNav)}
        </div>
    );
};