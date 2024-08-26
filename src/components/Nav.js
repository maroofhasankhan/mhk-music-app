import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav= ({LibraryStatus,setLibraryStatus}) => {
     

    return (
        <nav>
            
                <h1>Mhk Music</h1>
                <button onClick={() => setLibraryStatus(!LibraryStatus)}>
                    Library &nbsp;
                    <FontAwesomeIcon icon={faMusic}/>
                </button>
            
        </nav>
    )
}

export default Nav;