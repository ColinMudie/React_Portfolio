import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function SocialMediaLinks () {
    return (
        <div className="social">
            <a id="instagram" href="https://www.instagram.com/colinmudie/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
            <a id="youtube" href="https://www.youtube.com/channel/UCnnuJUBPh6GNktCXtfDjj_w/featured?view_as=subscriber" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faYoutube} /></a>
            <a id="github" href="https://github.com/ColinMudie" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a >
            <a id="linkedin" href="https://www.linkedin.com/in/colin-mudie-4034001a2/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
    )
}
export default SocialMediaLinks;
