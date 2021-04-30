import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

function SocialMediaLinks() {
    return (
        <div className="social row  social-link" >
            <motion.div
                className="social-motion social-link"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <a className="social-link"
                    id="instagram"
                    href="https://www.instagram.com/colinmudie/"
                    target="_blank"
                    rel="noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </motion.div>
            <motion.div
                className="social-motion social-link"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <a  className="social-link"
                    id="youtube"
                    href="https://www.youtube.com/channel/UCnnuJUBPh6GNktCXtfDjj_w/featured?view_as=subscriber"
                    target="_blank"
                    rel="noreferrer">
                    <FontAwesomeIcon icon={faYoutube} />
                </a>
            </motion.div>
            <motion.div
                className="social-motion social-link"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <a  className="social-link"
                    id="github"
                    href="https://github.com/ColinMudie"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a >
            </motion.div>
            <motion.div
                className="social-motion social-link"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <a  className="social-link"
                    id="linkedin"
                    href="https://www.linkedin.com/in/colin-mudie-4034001a2/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faLinkedin} /></a>
            </motion.div>
        </div>
    )
}
export default SocialMediaLinks;
